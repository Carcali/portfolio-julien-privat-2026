import { useState, useRef, useCallback } from "react"
import gsap from "gsap"
import "./ProjectSliders.scss"

export interface CarouselSlide {
  thumbnail: string
  mainImage: string
  alt: string
}

interface ProjectSlidersProps {
  slides: CarouselSlide[]
}

function ProjectSliders({ slides }: ProjectSlidersProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const thumbsRef = useRef<HTMLDivElement>(null)
  const mainImgRef = useRef<HTMLImageElement>(null)

  const navigate = useCallback((direction: 1 | -1) => {
    if (isAnimating) return
    setIsAnimating(true)

    const nextIndex = (activeIndex + direction + slides.length) % slides.length
    const thumbsEl = thumbsRef.current
    const mainImg = mainImgRef.current

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    })

    // Gauche : fade simple
    if (thumbsEl) {
      tl.to(thumbsEl, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => setActiveIndex(nextIndex)
      }, 0)

      tl.to(thumbsEl, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Droite : fade out → change src → reveal clipPath
    if (mainImg) {
      tl.to(mainImg, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          mainImg.src = slides[nextIndex].mainImage
          gsap.set(mainImg, { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 })
        }
      }, 0)

      tl.to(mainImg, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.7,
        ease: "power3.inOut",
        onComplete: () => gsap.set(mainImg, { clipPath: "none" })
      })
    }

  }, [activeIndex, isAnimating, slides])

  const prev = () => navigate(-1)
  const next = () => navigate(1)

  const getVisibleThumbs = () => {
    const result = []
    for (let offset = -1; offset <= 1; offset++) {
      const idx = (activeIndex + offset + slides.length) % slides.length
      result.push({ idx, offset })
    }
    return result
  }

  return (
    <div className="carousel">

      {/* Colonne gauche */}
      <div className="carousel__left">
        <button className="carousel__arrow carousel__arrow--up" onClick={prev}>&#94;</button>

        <div className="carousel__thumbs" ref={thumbsRef}>
          {getVisibleThumbs().map(({ idx, offset }) => (
            <div
              key={idx}
              className={`carousel__thumb
                ${offset === 0 ? "carousel__thumb--active" : ""}
                ${offset === -1 ? "carousel__thumb--prev" : ""}
                ${offset === 1 ? "carousel__thumb--next" : ""}
              `}
              onClick={() => !isAnimating && navigate(offset as 1 | -1)}
            >
              <img src={slides[idx].thumbnail} alt={slides[idx].alt} />
            </div>
          ))}
        </div>

        <button className="carousel__arrow carousel__arrow--down" onClick={next}>&#8964;</button>
      </div>

      {/* Colonne droite */}
      <div className="carousel__right">
        <img
          ref={mainImgRef}
          className="carousel__right--image"
          src={slides[activeIndex].mainImage}
          alt={slides[activeIndex].alt}
        />
      </div>

    </div>
  )
}

export default ProjectSliders