const MARK_PATHS = [
  "M0 340 170 0 340 340",
  "M86 340 170 152 254 340",
  "M64 248h212",
]

function Mark({ transform, opacity }: { transform: string; opacity: number }) {
  return (
    <g transform={transform} opacity={opacity}>
      {MARK_PATHS.map(d => (
        <path key={d} d={d} vectorEffect="non-scaling-stroke" />
      ))}
    </g>
  )
}

export function HeroBackdrop() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 size-full"
      fill="none"
      stroke="#ffffff"
      strokeWidth={1}
    >
      <Mark transform="translate(560 44) scale(1)" opacity={0.16} />
      <Mark transform="translate(900 120) scale(2.15)" opacity={0.13} />
      <Mark transform="translate(880 300) scale(1.55)" opacity={0.1} />
      <g opacity={0.12}>
        <path d="M1180 760 1465 220" vectorEffect="non-scaling-stroke" />
        <path d="M1015 760 1300 310" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  )
}
