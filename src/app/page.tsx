export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Main heading */}
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-[120px] font-normal text-black leading-none tracking-tight">
          Studio — Vanadium
        </h1>
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
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
