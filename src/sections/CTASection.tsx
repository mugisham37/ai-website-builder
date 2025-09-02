export default function CTASection() {
  return (
    <section className="px-12 py-17 bg-black">
      <div className="max-w-8xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl px-14 py-10 text-center">
          <h2 className="text-4xl font-normal text-white mb-5 leading-tight max-w-2xl mx-auto">
            Ready to build something amazing? Let&apos;s turn your ideas into reality!
          </h2>

          <p className="text-white/90 text-lg mb-7 font-light">
            Get in touch and let&apos;s discuss how I can help bring your project to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="bg-black/80 hover:bg-black text-white px-7 py-3 rounded-full flex items-center gap-3 font-medium transition-colors">
              Let&apos;s Build Together
              <svg
                width="15"
                height="15"
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

            <button className="bg-black/80 hover:bg-black text-white px-7 py-3 rounded-full flex items-center gap-3 font-medium transition-colors">
              View Resume
              <svg
                width="15"
                height="15"
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
    </section>
  );
}