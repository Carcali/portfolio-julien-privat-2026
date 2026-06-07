import { useState, useRef } from "react"
import gsap from "gsap"
import "./Projects.scss"
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
import logoPresentationAlineaHorizontal from "../../assets/global/projects/alinea/logo-presentation-alinea-boutique-julien-privat.jpg"
import logoPresentationLocavigneHorizontal from "../../assets/global/projects/locavigne/logo-presentation-locavigne-julien-privat.jpg"
import logoPresentationLogofolioHorizontal from "../../assets/global/projects/logofolio/logo-presentation-logofolio-2-julien-privat.jpg"


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
              <p className="projects__cards--description">Reprise et création d'une brasserie artisanale en circuit court : une identité ancrée dans son territoire, animée par l'héritage d'un lieu.</p>
            </div>
          </div>

          <div className="projects__cards--container">
            <a  className="projects__cards--image" href="/projets/alinea-boutique">
              <img src={logoPresentationAlineaHorizontal} alt="Projet 1" />
            </a>
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <a className="projects__cards--title" href="/projets/alinea-boutique">
                  Alinea Boutique
                </a>
                <p className="projects__cards--date">2021</p>
              </div>
              <p className="projects__cards--description">Signalétique et peinture routière ainsi que mobilier urbain : un cadrage clair pour structurer un catalogue dense et le rendre accessible à tous ses publics.</p>
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
              <p className="projects__cards--description">Donner un visage élégant et chaleureux à un cabinet d'expertise-comptable profondément ancré entre Blaye et Bordeaux, porté par l'expérience et la loyauté.</p>
            </div>
          </div>

          <div className="projects__cards--container">
            <a  className="projects__cards--image" href="/projets/montgaillard">
              <img src={logoPresentationMontgaillard} alt="Projet 1" />
            </a>
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <a className="projects__cards--title" href="/projets/montgaillard">
                  Montgaillard
                </a>
                <p className="projects__cards--date">2022</p>
              </div>
              <p className="projects__cards--description">Exploitation agricole dans le Fronsadais : une identité naturelle et graphique, loin des codes classiques du monde viticole.</p>
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
              <p className="projects__cards--description">Identité inspirée des codes de la route de la soie pour une société d'import/export entre la France et l'Europe de l'Est, où chaque produit raconte une traversée.</p>
            </div>
          </div>
          
          <div className="projects__cards--container">
            <a  className="projects__cards--image" href="/projets/locavigne">
              <img src={logoPresentationLocavigneHorizontal} alt="Projet 1" />
            </a>
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <a className="projects__cards--title" href="/projets/locavigne">
                  Locavigne
                </a>
                <p className="projects__cards--date">2021</p>
              </div>
              <p className="projects__cards--description">Une identité rétro et authentique pour une entreprise de location de machines viticoles et agricoles, où l'expertise technique se conjugue à une vraie proximité humaine.</p>
            </div>
          </div>
          
          <div className="projects__cards--container">
            <a  className="projects__cards--image" href="/projets/logofolio">
              <img src={logoPresentationLogofolioHorizontal} alt="Projet 1" />
            </a>
            <div className="projects__cards--content">
              <div className="projects__cards--header">
                <a className="projects__cards--title" href="/projets/logofolio">
                  Logofolio
                </a>
                <p className="projects__cards--date">2020 - 2026</p>
              </div>
              <p className="projects__cards--description">Ici, pas d'étude de cas. Juste des logos, et parfois les supports qui leur donnent corps. Certains travaux ne demandent pas d'explication — ils méritent juste d'exister. Révéler les couleurs</p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Projects