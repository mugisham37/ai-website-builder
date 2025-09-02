"use client";

import LogoLoop from "../components/LogoLoop";

// Client logo components
const LogoPlaceholder = ({
  variant = "square",
}: {
  variant?: "square" | "circle";
}) => (
  <div
    className={`w-12 h-12 bg-white/20 ${
      variant === "circle" ? "rounded-full" : "rounded"
    } flex items-center justify-center`}
  >
    <div
      className={`w-8 h-8 bg-white ${
        variant === "circle" ? "rounded-full" : "rounded"
      }`}
    ></div>
  </div>
);

const clientLogos = [
  {
    node: <span className="text-white text-2xl font-light">astra</span>,
    title: "Astra",
    ariaLabel: "Astra company logo",
  },
  {
    node: <LogoPlaceholder variant="square" />,
    title: "Client Logo",
    ariaLabel: "Client company logo",
  },
  {
    node: <span className="text-white text-xl font-medium">FS</span>,
    title: "FS",
    ariaLabel: "FS company logo",
  },
  {
    node: <span className="text-white text-lg font-medium">PELINDO</span>,
    title: "Pelindo",
    ariaLabel: "Pelindo company logo",
  },
  {
    node: <span className="text-white text-lg font-medium">PLN</span>,
    title: "PLN",
    ariaLabel: "PLN company logo",
  },
  {
    node: <LogoPlaceholder variant="circle" />,
    title: "Client Logo",
    ariaLabel: "Client company logo",
  },
  {
    node: <span className="text-white text-lg font-medium">ITS</span>,
    title: "ITS",
    ariaLabel: "ITS company logo",
  },
  {
    node: <span className="text-white text-lg font-medium">MCI</span>,
    title: "MCI",
    ariaLabel: "MCI company logo",
  },
  {
    node: <span className="text-white text-2xl font-light">tripatra</span>,
    title: "Tripatra",
    ariaLabel: "Tripatra company logo",
  },
  {
    node: <span className="text-white text-lg font-medium">PERTAMINA</span>,
    title: "Pertamina",
    ariaLabel: "Pertamina company logo",
  },
  {
    node: <span className="text-white text-lg font-medium">UNHABITAT</span>,
    title: "UN Habitat",
    ariaLabel: "UN Habitat company logo",
  },
  {
    node: <LogoPlaceholder variant="circle" />,
    title: "Client Logo",
    ariaLabel: "Client company logo",
  },
  {
    node: <span className="text-white text-lg font-medium">INKA</span>,
    title: "INKA",
    ariaLabel: "INKA company logo",
  },
];

export default function BrandSoul() {
  return (
    <section className="h-screen bg-black px-6 md:px-12 flex items-center">
      {/* Main content container */}
      <div className="max-w-8xl mx-auto w-full flex flex-col justify-center min-h-0">
        {/* Main text content */}
        <div className="flex-shrink-0 mb-8 lg:mb-12">
          <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[48px] leading-tight lg:leading-[65px] font-normal">
            Your brand should have a soul, like a human soul, as the basis for
            interaction. It&apos;s just a matter of how your voice can resonate
            and be heard effectively, worth telling. We,{" "}
            <span className="text-blue-400">[Studio Vanadium]</span>, help to
            amplify your brand&apos;s soulful resonance.
          </p>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/20 flex-shrink-0 mb-8 lg:mb-12"></div>

        {/* Clients section */}
        <div className="flex-shrink-0">
          <p className="text-blue-400 text-sm font-medium mb-6 lg:mb-8 tracking-wider">
            (OUR CLIENTS)
          </p>

          {/* Animated logo loop */}
          <div className="opacity-60">
            <LogoLoop
              logos={clientLogos}
              speed={80}
              direction="left"
              logoHeight={40}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Our client companies"
              className="py-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
