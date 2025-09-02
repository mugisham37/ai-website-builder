import React from "react";

const Services = () => {
  return (
    <section className="bg-white pt-20 px-6 md:px-12 lg:px-12">
      <div className="max-w-8xl mx-auto">
        {/* Main heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[45px] font-normal text-gray-900 leading-16">
            I build scalable digital solutions that transform ideas into 
            powerful applications. I help businesses unlock their potential 
            through modern technology and exceptional user experiences.
          </h2>
        </div>

        {/* Services label and description */}
        <div className="mb-16 flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="mb-8 lg:mb-0 bg-amber-50">
            <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
              [MY SERVICES]
            </p>
          </div>
          <div className="lg:max-w-[580px] max-w-[100px]">
            <p className="text-gray-500 leading-6">
              I provide end-to-end development services across the full stack, 
              specializing in modern web applications, mobile solutions, cloud 
              architecture, AI integration, and performance optimization to 
              deliver exceptional digital experiences.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="space-y-20">
          {/* Full-Stack Development */}
          <div className="flex flex-wrap gap-12 lg:gap-20">
            <div className="flex-1 min-w-80">
              <div className="mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [01]
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
                  Full-Stack Development
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="flex-1 min-w-48 space-y-4">
                  <p>Frontend Development</p>
                  <p>Backend Architecture</p>
                  <p>Database Design</p>
                  <p>API Development</p>
                </div>
                <div className="flex-1 min-w-48 space-y-4">
                  <p>React & Next.js</p>
                  <p>Node.js & Python</p>
                  <p>MongoDB & PostgreSQL</p>
                </div>
              </div>
            </div>

            <div className=" min-w-80 lg:pl-8 aspect-[2/1.5] bg-red-600 rounded-lg flex items-center justify-center">
            </div>
          </div>

          {/* Mobile & Cloud Solutions */}
          <div className="flex flex-wrap gap-12 lg:gap-20">
            <div className="flex-1 min-w-80">
              <div className="mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [02]
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
                  Mobile & Cloud Solutions
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="flex-1 min-w-48 space-y-4">
                  <p>React Native Apps</p>
                  <p>Progressive Web Apps</p>
                  <p>Cloud Architecture</p>
                  <p>DevOps & CI/CD</p>
                  <p>Performance Optimization</p>
                </div>
                <div className="flex-1 min-w-48 space-y-4">
                  <p>AWS & Azure Services</p>
                  <p>Microservices Architecture</p>
                  <p>Docker & Kubernetes</p>
                  <p>Load Balancing</p>
                  <p>Security Implementation</p>
                </div>
              </div>
            </div>

            <div className=" min-w-80 lg:pl-8 aspect-[2/1.5] bg-red-600 rounded-lg flex items-center justify-center">
            </div>
          </div>

          {/* AI Integration & Analytics */}
          <div className="flex flex-wrap gap-12 lg:gap-20">
            <div className="flex-1 min-w-80">
              <div className="mb-8">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  [03]
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
                  AI Integration & Analytics
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-gray-600">
                <div className="flex-1 min-w-48 space-y-4">
                  <p>Machine Learning Models</p>
                  <p>Data Pipeline Architecture</p>
                  <p>Predictive Analytics</p>
                  <p>Natural Language Processing</p>
                  <p>Computer Vision</p>
                </div>
                <div className="flex-1 min-w-48 space-y-4">
                  <p>TensorFlow & PyTorch</p>
                  <p>Real-time Data Processing</p>
                  <p>Business Intelligence Dashboards</p>
                  <p>API Integration</p>
                  <p>Custom AI Solutions</p>
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