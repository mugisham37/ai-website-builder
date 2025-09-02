export default function Process() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with blue text */}
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium mb-6 tracking-wider uppercase">
            [OUR PROCESS]
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-5xl">
            Understanding the essentials of effective visual communication,
            we've developed a tailored visual communication strategy to
            resonating your brand and connect with your audiences. A process to
            ensure your brand's vision which is effectively translated into a
            visual language that leaves lasting impression.
          </h2>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Absorb Card */}
          <div className="bg-zinc-900 p-8 rounded-lg">
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Absorb</h3>
              <p className="text-blue-400 text-sm">→ Identity</p>
            </div>

            <div className="mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Collecting and absorbing information about the brand, customers,
              and industry environment to formulate an effective visual
              communication strategy.
            </p>
          </div>

          {/* Encode Card */}
          <div className="bg-zinc-900 p-8 rounded-lg">
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Encode</h3>
              <p className="text-blue-400 text-sm">→ Define</p>
            </div>

            <div className="mb-8">
              <div className="relative w-16 h-16 mb-4">
                <div className="w-12 h-12 bg-white rounded-sm"></div>
                <div className="absolute top-2 right-0 w-6 h-1 bg-pink-400 rotate-45 origin-left"></div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Create a concept and define the visual direction in detail to
              ensure your vision and messages are conveyed clearly and
              effectively.
            </p>
          </div>

          {/* Generate Card */}
          <div className="bg-zinc-900 p-8 rounded-lg">
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Generate</h3>
              <p className="text-blue-400 text-sm">→ Articulate</p>
            </div>

            <div className="mb-8">
              <div className="w-16 h-16 mb-4 flex items-center">
                <div className="w-12 h-8 bg-white rounded-sm mr-2"></div>
                <div className="w-3 h-6 bg-gray-400 rounded-sm"></div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Visualize the concept and apply it across various media to show
              that your visual communication delivers the intended experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
