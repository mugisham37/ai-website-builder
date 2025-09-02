export default function SelectedWorks() {
  return (
    <section className="px-12 py-20 bg-white">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-medium text-black mb-16 ">
          Selected Works
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mitra Cakrawala International Card */}
          <div className="flex-1">
            <div className="aspect-[2/1] bg-gray-200 mb-8 overflow-hidden rounded-sm">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <span className="text-white text-sm">MCI Displays Image</span>
              </div>
            </div>
            <h3 className="text-xl font-medium text-black mb-4 leading-tight">
              Mitra Cakrawala International
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 font-light">
              MCI Group, a parent company overseeing various subsidiaries in
              four business sectors, aims to unify its disparate corporate
              identities under a single symbol that reflects its shared vision.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs border border-gray-400 text-gray-700 font-light rounded-sm">
                Visual Identity System
              </span>
              <span className="px-3 py-1.5 text-xs border border-gray-400 text-gray-700 font-light rounded-sm">
                Collateral Design
              </span>
            </div>
          </div>

          {/* Hussel Card */}
          <div className="flex-1">
            <div className="aspect-[2/1] bg-gray-200 mb-8 overflow-hidden rounded-sm">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
                <span className="text-white text-sm">
                  Hussel Interior Image
                </span>
              </div>
            </div>
            <h3 className="text-xl font-medium text-black mb-4 leading-tight">
              Hussel
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 font-light">
              Hussel Coffee is a cafe located in the heart of Surabaya, within
              the Kaloer social space. Its proximity to a coworking space makes
              Hussel an ideal place for work-related activities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs border border-gray-400 text-gray-700 font-light rounded-sm">
                Visual Identity System
              </span>
              <span className="px-3 py-1.5 text-xs border border-gray-400 text-gray-700 font-light rounded-sm">
                Collateral Design
              </span>
              <span className="px-3 py-1.5 text-xs border border-gray-400 text-gray-700 font-light rounded-sm">
                Signage & Wayfinding
              </span>
              <span className="px-3 py-1.5 text-xs border border-blue-400 text-blue-700 bg-blue-50 font-light rounded-sm">
                Google Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}