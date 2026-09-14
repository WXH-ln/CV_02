export function WaveBackground({ active }) {
  const tone = active === 'home' ? 'home' : 'page'

  return (
    <div className={`wave-background wave-background--${tone}`} aria-hidden="true">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="ocean-svg">
        <defs>
          <linearGradient id="oceanGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(110, 180, 211, 0.2)" />
            <stop offset="50%" stopColor="rgba(161, 219, 240, 0.5)" />
            <stop offset="100%" stopColor="rgba(102, 160, 201, 0.2)" />
          </linearGradient>
        </defs>

        <g className="wave-layer wave-layer-back">
          <path d="M-40 410 C 140 330, 250 500, 470 430 S 760 370, 920 470 S 1280 560, 1660 430 L 1660 930 L -40 930 Z" fill="rgba(87, 145, 181, 0.18)" />
          <path d="M-20 365 C 150 290, 270 430, 480 388 S 820 350, 980 410 S 1280 470, 1620 348" fill="none" stroke="rgba(191, 230, 245, 0.8)" strokeWidth="2.1" strokeLinecap="round" className="wave-stroke" />
          <path d="M-10 458 C 180 420, 260 530, 470 500 S 810 430, 980 485 S 1295 590, 1625 466" fill="none" stroke="rgba(116, 181, 212, 0.8)" strokeWidth="1.8" strokeLinecap="round" className="wave-stroke" />
        </g>

        <g className="wave-layer wave-layer-front">
          <path d="M-50 545 C 170 500, 320 610, 530 570 S 820 520, 980 600 S 1290 670, 1640 575" fill="none" stroke="rgba(94, 161, 203, 0.75)" strokeWidth="1.5" strokeLinecap="round" className="wave-stroke" />
          <path d="M42 216 C 220 165, 330 278, 490 248 S 820 188, 990 246 S 1290 326, 1555 220" fill="none" stroke="rgba(208, 235, 246, 0.9)" strokeWidth="1.5" strokeLinecap="round" className="wave-stroke" />
          <path d="M120 286 C 220 245, 320 342, 474 310 S 770 270, 938 330 S 1210 406, 1492 320" fill="none" stroke="rgba(152, 206, 229, 0.4)" strokeWidth="1.1" strokeLinecap="round" className="wave-stroke" />
        </g>
      </svg>
    </div>
  )
}
