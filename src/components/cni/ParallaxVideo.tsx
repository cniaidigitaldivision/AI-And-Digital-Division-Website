import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroVideoAsset from "@/assets/hero-bg.mp4.asset.json";
import { useReducedMotionPref } from "./primitives";
import { cn } from "@/lib/utils";

/** Swap this to change the background video (e.g. "/assets/hero-bg.mp4"). */
export const HERO_VIDEO_SRC: string = heroVideoAsset.url;

export function ParallaxVideo({
  src = HERO_VIDEO_SRC,
  speed = 0.4,
  className,
  overlayClassName,
  opacity = 1,
}: {
  src?: string;
  /** 0.3–0.5 recommended: fraction of scroll speed the video travels. */
  speed?: number;
  className?: string;
  overlayClassName?: string;
  opacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionPref();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      <motion.div
        className="absolute inset-x-0 -top-[20%] h-[140%] will-change-transform"
        style={{ y: reduced ? 0 : y }}
      >
        {reduced ? (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,color-mix(in_oklab,var(--teal-bright)_26%,transparent),transparent_65%)]" />
        ) : (
          <video
            className="size-full object-cover"
            style={{ opacity }}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            controls={false}
          />
        )}
      </motion.div>

      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,20,0.25)_0%,rgba(10,20,20,0.38)_55%,rgba(10,20,20,0.5)_100%)]",
          overlayClassName,
        )}
      />
    </div>
  );
}
