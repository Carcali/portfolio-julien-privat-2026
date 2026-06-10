import "./LogoCard.scss"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export type LogoCardType = {
  index: string
  name: string
  sector: string
  bgColorMono: string
  bgColorColor: string
  logoMono: string
  logoColor: string
  images?: string[]
  href?: string
}

interface LogoCardProps {
  card: LogoCardType
  showColor: boolean
}

// ─── Isole les styles CSS internes du SVG avec un préfixe unique ─────────────

function scopeSvg(raw: string, prefix: string): string {
  if (!raw) return raw

  let scoped = raw

  scoped = scoped.replace(/\bid="([^"]+)"/g, `id="${prefix}-$1"`)
  scoped = scoped.replace(/url\(#([^)]+)\)/g, `url(#${prefix}-$1)`)
  scoped = scoped.replace(/href="#([^"]+)"/g, `href="#${prefix}-$1"`)

  const classNames = new Set<string>()
  const styleMatch = scoped.match(/<style[^>]*>([\s\S]*?)<\/style>/i)
  if (styleMatch) {
    const styleContent = styleMatch[1]
    const classMatches = styleContent.matchAll(/\.([a-zA-Z][\w-]*)/g)
    for (const m of classMatches) classNames.add(m[1])
  }

  if (styleMatch) {
    const originalStyle = styleMatch[0]
    let scopedStyle = originalStyle
    classNames.forEach((cls) => {
      scopedStyle = scopedStyle.replaceAll(`.${cls}`, `.${prefix}-${cls}`)
    })
    scoped = scoped.replace(originalStyle, scopedStyle)
  }

  scoped = scoped.replace(/class="([^"]*)"/g, (_match, classList) => {
    const tokens = classList.split(/\s+/).map((token: string) => {
      return classNames.has(token) ? `${prefix}-${token}` : token
    })
    return `class="${tokens.join(" ")}"`
  })

  return scoped
}

// ─── Contenu interne partagé ──────────────────────────────────────────────────

function LogoWrapContent({
  card,
  colorRef,
  carouselRef,
  monoScoped,
  colorScoped,
  hasImages,
  activeSlide,
}: {
  card: LogoCardType
  colorRef: React.RefObject<HTMLDivElement | null>
  carouselRef: React.RefObject<HTMLDivElement | null>
  monoScoped: string
  colorScoped: string
  hasImages: boolean
  activeSlide: number
}) {
  return (
    <>
      {card.logoMono && (
        <div
          className="logo-card__svg logo-card__svg--mono"
          dangerouslySetInnerHTML={{ __html: monoScoped }}
        />
      )}

      {card.logoColor && (
        <div
          ref={colorRef}
          className="logo-card__svg logo-card__svg--color"
          dangerouslySetInnerHTML={{ __html: colorScoped }}
        />
      )}

      {hasImages && (
        <div ref={carouselRef} className="logo-card__carousel" style={{ opacity: 0 }}>
          {card.images!.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${card.name} — mockup ${i + 1}`}
              className={`logo-card__carousel--img ${i === activeSlide ? "logo-card__carousel--img-active" : ""}`}
            />
          ))}
          {card.images!.length > 1 && (
            <div className="logo-card__carousel--dots">
              {card.images!.map((_, i) => (
                <span
                  key={i}
                  className={`logo-card__carousel--dot ${i === activeSlide ? "logo-card__carousel--dot-active" : ""}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

// ─── Composant principal ──────────────────────────────────────────────────────

function LogoCard({ card, showColor }: LogoCardProps) {
  const wrapRef     = useRef<HTMLDivElement>(null)
  const colorRef    = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isFirstRender = useRef(true)
  const [activeSlide, setActiveSlide] = useState(0)
  const hasImages = !!card.images && card.images.length > 0

  const monoScoped  = scopeSvg(card.logoMono,  `card-${card.index}-mono`)
  const colorScoped = scopeSvg(card.logoColor, `card-${card.index}-color`)

  // ── État initial ──────────────────────────────────────────────────────────
  useEffect(() => {
    const colorEl = colorRef.current
    if (!colorEl) return
    gsap.set(colorEl, { opacity: 0 })
  }, [])

  // ── Fade toggle ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const wrapEl  = wrapRef.current
    const colorEl = colorRef.current
    if (!wrapEl || !colorEl) return

    gsap.killTweensOf([colorEl, wrapEl])

    if (showColor) {
      gsap.to(colorEl, { opacity: 1, duration: 1.8, ease: "power2.inOut" })
      gsap.to(wrapEl,  { backgroundColor: card.bgColorColor, duration: 1.8, ease: "power2.inOut" })
    } else {
      gsap.to(colorEl, { opacity: 0, duration: 1.8, ease: "power2.inOut" })
      gsap.to(wrapEl,  { backgroundColor: card.bgColorMono, duration: 1.8, ease: "power2.inOut" })
    }
  }, [showColor, card.bgColorMono, card.bgColorColor])

  // ── Carousel au hover ─────────────────────────────────────────────────────
  const handleMouseEnter = () => {
    if (!hasImages || !card.images) return
    const carousel = carouselRef.current
    if (carousel) gsap.to(carousel, { opacity: 1, duration: 0.3, ease: "power2.out" })
    if (card.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % (card.images?.length ?? 1))
      }, 1800)
    }
  }

  const handleMouseLeave = () => {
    if (!hasImages) return
    const carousel = carouselRef.current
    if (carousel) gsap.to(carousel, { opacity: 0, duration: 0.25, ease: "power2.in" })
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
    setActiveSlide(0)
  }

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const sharedProps = {
    card,
    colorRef,
    carouselRef,
    monoScoped,
    colorScoped,
    hasImages,
    activeSlide,
  }

  const wrapStyles = {
    backgroundColor: card.bgColorMono,
  }

  return (
    <div className="logo-card">

      {/* Zone logo — cliquable si href, sinon div */}
      {card.href ? (
        <a
          ref={wrapRef as unknown as React.RefObject<HTMLAnchorElement>}
          href={card.href}
          className="logo-card__logo-wrap logo-card__logo-wrap--link"
          style={wrapStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <LogoWrapContent {...sharedProps} />
        </a>
      ) : (
        <div
          ref={wrapRef}
          className="logo-card__logo-wrap"
          style={wrapStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <LogoWrapContent {...sharedProps} />
        </div>
      )}

      {/* Footer — hors de logo-wrap, aucune bgColor */}
      <div className="logo-card__footer">
        {card.href ? (
          <a href={card.href} className="logo-card__name logo-card__name--link">
            {card.name}
          </a>
        ) : (
          <p className="logo-card__name">{card.name}</p>
        )}
        <span className="logo-card__sector">{card.sector}</span>
      </div>

    </div>
  )
}

export default LogoCard