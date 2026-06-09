import { useRef, useEffect } from "react"
import gsap from "gsap"
// @ts-ignore
import { Observer } from "gsap/Observer"
import "./ImageCarousel.scss"

gsap.registerPlugin(Observer)

interface Props {
  images: { src: string; alt: string }[]
}

function ImageCarousel({ images }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const xRef = useRef(0)
  const currentIndex = useRef(0)

  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartPos = useRef(0)

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val))

  const isMobile = () => window.innerWidth <= 768

  const getMaxX = () => {
    const track = trackRef.current
    const container = containerRef.current

    if (!track || !container) return 0

    return -(track.scrollWidth - container.clientWidth)
  }

  const slideTo = (index: number) => {
    const track = trackRef.current
    const container = containerRef.current

    if (!track || !container) return

    const slides =
      track.querySelectorAll<HTMLElement>(".image-carousel__slide")

    if (!slides.length) return

    const clamped = clamp(index, 0, slides.length - 1)

    currentIndex.current = clamped

    // Desktop → scroll natif
    if (!isMobile()) {
      container.scrollTo({
        left: slides[clamped].offsetLeft,
        behavior: "smooth",
      })

      return
    }

    // Mobile → comportement GSAP actuel
    const slideWidth =
      container.clientWidth -
      container.clientWidth * 0.06

    const gap =
      container.clientWidth * 0.03

    const targetX =
      -(clamped * (slideWidth + gap)) +
      container.clientWidth * 0.03

    const finalX = clamp(
      targetX,
      getMaxX(),
      0
    )

    xRef.current = finalX

    gsap.to(track, {
      x: finalX,
      duration: 0.7,
      ease: "power3.out",
    })
  }

  const slideBy = (direction: 1 | -1) => {
    slideTo(currentIndex.current + direction)
  }

  // Drag uniquement sur mobile
  useEffect(() => {
    if (!isMobile()) return

    const container = containerRef.current
    const track = trackRef.current

    if (!container || !track) return

    const obs = Observer.create({
      target: container,
      type: "pointer",

      onDragStart: (self: any) => {
        isDragging.current = true

        dragStartX.current = self.x ?? 0
        dragStartPos.current = xRef.current

        gsap.killTweensOf(track)
      },

      onDrag: (self: any) => {
        const delta =
          (self.x ?? 0) -
          dragStartX.current

        const clamped = clamp(
          dragStartPos.current + delta,
          getMaxX(),
          0
        )

        xRef.current = clamped

        gsap.set(track, {
          x: clamped,
        })
      },

      onDragEnd: () => {
        isDragging.current = false

        const slides =
          track.querySelectorAll<HTMLElement>(
            ".image-carousel__slide"
          )

        const currentX = Math.abs(
          xRef.current
        )

        let closestIndex = 0
        let closestDist = Infinity

        slides.forEach((slide, i) => {
          const dist = Math.abs(
            slide.offsetLeft - currentX
          )

          if (dist < closestDist) {
            closestDist = dist
            closestIndex = i
          }
        })

        slideTo(closestIndex)
      },
    })

    return () => obs.kill()
  }, [])

  // Nettoyage des transforms GSAP sur desktop
  useEffect(() => {
    const handleResize = () => {
      const track = trackRef.current

      if (!track) return

      if (!isMobile()) {
        gsap.set(track, {
          clearProps: "transform",
        })
      }
    }

    handleResize()

    window.addEventListener(
      "resize",
      handleResize
    )

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      )
    }
  }, [])

  return (
    <div className="image-carousel">
      <div
        className="image-carousel__container"
        ref={containerRef}
      >
        <div
          className="image-carousel__track"
          ref={trackRef}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="image-carousel__slide"
            >
              <img
                src={img.src}
                alt={img.alt}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="image-carousel__arrow image-carousel__arrow--prev"
        onClick={() => slideBy(-1)}
        aria-label="Précédent"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M13 4L7 10L13 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className="image-carousel__arrow image-carousel__arrow--next"
        onClick={() => slideBy(1)}
        aria-label="Suivant"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7 4L13 10L7 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default ImageCarousel