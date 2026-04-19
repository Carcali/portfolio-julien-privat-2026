import { useState, useRef } from "react"
import gsap from "gsap"
import "./Projects.scss"
import placeholder from "../../assets/global/projects/brasserie-du-paon/placeholder-brasserie-du-paon.jpg"
import iconListNormal from "../../assets/global/icon-projects-list-normal.svg"
import iconListHover from "../../assets/global/icon-projects-list-hover.svg"
import iconGridNormal from "../../assets/global/icon-projects-grid-normal.svg"
import iconGridHover from "../../assets/global/icon-projects-grid-hover.svg"
import CategorySelect from "../../components/CategorySelect/CategorySelect"

// Projets
import logoBrasserieDuPaon from "../../assets/global/projects/brasserie-du-paon/logo-tonneau-peint-brasserie-du-paon-julien-privat.jpg"
import logoPresentationBlayaise from "../../assets/global/projects/blayaise-dexpertise-comptable/logo-presentation-blayaise-expertise-comptable-julien-privat.jpg"
import logoPresentationMontgaillard from "../../assets/global/projects/montgaillard/logo-presentation-montgaillard-julien-privat.jpg"
import logoPresentationElfortGroupe from "../../assets/global/projects/elfort-groupe/logo-presentation-elfort-groupe-julien-privat.jpg"


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
            <a  className="projects__cards--image" href="/projets/brasserie-du-paon">
              <img src={logoBrasserieDuPaon} alt="Projet 1" />
            </a>
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <a className="projects__cards--title" href="/projets/brasserie-du-paon">
                  Brasserie du Paon
                </a>
                <p className="projects__cards--date">2023</p>
              </div>
              <p className="projects__cards--description">Brasserie de bière artisanale dans la région bordelaise fonctionnant avec un réseau local de producteurs. 2 gammes : la Aliénor, gamme historique ainsi que la "Bière du Paon". Les gammes sont à destination des professionnels, de l'associatif ainsi que des particuliers.</p>
            </div>
          </div>

          <div className="projects__cards--container">
            <a  className="projects__cards--image" href="/projets/blayaise-expertise-comptable">
              <img src={logoPresentationBlayaise} alt="Projet 1" />
            </a>
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <a className="projects__cards--title" href="/projets/blayaise-expertise-comptable">
                  Blayaise d'Expertise Comptable
                </a>
                <p className="projects__cards--date">2021</p>
              </div>
              <p className="projects__cards--description">Brasserie de bière artisanale dans la région bordelaise fonctionnant avec un réseau local de producteurs. 2 gammes : la Aliénor, gamme historique ainsi que la "Bière du Paon". Les gammes sont à destination des professionnels, de l'associatif ainsi que des particuliers.</p>
            </div>
          </div>

          <div className="projects__cards--container">
            <a  className="projects__cards--image" href="/projets/montgaillard">
              <img src={logoPresentationMontgaillard} alt="Projet 1" />
            </a>
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <a className="projects__cards--title" href="/projets/blayaise-expertise-comptable">
                  Montgaillard
                </a>
                <p className="projects__cards--date">2022</p>
              </div>
              <p className="projects__cards--description">Brasserie de bière artisanale dans la région bordelaise fonctionnant avec un réseau local de producteurs. 2 gammes : la Aliénor, gamme historique ainsi que la "Bière du Paon". Les gammes sont à destination des professionnels, de l'associatif ainsi que des particuliers.</p>
            </div>
          </div>

          <div className="projects__cards--container">
            <a  className="projects__cards--image" href="/projets/elfort-groupe">
              <img src={logoPresentationElfortGroupe} alt="Projet 1" />
            </a>
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <a className="projects__cards--title" href="/projets/elfort-groupe">
                  Elfort Groupe
                </a>
                <p className="projects__cards--date">2022</p>
              </div>
              <p className="projects__cards--description">Brasserie de bière artisanale dans la région bordelaise fonctionnant avec un réseau local de producteurs. 2 gammes : la Aliénor, gamme historique ainsi que la "Bière du Paon". Les gammes sont à destination des professionnels, de l'associatif ainsi que des particuliers.</p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Projects