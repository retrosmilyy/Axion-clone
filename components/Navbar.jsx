import Logo from "./Logo"
import NavDropdown from "./NavDropdown"
import { mainNav, companyMenu } from "@/content/navigation"

export default function Navbar() {
  return (
    <header className="border-b border-slate-900 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map(item => {
            // Company has no href
            if (item.label === "Company") {
              return (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  items={companyMenu}
                />
              )
            }

            return (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-200 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            type="button"
            aria-label="Toggle theme"
            className="text-slate-300 transition-colors hover:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Contact — hidden below md, appears at md and up */}
          <a
            href="/contact"
            className="hidden rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-cyan-200 md:inline-block"
          >
            Contact
          </a>

          {/* Hamburger — visible below md, disappears at md and up */}
          <button
            type="button"
            aria-label="Open menu"
            className="grid size-9 place-items-center text-slate-200 transition-colors hover:text-white md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 6.5h14M3 13.5h14"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
