import { useRef, useState, useCallback, useEffect } from "react"
import gsap from "gsap"
import "./InfiniteCarousel.scss"

interface Fiche {
  src: string
  label: string
}

interface InfiniteCarouselProps {
  fiches: Fiche[]
}

function InfiniteCarousel({ fiches }: InfiniteCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const mainImgRef = useRef<HTMLImageElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)

  const n = fiches.length

  const scrollStripTo = useCallback((index: number) => {
    const strip = stripRef.current
    if (!strip) return
    const thumb = strip.querySelector<HTMLElement>(`[data-index="${index}"]`)
    if (!thumb) return
    const stripCenter = strip.offsetWidth / 2
    const thumbCenter = thumb.offsetLeft + thumb.offsetWidth / 2
    gsap.to(strip, {
      scrollLeft: thumbCenter - stripCenter,
      duration: 0.5,
      ease: "power3.out",
    })
  }, [])

  const animateTo = useCallback(
    (nextIndex: number, direction: "next" | "prev") => {
      if (isAnimating || nextIndex === current) return
      setIsAnimating(true)

      const img = mainImgRef.current
      const label = labelRef.current
      const counter = counterRef.current

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrent(nextIndex)
          setIsAnimating(false)
        },
      })

      tl.to([img, label, counter], {
        opacity: 0,
        x: direction === "next" ? "-3%" : "3%",
        duration: 0.25,
        ease: "power2.in",
      })

      tl.call(() => {
        if (img) {
          img.src = fiches[nextIndex].src
          img.alt = fiches[nextIndex].label
        }
        if (label) label.textContent = fiches[nextIndex].label
        if (counter)
          counter.textContent = `${String(nextIndex + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`
        gsap.set([img, label, counter], {
          x: direction === "next" ? "3%" : "-3%",
        })
        scrollStripTo(nextIndex)
      })

      tl.to([img, label, counter], {
        opacity: 1,
        x: "0%",
        duration: 0.45,
        ease: "power3.out",
      })
    },
    [current, fiches, isAnimating, n, scrollStripTo]
  )

  const goNext = useCallback(() => {
    animateTo((current + 1) % n, "next")
  }, [animateTo, current, n])

  const goPrev = useCallback(() => {
    animateTo((current - 1 + n) % n, "prev")
  }, [animateTo, current, n])

  useEffect(() => {
    if (labelRef.current) labelRef.current.textContent = fiches[0].label
    if (counterRef.current)
      counterRef.current.textContent = `01 / ${String(n).padStart(2, "0")}`
  }, [fiches, n])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [goNext, goPrev])

  return (
    <section className="infinite-carousel">
      <div className="infinite-carousel__inner infinite-carousel__inner--a">

        {/* ── Vue principale ── */}
        <div className="infinite-carousel__main">
          <div className="infinite-carousel__main-img-wrap">
            <img
              ref={mainImgRef}
              className="infinite-carousel__main-img"
              src={fiches[current].src}
              alt={fiches[current].label}
            />
          </div>

          <button
            className="infinite-carousel__arrow infinite-carousel__arrow--prev"
            onClick={goPrev}
            aria-label="Fiche précédente"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="infinite-carousel__arrow infinite-carousel__arrow--next"
            onClick={goNext}
            aria-label="Fiche suivante"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="infinite-carousel__main-meta">
            <p ref={labelRef} className="infinite-carousel__main-label">
              {fiches[current].label}
            </p>
            <span ref={counterRef} className="infinite-carousel__main-counter">
              {String(current + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ── Strip thumbnails ── */}
        <div className="infinite-carousel__strip-wrap">
          <div className="infinite-carousel__strip" ref={stripRef}>
            {fiches.map((fiche, idx) => (
              <button
                key={idx}
                data-index={idx}
                className={`infinite-carousel__strip-thumb${
                  idx === current ? " infinite-carousel__strip-thumb--active" : ""
                }`}
                onClick={() =>
                  animateTo(idx, idx > current ? "next" : "prev")
                }
                aria-label={`Voir ${fiche.label}`}
              >
                <img
                  className="infinite-carousel__strip-thumb-img"
                  src={fiche.src}
                  alt={fiche.label}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default InfiniteCarousel