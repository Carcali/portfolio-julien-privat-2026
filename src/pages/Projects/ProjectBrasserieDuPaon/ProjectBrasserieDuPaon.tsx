import "./../Projects.scss"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import placeholder from "../../../assets/global/projects/brasserie-du-paon/hero-image-placeholder.jpg"
import imgPlaceholder from "../../../assets/global/projects/brasserie-du-paon/mockup-test.jpg"
import imgCorreEtAssociees from "../../../assets/global/projects/corre-et-associees/cartes-de-visites-mockup-corre-et-associees-axe-1-2.jpg"
import LogoLight from "../../../assets/global/logo-beige-julien-privat.svg"
import LogoDark from "../../../assets/global/logo-black-julien-privat.svg"

function ProjectBrasserieDuPaon() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)

  // ← Sorti du useEffect, au niveau du composant
  const [activeColor, setActiveColor] = useState<string | null>(null)

  const handleColorClick = (color: string) => {
    setActiveColor(prev => prev === color ? null : color)
  }

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
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className="projects-details__hero--section">
        <h1 className="projects-details__hero--title">Brasserie du Paon</h1>
        <div className="projects-details__hero--div">
          <img className="projects-details__hero--image" src={placeholder} alt="Projet 1" />
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
                Retrouver le côté artisanal avec le savoir-faire et l'expertise. L'accompagnement d'une identité sur-mesure, connectant le monde physique avec l'impression et l'immatériel avec le digital. Connexion entre l'élégance et la légèreté
              </p>
            </div>
            <div className="projects-details__brief--unity">
              <p className="projects-details__deliverables--title">Livrables</p>
              <ul className="projects-details__deliverables--list">
                <li>Cartes de visites</li>
                <li>Affiches / Dépliants / Brochures</li>
                <li>Papeterie</li>
                <li>Signalétique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Combinations */}
      <section className="projects-details__combinations--section projects-details__wrapper">
        <div className="projects-details__wrapper--70">
          <p className="projects-details__combinations--title">Combinaisons</p>
          <div className="projects-details__combinations--grid">
            <div className="projects-details__combinations--card projects-details__combinations--card-orange">
              <img className="projects-details__combinations--logo" src={LogoLight} alt="Logo variante terracotta" />
            </div>
            <div className="projects-details__combinations--card projects-details__combinations--card-aegean">
              <img className="projects-details__combinations--logo" src={LogoLight} alt="Logo variante ardoise" />
            </div>
            <div className="projects-details__combinations--card projects-details__combinations--card-beige">
              <img className="projects-details__combinations--logo" src={LogoDark} alt="Logo variante crème" />
            </div>
            <div className="projects-details__combinations--card projects-details__combinations--card-olive">
              <img className="projects-details__combinations--logo" src={LogoLight} alt="Logo variante olive" />
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="projects-details__colors--section projects-details__wrapper">
        <div className="projects-details__wrapper--70">
          <p className="projects-details__combinations--title">Couleurs</p>
          <div className="projects-details__colors--grid">
            <div
              className={`projects-details__colors--card projects-details__colors--card-black projects-details__colors--card-large ${activeColor === 'black' ? 'is-active' : ''}`}
              onClick={() => handleColorClick('black')}
            >
              <span className="projects-details__colors--label">60</span>
            </div>
            <div className="projects-details__colors--right-col">
              <div className="projects-details__colors--top-row">
                <div
                  className={`projects-details__colors--card projects-details__colors--card-olive projects-details__colors--card-wide ${activeColor === 'olive' ? 'is-active' : ''}`}
                  onClick={() => handleColorClick('olive')}
                >
                  <span className="projects-details__colors--label"></span>
                </div>
                <div
                  className={`projects-details__colors--card projects-details__colors--card-aegean projects-details__colors--card-square ${activeColor === 'aegean' ? 'is-active' : ''}`}
                  onClick={() => handleColorClick('aegean')}
                >
                  <span className="projects-details__colors--label"></span>
                </div>
              </div>
              <div className="projects-details__colors--bottom-row">
                <div
                  className={`projects-details__colors--card projects-details__colors--card-beige projects-details__colors--card-wide ${activeColor === 'beige' ? 'is-active' : ''}`}
                  onClick={() => handleColorClick('beige')}
                >
                  <span className="projects-details__colors--label">30</span>
                </div>
                <div
                  className={`projects-details__colors--card projects-details__colors--card-orange projects-details__colors--card-square ${activeColor === 'orange' ? 'is-active' : ''}`}
                  onClick={() => handleColorClick('orange')}
                >
                  <span className="projects-details__colors--label">10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonts pairing */}
      <section className="projects-details__fonts-pairing--section projects-details__wrapper">
        <div className="projects-details__wrapper--70">
          <p className="projects-details__fonts-pairing--title">Fonts pairing</p>
          <div className="projects-details__fonts-pairing--container">
            <p className="projects-details__fonts-pairing--principal-title">Noah Text</p>
            <div className="projects-details__fonts-pairing--principal-text">
              <p>Typographie</p>
              <p>Principale</p>
            </div>
            <p className="projects-details__fonts-pairing--secondary-title">Compadre</p>
            <div className="projects-details__fonts-pairing--secondary-text">
              <p>Typographie</p>
              <p>Secondaire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image fullwidth */}
      <section className="projects-details__image--section projects-details__wrapper">
        <div className="projects-details__wrapper--100">
          <img className="projects-details__image--image" src={imgPlaceholder} alt="Projet 1" />
        </div>
      </section>

      {/* Double image vertical */}
      <section className="projects-details__double-image--section projects-details__wrapper">
        <div className="projects-details__double-image--div projects-details__wrapper--100">
          <img className="projects-details__double-image--image" src={imgPlaceholder} alt="Projet 1" />
          <img className="projects-details__double-image--image" src={imgPlaceholder} alt="Projet 1" />
        </div>
      </section>

      {/* Image 70% */}
      <section className="projects-details__image-70--section projects-details__wrapper">
        <div className="projects-details__image-70--div projects-details__wrapper--70">
          <img className="projects-details__image-70--image" src={imgPlaceholder} alt="Projet 1" />
        </div>
      </section>

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

export default ProjectBrasserieDuPaon