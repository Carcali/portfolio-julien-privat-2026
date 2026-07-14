import "./../ProjectsDetails.scss"
import "./Logofolio.scss"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Seo from "../../../components/Seo/Seo"
import { creativeWorkSchema, breadcrumbSchema } from "../../../components/Seo/structuredData"
import LogoCard from "../../../components/LogoCard/LogoCard"
import type { LogoCardType } from "../../../components/LogoCard/LogoCard"

gsap.registerPlugin(ScrollTrigger)

import logoPatrimonialeMonoRaw from "../../../assets/global/projects/logofolio/logo-patrimoniale-privat-beige.svg?raw"
import logoPatrimonialeColorRaw from "../../../assets/global/projects/logofolio/logo-patrimoniale-privat-rose.svg?raw"
import cdvPatrimoniale1 from "../../../assets/global/projects/logofolio/cartes-de-visites-patrimoniale-privat-julien-privat.jpg"
import logoSARLGuilletMonoRaw from "../../../assets/global/projects/logofolio/logo-sarl-guillet-beige-mono.svg?raw"
import logoSARLGuilletColorRaw from "../../../assets/global/projects/logofolio/logo-sarl-guillet-beige-color.svg?raw"
import cdvSARLGuillet from "../../../assets/global/projects/logofolio/cartes-de-visites-sarl-guillet-julien-privat.jpg"
import logoAkumaMonoRaw from "../../../assets/global/projects/logofolio/logo-akuma-baits-julien-privat-mono.svg?raw"
import logoAkumaColorRaw from "../../../assets/global/projects/logofolio/logo-akuma-baits-julien-privat-color.svg?raw"
import cdvAkuma from "../../../assets/global/projects/logofolio/cartes-de-visites-akuma-baits-julien-privat.jpg"
import catalogueCouvAkuma from "../../../assets/global/projects/logofolio/catalogue-couverture-akuma-baits-julien-privat.jpg"
import cataloguePagesAkuma from "../../../assets/global/projects/logofolio/catalogue-double-pages-akuma-baits-julien-privat.jpg"
import logoDeltacMonoRaw from "../../../assets/global/projects/logofolio/logotype-deltac-beige.svg?raw"
import logoDeltacColorRaw from "../../../assets/global/projects/logofolio/logotype-deltac-couleur.svg?raw"
import logoCorreMonoRaw from "../../../assets/global/projects/logofolio/logotype-corre-et-associees-beige.svg?raw"
import logoCorreColorRaw from "../../../assets/global/projects/logofolio/logotype-corre-et-associees-couleur.svg?raw"
import cdvCorre from "../../../assets/global/projects/logofolio/cartes-de-visites-corre-et-associees-julien-privat.jpg"
import logoBlayaiseMonoRaw from "../../../assets/global/projects/logofolio/logotype-blayaise-beige.svg?raw"
import logoBlayaiseColorRaw from "../../../assets/global/projects/logofolio/logotype-blayaise-couleur.svg?raw"
import cdvBlayaise from "../../../assets/global/projects/logofolio/cartes-de-visites-blayaise-expertise-comptable-julien-privat.jpg"
import logoElfortMonoRaw from "../../../assets/global/projects/logofolio/logotype-elfort-groupe-beige.svg?raw"
import logoElfortColorRaw from "../../../assets/global/projects/logofolio/logotype-elfort-groupe-couleur.svg?raw"
import cdvElfort from "../../../assets/global/projects/logofolio/cartes-de-visites-elfort-groupe-julien-privat.jpg"
import logoMontgaillardMonoRaw from "../../../assets/global/projects/logofolio/logotype-montgaillard-beige.svg?raw"
import logoMontgaillardColorRaw from "../../../assets/global/projects/logofolio/logotype-montgaillard-couleur.svg?raw"
import cdvMontgaillard from "../../../assets/global/projects/logofolio/cartes-de-visites-montgaillard-julien-privat.jpg"
import logoBrasserieDuPaonMonoRaw from "../../../assets/global/projects/logofolio/logotype-brasserie-du-paon-beige.svg?raw"
import logoBrasserieDuPaonColorRaw from "../../../assets/global/projects/logofolio/logotype-brasserie-du-paon-couleur.svg?raw"
import cdvBrasserieDuPaon from "../../../assets/global/projects/logofolio/cartes-de-visites-brasserie-du-paon-julien-privat.jpg"
import logoLocavigneMonoRaw from "../../../assets/global/projects/logofolio/logotype-locavigne-beige.svg?raw"
import logoLocavigneColorRaw from "../../../assets/global/projects/logofolio/logotype-locavigne-couleur.svg?raw"
import cdvLocavigne from "../../../assets/global/projects/logofolio/cartes-de-visites-locavigne-julien-privat.jpg"

import presentationLeTempsDesFleursHorizontal from "../../../assets/global/projects/le-temps-des-fleurs/presentation-le-temps-des-fleurs-julien-privat.jpg"

const cards: LogoCardType[] = [
  {
    index: "01",
    name: "Patrimoniale PRIVAT",
    sector: "Holding",
    bgColorMono: "#000000",
    bgColorColor: "#001227",
    logoMono: logoPatrimonialeMonoRaw,
    logoColor: logoPatrimonialeColorRaw,
    images: [cdvPatrimoniale1],
  },
  {
    index: "02",
    name: "SARL Guillet",
    sector: "Artisanat",
    bgColorMono: "#000000",
    bgColorColor: "#94291e",
    logoMono: logoSARLGuilletMonoRaw,
    logoColor: logoSARLGuilletColorRaw,
    images: [cdvSARLGuillet],
  },
  {
    index: "03",
    name: "Blayaise d'Expertise Comptable",
    sector: "Expertise comptable",
    bgColorMono: "#000000",
    bgColorColor: "#c6142f",
    logoMono: logoBlayaiseMonoRaw,
    logoColor: logoBlayaiseColorRaw,
    images: [cdvBlayaise],
    href: "/projets/blayaise-expertise-comptable",
  },
  {
    index: "04",
    name: "Corre & Associées",
    sector: "Viticole",
    bgColorMono: "#000000",
    bgColorColor: "#213443",
    logoMono: logoCorreMonoRaw,
    logoColor: logoCorreColorRaw,
    images: [cdvCorre],
  },
  {
    index: "05",
    name: "Elfort Groupe",
    sector: "Import-export",
    bgColorMono: "#000000",
    bgColorColor: "#ede0d2",
    logoMono: logoElfortMonoRaw,
    logoColor: logoElfortColorRaw,
    images: [cdvElfort],
    href: "/projets/elfort-groupe",
  },
  {
    index: "06",
    name: "Montgaillard",
    sector: "Import-export",
    bgColorMono: "#000000",
    bgColorColor: "#11322d",
    logoMono: logoMontgaillardMonoRaw,
    logoColor: logoMontgaillardColorRaw,
    images: [cdvMontgaillard],
    href: "/projets/montgaillard",
  },
  {
    index: "07",
    name: "Brasserie du Paon",
    sector: "Bière artisanale",
    bgColorMono: "#000000",
    bgColorColor: "#a6815e",
    logoMono: logoBrasserieDuPaonMonoRaw,
    logoColor: logoBrasserieDuPaonColorRaw,
    images: [cdvBrasserieDuPaon],
    href: "/projets/brasserie-du-paon",
  },
  {
    index: "07",
    name: "Locavigne",
    sector: "Location",
    bgColorMono: "#000000",
    bgColorColor: "#003942",
    logoMono: logoLocavigneMonoRaw,
    logoColor: logoLocavigneColorRaw,
    images: [cdvLocavigne],
    href: "/projets/locavigne",
  },
  {
    index: "08",
    name: "Akuma Baits",
    sector: "Projet fictif",
    bgColorMono: "#000000",
    bgColorColor: "#b1d6ec",
    logoMono: logoAkumaMonoRaw,
    logoColor: logoAkumaColorRaw,
    images: [cdvAkuma, catalogueCouvAkuma, cataloguePagesAkuma],
  },
  {
    index: "09",
    name: "Deltac",
    sector: "Associatif",
    bgColorMono: "#000000",
    bgColorColor: "#fbf5ec",
    logoMono: logoDeltacMonoRaw,
    logoColor: logoDeltacColorRaw,
    images: [],
  },
]

function Logofolio() {
  const [showColor, setShowColor] = useState(false)
  const sectionRef    = useRef<HTMLElement>(null)
  const imgRef        = useRef<HTMLImageElement>(null)
  const titleRef      = useRef<HTMLParagraphElement>(null)
  const toggleIconRef = useRef<HTMLSpanElement>(null)

  const handleToggle = () => {
    const icon = toggleIconRef.current
    if (!icon) return
    gsap.fromTo(
      icon,
      { scale: 1 },
      { scale: 1.3, duration: 0.15, ease: "power2.out", yoyo: true, repeat: 1 }
    )
    setShowColor((prev) => !prev)
  }

  useEffect(() => {
    const section = sectionRef.current
    const img     = imgRef.current
    const title   = titleRef.current
    if (!section || !img || !title) return

    const spans = title.querySelectorAll<HTMLElement>("span")

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: 1.06, clipPath: "inset(0 100% 0 0 round 15px)" },
        {
          scale: 1,
          clipPath: "inset(0 0% 0 0 round 15px)",
          duration: 2,
          ease: "power3.out",
          clearProps: "clipPath",
          scrollTrigger: { trigger: section, start: "top 80%" },
        }
      )
      gsap.fromTo(
        spans,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: section, start: "top 80%" },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Seo
        title="Logofolio — Collection de logotypes | Julien PRIVAT"
        description="Ici, pas d'étude de cas. Juste des logos, et parfois les supports qui leur donnent corps. Certains travaux ne demandent pas d'explication — ils méritent juste d'exister."
        path="/projets/logofolio"
        image={cdvPatrimoniale1}
        imageAlt="Logofolio — collection de logotypes de Julien PRIVAT"
        type="article"
        jsonLd={[
          creativeWorkSchema({
            name: "Logofolio",
            description: "Ici, pas d'étude de cas. Juste des logos, et parfois les supports qui leur donnent corps. Certains travaux ne demandent pas d'explication — ils méritent juste d'exister.",
            path: "/projets/logofolio",
            image: cdvPatrimoniale1,
            keywords: ["Branding"],
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Projets", path: "/projets" },
            { name: "Logofolio", path: "/projets/logofolio" },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="projects-details__hero--section">
        <h1 className="projects-details__hero--title">Logofolio</h1>
        <p className="projects-details__mission--text logofolio__subtitle">
          Ici, pas d'étude de cas. Juste des logos, et parfois les supports qui leur donnent corps.
          <br />
          Certains travaux ne demandent pas d'explication — ils méritent juste d'exister.
        </p>
      </section>

      {/* Toggle */}
      <div className="logofolio__toggle-wrap">
        <button
          className={`logofolio__toggle ${showColor ? "logofolio__toggle--active" : ""}`}
          onClick={handleToggle}
          aria-label="Afficher les logos en couleur"
        >
          <span ref={toggleIconRef} className="logofolio__toggle--icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              <circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" stroke="none"/>
              <circle cx="8.5" cy="7" r="1.5" fill="currentColor" stroke="none"/>
              <circle cx="6.5" cy="12" r="1.5" fill="currentColor" stroke="none"/>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
            </svg>
          </span>
          <span className="logofolio__toggle--label">
            {showColor ? "Masquer les couleurs" : "Révéler les couleurs"}
          </span>
        </button>
      </div>

      {/* Grille */}
      <div className="logofolio__grid-wrap projects-details__wrapper">
        <div className="projects-details__wrapper--70">
          <div className="logofolio__grid">
            {cards.map((card) => (
              <LogoCard
                key={card.index}
                card={card}
                showColor={showColor}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Projet suivant */}
      <section ref={sectionRef} className="projects-details__related--div">
        <img
          ref={imgRef}
          className="projects-details__related--img"
          src={presentationLeTempsDesFleursHorizontal}
          alt={`Projet suivant : Le Temps des Fleurs`}
          width={1400}
          height={900}
          loading="lazy"
        />
        <div className="projects-details__related--text-div">
          <p ref={titleRef} className="projects-details__related--title-long">
            <span>Le Temps des Fleurs</span>
          </p>
          <a href="/projets/le-temps-des-fleurs" className="projects-details__related--btn">
            Voir le projet suivant
          </a>
        </div>
      </section>
    </>
  )
}

export default Logofolio