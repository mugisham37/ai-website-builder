export default function Navigation() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation Links */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-black font-bold text-xl">EV</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block ml-12">
              <div className="flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Works
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Let&apos;s Collaborate
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
