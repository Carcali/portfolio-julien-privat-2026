import "./../Projects.scss"
import { useEffect, useRef } from "react"
import { useMobile } from "../../../hooks/useMobile"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import InfiniteCarousel from "../../../components/InfiniteCarousel/InfiniteCarousel"

gsap.registerPlugin(ScrollTrigger)

import logoPresentationAlineaHorizontal from "../../../assets/global/projects/alinea/logo-presentation-alinea-boutique-julien-privat.jpg"
import logoPresentationAlineaVertical from "../../../assets/global/projects/alinea/logo-presentation-2-alinea-boutique-julien-privat.jpg"
import cdvDouble from "../../../assets/global/projects/alinea/cartes-de-visites-alinea-boutique-julien-privat.jpg"
import cdvFinitions from "../../../assets/global/projects/alinea/cartes-de-visites-finitions-alinea-boutique-julien-privat.jpg"
import depliantInterieur from "../../../assets/global/projects/alinea/interieur-depliant-160x90mm-8-volets-alinea-boutique-julien-privat.jpg"
import depliantExterieur from "../../../assets/global/projects/alinea/exterieur-depliant-160x90mm-8-volets-alinea-boutique-julien-privat.jpg"
import poster from "../../../assets/global/projects/alinea/poster-1200x800mm-alinea-boutique-julien-privat.jpg"
import mementoA5 from "../../../assets/global/projects/alinea/memento-a5-alinea-boutique-julien-privat.png"
import calendrierA4 from "../../../assets/global/projects/alinea/calendrier-a4-alinea-boutique-julien-privat.jpg"
// Agenda
import agendaAlinea1 from "../../../assets/global/projects/alinea/agenda-a5-1ere-de-couverture-alinea-boutique-julien-privat.jpg"
import agendaAlinea2 from "../../../assets/global/projects/alinea/agenda-a5-memorandum-alinea-boutique-julien-privat.jpg"
import agendaAlinea3 from "../../../assets/global/projects/alinea/agenda-a5-calendrier-alinea-boutique-julien-privat.jpg"
import agendaAlinea4 from "../../../assets/global/projects/alinea/agenda-a5-planning-semaine-alinea-boutique-julien-privat.jpg"
import agendaAlinea5 from "../../../assets/global/projects/alinea/agenda-a5-panneaux-alinea-boutique-julien-privat.jpg"
import agendaAlinea6 from "../../../assets/global/projects/alinea/agenda-a5-4eme-de-couverture-alinea-boutique-julien-privat.jpg"



import imgCorreEtAssociees from "../../../assets/global/projects/corre-et-associees/cartes-de-visites-mockup-corre-et-associees-axe-1-2.jpg"

function AlineaBoutique() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const fullscreenSectionRef = useRef<HTMLElement>(null)
  const fullscreenImgRef = useRef<HTMLImageElement>(null)
  const isMobile = useMobile()

  const fichesAlinea = [
    { src: agendaAlinea1, label: "Couverture" },
    { src: agendaAlinea2, label: "Mémorandum" },
    { src: agendaAlinea3, label: "Calendrier" },
    { src: agendaAlinea4, label: "Planning de la semaine" },
    { src: agendaAlinea5, label: "Panneaux" },
    { src: agendaAlinea6, label: "Quatrième de couverture" },
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
        <h1 className="projects-details__hero--title">Alinea Boutique</h1>
        <div className="projects-details__hero--div">
            <img className="projects-details__hero--image" src={isMobile ? logoPresentationAlineaVertical : logoPresentationAlineaHorizontal} alt="Hero image - Alinea" />
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

        {/* Double image vertical */}
        <section className="projects-details__double-image--section projects-details__wrapper">
          <div className="projects-details__double-image--div projects-details__wrapper--70">
            <img className="projects-details__double-image--image" src={cdvDouble} alt="Cartes de visites - Alinea Boutique" />
            <img className="projects-details__double-image--image" src={cdvFinitions} alt="Cartes de visites fînitions - Alinea Boutique" />
          </div>
        </section>

        {/* Image 70% */}
        <section className="projects-details__stacked-images--section">
          <div className="projects-details__stacked-images--div">
            <div className="flex justify-between w-full mb-4">
              <p className="projects-details__deliverable--title">Dépliant - Extérieur / Intérieur</p>
              <p className="projects-details__deliverable--format">160 mm - 90 mm x 8 volets</p>
            </div>
            <img
              className="projects-details__stacked-images--image"
              src={depliantExterieur}
              alt="Extérieur - Brasserie du Paon"
            />
            <img
              className="projects-details__stacked-images--image"
              src={depliantInterieur}
              alt="Intérieur - Brasserie du Paon"
            />
            <div className="flex flex-col justify-center w-full mt-4 mb-4">
              <p className="projects-details__text text-center">Ce dépliant est un outil destiné aux clients, aux commerciaux mais surtout aux travailleurs de terrain.</p>
              <p className="projects-details__text text-center">On retrouve l'essentiel des panneaux mais aussi les spécificités de gamme, les volets lui permettent d'avoir un format compact et aisément manipulable.</p>
            </div>
          </div>
        </section>

        {/* Image 70% - full height */}
        <section className="projects-details__contained-image--section projects-details__wrapper">
          <div className="projects-details__contained-image--div">
            <div className="flex justify-between w-full mb-4">
              <p className="projects-details__deliverable--title">Poster</p>
              <p className="projects-details__deliverable--format">1200 mm - 800 mm</p>
            </div>
            <img
              className="projects-details__contained-image--image"
              src={poster}
              alt="Poster grand format"
            />
          </div>
        </section>

        {/* Image 70% */}
        <section className="projects-details__image--section projects-details__wrapper">
          <div className="projects-details__image-70--div">
            <img className="projects-details__image--image" src={mementoA5} alt="Memento au format A5" />
          </div>
        </section>

        {/* Image 70% */}
        <section className="projects-details__image--section projects-details__wrapper">
          <div className="projects-details__image-70--div">
            <img className="projects-details__image--image" src={calendrierA4} alt="Calendrier au format A4" />
          </div>
        </section>

        {/* Image verticale */}
        <InfiniteCarousel fiches={fichesAlinea} />


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

export default AlineaBoutique