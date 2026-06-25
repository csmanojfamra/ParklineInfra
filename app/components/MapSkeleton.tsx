interface Props {
  mobileBackdrop?: boolean;
}

export default function MapSkeleton({ mobileBackdrop = false }: Props) {
  return (
    <div className={
      mobileBackdrop
        ? "w-full h-full relative overflow-hidden"
        : "w-full aspect-[9/10] relative overflow-hidden rounded-xl"
    }>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_1.6s_ease-in-out_infinite] bg-[length:200%_100%]" />
      <svg
        viewBox="0 0 520 580"
        className={mobileBackdrop ? "w-full h-full" : "w-full h-auto"}
        preserveAspectRatio={mobileBackdrop ? "xMidYMin slice" : "xMidYMin meet"}
        aria-hidden="true"
      >
        <path
          d="M200,30 L310,28 L370,60 L390,110 L410,160 L420,210
             L400,260 L380,300 L360,340 L340,390 L320,430 L300,470
             L280,510 L260,545 L250,560 L238,545 L220,510 L200,470
             L180,430 L165,390 L155,340 L140,300 L125,255 L115,210
             L110,165 L120,115 L145,75 Z
             M115,210 L70,220 L55,250 L75,270 L110,260 Z
             M370,110 L410,95 L430,115 L415,145 L380,140 Z"
          fill="#1E2F5E"
          opacity={mobileBackdrop ? 0.6 : 0.4}
        />
        {!mobileBackdrop && (
          <text x="260" y="300" textAnchor="middle" fontSize="11" fontFamily="monospace"
            fill="rgba(242,185,28,0.4)" letterSpacing="2">
            LOADING MAP…
          </text>
        )}
      </svg>
    </div>
  );
}
