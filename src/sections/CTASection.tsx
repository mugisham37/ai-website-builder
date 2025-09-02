export default function CTASection() {
  return (
    <section className="px-8 py-20 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl px-16 py-20 text-center">
          <h2 className="text-4xl font-normal text-white mb-6 leading-tight max-w-2xl mx-auto">
            Bring your brand to life with visuals that resonate. Let&apos;s start
            today!
          </h2>

          <p className="text-white/90 text-lg mb-12 font-light">
            Send us a message and let&apos;s collaborate on your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black/80 hover:bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium transition-colors">
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

            <button className="bg-black/80 hover:bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium transition-colors">
              Company Profile
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
    </section>
  );
}
