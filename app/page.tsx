import Navbar from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { sanityClient } from "@/sanity/client"
import { homeQuery } from "@/sanity/queries"

export default async function Home() {
  const page = await sanityClient.fetch(homeQuery)

  const heroContent = {
    ...page,
    primaryCta: { label: "Book an intro call", href: "/contact" },
    secondaryCta: { label: "See work", href: "/work" },

    //the spread operator copies everything from the page and add both primaryCta and secondaryCta to the heroContent object
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="  bg-slate-950">
          <Hero content={heroContent} />
        </div>
      </main>
    </>
  )
}
