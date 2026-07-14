import "./../ProjectsDetails.scss"
import { useEffect, useRef } from "react"
import { useMobile } from "../../../hooks/useMobile"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Seo from "../../../components/Seo/Seo"
import { creativeWorkSchema, breadcrumbSchema } from "../../../components/Seo/structuredData"
import ProjectColors from "../../../components/ProjectColors/ProjectColors"
import ProjectCombinations from "../../../components/ProjectCombinations/ProjectCombinations"
import FontsPairing from "../../../components/FontsPairing/FontsPairing"
import InfiniteCarousel from "../../../components/InfiniteCarousel/InfiniteCarousel"
import DeviceFrame from "../../../components/DeviceFrame/DeviceFrame"

gsap.registerPlugin(ScrollTrigger)

import logoPresentationElfortGroupeHorizontal from "../../../assets/global/projects/elfort-groupe/logo-presentation-elfort-groupe-julien-privat.jpg"
import logoPresentationElfortGroupeVertical from "../../../assets/global/projects/elfort-groupe/logo-presentation-2-elfort-groupe-julien-privat.jpg"
import cdvBeige from "../../../assets/global/projects/elfort-groupe/cartes-de-visites-elfort-groupe-julien-privat.jpg"
import logoNomBeige from "../../../assets/global/projects/elfort-groupe/logo-elfort-nom-beige.svg"
import logoSymboleBeige from "../../../assets/global/projects/elfort-groupe/logo-elfort-symbole-beige.svg"
import logoCompletOrange from "../../../assets/global/projects/elfort-groupe/logo-elfort-complet-orange-construction.svg"
// Fiches techniques
import ficheTechniqueElfortGroupe1 from "../../../assets/global/projects/elfort-groupe/fiches-techniques-produits-1-elfort-groupe-julien-privat.jpg"
import ficheTechniqueElfortGroupe2 from "../../../assets/global/projects/elfort-groupe/fiches-techniques-produits-2-elfort-groupe-julien-privat.jpg"
import ficheTechniqueElfortGroupe3 from "../../../assets/global/projects/elfort-groupe/fiches-techniques-produits-3-elfort-groupe-julien-privat.jpg"
import ficheTechniqueElfortGroupe4 from "../../../assets/global/projects/elfort-groupe/fiches-techniques-produits-4-elfort-groupe-julien-privat.jpg"
import ficheTechniqueElfortGroupe5 from "../../../assets/global/projects/elfort-groupe/fiches-techniques-produits-5-elfort-groupe-julien-privat.jpg"
import ficheTechniqueElfortGroupe6 from "../../../assets/global/projects/elfort-groupe/fiches-techniques-produits-6-elfort-groupe-julien-privat.jpg"
import ficheTechniqueElfortGroupe7 from "../../../assets/global/projects/elfort-groupe/fiches-techniques-produits-7-elfort-groupe-julien-privat.jpg"
// Maquettes
import maquetteElfortGroupe1 from "../../../assets/global/projects/elfort-groupe/maquettes-de-site-1-elfort-groupe-julien-privat.jpg"
import maquetteElfortGroupe2 from "../../../assets/global/projects/elfort-groupe/maquettes-de-site-2-elfort-groupe-julien-privat.jpg"
import maquetteElfortGroupe3 from "../../../assets/global/projects/elfort-groupe/maquettes-de-site-3-elfort-groupe-julien-privat.jpg"
import maquetteElfortGroupe4 from "../../../assets/global/projects/elfort-groupe/maquettes-de-site-4-elfort-groupe-julien-privat.jpg"
import maquetteElfortGroupe5 from "../../../assets/global/projects/elfort-groupe/maquettes-de-site-5-elfort-groupe-julien-privat.jpg"
import maquetteElfortGroupe6 from "../../../assets/global/projects/elfort-groupe/maquettes-de-site-6-elfort-groupe-julien-privat.jpg"

import logoPresentationLocavigneHorizontal from "../../../assets/global/projects/locavigne/logo-presentation-locavigne-julien-privat.jpg"

function ElfortGroupe() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const fullscreenSectionRef = useRef<HTMLElement>(null)
  const fullscreenImgRef = useRef<HTMLImageElement>(null)
  const isMobile = useMobile()

  const fichesElfort = [
    { src: ficheTechniqueElfortGroupe1, label: "Couverture" },
    { src: ficheTechniqueElfortGroupe2, label: "Piquets fer — encoches en H" },
    { src: ficheTechniqueElfortGroupe3, label: "Piquets fer — encoches en H" },
    { src: ficheTechniqueElfortGroupe4, label: "Piquets fer — piquet tête" },
    { src: ficheTechniqueElfortGroupe5, label: "Piquets bois — bois d'acacia" },
    { src: ficheTechniqueElfortGroupe6, label: "Fil de fer — en bobine" },
    { src: ficheTechniqueElfortGroupe7, label: "Marchants — bois et aciers" },
  ]

  useEffect(() => {
    const section = sectionRef.current
    const img = imgRef.current
    const title = titleRef.current
    if (!section || !img || !title) return

    const spans = title.querySelectorAll<HTMLElement>("span")

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        {
          scale: 1.06,
          clipPath: "inset(0 100% 0 0 round 15px)",
        },
        {
          scale: 1,
          clipPath: "inset(0 0% 0 0 round 15px)",
          duration: 2,
          ease: "power3.out",
          clearProps: "clipPath",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
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
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      )

      if (fullscreenSectionRef.current && fullscreenImgRef.current) {
        gsap.fromTo(
          fullscreenImgRef.current,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: fullscreenSectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Seo
        title="Elfort Groupe — Identité de marque & digital | Julien PRIVAT"
        description="Identité inspirée des codes de la route de la soie pour une société d'import/export entre la France et l'Europe de l'Est, où chaque produit raconte une traversée."
        path="/projets/elfort-groupe"
        image={logoPresentationElfortGroupeHorizontal}
        imageAlt="Identité de marque Elfort Groupe"
        type="article"
        jsonLd={[
          creativeWorkSchema({
            name: "Elfort Groupe",
            description: "Identité inspirée des codes de la route de la soie pour une société d'import/export entre la France et l'Europe de l'Est, où chaque produit raconte une traversée.",
            path: "/projets/elfort-groupe",
            image: logoPresentationElfortGroupeHorizontal,
            dateCreated: "2022",
            keywords: ["Branding", "Print", "Digital"],
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Projets", path: "/projets" },
            { name: "Elfort Groupe", path: "/projets/elfort-groupe" },
          ]),
        ]}
      />
      <section className="projects-details__hero--section">
        <h1 className="projects-details__hero--title">Elfort Groupe</h1>
        <div className="projects-details__hero--div">
          <img
            className="projects-details__hero--image"
            src={isMobile ? logoPresentationElfortGroupeVertical : logoPresentationElfortGroupeHorizontal}
            alt="Hero image - Elfort Groupe"
            width={isMobile ? 1000 : 1400}
            height={isMobile ? 1400 : 900}
          />
        </div>
      </section>

      {/* Brief */}
      <section className="projects-details__brief--section projects-details__wrapper">
        <div className="projects-details__wrapper--70">
          <div className="projects-details__brief--section-title">
            <p className="projects-details__brief--section-title-text">
              Identité d'entreprise / Print / Digital / Direction artistique
            </p>
          </div>
          <div className="projects-details__brief--grid">
            <div className="projects-details__brief--unity">
              <p className="projects-details__mission--title">Mission</p>
              <p className="projects-details__mission--text">
                Elfort Groupe est une société de négoce et d'import/export qui fait le pont entre la France et l'Europe de l'Est, principalement la Roumanie. Elle s'adresse à une clientèle variée de professionnels issues du bâtiment, de l'agriculture et de l'aménagement extérieur, ainsi qu'à des particuliers en quête de produits accessibles et de qualité. L'axe retenu mise sur les codes du voyage et de la route de la soie, transformant chaque acheminement en traversée et chaque fournisseur en étape d'une quête, pour traduire visuellement la transparence du processus et la valeur du travail derrière chaque produit.
              </p>
            </div>
            <div className="projects-details__brief--unity">
              <p className="projects-details__deliverables--title">Livrables</p>
              <ul className="projects-details__deliverables--list">
                <li>Identité / Logotype</li>
                <li>Cartes de visites</li>
                <li>Plaquettes commerciales / Brochures</li>
                <li>Supports de présentation</li>
                <li>Signalétique</li>
                <li>Photographie</li>
                <li>Optimisation de process</li>
                <li>Site vitrine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Combinations */}
      <ProjectCombinations
        variant="compact"
        combinations={[
          {
            bgColor: '#344945',
            logo: logoSymboleBeige,
            alt: 'Logo symbole beige'
          },
          {
            bgColor: '#745e49',
            logo: logoNomBeige,
            alt: 'Logo nom beige'
          },
          {
            bgColor: '#ede0d2',
            logo: logoCompletOrange,
            alt: 'Logo complet orange'
          }
        ]}
      />

      {/* Colors */}
      <ProjectColors
        colors={[
          { hex: '#ede0d2', label: '60', size: 'large', labelColor: '#745e49' },
          { hex: '#9cc1b1', label: '', size: 'wide', dimmed: true },
          { hex: '#ea571e', label: '10', size: 'square', labelColor: '#ede0d2' },
          { hex: '#344945', label: '30', size: 'wide', labelColor: '#ede0d2' },
          { hex: '#745e49', label: '', size: 'square', dimmed: true },
        ]}
      />

      {/* Fonts pairing */}
      <FontsPairing
        fonts={[
          {
            title: 'PP Monument',
            subtitle: 'Typographie\nPrincipale',
            fontClass: 'ppmonumentextended',
            type: 'principal'
          },
          {
            title: 'Roboto',
            subtitle: 'Typographie\nSecondaire',
            fontClass: 'roboto-regular',
            type: 'secondary'
          }
        ]}
      />

      {/* Image 70% */}
      <section className="projects-details__image--section projects-details__wrapper">
        <div className="projects-details__image-70--div projects-details__wrapper--70">
          <img className="projects-details__image--image" src={cdvBeige} alt="Cartes de visites beiges - Elfort Groupe" width={1400} height={900} loading="lazy" />
        </div>
      </section>

      {/* Image verticale */}
      <InfiniteCarousel fiches={fichesElfort} />

      <section className="projects-details__image--section projects-details__wrapper">
        <div className="projects-details__image-70--div projects-details__wrapper--70">
          <DeviceFrame
            variant="desktop"
            src={[maquetteElfortGroupe1, maquetteElfortGroupe2, maquetteElfortGroupe3, maquetteElfortGroupe4, maquetteElfortGroupe5, maquetteElfortGroupe6]}
            autoScrollDuration={10}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}

      {/* Projet suivant */}
      <section ref={sectionRef} className="projects-details__related--div">
        <img
          ref={imgRef}
          className="projects-details__related--img"
          src={logoPresentationLocavigneHorizontal}
          alt={`Projet suivant : Locavigne`}
          width={1400}
          height={900}
          loading="lazy"
        />
        <div className="projects-details__related--text-div">
          <p ref={titleRef} className="projects-details__related--title">
            <span>Locavigne</span>
          </p>
          <a href="/projets/locavigne" className="projects-details__related--btn">
            Voir le projet suivant
          </a>
        </div>
      </section>
    </>
  )
}

export default ElfortGroupe