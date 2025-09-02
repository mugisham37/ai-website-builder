export default function BrandSoul() {
  return (
    <section className="min-h-screen bg-black px-8 py-16">
      {/* Main text content */}
      <div className="max-w-6xl mx-auto">
        <p className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-16">
          Your brand should have a soul, like a human soul, as the basis for
          interaction. It&apos;s just a matter of how your voice can resonate
          and be heard effectively, worth telling. We,{" "}
          <span className="text-blue-400">[Studio Vanadium]</span>, help to
          amplify your brand&apos;s soulful resonance.
        </p>

        {/* Clients section */}
        <div className="mt-24">
          <p className="text-blue-400 text-sm font-medium mb-12 tracking-wider">
            (OUR CLIENTS)
          </p>

          {/* First row of logos */}
          <div className="flex items-center justify-between mb-12 opacity-60">
            <div className="text-white text-2xl font-light">astra</div>
            <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded"></div>
            </div>
            <div className="text-white text-xl font-medium">FS</div>
            <div className="text-white text-lg font-medium">PELINDO</div>
            <div className="text-white text-lg font-medium">PLN</div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="text-white text-lg font-medium">ITS</div>
            <div className="text-white text-lg font-medium">MCI</div>
            <div className="text-white text-2xl font-light">tripatra</div>
          </div>

          {/* Second row of logos */}
          <div className="flex items-center justify-between opacity-60">
            <div className="text-white text-lg font-medium">PERTAMINA</div>
            <div className="text-white text-lg font-medium">UNHABITAT</div>
            <div className="text-white text-lg font-medium">ITS</div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="text-white text-lg font-medium">PLN</div>
            <div className="text-white text-lg font-medium">INKA</div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
