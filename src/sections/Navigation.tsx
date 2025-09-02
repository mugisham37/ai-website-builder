export default function Navigation() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-1 sm:px-3 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation Links */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-black font-bold text-xl">EV</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block ml-12">
              <div className="flex items-baseline space-x-2">
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
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-3 hover:bg-gray-800 transition-colors">
              Let&apos;s Collaborate
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
