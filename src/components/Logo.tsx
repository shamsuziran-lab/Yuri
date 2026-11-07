interface LogoProps {
  variant?: 'horizontal' | 'square';
  className?: string;
}

/**
 * Original Roti Jala Dila logo.
 * Motif: a plate containing a stylised Roti Jala net pattern
 * (radiating spokes with connecting arcs), rendered in brand gold/brown.
 */
export function Logo({ variant = 'horizontal', className = '' }: LogoProps) {
  if (variant === 'square') {
    return (
      <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Logo Roti Jala Dila">
        <circle cx="100" cy="100" r="92" fill="#60412E" />
        <circle cx="100" cy="100" r="80" fill="#FFF8ED" />
        {/* Roti Jala net motif */}
        <g stroke="#E5B341" strokeWidth="5" fill="none" strokeLinecap="round">
          {/* radial spokes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return (
              <line
                key={i}
                x1={100 + Math.cos(a) * 14}
                y1={100 + Math.sin(a) * 14}
                x2={100 + Math.cos(a) * 58}
                y2={100 + Math.sin(a) * 58}
              />
            );
          })}
          {/* connecting arcs */}
          {[30, 48, 66].map((r, i) => (
            <circle key={i} cx="100" cy="100" r={r} stroke="#D98A36" strokeWidth={i === 1 ? 6 : 4} />
          ))}
        </g>
        <circle cx="100" cy="100" r="14" fill="#60412E" />
        <circle cx="100" cy="100" r="6" fill="#E5B341" />
        <text
          x="100"
          y="172"
          textAnchor="middle"
          fontFamily="Playfair Display, Georgia, serif"
          fontWeight="700"
          fontSize="17"
          fill="#60412E"
          letterSpacing="1"
        >
          ROTI JALA DILA
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 90" className={className} role="img" aria-label="Logo Roti Jala Dila">
      {/* Emblem */}
      <g>
        <circle cx="45" cy="45" r="38" fill="#60412E" />
        <circle cx="45" cy="45" r="31" fill="#FFF8ED" />
        <g stroke="#E5B341" strokeWidth="3.5" fill="none" strokeLinecap="round">
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return (
              <line
                key={i}
                x1={45 + Math.cos(a) * 8}
                y1={45 + Math.sin(a) * 8}
                x2={45 + Math.cos(a) * 22}
                y2={45 + Math.sin(a) * 22}
              />
            );
          })}
          {[15, 23, 30].map((r, i) => (
            <circle key={i} cx="45" cy="45" r={r} stroke="#D98A36" strokeWidth={i === 1 ? 4 : 2.5} />
          ))}
        </g>
        <circle cx="45" cy="45" r="7" fill="#60412E" />
        <circle cx="45" cy="45" r="3" fill="#E5B341" />
      </g>
      {/* Wordmark */}
      <text
        x="96"
        y="42"
        fontFamily="Playfair Display, Georgia, serif"
        fontWeight="700"
        fontSize="26"
        fill="#60412E"
        letterSpacing="1.5"
      >
        ROTI JALA
      </text>
      <text
        x="96"
        y="66"
        fontFamily="Playfair Display, Georgia, serif"
        fontWeight="600"
        fontSize="21"
        fill="#D98A36"
        letterSpacing="6"
      >
        DILA
      </text>
      <text
        x="96"
        y="82"
        fontFamily="Poppins, sans-serif"
        fontWeight="400"
        fontSize="8.5"
        fill="#8A6A52"
        letterSpacing="2.5"
      >
        TRADISI RASA, ISTIMEWA SELERA
      </text>
    </svg>
  );
}
