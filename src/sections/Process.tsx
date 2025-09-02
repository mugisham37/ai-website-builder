export default function Process() {
  return (
    <section className="bg-black text-white py-20 px-12">
      <div className="max-w-8xl mx-auto">
        {/* Header with blue text */}
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium mb-6 tracking-wider uppercase">
            [MY PROCESS]
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal leading-14">
            Understanding the complexity of modern development challenges,
            I&apos;ve crafted a systematic approach to building robust digital
            solutions that scale. A proven methodology that transforms your
            requirements into clean, efficient code that delivers exceptional
            user experiences and drives business growth.
          </h2>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Analyze Card */}
          <div className="bg-zinc-900 p-5 rounded-lg">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-1">Analyze</h3>
              <p className="text-blue-400 text-xs">→ Discovery</p>
            </div>

            <div className="mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2">
                <div className="w-7 h-7 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              Deep dive into your business requirements, user needs, and 
              technical constraints to architect the optimal solution that 
              aligns with your goals and scales with your growth.
            </p>
          </div>

          {/* Architect Card */}
          <div className="bg-zinc-900 p-5 rounded-lg">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-1">Architect</h3>
              <p className="text-blue-400 text-xs">→ Design</p>
            </div>

            <div className="mb-4">
              <div className="relative w-10 h-10 mb-2">
                <div className="w-7 h-7 bg-white rounded-sm"></div>
                <div className="absolute top-1 right-0 w-4 h-1 bg-pink-400 rotate-45 origin-left"></div>
              </div>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              Design the technical architecture and create detailed blueprints
              that ensure scalability, security, and maintainability while 
              delivering optimal performance across all platforms.
            </p>
          </div>

          {/* Execute Card */}
          <div className="bg-zinc-900 p-5 rounded-lg">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-1">Execute</h3>
              <p className="text-blue-400 text-xs">→ Deliver</p>
            </div>

            <div className="mb-4">
              <div className="w-10 h-10 mb-2 flex items-center">
                <div className="w-7 h-5 bg-white rounded-sm mr-1"></div>
                <div className="w-2 h-4 bg-gray-400 rounded-sm"></div>
              </div>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              Transform concepts into production-ready applications using 
              modern development practices, rigorous testing, and continuous 
              deployment to deliver solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}