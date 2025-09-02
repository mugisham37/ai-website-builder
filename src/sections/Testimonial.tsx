import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Team Member 1 - Wisnu Anggoro */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/head-shot.jpg"
                alt="Wisnu Anggoro"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">Wisnu Anggoro</h3>
              <p className="text-gray-400 text-sm mb-2">
                Videography, Motion Design & Photography
              </p>
              <p className="text-blue-400 text-sm">→ Managing Director</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">IG</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">in</span>
            </div>
          </div>
        </div>

        {/* Team Member 2 - Luqman Ibnu Rusyd */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/head-shot.jpg"
                alt="Luqman Ibnu Rusyd"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">Luqman Ibnu Rusyd</h3>
              <p className="text-gray-400 text-sm mb-2">
                Brand Consultant, Client Relations & Project Management.
              </p>
              <p className="text-blue-400 text-sm">→ Business Director</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">IG</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">in</span>
            </div>
          </div>
        </div>

        {/* Team Member 3 - Abraham Zoesa Wangge */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/head-shot.jpg"
                alt="Abraham Zoesa Wangge"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">Abraham Zoesa Wangge</h3>
              <p className="text-gray-400 text-sm mb-2">
                Art Direction, Illustration & Visual Identity.
              </p>
              <p className="text-blue-400 text-sm">→ Sr. Graphic Designer</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">IG</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">in</span>
            </div>
          </div>
        </div>

        {/* Team Member 4 - Osmosi Usdiananda */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/head-shot.jpg"
                alt="Osmosi Usdiananda"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">Osmosi Usdiananda</h3>
              <p className="text-gray-400 text-sm mb-2">
                UI/UX Design, Web Development, Layout Design & Editorial Design.
              </p>
              <p className="text-blue-400 text-sm">→ Sr. Designer</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">IG</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">in</span>
            </div>
          </div>
        </div>

        {/* Team Member 5 - Mahindra Rhavell */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/head-shot.jpg"
                alt="Mahindra Rhavell"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">Mahindra Rhavell</h3>
              <p className="text-gray-400 text-sm mb-2">
                Motion Design, Layout Design & Editorial Design.
              </p>
              <p className="text-blue-400 text-sm">→ Graphic Designer</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">IG</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
