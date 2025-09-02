export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          {/* Left - Logo/Icon */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main Icon - Hand with face */}
              <div className="w-40 h-40 relative">
                <svg
                  viewBox="0 0 160 160"
                  className="w-full h-full text-cyan-300 stroke-current fill-none stroke-2"
                >
                  {/* Hand outline */}
                  <path d="M40 60 Q40 45 55 45 L105 45 Q120 45 120 60 L120 100 Q120 115 105 115 L55 115 Q40 115 40 100 Z" />
                  {/* Thumb */}
                  <path d="M35 80 Q25 75 25 85 Q25 95 35 90" />
                  {/* Face elements */}
                  <circle cx="65" cy="70" r="4" className="fill-current" />
                  <circle cx="95" cy="70" r="4" className="fill-current" />
                  <path d="M65 90 Q80 100 95 90" />
                  {/* Hair/decorative wavy lines */}
                  <path d="M50 50 Q40 40 30 45 Q35 35 25 40" />
                  <path d="M110 50 Q120 40 130 45 Q125 35 135 40" />
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
                Contact
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                Contact us to evolve your business, whether you&apos;re a<br />
                global brand or an emerging start-up. Let&apos;s work together.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-300 text-sm font-medium mb-4 uppercase tracking-wide">
                Email
              </h3>
              <p className="text-sm text-white/90">
                halo@studiovanadium.com
                <br />
                +62 821-4266-7785
              </p>
            </div>
          </div>

          {/* Right - Social & Address */}
          <div className="space-y-12">
            <div>
              <h3 className="text-cyan-300 text-sm font-medium mb-6 uppercase tracking-wide">
                Social Media
              </h3>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                <a
                  href="#"
                  className="flex items-center justify-between hover:text-cyan-300 transition-colors text-white/90"
                >
                  Instagram <span className="text-cyan-300">↗</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between hover:text-cyan-300 transition-colors text-white/90"
                >
                  Behance <span className="text-cyan-300">↗</span>
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
                  Youtube <span className="text-cyan-300">↗</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-cyan-300 text-sm font-medium mb-4 uppercase tracking-wide">
                Office (WIB)
              </h3>
              <p className="text-sm text-white/90">
                Jl. Sarongsong | No. 33 Surabaya, 60299
                <br />
                East Java - Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Large Text */}
        <div className="relative">
          <div className="flex items-end justify-between">
            <div className="text-7xl lg:text-9xl font-light text-cyan-300 tracking-wider leading-none">
              Studio — Vanadium
            </div>
            <div className="text-7xl lg:text-9xl font-bold leading-none bg-cyan-300 text-purple-600 px-4 py-2 rounded-lg">
              SV
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
