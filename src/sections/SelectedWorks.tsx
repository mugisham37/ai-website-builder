export default function SelectedWorks() {
  return (
    <section
      id="projects"
      className="px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-16 md:py-20 bg-white"
    >
      <div className="max-w-8xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-8 sm:mb-12 lg:mb-16">
          Selected Projects
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
          {/* E-Commerce Platform Card */}
          <div className="flex-1">
            <div className="aspect-[2/1] bg-gray-200 mb-6 sm:mb-8 overflow-hidden rounded-sm">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm">
                  E-Commerce Platform
                </span>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-black mb-3 sm:mb-4 leading-tight">
              Full-Stack E-Commerce Platform
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 sm:mb-8 font-light">
              Built a complete e-commerce solution with React and Node.js,
              featuring real-time inventory management, secure payment
              processing, and an admin dashboard that increased client sales by
              150%.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs border border-gray-400 text-gray-700 font-light rounded-sm">
                React & TypeScript
              </span>
              <span className="px-3 py-1.5 text-xs border border-gray-400 text-gray-700 font-light rounded-sm">
                Node.js & MongoDB
              </span>
            </div>
          </div>

          {/* AI-Powered App Card */}
          <div className="flex-1">
            <div className="aspect-[2/1] bg-gray-200 mb-6 sm:mb-8 overflow-hidden rounded-sm">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm">
                  AI Analytics Dashboard
                </span>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-black mb-3 sm:mb-4 leading-tight">
              AI-Powered Analytics Dashboard
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 sm:mb-8 font-light">
              Developed a machine learning-powered analytics platform using
              Python and React, processing 100K+ data points daily to deliver
              predictive insights that helped clients optimize their operations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs border border-gray-400 text-gray-700 font-light rounded-sm">
                Python & FastAPI
              </span>
              <span className="px-3 py-1.5 text-xs border border-gray-400 text-gray-700 font-light rounded-sm">
                Machine Learning
              </span>
              <span className="px-3 py-1.5 text-xs border border-gray-400 text-gray-700 font-light rounded-sm">
                React & D3.js
              </span>
              <span className="px-3 py-1.5 text-xs border border-blue-400 text-blue-700 bg-blue-50 font-light rounded-sm">
                AWS Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
