"use client"

import { useEffect, useState, useRef } from "react"

type DropdownItem = {
  label: string
  href?: string
  description?: string
}

export default function NavDropdown({
  label,
  items,
}: {
  label: string
  items: DropdownItem[]
}) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Closes dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        className="flex items-center gap-1 text-sm text-slate-200 transition-colors hover:text-white"
      >
        {label}

        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            d="M1 3L5 7L9 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-3 w-64 rounded-xl border border-slate-800 bg-slate-900 py-2 shadow-xl">
          {items.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 transition-colors hover:bg-slate-800"
            >
              <div className="text-sm text-slate-200">{item.label}</div>

              {item.description && (
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {item.description}
                </p>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
