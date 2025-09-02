export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          {/* Left - Logo/Icon */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main Icon - Code brackets with face */}
              <div className="w-40 h-40 relative">
                <svg
                  viewBox="0 0 160 160"
                  className="w-full h-full text-cyan-300 stroke-current fill-none stroke-2"
                >
                  {/* Code brackets */}
                  <path
                    d="M30 40 L20 50 L20 110 L30 120"
                    strokeLinecap="round"
                  />
                  <path
                    d="M130 40 L140 50 L140 110 L130 120"
                    strokeLinecap="round"
                  />
                  {/* Terminal/screen outline */}
                  <rect x="40" y="35" width="80" height="90" rx="8" />
                  {/* Face elements */}
                  <circle cx="65" cy="70" r="4" className="fill-current" />
                  <circle cx="95" cy="70" r="4" className="fill-current" />
                  <path d="M65 90 Q80 100 95 90" strokeLinecap="round" />
                  {/* Code lines */}
                  <line x1="50" y1="50" x2="70" y2="50" strokeLinecap="round" />
                  <line
                    x1="50"
                    y1="105"
                    x2="90"
                    y2="105"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Decorative stars */}
              <div className="absolute -top-6 -left-6 text-cyan-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="fill-current"
                >
                  <path d="M10 0l3 7h7l-6 4 3 7-7-5-7 5 3-7-6-4h7z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 text-cyan-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  className="fill-current"
                >
                  <path d="M10 0l3 7h7l-6 4 3 7-7-5-7 5 3-7-6-4h7z" />
                </svg>
              </div>
              <div className="absolute top-8 -right-8 text-cyan-300">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  className="fill-current"
                >
                  <path d="M10 0l3 7h7l-6 4 3 7-7-5-7 5 3-7-6-4h7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Center - Contact Info */}
          <div className="text-center space-y-12">
            <div>
              <h3 className="text-cyan-300 text-sm font-medium mb-4 uppercase tracking-wide">
                Let&apos;s Connect
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                Ready to build something amazing together? Whether you&apos;re a
                <br />
                startup or enterprise, let&apos;s turn your ideas into reality.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-300 text-sm font-medium mb-4 uppercase tracking-wide">
                Get In Touch
              </h3>
              <p className="text-sm text-white/90">
                moses.mugisha@dev.com
                <br />
                +250 788 123 456
              </p>
            </div>
          </div>

          {/* Right - Social & Address */}
          <div className="space-y-12">
            <div>
              <h3 className="text-cyan-300 text-sm font-medium mb-6 uppercase tracking-wide">
                Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                <a
                  href="#"
                  className="flex items-center justify-between hover:text-cyan-300 transition-colors text-white/90"
                >
                  GitHub <span className="text-cyan-300">↗</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between hover:text-cyan-300 transition-colors text-white/90"
                >
                  LinkedIn <span className="text-cyan-300">↗</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between hover:text-cyan-300 transition-colors text-white/90"
                >
                  Portfolio <span className="text-cyan-300">↗</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between hover:text-cyan-300 transition-colors text-white/90"
                >
                  Dev.to <span className="text-cyan-300">↗</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-cyan-300 text-sm font-medium mb-4 uppercase tracking-wide">
                Location (CAT)
              </h3>
              <p className="text-sm text-white/90">
                Kigali Innovation City | KG 9 Ave
                <br />
                Kigali - Rwanda
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Large Text */}
        <div className="relative">
          <div className="flex items-end justify-between">
            <div className="text-7xl lg:text-9xl font-light text-cyan-300 tracking-wider leading-none">
              Moses &mdash; Mugisha
            </div>
            <div className="text-7xl lg:text-9xl font-bold leading-none bg-cyan-300 text-purple-600 px-4 py-2 rounded-lg">
              MM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
