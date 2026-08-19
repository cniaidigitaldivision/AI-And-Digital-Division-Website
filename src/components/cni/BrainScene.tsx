import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const TEAL = new THREE.Color("#0F4C4C");
const TEAL_BRIGHT = new THREE.Color("#1A7A6E");
const GOLD = new THREE.Color("#C89B3C");
const GOLD_BRIGHT = new THREE.Color("#D4A93A");

function useConverge(progressRef: React.MutableRefObject<number>) {
  return progressRef;
}

function FacetedHalf({
  side,
  progressRef,
}: {
  side: -1 | 1;
  progressRef: React.MutableRefObject<number>;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.25, 2);
    geo.scale(1.15, 1, 0.95);
    return geo;
  }, []);

  const material = useMemo(() => {
    const base = side === -1 ? TEAL : GOLD;
    const emissive = side === -1 ? TEAL_BRIGHT : GOLD_BRIGHT;
    return new THREE.MeshStandardMaterial({
      color: base,
      emissive,
      emissiveIntensity: 0.18,
      flatShading: true,
      metalness: 0.35,
      roughness: 0.35,
      side: THREE.DoubleSide,
      clippingPlanes: [new THREE.Plane(new THREE.Vector3(side, 0, 0), 0)],
    });
  }, [side]);

  useConverge(progressRef);

  useFrame(() => {
    if (!mesh.current) return;
    const p = progressRef.current;
    mesh.current.position.x = side * 0.34 * (1 - p);
  });

  return <mesh ref={mesh} geometry={geometry} material={material} />;
}

function Wireframe() {
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.27, 2);
    geo.scale(1.15, 1, 0.95);
    return new THREE.WireframeGeometry(geo);
  }, []);
  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#F5F1E6" transparent opacity={0.22} />
    </lineSegments>
  );
}

function Shards({
  count,
  progressRef,
}: {
  count: number;
  progressRef: React.MutableRefObject<number>;
}) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const seeds = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        r: 1.5 + Math.random() * 1.9,
        y: (Math.random() - 0.5) * 2.4,
        z: (Math.random() - 0.5) * 1.4,
        a: Math.random() * Math.PI - Math.PI / 2,
        s: 0.05 + Math.random() * 0.09,
        spin: 0.2 + Math.random() * 0.6,
        phase: i,
      })),
    [count],
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const p = progressRef.current;
    seeds.forEach((s, i) => {
      const radius = 0.85 + (s.r - 0.85) * (1 - p * 0.85);
      dummy.position.set(
        Math.cos(s.a) * radius + 0.4,
        s.y * (1 - p * 0.5) + Math.sin(t * 0.4 + s.phase) * 0.08,
        s.z + Math.sin(s.a) * 0.5,
      );
      dummy.rotation.set(t * s.spin, t * s.spin * 0.7, 0);
      dummy.scale.setScalar(s.s);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#C89B3C"
        emissive="#D4A93A"
        emissiveIntensity={0.5}
        metalness={0.4}
        roughness={0.3}
      />
    </instancedMesh>
  );
}

function Starfield({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 26;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = -2 - Math.random() * 14;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * 0.012;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.035} color="#F5F1E6" transparent opacity={0.65} sizeAttenuation />
    </points>
  );
}

function Rig({
  progressRef,
  pointer,
  reducedMotion,
}: {
  progressRef: React.MutableRefObject<number>;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const { gl } = useThree();
  gl.localClippingEnabled = true;

  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    if (!reducedMotion) {
      group.current.rotation.y += delta * 0.12;
      group.current.position.y = Math.sin(t * 0.6) * 0.08;
      const targetX = pointer.current.y * 0.22;
      const targetZ = pointer.current.x * 0.12;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
      group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.05;
    }
    group.current.scale.setScalar(0.92 + progressRef.current * 0.05);
  });

  return (
    <group ref={group}>
      <FacetedHalf side={-1} progressRef={progressRef} />
      <FacetedHalf side={1} progressRef={progressRef} />
      <Wireframe />
    </group>
  );
}

export default function BrainScene({
  progressRef,
  pointer,
  quality,
  reducedMotion,
}: {
  progressRef: React.MutableRefObject<number>;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
  quality: "high" | "low";
  reducedMotion: boolean;
}) {
  const shardCount = quality === "high" ? 90 : 34;
  const starCount = quality === "high" ? 1600 : 420;

  return (
    <Canvas
      camera={{ position: [0, 0, 8.4], fov: 42 }}
      dpr={quality === "high" ? [1, 1.8] : 1}
      gl={{ antialias: quality === "high", powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#0A1414"]} />
      <fog attach="fog" args={["#0A1414", 6, 18]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 6]} intensity={1.5} color="#F5F1E6" />
      <pointLight position={[-5, -2, 3]} intensity={22} color="#1A7A6E" distance={16} />
      <pointLight position={[5, 2, 2]} intensity={18} color="#D4A93A" distance={16} />
      <Starfield count={starCount} />
      <Rig progressRef={progressRef} pointer={pointer} reducedMotion={reducedMotion} />
      <Shards count={shardCount} progressRef={progressRef} />
    </Canvas>
  );
}
