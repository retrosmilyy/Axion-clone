import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      {/* the icon mark */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="axion-gradient" x1="0" y1="0" x2="28" y2="28">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        {/* back triangle: small, offset up-right, faded for depth */}
        <path
          d="M17 3 L25 23 L19 23 Z"
          fill="url(#axion-gradient)"
          opacity="0.5"
        />
        {/* front triangle: the main "A" peak */}
        <path
          d="M13 3 L21 23 L15 23 L11 13 L7 23 L1 23 Z"
          fill="url(#axion-gradient)"
        />
      </svg>
      <span className="flex flex-col leading-none ">
        <span className="text-white font-hold tracking-[0.15] text-[15px]">
          AXION
        </span>
        <span className="text-slate-400 text-[9px] tracking-[0.2em] mt-0.5">
          DIGITAL TECHNOLOGIES
        </span>
      </span>
    </Link>
  )
}
