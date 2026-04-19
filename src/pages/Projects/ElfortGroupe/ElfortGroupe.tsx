import "./../Projects.scss"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectColors from "../../../components/ProjectColors/ProjectColors"
import ProjectCombinations from "../../../components/ProjectCombinations/ProjectCombinations"
import FontsPairing from "../../../components/FontsPairing/FontsPairing"
import InfiniteCarousel from "../../../components/InfiniteCarousel/InfiniteCarousel"
import DeviceFrame from "../../../components/DeviceFrame/DeviceFrame"

gsap.registerPlugin(ScrollTrigger)

import logoPresentationElfortGroupe from "../../../assets/global/projects/elfort-groupe/logo-presentation-elfort-groupe-julien-privat.jpg"
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


import imgCorreEtAssociees from "../../../assets/global/projects/corre-et-associees/cartes-de-visites-mockup-corre-et-associees-axe-1-2.jpg"

function ElfortGroupe() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const fullscreenSectionRef = useRef<HTMLElement>(null)
  const fullscreenImgRef = useRef<HTMLImageElement>(null)

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
      <section className="projects-details__hero--section">
        <h1 className="projects-details__hero--title">Elfort Groupe</h1>
        <div className="projects-details__hero--div">
          <img className="projects-details__hero--image" src={logoPresentationElfortGroupe} alt="Hero image - Elfort Groupe" />
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
                Brasserie de bière artisanale dans la région bordelaise fonctionnant avec un réseau local de producteurs. 2 gammes : la Aliénor, gamme historique ainsi que la "Bière du Paon", bière reprenant les variantes de la Aliénor avec une nouvelle recette en mettant l'accent sur la qualité et la régularité. Les gammes sont à destination des professionnels, de l'associatif ainsi que des particuliers.
              </p>
            </div>
            <div className="projects-details__brief--unity">
              <p className="projects-details__deliverables--title">Livrables</p>
              <ul className="projects-details__deliverables--list">
                <li>Identité / Logotype</li>
                <li>Étiquettes</li>
                <li>Cartes de visites</li>
                <li>Plaquettes commerciales / Dépliants / Brochures</li>
                <li>Supports de présentation</li>
                <li>Signalétique</li>
                <li>Photographie</li>
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
          <img className="projects-details__image--image" src={cdvBeige} alt="Cartes de visites beiges - Elfort Groupe" />
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
          src={imgCorreEtAssociees}
          alt="Projet suivant"
        />
        <div className="projects-details__related--text-div">
          <p ref={titleRef} className="projects-details__related--title">
            <span>Corre &</span>
            <span>Associées</span>
          </p>
          <a href="/projets/corre-et-associees" className="projects-details__related--btn">
            Voir le projet suivant
          </a>
        </div>
      </section>
    </>
  )
}

export default ElfortGroupe