import { useEffect, useRef, useState, type CSSProperties } from "react"
import { useMobile } from "../../hooks/useMobile"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { initTextRollHover } from "../../utils/textRollHover"
import "./Home.scss"
import Seo from "../../components/Seo/Seo"
import { personSchema } from "../../components/Seo/structuredData"
import Logo from "../../assets/global/logo-beige-julien-privat.svg"
import PromiseSymbol from "../../assets/global/symbole-julien-privat.svg"
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
    bgColor: "#150e0a", // à ajuster : couleur la plus foncée de l'image
  },
  {
    title: "Blayaise d'Expertise Comptable",
    srcHorizontal: blayaiseLogoH,
    srcVertical: blayaiseLogoV,
    href: "/projets/blayaise-expertise-comptable",
    widthH: 1400, heightH: 900, widthV: 1000, heightV: 1400,
    bgColor: "#3d0f12", // à ajuster : couleur la plus foncée de l'image
  },
  {
    title: "Alinea Boutique",
    srcHorizontal: alineaLogoH,
    srcVertical: alineaLogoV,
    href: "/projets/alinea-boutique",
    widthH: 1400, heightH: 900, widthV: 1000, heightV: 1400,
    bgColor: "#141414", // à ajuster : couleur la plus foncée de l'image
  },
]

const services = [
  { num: "01", name: "Branding", items: ["Création de logotype", "Identité graphique", "Charte graphique", "Direction artistique"] },
  { num: "02", name: "Print", items: ["Cartes de visites", "Affiches / Dépliants / Brochures", "Papeterie", "Signalétique"] },
  { num: "03", name: "Digital", items: ["Création de maquettes web", "Assets pour les réseaux sociaux", "Création d'assets pour les sites et apps", "Évolution vers un projet digital", "Optimisation du référencement naturel"] },
  { num: "04", name: "Développement web", items: ["UI / UX Design", "Création de sites Wordpress", "Accompagnement en e-commerce", "Tests fonctionnels"] },
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
  const promiseHaloRef = useRef<HTMLDivElement>(null)
  const promiseMarkRef = useRef<HTMLDivElement>(null)
  const lastProjectsLinkRef = useRef<HTMLAnchorElement>(null)
  const [slides, setSlides] = useState({ active: 0, previous: -1 })
  const [openService, setOpenService] = useState<number | null>(null)
  const isMobile = useMobile()
  const navigate = useNavigate()
  const activeSlide = slides.active

  // CTA "Voir tous les projets" : texte en roll au survol
  useEffect(() => {
    if (!lastProjectsLinkRef.current) return
    return initTextRollHover(lastProjectsLinkRef.current, ".home__last-projects--link-text")
  }, [])

  // Halo "lever de soleil" de la section Promesse : monte au scroll en gagnant en intensité.
  // Plage de déclenchement volontairement plus courte que la traversée complète de la section
  // (top bottom → 75% top) pour que le changement par pixel scrollé reste net et visible.
  useEffect(() => {
    if (!promiseHaloRef.current) return

    gsap.fromTo(
      promiseHaloRef.current,
      { y: "24vh", opacity: 0.12 },
      {
        y: "-10vh",
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".home__promise--section",
          start: "top bottom",
          end: "75% top",
          scrub: 0.8,
        },
      }
    )
  }, [])

  // Symbole du logo dans le halo : apparition en fondu, du bas vers le haut, avec un
  // léger délai (0.8s — déjà en secondes pour GSAP, pas de conversion en ms nécessaire).
  useEffect(() => {
    if (!promiseMarkRef.current) return

    gsap.fromTo(
      promiseMarkRef.current,
      { y: "6vh", opacity: 0 },
      {
        y: 0,
        opacity: 0.1,
        duration: 1.4,
        delay: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".home__promise--section",
          start: "top 92%",
        },
      }
    )
  }, [])

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
      setSlides((s) => ({ active: (s.active + 1) % carouselSlides.length, previous: s.active }))
    }, 5000)
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
          // Sans ça, GSAP laisse un transform inline même à y:0, ce qui bloque
          // ensuite tout transform CSS (ex. le décalage au hover de --row-name).
          clearProps: "transform",
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
      <section
        className="home__hero--section"
        style={{ backgroundColor: carouselSlides[activeSlide].bgColor }}
      >
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
          {carouselSlides.map((slide, i) => {
            const isActive = i === slides.active
            const isPrevious = i === slides.previous
            return (
              <div
                key={i}
                className={`home__hero--slide ${isActive ? "home__hero--slide-active" : ""} ${isPrevious ? "home__hero--slide-previous" : ""}`}
              >
                <img
                  src={isMobile ? slide.srcVertical : slide.srcHorizontal}
                  alt={`Identité de marque — ${slide.title}`}
                  width={isMobile ? slide.widthV : slide.widthH}
                  height={isMobile ? slide.heightV : slide.heightH}
                />
              </div>
            )
          })}
        </div>

        {/* Texte bas droite */}
        <div className="home__title--wrapper">
          <h1>Graphiste<br />/ Développeur web</h1>
        </div>
      </section>

      {/* Promesse */}
      <section
        className="home__promise--section"
        style={{ "--halo-mark-url": `url("${PromiseSymbol}")` } as CSSProperties}
      >
        <div className="home__promise--halo" ref={promiseHaloRef} aria-hidden="true">
          <div className="home__promise--halo-mark" ref={promiseMarkRef} />
        </div>
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
        <div className="home__my-services--list">
          {services.map((service, i) => (
            <a
              key={service.num}
              href="/services"
              className={`home__my-services--row${isMobile && openService === i ? " home__my-services--row--open" : ""}`}
              onClick={(e) => {
                if (!isMobile) return
                e.preventDefault()
                setOpenService((prev) => (prev === i ? null : i))
              }}
              aria-expanded={isMobile ? openService === i : undefined}
            >
              <span className="home__my-services--row-num">{service.num}</span>
              <span ref={(el) => addTitle(el, 4 + i)} className="home__my-services--row-name">{service.name}</span>
              <span className="home__my-services--row-toggle" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <ul ref={(el) => addText(el, 1 + i)} className="home__my-services--row-items">
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </a>
          ))}
        </div>
      </section>

      {/* Derniers projets */}
      <section className="home__last-projects--section">
        <div className="home__last-projects--header">
          <h3 ref={(el) => addTitle(el, 8)} className="home__last-projects--title">
            Derniers projets
          </h3>
          <a href="/projets" ref={lastProjectsLinkRef} className="home__last-projects--link">
            <span className="home__last-projects--link-inner">
              <span className="home__last-projects--link-text">Voir tous les projets</span>
            </span>
          </a>
        </div>

        <ProjectsCarousel projects={lastProjects} />
      </section>
    </>
  )
}

export default Home