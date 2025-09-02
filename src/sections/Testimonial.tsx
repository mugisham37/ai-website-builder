import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="bg-black text-white py-20 px-28">
      <div className="max-w-8xl mx-auto">
        {/* Testimonial 1 */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/head-shot.jpg"
                alt="Client testimonial"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">
                &ldquo;Outstanding technical expertise&rdquo;
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                He delivered a complex e-commerce platform that increased our
                sales by 150%. His attention to detail and ability to solve
                challenging problems is exceptional.
              </p>
              <p className="text-blue-400 text-sm">
                → Sarah M., CEO TechVenture
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">★</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">★</span>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/head-shot.jpg"
                alt="Client testimonial"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">
                &ldquo;Transformed our operations&rdquo;
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                The AI analytics dashboard he built processes 100K+ data points
                daily and helped us optimize operations, saving 30% in
                operational costs.
              </p>
              <p className="text-blue-400 text-sm">
                → Michael K., CTO DataFlow
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">★</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">★</span>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/head-shot.jpg"
                alt="Client testimonial"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">
                &ldquo;Reliable and innovative&rdquo;
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                His mobile app solution exceeded expectations. Clean code, great
                performance, and delivered ahead of schedule. Highly recommend
                his services.
              </p>
              <p className="text-blue-400 text-sm">
                → Emma R., Product Manager
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">★</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">★</span>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/head-shot.jpg"
                alt="Client testimonial"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">
                &ldquo;Exceptional problem solver&rdquo;
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                He migrated our entire infrastructure to the cloud seamlessly.
                Zero downtime, improved performance, and reduced costs by 40%.
              </p>
              <p className="text-blue-400 text-sm">
                → David L., Engineering Director
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">★</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">★</span>
            </div>
          </div>
        </div>

        {/* Testimonial 5 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/head-shot.jpg"
                alt="Client testimonial"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">
                &ldquo;Top-tier developer&rdquo;
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                His full-stack expertise and communication skills made our
                project a success. Professional, efficient, and delivers quality
                code every time.
              </p>
              <p className="text-blue-400 text-sm">
                → Lisa P., Startup Founder
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">★</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
