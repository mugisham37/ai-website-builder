"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main
      className="min-h-[80vh] bg-black relative overflow-hidden cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Pixelated Background */}
      <div className="absolute inset-0 w-full h-full">
        <PixelatedCanvas
          src="/assets/images/head-shot.jpg"
          width={1520}
          height={680}
          cellSize={3}
          dotScale={0.85}
          shape="square"
          backgroundColor="#000000"
          dropoutStrength={0.2}
          interactive
          distortionStrength={2}
          distortionRadius={120}
          distortionMode="swirl"
          followSpeed={1}
          jitterStrength={2}
          jitterSpeed={0.8}
          sampleAverage
          tintColor="#000000"
          tintStrength={0.3}
          objectFit="cover"
          fadeOnLeave
          fadeSpeed={1}
          className="w-full h-full object-cover"
          responsive
        />
      </div>

      {/* White overlay with circular cutout */}
      <div
        className="absolute inset-0 bg-white z-20"
        style={{
          maskImage: isHovering
            ? `radial-gradient(circle 288px at ${mousePosition.x}px ${mousePosition.y}px, transparent 288px, white 288px)`
            : "none",
          WebkitMaskImage: isHovering
            ? `radial-gradient(circle 288px at ${mousePosition.x}px ${mousePosition.y}px, transparent 288px, white 288px)`
            : "none",
        }}
      />

      {/* Main heading - only visible on white background */}
      <div
        className="relative min-h-[80vh] z-30"
        style={{
          maskImage: isHovering
            ? `radial-gradient(circle 288px at ${mousePosition.x}px ${mousePosition.y}px, transparent 288px, white 288px)`
            : "none",
          WebkitMaskImage: isHovering
            ? `radial-gradient(circle 288px at ${mousePosition.x}px ${mousePosition.y}px, transparent 288px, white 288px)`
            : "none",
        }}
      >
        <h1 className="absolute bottom-20 left-10 text-[170px] font-normal text-black leading-none tracking-tight">
          Moses — Mugisha
        </h1>
      </div>

      {/* Bottom information - only visible on white background */}
      <div
        className="absolute bottom-8 left-12 right-12 flex justify-between items-end z-30"
        style={{
          maskImage: isHovering
            ? `radial-gradient(circle 288px at ${mousePosition.x}px ${mousePosition.y}px, transparent 288px, white 288px)`
            : "none",
          WebkitMaskImage: isHovering
            ? `radial-gradient(circle 288px at ${mousePosition.x}px ${mousePosition.y}px, transparent 288px, white 288px)`
            : "none",
        }}
      >
        <div className="text-sm text-black">
          7° 18&apos; 38.664&quot; S 112° 45&apos; 32.1084&quot; E
        </div>
        <div className="text-sm text-black text-right">
          <div>Surabaya, 1:38:56 PM</div>
          <div>Tuesday, September 2, 2025</div>
        </div>
      </div>
    </main>
  );
}
