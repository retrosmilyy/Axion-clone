import { HeroBackdrop } from "./hero-backdrop"

export function Hero({ content }) {
  const headingLines = content.heading.split("\n").filter(Boolean)

  return (
    <section className="px-2 pb-2 pt-3 sm:px-3 sm:pb-3 ">
      <div className="relative isolate overflow-hidden rounded-[22px] bg-[linear-gradient(153deg,#0a35c9_0%,#1246da_34%,#3c6bf3_70%,#6f93fc_100%)] sm:rounded-[28px]">
        <HeroBackdrop />

        <div className="relative flex min-h-150 flex-col px-6 pb-12 pt-12 sm:px-10 sm:pb-16 sm:pt-14 lg:min-h-[calc(100dvh-5.5rem)] lg:px-12">
          {content.capabilities?.length ? (
            <ul className="font-mono text-[10px] uppercase leading-[2.1] tracking-[0.34em] text-white/75 sm:text-[11px]">
              {content.capabilities.map(capability => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          ) : null}

          <div className="mt-auto pt-20">
            <h1 className="max-w-[16ch] text-[clamp(2.6rem,7.6vw,6.7rem)] font-black leading-[0.88] tracking-[-0.035em] text-white">
              {headingLines.map(line => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-7 max-w-[46ch] text-[15px] leading-[1.65] text-white/90 sm:mt-9 sm:text-[17px]">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
              <a
                href={content.primaryCta.href}
                className="rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#0a1020] transition-colors hover:bg-white/90"
              >
                {content.primaryCta.label}
              </a>
              <a
                href={content.secondaryCta.href}
                className="rounded-full border border-white/45 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {content.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
