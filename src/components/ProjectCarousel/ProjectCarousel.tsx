import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import ProjectCard from "../ProjectCard/ProjectCard"
import placeholderCafe from "../../assets/global/projects/placeholder-cafe.png"
import "./ProjectsCarousel.scss"

const projects = [
  { id: 1, title: "Brasserie du Paon", date: "2022", image: placeholderCafe },
  { id: 2, title: "Locavigne", date: "2022", image: placeholderCafe },
  { id: 3, title: "Elfort Groupe", date: "2022", image: placeholderCafe },
  { id: 4, title: "Blayaise d’Expertise", date: "2022", image: placeholderCafe },
]

function ProjectsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const getCardWidth = () => {
    const card = containerRef.current?.children[0] as HTMLElement
    if (!card) return 0
    const gap = 32
    return card.offsetWidth + gap
    }


  const goToSlide = (index: number) => {
    if (!containerRef.current) return

    const maxIndex = projects.length - 1
    const safeIndex = index > maxIndex ? 0 : index < 0 ? maxIndex : index

    setCurrentIndex(safeIndex)

    const width = getCardWidth()

    gsap.to(containerRef.current, {
      x: -safeIndex * width,
      duration: 0.8,
      ease: "power3.out",
    })
  }

  const nextSlide = () => {
    goToSlide(currentIndex + 1)
  }

  const prevSlide = () => {
    goToSlide(currentIndex - 1)
  }

  useEffect(() => {
    if (!containerRef.current) return

    // --- Animation d'apparition ---
    gsap.from(containerRef.current.children, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
    })

    // --- Auto-play ---
    autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
        const nextIndex = prev + 1 >= projects.length ? 0 : prev + 1

        const card = containerRef.current?.children[0] as HTMLElement
        if (!card) return prev

        const gap = 32
        const width = card.offsetWidth + gap

        gsap.to(containerRef.current, {
            x: -nextIndex * width,
            duration: 0.8,
            ease: "power3.out",
        })

        return nextIndex
        })
    }, 4000)

    // --- Cleanup ---
    return () => {
        if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
        }
    }
    }, [])

  const pauseAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
  }

  return (
    <div 
      className="carousel"
    >
      {/* <button onClick={prevSlide} className="carousel__btn">
        ←
      </button> */}

      <div className="carousel__viewport">
        <div className="carousel__container" ref={containerRef}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* <button onClick={nextSlide} className="carousel__btn">
        →
      </button> */}
    </div>
  )
}

export default ProjectsCarousel
