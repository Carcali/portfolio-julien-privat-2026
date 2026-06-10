import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "react-router-dom"
import "./ProjectsCarousel.scss"

gsap.registerPlugin(ScrollTrigger)

export interface Project {
  id: number
  title: string
  date: string
  image: string
  href?: string
}

interface ProjectsCarouselProps {
  projects: Project[]
}

function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0) // source of truth pour éviter les closures stales
  const [currentDot, setCurrentDot] = useState(0)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isAnimating = useRef(false)

  const CLONES = projects.length // on clone N slides de chaque côté
  // Les vrais slides commencent à l'index CLONES dans le tableau étendu
  const extended = [...projects, ...projects, ...projects] // [clones fin | vrais | clones début]

  const getMetrics = () => {
    const track = trackRef.current
    if (!track) return { cardPx: 0, gapPx: 0, unit: 0 }
    const card = track.children[0] as HTMLElement
    const style = getComputedStyle(track)
    const gapPx = parseFloat(style.gap) || 24
    const cardPx = card?.offsetWidth ?? 0
    return { cardPx, gapPx, unit: cardPx + gapPx }
  }

  const getX = (index: number) => {
    const { unit } = getMetrics()
    return -(index * unit)
  }

  // Position de départ : pointe sur le premier vrai slide (index = CLONES)
  const initPosition = () => {
    if (!trackRef.current) return
    gsap.set(trackRef.current, { x: getX(CLONES) })
    currentRef.current = CLONES
  }

  const goTo = (absoluteIndex: number, instant = false, onComplete?: () => void) => {
    if (!trackRef.current) return
    if (isAnimating.current && !instant) return

    const x = getX(absoluteIndex)

    if (instant) {
      gsap.set(trackRef.current, { x })
      currentRef.current = absoluteIndex
      onComplete?.()
    } else {
      isAnimating.current = true
      gsap.to(trackRef.current, {
        x,
        duration: 0.85,
        ease: "power3.inOut",
        onComplete: () => {
          isAnimating.current = false
          onComplete?.()
        },
      })
      currentRef.current = absoluteIndex
    }

    // Dot : ramène dans la plage 0..N-1
    setCurrentDot(((absoluteIndex - CLONES) % projects.length + projects.length) % projects.length)
  }

  const slide = (direction: 1 | -1) => {
    if (isAnimating.current) return
    const next = currentRef.current + direction

    goTo(next, false, () => {
      // Si on est sorti de la zone "vrais slides + 1 rangée de clones", on jump
      if (next >= CLONES + projects.length) {
        goTo(CLONES, true) // retour au premier vrai
      } else if (next < CLONES) {
        goTo(CLONES + projects.length - 1, true) // retour au dernier vrai
      }
    })
  }

  // Auto-play
  const startAuto = () => {
    stopAuto()
    autoRef.current = setInterval(() => slide(1), 4000)
  }
  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current)
  }

  // Init + scroll reveal
  useEffect(() => {
    initPosition()

    if (sectionRef.current && trackRef.current) {
      const cards = Array.from(trackRef.current.children) as HTMLElement[]
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      )
    }

    startAuto()

    const handleResize = () => {
      goTo(currentRef.current, true)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      stopAuto()
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  // Swipe / drag
  useEffect(() => {
    const viewport = trackRef.current?.parentElement
    if (!viewport) return
    let startX = 0

    const onDown = (e: PointerEvent) => { startX = e.clientX; stopAuto() }
    const onUp = (e: PointerEvent) => {
      const diff = startX - e.clientX
      if (Math.abs(diff) > 50) slide(diff > 0 ? 1 : -1)
      startAuto()
    }

    viewport.addEventListener("pointerdown", onDown)
    viewport.addEventListener("pointerup", onUp)
    return () => {
      viewport.removeEventListener("pointerdown", onDown)
      viewport.removeEventListener("pointerup", onUp)
    }
  }, [])

  return (
    <div className="projects-carousel" ref={sectionRef}>
      <div
        className="projects-carousel__viewport"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        <div className="projects-carousel__track" ref={trackRef}>
          {extended.map((project, i) => {
            // index réel dans projects[]
            const isActive = i === currentRef.current

            const inner = (
              <>
                <img src={project.image} alt={project.title} />
                <div className="projects-carousel__card--info">
                  <span className="projects-carousel__card--title">{project.title}</span>
                  <span className="projects-carousel__card--date">{project.date}</span>
                </div>
              </>
            )

            return (
              <div
                key={`${project.id}-${i}`}
                className={`projects-carousel__card ${isActive ? "is-active" : ""}`}
              >
                {project.href ? (
                  <Link to={project.href} className="projects-carousel__card-inner">
                    {inner}
                  </Link>
                ) : (
                  <div className="projects-carousel__card-inner">{inner}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Flèches */}
      <div className="projects-carousel__arrows">
        <button
          className="projects-carousel__arrow projects-carousel__arrow--prev"
          onClick={() => { stopAuto(); slide(-1); startAuto() }}
          aria-label="Projet précédent"
        >
          ←
        </button>
        <button
          className="projects-carousel__arrow projects-carousel__arrow--next"
          onClick={() => { stopAuto(); slide(1); startAuto() }}
          aria-label="Projet suivant"
        >
          →
        </button>
      </div>

      <div className="projects-carousel__dots">
        <div className="projects-carousel__arrows">
          <button
            className="projects-carousel__arrow projects-carousel__arrow--prev"
            onClick={() => { stopAuto(); slide(-1); startAuto() }}
            aria-label="Projet précédent"
          >
            ←
          </button>
        </div>

        {projects.map((_, i) => (
          <button
            key={i}
            className={`projects-carousel__dot ${i === currentDot ? "is-active" : ""}`}
            onClick={() => {
              stopAuto()
              goTo(CLONES + i)
              startAuto()
            }}
            aria-label={`Projet ${i + 1}`}
          />
        ))}

        <div className="projects-carousel__arrows">
          <button
            className="projects-carousel__arrow projects-carousel__arrow--next"
            onClick={() => { stopAuto(); slide(1); startAuto() }}
            aria-label="Projet suivant"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCarousel