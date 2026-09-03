import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cni/Navbar";
import { Footer } from "@/components/cni/Contact";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery/gallery1.png";
import gallery2 from "@/assets/gallery/gallery2.png";
import gallery3 from "@/assets/gallery/gallery3.png";
import gallery4 from "@/assets/gallery/gallery4.png";
import gallery5 from "@/assets/gallery/gallery5.png";
import gallery6 from "@/assets/gallery/gallery6.png";
import gallery7 from "@/assets/gallery/gallery7.png";
import gallery8 from "@/assets/gallery/gallery8.png";
import gallery9 from "@/assets/gallery/gallery9.png";
import gallery10 from "@/assets/gallery/gallery10.png";
import gallery11 from "@/assets/gallery/gallery11.png";
import gallery13 from "@/assets/gallery/gallery13.png";
import gallery14 from "@/assets/gallery/gallery14.png";
import gallery15 from "@/assets/gallery/gallery15.mp4";
import gallery16 from "@/assets/gallery/gallery16.mp4";
import gallery17 from "@/assets/gallery/gallery17.mp4";

export const Route = createFileRoute("/Gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | CNI AI & Digital Division" },
      {
        name: "description",
        content:
          "A look inside CNI — our team and the Islamabad office behind every project.",
      },
    ],
  }),
  component: GalleryPage,
});

// ── Types ─────────────────────────────────────────────────────────────────────

type MediaType = "photo" | "video";

interface GalleryItem {
  id: number;
  type: MediaType;
  src: string;
  thumb?: string;
  title: string;
  category: string;
  event?: string; // sub-category under "Events"
}

// ── Data ──────────────────────────────────────────────────────────────────────

const GALLERY_ITEMS: GalleryItem[] = [
  // ── Team ──
  { id: 1,  type: "photo", src: gallery1,  title: "Head Office Team",      category: "Team"   },
  { id: 2,  type: "photo", src: gallery2,  title: "Islamabad Team",        category: "Team"   },
  // ── Office ──
  { id: 3,  type: "photo", src: gallery3,  title: "Brainstorming Session", category: "Office" },
  { id: 4,  type: "photo", src: gallery4,  title: "Employees Workstation", category: "Office" },
  { id: 5,  type: "photo", src: gallery5,  title: "Team Meeting",          category: "Office" },
  { id: 6,  type: "photo", src: gallery6,  title: "Office Lounge Area",    category: "Office" },
  // ── Events → Jashn e Subh e Noor ──
  { id: 7,  type: "photo", src: gallery7,  title: "Greetings",      category: "Events", event: "Jashn e Subh e Noor" },
  { id: 8,  type: "photo", src: gallery8,  title: "Chair Person",  category: "Events", event: "Jashn e Subh e Noor" },
  { id: 9,  type: "photo", src: gallery9,  title: "Closing Ceremony",      category: "Events", event: "Jashn e Subh e Noor" },
  { id: 10, type: "photo", src: gallery10, title: "Glimpses",            category: "Events", event: "Jashn e Subh e Noor" },
  { id: 11, type: "photo", src: gallery11, title: "Welcoming Guests",        category: "Events", event: "Jashn e Subh e Noor" },
  { id: 13, type: "photo", src: gallery13, title: "Group Photo",           category: "Events", event: "Jashn e Subh e Noor" },
  // ── Events → Your Next Event ──
  { id: 14, type: "photo", src: gallery14, title: "Our Team", category: "Events", event: "Independence Day" },
  { id: 15, type: "video", src: gallery15, title: "Cake Cutting Ceremony", category: "Events", event: "Independence Day" },
  { id: 16, type: "video", src: gallery16, title: "Islamabad Team", category: "Events", event: "Independence Day" },
  { id: 17, type: "video", src: gallery17, title: "Decor", category: "Events", event: "Independence Day" },
];

// Top-level filter tabs
const CATEGORIES = ["All", "Team", "Office", "Events"];

// Auto-generated unique event names, sourced from GALLERY_ITEMS.
// Add a new event by just adding items with category: "Events", event: "New Name" —
// this list (and every filter/section below) updates automatically.
const EVENT_NAMES: string[] = [
  ...new Set(
    GALLERY_ITEMS.filter((i) => i.category === "Events" && i.event).map(
      (i) => i.event as string
    )
  ),
];

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  items,
  startIndex,
  onClose,
}: {
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const item = items[current];

  const prev = useCallback(
    () => setCurrent((c) => (c > 0 ? c - 1 : items.length - 1)),
    [items.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c < items.length - 1 ? c + 1 : 0)),
    [items.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-5xl w-full flex flex-col items-center"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
          {item.type === "photo" ? (
            <img
              src={item.src}
              alt={item.title}
              className="w-full max-h-[75vh] object-contain"
            />
          ) : (
            <video
              src={item.src}
              controls
              autoPlay
              className="w-full max-h-[75vh] object-contain"
            />
          )}
        </div>

        <div className="mt-4 text-center">
          <p className="text-white font-medium text-sm">{item.title}</p>
          <p className="text-[var(--gold-bright)] text-xs mt-1 uppercase tracking-widest">
            {item.event ?? item.category}
          </p>
          <p className="text-white/30 text-xs mt-1">
            {current + 1} / {items.length}
          </p>
        </div>
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/15 text-white/60 hover:text-white rounded-full p-3 transition-all"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/15 text-white/60 hover:text-white rounded-full p-3 transition-all"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </motion.div>
  );
}

// ── Coverflow Carousel ────────────────────────────────────────────────────────

function Carousel({
  items,
  onOpenLightbox,
}: {
  items: GalleryItem[];
  onOpenLightbox: (index: number) => void;
}) {
  const [active, setActive] = useState(0);
  const total = items.length;
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-captured poster frames for video items that don't have a manual `thumb`
  // set. Generated once per item (off-screen, muted) and cached by id, so the
  // left/right slides show a real freeze-frame instead of the raw video file.
  const [videoThumbs, setVideoThumbs] = useState<Record<number, string>>({});

  useEffect(() => {
    items.forEach((item) => {
      if (item.type !== "video" || item.thumb || videoThumbs[item.id]) return;

      const vid = document.createElement("video");
      vid.src = item.src;
      vid.crossOrigin = "anonymous";
      vid.muted = true;
      vid.playsInline = true;
      vid.preload = "auto";

      const capture = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = vid.videoWidth;
          canvas.height = vid.videoHeight;
          const ctx = canvas.getContext("2d");
          if (ctx && canvas.width && canvas.height) {
            ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
            setVideoThumbs((prev) => ({ ...prev, [item.id]: dataUrl }));
          }
        } catch {
          // Silently ignore (e.g. CORS-tainted canvas) — falls back to raw src.
        }
      };

      vid.addEventListener("loadedmetadata", () => {
        vid.currentTime = Math.min(0.5, (vid.duration || 1) / 2);
      });
      vid.addEventListener("seeked", capture, { once: true });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const prev = useCallback(
    () => setActive((a) => (a > 0 ? a - 1 : total - 1)),
    [total]
  );
  const next = useCallback(
    () => setActive((a) => (a < total - 1 ? a + 1 : 0)),
    [total]
  );

  // Reset to first slide whenever the underlying item set changes
  // (e.g. switching between event sub-filters) so `active` never goes out of bounds.
  useEffect(() => {
    setActive(0);
  }, [items]);

  useEffect(() => {
    if (total < 2) return;
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, [next, total]);

  const leftIdx   = (active - 1 + total) % total;
  const centerIdx = active;
  const rightIdx  = (active + 1) % total;
  const isCenterVideo = items[centerIdx].type === "video";

  // Play the centered video automatically (muted autoplay is allowed by browsers),
  // restart it from the beginning each time it becomes centered again.
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !isCenterVideo) return;
    vid.currentTime = 0;
    vid.play().catch(() => {
      // Autoplay can still be blocked in some browsers/contexts — safe to ignore,
      // the user can open the lightbox for full playback with controls.
    });
  }, [centerIdx, isCenterVideo]);

  const getThumb = (item: GalleryItem) => {
    if (item.type !== "video") return item.src;
    return item.thumb ?? videoThumbs[item.id] ?? item.src;
  };

  return (
    <div className="relative w-full select-none overflow-hidden py-10">
      <div
        className="relative flex items-center justify-center"
        style={{ perspective: "1400px", height: "420px" }}
      >
        {/* LEFT */}
        <motion.div
          key={`left-${leftIdx}`}
          className="absolute cursor-pointer overflow-hidden rounded-2xl"
          style={{
            width: "340px",
            height: "380px",
            left: "calc(50% - 460px)",
            transformOrigin: "right center",
          }}
          initial={{ opacity: 0, rotateY: 55, x: -60 }}
          animate={{ opacity: 0.55, rotateY: 48, x: 0, scale: 0.87 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          onClick={prev}
          whileHover={{ opacity: 0.75, scale: 0.9 }}
        >
          <img
            src={getThumb(items[leftIdx])}
            alt={items[leftIdx].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--ink)]/55" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <ChevronLeft className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>

        {/* CENTER */}
        <motion.div
          key={`center-${centerIdx}`}
          className="absolute cursor-pointer overflow-hidden rounded-2xl z-10 border border-[var(--gold)]/40"
          style={{
            width: "400px",
            height: "400px",
            left: "calc(50% - 200px)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(201,168,76,0.15)",
          }}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          onClick={() => onOpenLightbox(centerIdx)}
          whileHover={{ scale: 1.03 }}
        >
          {isCenterVideo ? (
            <video
              ref={videoRef}
              src={items[centerIdx].src}
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
              autoPlay
            />
          ) : (
            <img
              src={getThumb(items[centerIdx])}
              alt={items[centerIdx].title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--gold-bright)] mb-1">
              {items[centerIdx].event ?? items[centerIdx].category}
            </p>
            <h3 className="text-white font-display text-2xl font-semibold leading-tight">
              {items[centerIdx].title}
            </h3>
            <p className="text-white/40 text-xs mt-2">Click to view fullscreen</p>
          </div>

          <div className="absolute inset-0 rounded-2xl ring-0 hover:ring-2 hover:ring-[var(--gold)]/40 transition-all duration-300 pointer-events-none" />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          key={`right-${rightIdx}`}
          className="absolute cursor-pointer overflow-hidden rounded-2xl"
          style={{
            width: "340px",
            height: "380px",
            left: "calc(50% + 120px)",
            transformOrigin: "left center",
          }}
          initial={{ opacity: 0, rotateY: -55, x: 60 }}
          animate={{ opacity: 0.55, rotateY: -48, x: 0, scale: 0.87 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          onClick={next}
          whileHover={{ opacity: 0.75, scale: 0.9 }}
        >
          <img
            src={getThumb(items[rightIdx])}
            alt={items[rightIdx].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--ink)]/55" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={[
              "rounded-full transition-all duration-300",
              i === active
                ? "w-6 h-1.5 bg-[var(--gold)]"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40",
            ].join(" ")}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3 mx-auto w-[400px] max-w-full h-[2px] bg-white/5 overflow-hidden rounded-full">
        <motion.div
          key={active}
          className="h-full bg-[var(--gold)]/60"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
        />
      </div>
    </div>
  );
}

// ── Category Section ───────────────────────────────────────────────────────────

function CategorySection({
  category,
  items,
  onOpenLightbox,
  eyebrow = "Category",
}: {
  category: string;
  items: GalleryItem[];
  onOpenLightbox: (index: number) => void;
  eyebrow?: string;
}) {
  if (items.length === 0) return null;

  return (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-8 px-2">
        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--gold-bright)] font-semibold mb-1">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
            {category}
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--gold)]/30 to-transparent ml-4" />
        <span className="text-xs text-muted-foreground border border-white/10 rounded-full px-3 py-1">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>

      <Carousel items={items} onOpenLightbox={onOpenLightbox} />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Clear the event sub-filter whenever we leave the Events tab
  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    if (cat !== "Events") setActiveEvent(null);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(heroProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(heroProgress, [0, 1], [1, 0]);

  // Items shown in single-category (non-"All") view
  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : activeCategory === "Events"
      ? activeEvent
        ? GALLERY_ITEMS.filter((i) => i.category === "Events" && i.event === activeEvent)
        : GALLERY_ITEMS.filter((i) => i.category === "Events")
      : GALLERY_ITEMS.filter((i) => i.category === activeCategory);

  // Sections shown in "All" view — Team, Office, then one section per event
  const groups = [
    { category: "Team",   items: GALLERY_ITEMS.filter((i) => i.category === "Team"),   isEvent: false },
    { category: "Office", items: GALLERY_ITEMS.filter((i) => i.category === "Office"), isEvent: false },
    ...EVENT_NAMES.map((ev) => ({
      category: ev,
      items: GALLERY_ITEMS.filter((i) => i.event === ev),
      isEvent: true,
    })),
  ];

  const openLightbox = (index: number, categoryItems: GalleryItem[]) => {
    const item = categoryItems[index];
    const globalIndex = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    setLightboxIndex(globalIndex);
  };

  return (
    <div className="relative min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--gold)] origin-left z-[60] shadow-[0_0_10px_var(--gold)]"
        style={{ scaleX }}
      />

      <main className="flex-1 flex flex-col w-full">

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6"
        >
          <motion.div
            style={{ y: yBg, opacity: opacityHero }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ perspective: "500px" }}
            >
              <motion.div
                aria-hidden
                className="absolute left-1/2 bottom-[-10%] w-[220%] h-[70%] -translate-x-1/2"
                style={{
                  transform: "rotateX(78deg)",
                  backgroundImage:
                    "linear-gradient(to right, color-mix(in_oklab, var(--gold) 35%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in_oklab, var(--gold) 35%, transparent) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                  maskImage: "linear-gradient(to top, black 0%, transparent 75%)",
                  WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 75%)",
                }}
                animate={{ backgroundPositionY: ["0px", "64px"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute left-1/2 bottom-[22%] w-[60vw] h-[2px] -translate-x-1/2 bg-[var(--gold)]/40 blur-[6px]" />
            </div>
            <div
              className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-[var(--gold)]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"
              style={{ animationDuration: "8s" }}
            />
            <div
              className="absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] bg-[var(--teal)]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse"
              style={{ animationDuration: "12s" }}
            />
          </motion.div>

          <div className="max-w-5xl mx-auto w-full text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--gold-bright)] font-semibold mb-5"
            >
              Behind The Work
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative inline-block mb-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-[var(--gold)] bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient font-display font-medium">
                Gallery
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed mt-6"
            >
              Every brand starts with the people behind it. A glimpse of our
              team, office, events and culture — before they ever reach your screen.
            </motion.p>
          </div>
        </section>

        {/* ── GALLERY CONTENT ── */}
        <div className="w-full max-w-7xl mx-auto px-6 pb-12">
          {activeCategory === "All" ? (
            groups.map(({ category, items, isEvent }) => (
              <CategorySection
                key={category}
                category={category}
                items={items}
                onOpenLightbox={(i) => openLightbox(i, items)}
                eyebrow={isEvent ? "Events" : "Category"}
              />
            ))
          ) : (
            <CategorySection
              category={activeCategory === "Events" && activeEvent ? activeEvent : activeCategory}
              items={filtered}
              onOpenLightbox={(i) => openLightbox(i, filtered)}
              eyebrow={activeCategory === "Events" ? "Events" : "Category"}
            />
          )}
        </div>

        {/* ── BOTTOM CTA ── */}
        <section className="w-full max-w-4xl mx-auto px-6 pb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-[var(--gold)]/20 bg-gradient-to-br from-[var(--teal-deep)]/20 to-transparent p-10 md:p-14"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--gold-bright)] font-semibold mb-4">
              Like what you see?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Let's build your next project together.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              The same team in these photos handles every brand, website and
              automation system we deliver.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)] text-base"
            >
              Get a Free Consultation
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={GALLERY_ITEMS}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}