import "./../ProjectsDetails.scss"
import { useEffect, useRef } from "react"
import { useMobile } from "../../../hooks/useMobile"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectColors from "../../../components/ProjectColors/ProjectColors"
import ProjectCombinations from "../../../components/ProjectCombinations/ProjectCombinations"
import FontsPairing from "../../../components/FontsPairing/FontsPairing"

gsap.registerPlugin(ScrollTrigger)

import logoPresentationMontgaillardHorizontal from "../../../assets/global/projects/montgaillard/logo-presentation-montgaillard-julien-privat.jpg"
import logoPresentationMontgaillardVertical from "../../../assets/global/projects/montgaillard/logo-presentation-2-montgaillard-julien-privat.jpg"
import cdvVerte from "../../../assets/global/projects/montgaillard/cartes-de-visites-montgaillard-julien-privat.jpg"
import papierEnTete from "../../../assets/global/projects/montgaillard/papier-en-tete-montgaillard-julien-privat.jpg"
import photographieBrume from "../../../assets/global/projects/montgaillard/photographie-brume-plantation-houblon-montgaillard-julien-privat.jpg"
import photographieMains from "../../../assets/global/projects/montgaillard/photographie-mains-plantation-houblon-montgaillard-julien-privat.jpg"
import photographieTracteur from "../../../assets/global/projects/montgaillard/photographie-tracteur-plantation-houblon-montgaillard-julien-privat.jpg"
import photographieCochonKuneKune from "../../../assets/global/projects/montgaillard/photographie-cochons-kune-kune-dessus-montgaillard-julien-privat.jpg"
import photographieCeps from "../../../assets/global/projects/montgaillard/photographie-hiver-taille-ceps-montgaillard-julien-privat.jpg"
import photographieRegard from "../../../assets/global/projects/montgaillard/photographie-hiver-taille-regard-montgaillard-julien-privat.jpg"
import photographieCoupe from "../../../assets/global/projects/montgaillard/photographie-hiver-taille-coupe-montgaillard-julien-privat.jpg"

import logoSymboleCielPeche from "../../../assets/global/projects/montgaillard/logo-montgaillard-symbole-ciel-peche.svg"
import logoNomVertBouteille from "../../../assets/global/projects/montgaillard/logo-montgaillard-nom-vert-bouteille.svg"
import logoCompletCielPeche from "../../../assets/global/projects/montgaillard/logo-montgaillard-complet-ciel-peche.svg"

import logoPresentationElfortGroupeHorizontal from "../../../assets/global/projects/elfort-groupe/logo-presentation-elfort-groupe-julien-privat.jpg"

function Montgaillard() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const fullscreenSectionRef = useRef<HTMLElement>(null)
  const fullscreenImgRef = useRef<HTMLImageElement>(null)
  const isMobile = useMobile()

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
        <h1 className="projects-details__hero--title">Montgaillard</h1>
        <div className="projects-details__hero--div">
          <img className="projects-details__hero--image" src={isMobile ? logoPresentationMontgaillardVertical : logoPresentationMontgaillardHorizontal} alt="Hero image - Montgaillard" />
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
                Exploitation agricole girondine installée au cœur du Fronsadais, dont la diversité de productions — raisin, houblon, orge, fruits rouges, pommes et cochons kune-kune — en fait une entité bien plus large qu'un simple domaine viticole. Forte de cette pluralité, l'entreprise devait affirmer une identité capable de fédérer ses activités sans se confondre avec les codes classiques du secteur viticole. L'axe retenu mise sur des couleurs naturelles et une iconographie graphique forte, portée par la symbolique du paon et des formes florales pour traduire la diversité et la curiosité de Montgaillard.
              </p>
            </div>
            <div className="projects-details__brief--unity">
              <p className="projects-details__deliverables--title">Livrables</p>
              <ul className="projects-details__deliverables--list">
                <li>Identité / Logotype</li>
                <li>Cartes de visites</li>
                <li>Plaquettes commerciales</li>
                <li>Supports de présentation</li>
                <li>Signalétique</li>
                <li>Photographie</li>
                <li>Relations presses</li>
                <li>Optimisation de process</li>
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
            bgColor: '#11322d',
            logo: logoSymboleCielPeche,
            alt: 'Logo symbole ciel pêche'
          },
          {
            bgColor: '#fbd8c5',
            logo: logoNomVertBouteille,
            alt: 'Logo nom vert bouteille'
          },
          {
            bgColor: '#b56116',
            logo: logoCompletCielPeche,
            alt: 'Logo complet ciel pêche'
          }
        ]}
      />

      {/* Colors */}
      <ProjectColors
        colors={[
          { hex: '#11322d', label: '60', size: 'large', labelColor: '#b4be9e' },
          { hex: '#b4be9e', label: '', size: 'wide', dimmed: true },
          { hex: '#b56116', label: '10', size: 'square', labelColor: '#fbd8c5' },
          { hex: '#fbd8c5', label: '30', size: 'wide', labelColor: '#11322d' },
          { hex: '#cb9c46', label: '', size: 'square', dimmed: true },
        ]}
      />

      {/* Fonts pairing */}
      <FontsPairing
        fonts={[
          {
            title: 'TWENTIETH CENTURY',
            subtitle: 'Typographie\nPrincipale',
            fontClass: 'twentieth-century',
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
          <img className="projects-details__image--image" src={cdvVerte} alt="Cartes de visites vertes - Montgaillard" />
        </div>
      </section>

      {/* Image verticale */}
      <section className="projects-details__one-image--section projects-details__wrapper">
        <div className="projects-details__one-image--div projects-details__wrapper--70">
          <img
            className="projects-details__one-image--image"
            src={papierEnTete}
            alt="Papier d'en-tête - Montgaillard"
          />
        </div>
      </section>

      {/* ─── Photo story ──────────────────────────────────────────────────────── */}

      {/* Bloc ② — Texte intro à gauche + photo portrait à droite */}
      <section className="projects-details__photo-story--section projects-details__wrapper">
        <div className="projects-details__photo-story__intro--div projects-details__wrapper--70">
          <div className="projects-details__photo-story__intro--text">
            <p className="projects-details__photo-story__intro--title">Travail par l'image</p>
            <p className="projects-details__photo-story__intro--body">
              Photographier les différentes tâches de l'entreprise pour montrer la multitude d'activités ainsi que les valeurs transmises. Ces images sont le témoin d'une histoire écrite les mains dans la terre.
            </p>
            <p className="projects-details__photo-story__intro--meta"></p>
          </div>
          <div className="projects-details__photo-story__intro--image-div">
            <img
              className="projects-details__photo-story__intro--image"
              src={photographieCochonKuneKune}
              alt="placeholder portrait — remplacer"
            />
          </div>
        </div>
      </section>

      {/* Bloc ③ — Bande de 3 photos égales avec caption */}
      <section className="projects-details__photo-story--section projects-details__wrapper">
        <div className="projects-details__photo-story__strip--div projects-details__wrapper--70">
          {[
            { src: photographieCeps, id: "IMG_1393" },
            { src: photographieRegard, caption: "La transmission entre les générations est la source principale d'apprentissage", id: "IMG_1400" },
            { src: photographieCoupe, id: "IMG_1363" },
          ].map((photo) => (
            <div key={photo.id} className="projects-details__photo-story__strip--item">
              <img
                className="projects-details__photo-story__strip--image"
                src={photo.src}
                alt={`placeholder — ${photo.caption}`}
              />
              <p className="projects-details__photo-story__strip--caption">{photo.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bloc ④ — 2 photos paysage côte à côte */}
      <section className="projects-details__photo-story--section projects-details__wrapper">
        <div className="projects-details__photo-story__split--div projects-details__wrapper--70">
          <img
            className="projects-details__photo-story__split--image-main"
            src={photographieTracteur}
            alt="placeholder paysage 1 — remplacer"
          />
          <img
            className="projects-details__photo-story__split--image-main"
            src={photographieMains}
            alt="placeholder paysage 2 — remplacer"
          />
        </div>
      </section>

      {/* Image 100% plein écran */}
      <section
        ref={fullscreenSectionRef}
        className="projects-details__image-full--section projects-details__image-full--section-fullscreen"
      >
        <img
          ref={fullscreenImgRef}
          className="projects-details__image-full--image projects-details__image-full--image-fullscreen"
          src={photographieBrume}
          alt="Dossier de présentation - Brasserie du Paon"
        />
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}

      {/* Projet suivant */}
      <section ref={sectionRef} className="projects-details__related--div">
        <img
          ref={imgRef}
          className="projects-details__related--img"
          src={logoPresentationElfortGroupeHorizontal}
          alt="Projet suivant"
        />
        <div className="projects-details__related--text-div">
          <p ref={titleRef} className="projects-details__related--title">
            <span>Elfort Groupe</span>
          </p>
          <a href="/projets/elfort-groupe" className="projects-details__related--btn">
            Voir le projet suivant
          </a>
        </div>
      </section>
    </>
  )
}

export default Montgaillard