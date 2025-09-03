import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-white pt-20 px-6 md:px-12 lg:px-28">
      <div className="max-w-8xl mx-auto">
        {/* Main heading - Responsive typography */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[45px] font-normal text-gray-900 leading-tight md:leading-relaxed lg:leading-16">
            I build scalable digital solutions that transform ideas into
            powerful applications. I help businesses unlock their potential
            through modern technology and exceptional user experiences.
          </h2>
        </div>

        {/* Services label and description - Improved mobile layout */}
        <div className="mb-12 md:mb-14 lg:mb-16 flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="mb-6 md:mb-8 lg:mb-0">
            <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
              [MY SERVICES]
            </p>
          </div>
          <div className="lg:max-w-[580px] md:max-w-[480px] max-w-full">
            <p className="text-gray-500 leading-relaxed md:leading-6 text-sm md:text-base">
              I provide end-to-end development services across the full stack,
              specializing in modern web applications, mobile solutions, cloud
              architecture, AI integration, and performance optimization to
              deliver exceptional digital experiences.
            </p>
          </div>
        </div>

        {/* Services grid - Enhanced mobile experience */}
        <div className="space-y-16 md:space-y-18 lg:space-y-20">
          {/* Full-Stack Development */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 md:gap-10 lg:gap-12 xl:gap-20">
            <div className="flex-1 lg:min-w-80">
              <div className="mb-6 md:mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [01]
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-6 md:mb-8">
                  Full-Stack Development
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 md:gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="flex-1 sm:min-w-48 space-y-3 md:space-y-4">
                  <p>Frontend Development</p>
                  <p>Backend Architecture</p>
                  <p>Database Design</p>
                  <p>API Development</p>
                </div>
                <div className="flex-1 sm:min-w-48 space-y-3 md:space-y-4">
                  <p>React & Next.js</p>
                  <p>Node.js & Python</p>
                  <p>MongoDB & PostgreSQL</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:min-w-80 lg:pl-8 aspect-[16/10] sm:aspect-[2/1] md:aspect-[2/1.2] lg:aspect-[2/1.5] bg-red-600 rounded-lg flex items-center justify-center"></div>
          </div>

          {/* Mobile & Cloud Solutions */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 md:gap-10 lg:gap-12 xl:gap-20">
            <div className="flex-1 lg:min-w-80">
              <div className="mb-6 md:mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [02]
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-6 md:mb-8">
                  Mobile & Cloud Solutions
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 md:gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="flex-1 sm:min-w-48 space-y-3 md:space-y-4">
                  <p>React Native Apps</p>
                  <p>Progressive Web Apps</p>
                  <p>Cloud Architecture</p>
                  <p>DevOps & CI/CD</p>
                  <p>Performance Optimization</p>
                </div>
                <div className="flex-1 sm:min-w-48 space-y-3 md:space-y-4">
                  <p>AWS & Azure Services</p>
                  <p>Microservices Architecture</p>
                  <p>Docker & Kubernetes</p>
                  <p>Load Balancing</p>
                  <p>Security Implementation</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:min-w-80 lg:pl-8 aspect-[16/10] sm:aspect-[2/1] md:aspect-[2/1.2] lg:aspect-[2/1.5] bg-red-600 rounded-lg flex items-center justify-center"></div>
          </div>

          {/* AI Integration & Analytics */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 md:gap-10 lg:gap-12 xl:gap-20">
            <div className="flex-1 lg:min-w-80">
              <div className="mb-6 md:mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [03]
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-6 md:mb-8">
                  AI Integration & Analytics
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 md:gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="flex-1 sm:min-w-48 space-y-3 md:space-y-4">
                  <p>Machine Learning Models</p>
                  <p>Data Pipeline Architecture</p>
                  <p>Predictive Analytics</p>
                  <p>Natural Language Processing</p>
                  <p>Computer Vision</p>
                </div>
                <div className="flex-1 sm:min-w-48 space-y-3 md:space-y-4">
                  <p>TensorFlow & PyTorch</p>
                  <p>Real-time Data Processing</p>
                  <p>Business Intelligence Dashboards</p>
                  <p>API Integration</p>
                  <p>Custom AI Solutions</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:min-w-80 lg:pl-8 aspect-[16/10] sm:aspect-[2/1] md:aspect-[2/1.2] lg:aspect-[2/1.5] bg-red-600 rounded-lg flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
