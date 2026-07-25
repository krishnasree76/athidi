type Props = { className?: string; strokeWidth?: number };

export function Mandala({ className, strokeWidth = 0.6 }: Props) {
  const petals = Array.from({ length: 16 });
  const inner = Array.from({ length: 24 });
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
        <circle cx="100" cy="100" r="8" />
        <circle cx="100" cy="100" r="18" />
        <circle cx="100" cy="100" r="42" />
        <circle cx="100" cy="100" r="62" />
        <circle cx="100" cy="100" r="82" />
        <circle cx="100" cy="100" r="96" strokeDasharray="1 3" />
        {petals.map((_, i) => {
          const a = (i * 360) / petals.length;
          return (
            <g key={i} transform={`rotate(${a} 100 100)`}>
              <path d="M100 18 C 108 40, 108 60, 100 82 C 92 60, 92 40, 100 18 Z" />
              <circle cx="100" cy="22" r="2" />
            </g>
          );
        })}
        {inner.map((_, i) => {
          const a = (i * 360) / inner.length;
          return (
            <g key={i} transform={`rotate(${a} 100 100)`}>
              <path d="M100 42 L 103 58 L 100 62 L 97 58 Z" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function Paisley({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M60 10 C 20 40, 20 130, 70 170 C 100 150, 110 100, 90 60 C 80 40, 70 25, 60 10 Z" />
        <path d="M60 30 C 35 55, 35 120, 70 155" />
        <path d="M60 50 C 45 70, 45 115, 70 140" />
        <circle cx="70" cy="150" r="4" />
        <circle cx="60" cy="30" r="2" />
      </g>
    </svg>
  );
}

export function Lotus({ className }: { className?: string }) {
  const leaves = 8;
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        {Array.from({ length: leaves }).map((_, i) => {
          const a = -80 + (i * 160) / (leaves - 1);
          return (
            <g key={i} transform={`rotate(${a} 100 110)`}>
              <path d="M100 110 C 90 60, 110 60, 100 110 Z" />
            </g>
          );
        })}
        <path d="M20 110 L 180 110" />
      </g>
    </svg>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-gold ${className ?? ""}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-current opacity-60" />
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="20" cy="20" r="3" />
          <circle cx="20" cy="20" r="9" />
          <path d="M20 2 L22 12 L20 18 L18 12 Z" />
          <path d="M20 38 L22 28 L20 22 L18 28 Z" />
          <path d="M2 20 L12 22 L18 20 L12 18 Z" />
          <path d="M38 20 L28 22 L22 20 L28 18 Z" />
        </g>
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-current opacity-60" />
    </div>
  );
}
