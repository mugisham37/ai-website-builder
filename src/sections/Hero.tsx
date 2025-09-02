export default function Hero() {
  return (
    <main className="min-h-[80vh] bg-white relative">
      {/* Main heading */}
      <div className="relative min-h-[80vh]">
        <h1 className="absolute bottom-20 left-10 text-[170px] font-normal text-black leading-none tracking-tight">
          Moses — Mugisha
        </h1>
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-8 left-12 right-12 flex justify-between items-end">
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
