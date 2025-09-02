import React from "react";

const Services = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight max-w-5xl">
            We create borderless connections between your brand and its
            audiences through our services. We help to find its true potential
            and amplify the essence of your brand.
          </h2>
        </div>

        {/* Services label and description */}
        <div className="mb-16 flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="mb-8 lg:mb-0">
            <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
              [OUR SERVICES]
            </p>
          </div>
          <div className="lg:max-w-md">
            <p className="text-gray-500 leading-relaxed">
              We offer multidisciplinary services to communicate your brand
              voice through many touchpoint outputs: visual identities,
              packaging, motion, digital and print design, wayfinding,
              environmental graphics, and UI/UX design.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="space-y-20">
          {/* Brand Identity Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [01]
                </span>
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                  Brand Identity Design
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="space-y-2">
                  <p>Brand Research + Analysis</p>
                  <p>Brand Strategy + Positioning</p>
                  <p>Brand Naming + Story</p>
                  <p>Brand Guidelines</p>
                  <p>Brand Activation</p>
                </div>
                <div className="space-y-2">
                  <p>Logotype & Logomarks</p>
                  <p>Verbal Identity</p>
                  <p>Visual Identity System</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 via-green-400 to-purple-400 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Creative Communication Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [02]
                </span>
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                  Creative Communication Design
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="space-y-2">
                  <p>Campaign Strategy</p>
                  <p>Creative Branding</p>
                  <p>Copywriting</p>
                  <p>Media Relations</p>
                  <p>Leader Branding</p>
                </div>
                <div className="space-y-2">
                  <p>Social Media Management</p>
                  <p>Marketing Communication Handling</p>
                  <p>Public Relations Handling</p>
                  <p>Photography</p>
                  <p>Videography</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="aspect-[4/3] bg-black rounded-lg"></div>
            </div>
          </div>

          {/* Graphic Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [03]
                </span>
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                  Graphic Design
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="space-y-2">
                  <p>Art & Design Direction</p>
                  <p>Publication Design</p>
                  <p>Editorial Design</p>
                  <p>Graphic Elements</p>
                  <p>Pattern/Icon Design</p>
                </div>
                <div className="space-y-2">
                  <p>Mascot Design</p>
                  <p>Motion Graphic Video</p>
                  <p>Packaging Design</p>
                  <p>Data Visualization/Infographics</p>
                  <p>Illustrations</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="aspect-[4/3] bg-red-600 rounded-lg flex items-center justify-center">
                <div className="text-white text-8xl font-thin tracking-wider">
                  S
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
