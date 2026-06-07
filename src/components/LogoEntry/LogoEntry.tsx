import "./LogoEntry.scss"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// ─── Types ────────────────────────────────────────────────────────────────────

export type LogoEntryType = {
  index: string
  name: string
  sector: string
  description: string
  tag: string
  logo: string        // chemin vers le logo (SVG ou PNG)
  bgColor: string     // couleur de fond de la zone logo
  images?: string[]   // 0, 1 ou 2 mockups paysage
}

// ─── Sous-composant : images mockups ─────────────────────────────────────────

function LogoImages({ images, name }: { images: string[]; name: string }) {
  if (images.length === 0) return null

  return (
    <div className={`logo-entry__images logo-entry__images--${images.length === 1 ? "one" : "two"}`}>
      {images.map((src, i) => (
        <div key={i} className="logo-entry__images--slot">
          <img
            src={src}
            alt={`${name} — mockup ${i + 1}`}
            className="logo-entry__images--img"
          />
        </div>
      ))}
    </div>
  )
}

// ─── Composant principal ──────────────────────────────────────────────────────

function LogoEntry({ entry }: { entry: LogoEntryType }) {
  const entryRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = entryRef.current
    if (!el) return

    const left = el.querySelector(".logo-entry__left")
    const right = el.querySelector(".logo-entry__right")
    const slots = el.querySelectorAll(".logo-entry__images--slot")

    const ctx = gsap.context(() => {

      // Révélation texte + logo au scroll
      gsap.fromTo(
        [left, right],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      )

      // Révélation images mockups
      if (slots.length > 0) {
        gsap.fromTo(
          slots,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: el.querySelector(".logo-entry__images"),
              start: "top 85%",
            },
          }
        )
      }

    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={entryRef} className="logo-entry">

      <div className="logo-entry__top">

        {/* Colonne gauche : texte */}
        <div className="logo-entry__left">
          <div className="logo-entry__left--content">
            <p className="logo-entry__index">{entry.index}</p>
            <h2 className="logo-entry__name">{entry.name}</h2>
            <p className="logo-entry__sector">{entry.sector}</p>
            <p className="logo-entry__desc">{entry.description}</p>
          </div>
          <span className="logo-entry__tag">{entry.tag}</span>
        </div>

        {/* Colonne droite : logo sur fond coloré */}
        <div className="logo-entry__right">
          <div
            className="logo-entry__logo-frame"
            style={{ backgroundColor: entry.bgColor }}
          >
            {entry.logo && (
              <img
                src={entry.logo}
                alt={`Logo ${entry.name}`}
                className="logo-entry__logo-img"
              />
            )}
          </div>
        </div>

      </div>

      {/* Images mockups (0, 1 ou 2) */}
      <LogoImages images={entry.images ?? []} name={entry.name} />

    </section>
  )
}

export default LogoEntry