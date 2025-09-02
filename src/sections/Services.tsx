import React from "react";

const Services = () => {
  return (
    <section className="bg-white pt-20 px-6 md:px-12 lg:px-12">
      <div className="max-w-8xl mx-auto">
        {/* Main heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[45px] font-normal text-gray-900 leading-16">
            We create borderless connections between your brand and its
            audiences through our services. We help to find its true potential
            and amplify the essence of your brand.
          </h2>
        </div>

        {/* Services label and description */}
        <div className="mb-16 flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="mb-8 lg:mb-0 bg-amber-50">
            <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
              [OUR SERVICES]
            </p>
          </div>
          <div className="lg:max-w-[580px] max-w-[100px]">
            <p className="text-gray-500 leading-6">
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
          <div className="flex flex-wrap gap-12 lg:gap-20">
            <div className="flex-1 min-w-80">
              <div className="mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [01]
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
                  Brand Identity Design
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="flex-1 min-w-48 space-y-4">
                  <p>Brand Research + Analysis</p>
                  <p>Brand Strategy + Positioning</p>
                  <p>Brand Naming + Story</p>
                  <p>Brand Guidelines</p>
                </div>
                <div className="flex-1 min-w-48 space-y-4">
                  <p>Logotype & Logomarks</p>
                  <p>Verbal Identity</p>
                  <p>Visual Identity System</p>
                </div>
              </div>
            </div>

            <div className=" min-w-80 lg:pl-8 aspect-[2/1.5] bg-red-600 rounded-lg flex items-center justify-center">
            </div>
          </div>

          {/* Creative Communication Design */}
          <div className="flex flex-wrap gap-12 lg:gap-20">
            <div className="flex-1 min-w-80">
              <div className="mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [02]
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
                  Creative Communication Design
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="flex-1 min-w-48 space-y-4">
                  <p>Campaign Strategy</p>
                  <p>Creative Branding</p>
                  <p>Copywriting</p>
                  <p>Media Relations</p>
                  <p>Leader Branding</p>
                </div>
                <div className="flex-1 min-w-48 space-y-4">
                  <p>Social Media Management</p>
                  <p>Marketing Communication Handling</p>
                  <p>Public Relations Handling</p>
                  <p>Photography</p>
                  <p>Videography</p>
                </div>
              </div>
            </div>

            <div className=" min-w-80 lg:pl-8 aspect-[2/1.5] bg-red-600 rounded-lg flex items-center justify-center">
            </div>
          </div>

          {/* Graphic Design */}
          <div className="flex flex-wrap gap-12 lg:gap-20">
            <div className="flex-1 min-w-80">
              <div className="mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [03]
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
                  Graphic Design
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="flex-1 min-w-48 space-y-4">
                  <p>Art & Design Direction</p>
                  <p>Publication Design</p>
                  <p>Editorial Design</p>
                  <p>Graphic Elements</p>
                  <p>Pattern/Icon Design</p>
                </div>
                <div className="flex-1 min-w-48 space-y-4">
                  <p>Mascot Design</p>
                  <p>Motion Graphic Video</p>
                  <p>Packaging Design</p>
                  <p>Data Visualization/Infographics</p>
                  <p>Illustrations</p>
                </div>
              </div>
            </div>

            <div className=" min-w-80 lg:pl-8 aspect-[2/1.5] bg-red-600 rounded-lg flex items-center justify-center">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
