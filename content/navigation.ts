export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Company" }, // no href — clicking it doesn't go anywhere, it just opens the dropdown below
  { label: "Work", href: "/work" },
  // { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
]

/** Company mega-menu entries. Hash links jump straight to a section of the page. */
export const companyMenu = [
  {
    label: "How we work",
    href: "/about#approach",
    description: "Principles behind every engagement.",
  },
  {
    label: "Our name",
    href: "/about#name",
    description: "What Axion actually means.",
  },
  {
    label: "Core values",
    href: "/about#values",
    description: "The habits behind the work.",
  },
  {
    label: "Work",
    href: "/work",
    description: "Products we have built for real operators.",
  },
  { label: "FAQ", href: "/faq", description: "Answers before the first call." },
  {
    label: "Contact",
    href: "/contact",
    description: "Request a consultation.",
  },
]
