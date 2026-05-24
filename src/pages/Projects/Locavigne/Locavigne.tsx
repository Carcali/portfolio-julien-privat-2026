import "./../ProjectsDetails.scss"
import { useEffect, useRef } from "react"
import { useMobile } from "../../../hooks/useMobile"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectColors from "../../../components/ProjectColors/ProjectColors"
import ProjectCombinations from "../../../components/ProjectCombinations/ProjectCombinations"
import FontsPairing from "../../../components/FontsPairing/FontsPairing"
import InfiniteCarousel from "../../../components/InfiniteCarousel/InfiniteCarousel"
import DeviceFrame from "../../../components/DeviceFrame/DeviceFrame"

gsap.registerPlugin(ScrollTrigger)

import logoPresentationLocavigneHorizontal from "../../../assets/global/projects/locavigne/logo-presentation-locavigne-julien-privat.jpg"
import logoPresentationLocavigneVertical from "../../../assets/global/projects/locavigne/logo-presentation-2-locavigne-julien-privat.jpg"
import cdvBeige from "../../../assets/global/projects/locavigne/cartes-de-visites-locavigne-julien-privat.jpg"
import logoNomBle from "../../../assets/global/projects/locavigne/logo-nom-locavigne-ble.svg"
import logoSymboleRaisin from "../../../assets/global/projects/locavigne/logo-symbole-locavigne-bleu-raisin.svg"
import logoCompletVertAurore from "../../../assets/global/projects/locavigne/logo-complet-locavigne-vert-aurore.svg"
import contratLocationLocavigne from "../../../assets/global/projects/locavigne/contrat-de-location-etat-des-lieux-locavigne-julien-privat.jpg"
// Fiches techniques
import ficheProduitLocavigne1 from "../../../assets/global/projects/locavigne/book-produits-locavigne-2022-julien-privat.jpg"
import ficheProduitLocavigne2 from "../../../assets/global/projects/locavigne/book-produits-locavigne-2022-julien-privat2.jpg"
import ficheProduitLocavigne3 from "../../../assets/global/projects/locavigne/book-produits-locavigne-2022-julien-privat3.jpg"
import ficheProduitLocavigne5 from "../../../assets/global/projects/locavigne/book-produits-locavigne-2022-julien-privat5.jpg"
import ficheProduitLocavigne14 from "../../../assets/global/projects/locavigne/book-produits-locavigne-2022-julien-privat14.jpg"
import ficheProduitLocavigne18 from "../../../assets/global/projects/locavigne/book-produits-locavigne-2022-julien-privat18.jpg"
import ficheProduitLocavigne25 from "../../../assets/global/projects/locavigne/book-produits-locavigne-2022-julien-privat25.jpg"
import ficheProduitLocavigne26 from "../../../assets/global/projects/locavigne/book-produits-locavigne-2022-julien-privat26.jpg"
// Maquettes
import maquetteLocavigne1 from "../../../assets/global/projects/locavigne/Accueil.jpg"
import maquetteLocavigne2 from "../../../assets/global/projects/locavigne/Menu à l'ouverture.jpg"
import maquetteLocavigne3 from "../../../assets/global/projects/locavigne/Listing produits.jpg"
import maquetteLocavigne4 from "../../../assets/global/projects/locavigne/Page produit type.jpg"
import maquetteLocavigne5 from "../../../assets/global/projects/locavigne/Contact.jpg"


import imgCorreEtAssociees from "../../../assets/global/projects/corre-et-associees/cartes-de-visites-mockup-corre-et-associees-axe-1-2.jpg"

function Locavigne() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const fullscreenSectionRef = useRef<HTMLElement>(null)
  const fullscreenImgRef = useRef<HTMLImageElement>(null)
  const isMobile = useMobile()

  const fichesElfort = [
    { src: ficheProduitLocavigne1, label: "" },
    { src: ficheProduitLocavigne2, label: "" },
    { src: ficheProduitLocavigne3, label: "" },
    { src: ficheProduitLocavigne5, label: "" },
    { src: ficheProduitLocavigne14, label: "" },
    { src: ficheProduitLocavigne18, label: "" },
    { src: ficheProduitLocavigne25, label: "" },
    { src: ficheProduitLocavigne26, label: "" },
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
        <h1 className="projects-details__hero--title">Locavigne</h1>
        <div className="projects-details__hero--div">
            <img className="projects-details__hero--image" src={isMobile ? logoPresentationLocavigneVertical : logoPresentationLocavigneHorizontal} alt="Hero image - Locavigne" />
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
            bgColor: '#fbe7d6',
            logo: logoSymboleRaisin,
            alt: 'Logo symbole raisin'
            },
            {
            bgColor: '#97922f',
            logo: logoNomBle,
            alt: 'Logo nom ble'
            },
            {
            bgColor: '#003942',
            logo: logoCompletVertAurore,
            alt: 'Logo complet vert aurore'
            }
        ]}
        />

        {/* Colors */}
        <ProjectColors
        colors={[
            { hex: '#003942', label: '60', size: 'large', labelColor: '#fbe7d6' },
            { hex: '#005c6a', label: '', size: 'wide', dimmed: true },
            { hex: '#97922f', label: '10', size: 'square', labelColor: '#c5b567' },
            { hex: '#fbe7d6', label: '30', size: 'wide', labelColor: '#97922f' },
            { hex: '#c5b567', label: '', size: 'square', dimmed: true },
        ]}
        />

        {/* Fonts pairing */}
        <FontsPairing
        fonts={[
            {
            title: 'Frontage',
            subtitle: 'Typographie\nPrincipale',
            fontClass: 'frontage',
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

        {/* Book produit */}
        <InfiniteCarousel fiches={fichesElfort} />

        {/* Image verticale */}
        <section className="projects-details__one-image--section projects-details__wrapper">
        <div className="projects-details__one-image--div projects-details__wrapper--70">
            <img
            className="projects-details__one-image--image"
            src={contratLocationLocavigne}
            alt="Contrat de location - Locavigne"
            />
        </div>
        </section>


        <section className="projects-details__image--section projects-details__wrapper">
        <div className="projects-details__image-70--div projects-details__wrapper--70">
            <DeviceFrame
            variant="desktop"
            src={[maquetteLocavigne1, maquetteLocavigne2, maquetteLocavigne3, maquetteLocavigne4, maquetteLocavigne5]}
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

export default Locavigne