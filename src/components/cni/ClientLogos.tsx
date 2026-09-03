import { Reveal } from "./primitives";

const logoFiles = import.meta.glob("../../assets/logos/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});
const CLIENT_LOGOS = Object.values(logoFiles) as string[];

export function ClientLogos() {
  const half = Math.ceil(CLIENT_LOGOS.length / 2);
  const logosTop = CLIENT_LOGOS.slice(0, half);
  const logosBottom = CLIENT_LOGOS.slice(half);

  return (
    <Reveal className="w-full relative flex flex-col gap-10 bg-white/[0.05] backdrop-blur-md rounded-3xl py-12 border border-white/10 shadow-2xl">
      <div
        className="flex flex-col gap-10 w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max items-center animate-marquee-left hover:[animation-play-state:paused]">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex gap-16 sm:gap-24 items-center px-8 sm:px-12 shrink-0">
              {logosTop.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Client Logo ${idx + 1}`}
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain shrink-0 cursor-default hover:scale-105 transition-transform drop-shadow-sm"
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex w-max items-center animate-marquee-right hover:[animation-play-state:paused]">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex gap-16 sm:gap-24 items-center px-8 sm:px-12 shrink-0">
              {logosBottom.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Client Logo ${idx + 1}`}
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain shrink-0 cursor-default hover:scale-105 transition-transform drop-shadow-sm"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
