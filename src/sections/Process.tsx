export default function Process() {
  return (
    <section className="bg-black text-white py-20 px-12">
      <div className="max-w-8xl mx-auto">
        {/* Header with blue text */}
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium mb-6 tracking-wider uppercase">
            [OUR PROCESS]
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal leading-14">
            Understanding the essentials of effective visual communication,
            we&apos;ve developed a tailored visual communication strategy to
            resonating your brand and connect with your audiences. A process to
            ensure your brand&apos;s vision which is effectively translated into
            a visual language that leaves lasting impression.
          </h2>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Absorb Card */}
          <div className="bg-zinc-900 p-5 rounded-lg">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-1">Absorb</h3>
              <p className="text-blue-400 text-xs">→ Identity</p>
            </div>

            <div className="mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2">
                <div className="w-7 h-7 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              Collecting and absorbing information about the brand, customers,
              and industry environment to formulate an effective visual
              communication strategy.
            </p>
          </div>

          {/* Encode Card */}
          <div className="bg-zinc-900 p-5 rounded-lg">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-1">Encode</h3>
              <p className="text-blue-400 text-xs">→ Define</p>
            </div>

            <div className="mb-4">
              <div className="relative w-10 h-10 mb-2">
                <div className="w-7 h-7 bg-white rounded-sm"></div>
                <div className="absolute top-1 right-0 w-4 h-1 bg-pink-400 rotate-45 origin-left"></div>
              </div>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              Create a concept and define the visual direction in detail to
              ensure your vision and messages are conveyed clearly and
              effectively.
            </p>
          </div>

          {/* Generate Card */}
          <div className="bg-zinc-900 p-5 rounded-lg">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-1">Generate</h3>
              <p className="text-blue-400 text-xs">→ Articulate</p>
            </div>

            <div className="mb-4">
              <div className="w-10 h-10 mb-2 flex items-center">
                <div className="w-7 h-5 bg-white rounded-sm mr-1"></div>
                <div className="w-2 h-4 bg-gray-400 rounded-sm"></div>
              </div>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              Visualize the concept and apply it across various media to show
              that your visual communication delivers the intended experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}