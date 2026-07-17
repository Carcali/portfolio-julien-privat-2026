import { useState, useRef } from "react"
import gsap from "gsap"
import "./Projects.scss"
import Seo from "../../components/Seo/Seo"
import iconListNormal from "../../assets/global/icon-projects-list-normal.svg"
import iconListHover from "../../assets/global/icon-projects-list-hover.svg"
import iconGridNormal from "../../assets/global/icon-projects-grid-normal.svg"
import iconGridHover from "../../assets/global/icon-projects-grid-hover.svg"
import CategorySelect, { type Category } from "../../components/CategorySelect/CategorySelect"

import logoBrasserieDuPaon from "../../assets/global/projects/brasserie-du-paon/logo-tonneau-peint-brasserie-du-paon-julien-privat.jpg"
import logoPresentationBlayaise from "../../assets/global/projects/blayaise-dexpertise-comptable/logo-presentation-blayaise-expertise-comptable-julien-privat.jpg"
import logoPresentationMontgaillard from "../../assets/global/projects/montgaillard/logo-presentation-montgaillard-julien-privat.jpg"
import logoPresentationElfortGroupe from "../../assets/global/projects/elfort-groupe/logo-presentation-elfort-groupe-julien-privat.jpg"
import logoPresentationAlineaHorizontal from "../../assets/global/projects/alinea/logo-presentation-alinea-boutique-julien-privat.jpg"
import logoPresentationLocavigneHorizontal from "../../assets/global/projects/locavigne/logo-presentation-locavigne-julien-privat.jpg"
import logoPresentationLogofolioHorizontal from "../../assets/global/projects/logofolio/logo-presentation-logofolio-julien-privat.jpg"
import presentationLeTempsDesFleursHorizontal from "../../assets/global/projects/le-temps-des-fleurs/presentation-le-temps-des-fleurs-julien-privat.jpg"

// ─── Data ─────────────────────────────────────────────────────────────────────

type Project = {
  id: number
  title: string
  date: string
  href: string
  image: string
  imageWidth: number
  imageHeight: number
  categories: Category[]
  description: string
}

const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Brasserie du Paon",
    date: "2023",
    href: "/projets/brasserie-du-paon",
    image: logoBrasserieDuPaon,
    imageWidth: 1400,
    imageHeight: 900,
    categories: ["Branding", "Print"],
    description: "Reprise et création d'une brasserie artisanale en circuit court : une identité ancrée dans son territoire, animée par l'héritage d'un lieu.",
  },
  {
    id: 2,
    title: "Alinea Boutique",
    date: "2021",
    href: "/projets/alinea-boutique",
    image: logoPresentationAlineaHorizontal,
    imageWidth: 1400,
    imageHeight: 900,
    categories: ["Branding", "Print", "Digital"],
    description: "Signalétique et peinture routière ainsi que mobilier urbain : un cadrage clair pour structurer un catalogue dense et le rendre accessible à tous ses publics.",
  },
  {
    id: 3,
    title: "Blayaise d'Expertise Comptable",
    date: "2021",
    href: "/projets/blayaise-expertise-comptable",
    image: logoPresentationBlayaise,
    imageWidth: 1400,
    imageHeight: 900,
    categories: ["Branding", "Print"],
    description: "Donner un visage élégant et chaleureux à un cabinet d'expertise-comptable profondément ancré entre Blaye et Bordeaux, porté par l'expérience et la loyauté.",
  },
  {
    id: 4,
    title: "Montgaillard",
    date: "2022",
    href: "/projets/montgaillard",
    image: logoPresentationMontgaillard,
    imageWidth: 1400,
    imageHeight: 900,
    categories: ["Branding", "Print"],
    description: "Exploitation agricole dans le Fronsadais : une identité naturelle et graphique, loin des codes classiques du monde viticole.",
  },
  {
    id: 5,
    title: "Elfort Groupe",
    date: "2022",
    href: "/projets/elfort-groupe",
    image: logoPresentationElfortGroupe,
    imageWidth: 1400,
    imageHeight: 900,
    categories: ["Branding", "Print", "Digital"],
    description: "Identité inspirée des codes de la route de la soie pour une société d'import/export entre la France et l'Europe de l'Est, où chaque produit raconte une traversée.",
  },
  {
    id: 6,
    title: "Locavigne",
    date: "2021",
    href: "/projets/locavigne",
    image: logoPresentationLocavigneHorizontal,
    imageWidth: 1400,
    imageHeight: 900,
    categories: ["Branding", "Print", "Digital"],
    description: "Une identité rétro et authentique pour une entreprise de location de machines viticoles et agricoles, où l'expertise technique se conjugue à une vraie proximité humaine.",
  },
  {
    id: 7,
    title: "Logofolio",
    date: "2020 - 2026",
    href: "/projets/logofolio",
    image: logoPresentationLogofolioHorizontal,
    imageWidth: 1400,
    imageHeight: 900,
    categories: ["Branding"],
    description: "Ici, pas d'étude de cas. Juste des logos, et parfois les supports qui leur donnent corps. Certains travaux ne demandent pas d'explication — ils méritent juste d'exister.",
  },
  {
    id: 8,
    title: "Le temps des fleurs",
    date: "2025",
    href: "/projets/le-temps-des-fleurs",
    image: presentationLeTempsDesFleursHorizontal,
    imageWidth: 1400,
    imageHeight: 900,
    categories: ["Print"],
    description: "Un livre en cadeau pour mes grands-mères compilant mes photographies de fleurs à travers mes voyages et leurs jardins.",
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

function Projects() {
  const [layout, setLayout] = useState<"list" | "grid">("list")
  const [activeCategory, setActiveCategory] = useState<Category>("Tous")
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Animation partagée : sortie → callback → entrée
  const animateTransition = (callback: () => void) => {
    const cards = wrapperRef.current?.querySelectorAll(".projects__cards--container")
    if (!cards?.length) { callback(); return }

    gsap.to(cards, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      stagger: 0.04,
      ease: "power2.in",
      onComplete: () => {
        callback()
        requestAnimationFrame(() => {
          const newCards = wrapperRef.current?.querySelectorAll(".projects__cards--container")
          if (!newCards) return
          gsap.fromTo(
            newCards,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.3, stagger: 0.07, ease: "power2.out" }
          )
        })
      },
    })
  }

  const handleLayoutChange = (newLayout: "list" | "grid") => {
    if (newLayout === layout) return
    animateTransition(() => setLayout(newLayout))
  }

  const handleCategoryChange = (cat: Category) => {
    if (cat === activeCategory) return
    animateTransition(() => setActiveCategory(cat))
  }

  const filtered = activeCategory === "Tous"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.categories.includes(activeCategory))

  return (
    <>
      <Seo
        title="Projets — Portfolio de Julien PRIVAT, graphiste & développeur web"
        description="Découvrez mes projets de branding, print et digital réalisés pour des entreprises viticoles, artisanales et de luxe : Brasserie du Paon, Locavigne, Montgaillard, Elfort Groupe…"
        path="/projets"
        image={logoBrasserieDuPaon}
      />
      <section className="projects__hero--section">
        <h1 className="projects__hero--title">Projets</h1>
      </section>
      <section className="projects__cards--section">
        <div className="projects__filters--div">
          <div className="projects__filters--select">
            <CategorySelect active={activeCategory} onChange={handleCategoryChange} />
          </div>
          <div className="projects__filters--layout">
            <button
              className={`projects__filters--btn ${layout === "list" ? "projects__filters--btn-active" : ""}`}
              onClick={() => handleLayoutChange("list")}
              aria-label="Vue liste"
            >
              <img src={layout === "list" ? iconListHover : iconListNormal} alt="Vue liste" width="30" height="30" />
            </button>
            <button
              className={`projects__filters--btn ${layout === "grid" ? "projects__filters--btn-active" : ""}`}
              onClick={() => handleLayoutChange("grid")}
              aria-label="Vue grille"
            >
              <img src={layout === "grid" ? iconGridHover : iconGridNormal} alt="Vue grille" width="30" height="30" />
            </button>
          </div>
        </div>

        <div
          ref={wrapperRef}
          className={`projects__cards--wrapper projects__cards--wrapper-${layout}`}
        >
          {filtered.map((project) => (
            <div key={project.id} className="projects__cards--container">
              <a className="projects__cards--image" href={project.href}>
                <img
                  src={project.image}
                  alt={project.title}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                />
              </a>
              <div className="projects__cards--content">
                <div className="projects__cards--header">
                  <a className="projects__cards--title" href={project.href}>
                    {project.title}
                  </a>
                  <p className="projects__cards--date">{project.date}</p>
                </div>
                <p className="projects__cards--description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects