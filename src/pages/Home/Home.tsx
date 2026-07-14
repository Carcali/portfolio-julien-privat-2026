import { useEffect, useRef, useState } from "react"
import { useMobile } from "../../hooks/useMobile"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Home.scss"
import Seo from "../../components/Seo/Seo"
import { personSchema } from "../../components/Seo/structuredData"
import Logo from "../../assets/global/logo-beige-julien-privat.svg"
import logoPresentationBrasserieDuPaon from "../../assets/global/projects/brasserie-du-paon/logo-presentation-2-brasserie-du-paon-julien-privat.jpg"
import logoPresentationBlayaise from "../../assets/global/projects/blayaise-dexpertise-comptable/logo-presentation-3-blayaise-expertise-comptable-julien-privat.jpg"
import logoPresentationMontgaillard from "../../assets/global/projects/montgaillard/logo-presentation-2-montgaillard-julien-privat.jpg"
import logoPresentationElfortGroupe from "../../assets/global/projects/elfort-groupe/logo-presentation-2-elfort-groupe-julien-privat.jpg"
import logoPresentationLocavigne from "../../assets/global/projects/locavigne/logo-presentation-2-locavigne-julien-privat.jpg"
import logoPresentationAlinea from "../../assets/global/projects/alinea/logo-presentation-2-alinea-boutique-julien-privat.jpg"
import ProjectsCarousel from "../../components/ProjectCarousel/ProjectCarousel"

import brasserieTonneau from "../../assets/global/projects/brasserie-du-paon/tonneau-peint-brasserie-du-paon-1.jpg"
import brasserieLogoV from "../../assets/global/projects/brasserie-du-paon/logo-presentation-2-brasserie-du-paon-julien-privat.jpg"
import blayaiseLogoH from "../../assets/global/projects/blayaise-dexpertise-comptable/logo-presentation-blayaise-expertise-comptable-julien-privat.jpg"
import blayaiseLogoV from "../../assets/global/projects/blayaise-dexpertise-comptable/logo-presentation-3-blayaise-expertise-comptable-julien-privat.jpg"
import alineaLogoH from "../../assets/global/projects/alinea/logo-presentation-alinea-boutique-julien-privat.jpg"
import alineaLogoV from "../../assets/global/projects/alinea/logo-presentation-2-alinea-boutique-julien-privat.jpg"

const carouselSlides = [
  {
    title: "Brasserie du Paon",
    srcHorizontal: brasserieTonneau,
    srcVertical: brasserieLogoV,
    href: "/projets/brasserie-du-paon",
    widthH: 1400, heightH: 1000, widthV: 1000, heightV: 1400,
  },
  {
    title: "Blayaise d'Expertise Comptable",
    srcHorizontal: blayaiseLogoH,
    srcVertical: blayaiseLogoV,
    href: "/projets/blayaise-expertise-comptable",
    widthH: 1400, heightH: 900, widthV: 1000, heightV: 1400,
  },
  {
    title: "Alinea Boutique",
    srcHorizontal: alineaLogoH,
    srcVertical: alineaLogoV,
    href: "/projets/alinea-boutique",
    widthH: 1400, heightH: 900, widthV: 1000, heightV: 1400,
  },
]

const lastProjects = [
  { id: 1, title: "Brasserie du Paon", date: "2022", image: logoPresentationBrasserieDuPaon, href: "/projets/brasserie-du-paon" },
  { id: 2, title: "Blayaise d'Expertise Comptable", date: "2022", image: logoPresentationBlayaise, href: "/projets/blayaise-expertise-comptable" },
  { id: 3, title: "Montgaillard", date: "2022", image: logoPresentationMontgaillard, href: "/projets/montgaillard" },
  { id: 4, title: "Elfort Groupe", date: "2022", image: logoPresentationElfortGroupe, href: "/projets/elfort-groupe" },
  { id: 5, title: "Locavigne", date: "2022", image: logoPresentationLocavigne, href: "/projets/locavigne" },
  { id: 6, title: "Alinea Boutique", date: "2021", image: logoPresentationAlinea, href: "/projets/alinea-boutique" },
]

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const titlesRef = useRef<(HTMLElement | null)[]>([])
  const textsRef = useRef<(HTMLElement | null)[]>([])
  const heroLogoRef = useRef<HTMLImageElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const isMobile = useMobile()
  const navigate = useNavigate()

  // Logo héro : scale down au scroll
  useEffect(() => {
    if (!heroLogoRef.current) return

    gsap.fromTo(
      heroLogoRef.current,
      { scale: 1, opacity: 1 },
      {
        scale: 0.214, // ratio 3rem / 14rem pour matcher exactement le header
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".home__hero--section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,        // scrub avec inertie pour le smooth
          toggleActions: "play reverse play reverse",
        },
      }
    )
  }, [])

  // Carousel auto
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  // Animations scroll (titres + textes) — fix : on anime chaque élément indépendamment
  useEffect(() => {
    const titleEls = titlesRef.current.filter(Boolean)
    const textEls = textsRef.current.filter(Boolean)

    titleEls.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
          },
        }
      )
    })

    textEls.forEach((el) => {
      if (!el) return
      gsap.fromTo(
        Array.from(el.children),
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
          },
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  const addTitle = (el: HTMLElement | null, i: number) => { titlesRef.current[i] = el }
  const addText = (el: HTMLElement | null, i: number) => { textsRef.current[i] = el }

  return (
    <>
      <Seo
        title="Julien PRIVAT — Graphiste & Développeur web freelance"
        description="Graphiste et développeur web freelance. Identité de marque, sites web et direction artistique, avec une prédilection pour la viticulture, l'artisanat et le luxe."
        path="/"
        jsonLd={personSchema}
      />
      <section className="home__hero--section">
        {/* Logo héro agrandi */}
        <img
          src={Logo}
          alt="Logo Julien Privat"
          width={843}
          height={158}
          className="home__hero--logo"
        />

        {/* Carousel centré */}
        <div
          className="home__hero--carousel"
          onClick={() => navigate(carouselSlides[activeSlide].href)}
          style={{ cursor: "pointer" }}
        >
          {carouselSlides.map((slide, i) => (
            <div
              key={i}
              className={`home__hero--slide ${i === activeSlide ? "home__hero--slide-active" : ""}`}
            >
              <img
                src={isMobile ? slide.srcVertical : slide.srcHorizontal}
                alt={`Identité de marque — ${slide.title}`}
                width={isMobile ? slide.widthV : slide.widthH}
                height={isMobile ? slide.heightV : slide.heightH}
              />
            </div>
          ))}
        </div>

        {/* Texte bas droite */}
        <div className="home__title--wrapper">
          <h1>Graphiste<br />/ Développeur web</h1>
        </div>
      </section>

      {/* Promesse */}
      <section className="home__promise--section">
        <div className="home__promise--asking" ref={(el) => addText(el, 0)}>
          <p>Savez-vous ce que vous venez chercher ?</p>
          <p>Ce n'est pas grave, nous sommes là pour le définir ensemble.</p>
        </div>
        <div className="home__promise--catchphrase">
          <p ref={(el) => addTitle(el, 2)}>
            Redécouvrons vos qualités, une relation de confiance couplée à des recherches cadrées pour un résultat incontestable.
          </p>
        </div>
      </section>

      {/* Mes services */}
      <section className="home__my-services--section">
        <Link to="/services" className="home__my-services--section-title">
          <span ref={(el) => addTitle(el, 3)} className="home__my-services--section-title-text">
            Mes services
          </span>
        </Link>
        <div className="home__my-services--grid">
          <div className="home__my-services--unity">
            <p ref={(el) => addTitle(el, 4)} className="home__my-services--title">1. Branding</p>
            <ul ref={(el) => addText(el, 1)} className="home__my-services--list">
              <li>Création de logotype</li>
              <li>Identité graphique</li>
              <li>Charte graphique</li>
              <li>Direction artistique</li>
            </ul>
          </div>
          <div className="home__my-services--unity">
            <p ref={(el) => addTitle(el, 5)} className="home__my-services--title">2. Print</p>
            <ul ref={(el) => addText(el, 2)} className="home__my-services--list">
              <li>Cartes de visites</li>
              <li>Affiches / Dépliants / Brochures</li>
              <li>Papeterie</li>
              <li>Signalétique</li>
            </ul>
          </div>
          <div className="home__my-services--unity">
            <p ref={(el) => addTitle(el, 6)} className="home__my-services--title">3. Digital</p>
            <ul ref={(el) => addText(el, 3)} className="home__my-services--list">
              <li>Création de maquettes web</li>
              <li>Assets pour les réseaux sociaux</li>
              <li>Création d'assets pour les sites et apps</li>
              <li>Évolution vers un projet digital</li>
              <li>Optimisation du référencement naturel</li>
            </ul>
          </div>
          <div className="home__my-services--unity">
            <p ref={(el) => addTitle(el, 7)} className="home__my-services--title">4. Développement web</p>
            <ul ref={(el) => addText(el, 4)} className="home__my-services--list">
              <li>UI / UX Design</li>
              <li>Création de sites Wordpress</li>
              <li>Accompagnement en e-commerce</li>
              <li>Tests fonctionnels</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Les derniers projets */}
      <section className="home__last-projects--section">
        <div className="home__last-projects--header">
          <h3 ref={(el) => addTitle(el, 8)} className="home__last-projects--title">
            Les derniers projets
          </h3>
          <a href="/projets" className="home__last-projects--link">Voir tous les projets</a>
        </div>

        <ProjectsCarousel projects={lastProjects} />
      </section>
    </>
  )
}

export default Home