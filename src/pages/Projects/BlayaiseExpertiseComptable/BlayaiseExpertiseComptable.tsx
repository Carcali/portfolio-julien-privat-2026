import "./../Projects.scss"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectColors from "../../../components/ProjectColors/ProjectColors"
import ProjectCombinations from "../../../components/ProjectCombinations/ProjectCombinations"
import FontsPairing from "../../../components/FontsPairing/FontsPairing"

gsap.registerPlugin(ScrollTrigger)

import logoPresentationBlayaise from "../../../assets/global/projects/blayaise-dexpertise-comptable/logo-presentation-blayaise-expertise-comptable-julien-privat.jpg"
import cdvRouge from "../../../assets/global/projects/blayaise-dexpertise-comptable/cartes-de-visites-blayaise-expertise-comptable-julien-privat.jpg"
import couvertureDossier1 from "../../../assets/global/projects/blayaise-dexpertise-comptable/1ere-couverture-de-dossier-recto-blayaise-expertise-comptable-julien-privat.jpg"
import couvertureDossier2 from "../../../assets/global/projects/blayaise-dexpertise-comptable/4eme-couverture-de-dossier-recto-blayaise-expertise-comptable-julien-privat.jpg"
import facture from "../../../assets/global/projects/blayaise-dexpertise-comptable/facture-a4-blayaise-expertise-comptable-julien-privat.jpg"
import bordereau from "../../../assets/global/projects/blayaise-dexpertise-comptable/bordereau-envoi-a4-blayaise-expertise-comptable-julien-privat.jpg"
import imgCorreEtAssociees from "../../../assets/global/projects/corre-et-associees/cartes-de-visites-mockup-corre-et-associees-axe-1-2.jpg"
import LogoRouge from "../../../assets/global/projects/blayaise-dexpertise-comptable/logo-complet-blayaise-rouge-cerise.svg"
import LogoGris from "../../../assets/global/projects/blayaise-dexpertise-comptable/logo-complet-blayaise-gris-pierre.svg"

function BlayaiseExpertiseComptable() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const fullscreenSectionRef = useRef<HTMLElement>(null)
  const fullscreenImgRef = useRef<HTMLImageElement>(null)

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
        <h1 className="projects-details__hero--title">Blayaise<br></br>d'Expertise Comptable</h1>
        <div className="projects-details__hero--div">
          <img className="projects-details__hero--image" src={logoPresentationBlayaise} alt="Hero image - Blayaise d'Expertise Comptable" />
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
        combinations={[
          {
            bgColor: '#c6152e',
            logo: LogoGris,
            alt: 'Logo variante rouge cerise'
          },
          {
            bgColor: '#faf4f3',
            logo: LogoRouge,
            alt: 'Logo gris pierre'
          },
          {
            bgColor: '#7e1018',
            logo: LogoGris,
            alt: 'Logo variante rouge cerise sombre'
          },
          {
            bgColor: '#ccbfc1',
            logo: LogoRouge,
            alt: 'Logo gris mauve'
          }
        ]}
      />

      {/* Colors */}
      <ProjectColors
        colors={[
          { hex: '#c6152e', label: '60', size: 'large', labelColor: '#faf4f3' },
          { gradient: '#7e1018, #c6152e', label: '', size: 'wide', dimmed: true },
          { hex: '#7e1018', label: '10', size: 'square', labelColor: '#faf4f3' },
          { hex: '#faf4f3', label: '30', size: 'wide', labelColor: '#c6152e' },
          { hex: '#ccbfc1', label: '', size: 'square', dimmed: true },
        ]}
      />

      {/* Fonts pairing */}
      <FontsPairing
        fonts={[
          {
            title: 'CosiTimes',
            subtitle: 'Typographie\nPrincipale',
            fontClass: 'cosi-bold',
            type: 'principal'
          },
          {
            title: 'Roboto',
            subtitle: 'Typographie\nSecondaire',
            fontClass: 'roboto-light',
            type: 'secondary'
          }
        ]}
      />

      {/* Image 70% */}
      <section className="projects-details__image--section projects-details__wrapper">
        <div className="projects-details__image-70--div projects-details__wrapper--70">
          <img className="projects-details__image--image" src={cdvRouge} alt="Cartes de visites rouges - Blayaise d'Expertise Comptable" />
        </div>
      </section>

      {/* Double image vertical */}
      <section className="projects-details__double-image--section projects-details__wrapper">
        <div className="projects-details__double-image--div projects-details__wrapper--70">
          <img className="projects-details__double-image--image" src={couvertureDossier1} alt="1ère de Couverture de dossier - Blayaise d'Expertise Comptable" />
          <img className="projects-details__double-image--image" src={couvertureDossier2} alt="4ème deCouverture de dossier - Blayaise d'Expertise Comptable" />
        </div>
      </section>

      {/* Double image vertical */}
      <section className="projects-details__double-image--section projects-details__wrapper">
        <div className="projects-details__double-image--div projects-details__wrapper--70">
          <img className="projects-details__double-image--image" src={facture} alt="Facture - Blayaise d'Expertise Comptable" />
          <img className="projects-details__double-image--image" src={bordereau} alt="Bordereau - Blayaise d'Expertise Comptable" />
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

export default BlayaiseExpertiseComptable