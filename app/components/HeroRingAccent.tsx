export default function HeroRingAccent() {
  return (
    <div className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none select-none overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-[0.055]"
      >
        {[60, 110, 165, 225, 290, 360].map((r) => (
          <circle key={r} cx="480" cy="0" r={r} stroke="#0F1B3D" strokeWidth="1" />
        ))}
      </svg>
    </div>
  );
}
