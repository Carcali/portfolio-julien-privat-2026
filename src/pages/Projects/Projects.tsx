import { useState, useRef } from "react"
import gsap from "gsap"
import "./Projects.scss"
import placeholder from "../../assets/global/projects/brasserie-du-paon/placeholder-brasserie-du-paon.jpg"
import iconListNormal from "../../assets/global/icon-projects-list-normal.svg"
import iconListHover from "../../assets/global/icon-projects-list-hover.svg"
import iconGridNormal from "../../assets/global/icon-projects-grid-normal.svg"
import iconGridHover from "../../assets/global/icon-projects-grid-hover.svg"
import CategorySelect from "../../components/CategorySelect/CategorySelect"

function Projects() {
  const [layout, setLayout] = useState<"list" | "grid">("list")
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleLayoutChange = (newLayout: "list" | "grid") => {
    if (newLayout === layout) return

    const cards = wrapperRef.current?.querySelectorAll(".projects__cards--container")
    if (!cards) return

    // Phase 1 : sortie des cartes
    gsap.to(cards, {
      opacity: 0,
      y: 20,
      duration: 0.25,
      stagger: 0.05,
      ease: "power2.in",
      onComplete: () => {
        // On change le layout une fois les cartes sorties
        setLayout(newLayout)

        // Phase 2 : entrée des cartes (après le re-render)
        requestAnimationFrame(() => {
          const newCards = wrapperRef.current?.querySelectorAll(".projects__cards--container")
          if (!newCards) return

          gsap.fromTo(
            newCards,
            { opacity: 0, y: -20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              stagger: 0.08,
              ease: "power2.out",
            }
          )
        })
      },
    })
  }

  return (
    <>
      <section className="projects__hero--section">
        <h1 className="projects__hero--title">Projets</h1>
      </section>
      <section className="projects__cards--section">
        <div className="projects__filters--div">
          <div className="projects__filters--select">
            <CategorySelect />
          </div>
          <div className="projects__filters--layout">
            <button
              className={`projects__filters--btn ${layout === "list" ? "projects__filters--btn-active" : ""}`}
              onClick={() => handleLayoutChange("list")}
              aria-label="Vue liste"
            >
              <img
                src={layout === "list" ? iconListHover : iconListNormal}
                alt="Vue liste"
                width="30"
                height="30"
              />
            </button>
            <button
              className={`projects__filters--btn ${layout === "grid" ? "projects__filters--btn-active" : ""}`}
              onClick={() => handleLayoutChange("grid")}
              aria-label="Vue grille"
            >
              <img
                src={layout === "grid" ? iconGridHover : iconGridNormal}
                alt="Vue grille"
                width="30"
                height="30"
              />
            </button>
          </div>
        </div>

        <div
          ref={wrapperRef}
          className={`projects__cards--wrapper projects__cards--wrapper-${layout}`}
        >
          <div className="projects__cards--container">
            <img className="projects__cards--image" src={placeholder} alt="Projet 1" />
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <h2 className="projects__cards--title">Brasserie du Paon</h2>
                <p className="projects__cards--date">2023</p>
              </div>
              <p className="projects__cards--description">Projet de refonte d'identité visuelle pour la Brasserie du Paon, une brasserie artisanale située à Lyon. Le projet comprenait la création d'un nouveau logo, d'une charte graphique complète.</p>
            </div>
          </div>
          <div className="projects__cards--container">
            <img className="projects__cards--image" src={placeholder} alt="Projet 2" />
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <h2 className="projects__cards--title">Locavigne</h2>
                <p className="projects__cards--date">2022</p>
              </div>
              <p className="projects__cards--description">Projet de refonte d'identité visuelle pour la Brasserie du Paon, une brasserie artisanale située à Lyon. Le projet comprenait la création d'un nouveau logo, d'une charte graphique complète.</p>
            </div>
          </div>
          <div className="projects__cards--container">
            <img className="projects__cards--image" src={placeholder} alt="Projet 3" />
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <h2 className="projects__cards--title">Corre Associées</h2>
                <p className="projects__cards--date">2021</p>
              </div>
              <p className="projects__cards--description">Projet de refonte d'identité visuelle pour le prestataire viticole Corre et Associées.</p>
            </div>
          </div>
          <div className="projects__cards--container">
            <img className="projects__cards--image" src={placeholder} alt="Projet 4" />
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <h2 className="projects__cards--title">Blayaise expertise comptable</h2>
                <p className="projects__cards--date">2021</p>
              </div>
              <p className="projects__cards--description">Projet de refonte d'identité visuelle pour le cabinet Blayaise expertise comptable.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects