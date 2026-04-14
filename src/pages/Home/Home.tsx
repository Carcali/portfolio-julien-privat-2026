import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Home.scss"
import Logo from "../../assets/global/logo-beige-julien-privat.svg"
import tonneauMarron1 from "../../assets/global/projects/brasserie-du-paon/tonneau-peint-brasserie-du-paon-1.jpg"
import logoPresentationBlayaise from "../../assets/global/projects/blayaise-dexpertise-comptable/logo-presentation-2-blayaise-expertise-comptable-julien-privat.jpg"
import logoPresentationMontgaillard from "../../assets/global/projects/montgaillard/logo-presentation-montgaillard-julien-privat.jpg"
import ProjectsCarousel from "../../components/ProjectCarousel/ProjectCarousel"

const lastProjects = [
  { id: 1, title: "Brasserie du Paon", date: "2022", image: tonneauMarron1, href: "/projets/brasserie-du-paon" },
  { id: 2, title: "Blayaise d'Expertise Comptable", date: "2022", image: logoPresentationBlayaise, href: "/projets/blayaise-expertise-comptable" },
  { id: 3, title: "Montgaillard",          date: "2022", image: logoPresentationMontgaillard,  href: "/projets/montgaillard" },
  { id: 4, title: "Elfort Groupe",      date: "2022", image: tonneauMarron1,     href: "/projets/elfort-groupe" },
  { id: 5, title: "Blayaise d'Expertise", date: "2022", image: tonneauMarron1, href: "/projets/blayaise" },
]

// ↓ Déclare ici tes images de carousel avec leur lien projet
const carouselSlides = [
  { src: "/src/assets/global/projects/brasserie-du-paon/tonneau-peint-brasserie-du-paon-1.jpg", href: "/projets/brasserie-du-paon" },
  { src: "/src/assets/global/projects/corre-et-associees/cartes-de-visites-mockup-corre-et-associees-axe-1-2.jpg", href: "/projets/corre-associees" },
  { src: "/src/assets/global/projects/vrac/julien-privat-graphisme-akuma-bait-cartes-de-visites.jpg" },
]

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const titlesRef = useRef<(HTMLElement | null)[]>([])
  const textsRef = useRef<(HTMLElement | null)[]>([])
  const heroLogoRef = useRef<HTMLImageElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

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
      <section className="home__hero--section">
        {/* Logo héro agrandi */}
        <img
          src={Logo}
          alt="Logo Julien Privat"
          className="home__hero--logo"
        />

        {/* Carousel centré */}
        <div className="home__hero--carousel">
          {carouselSlides.map((slide, i) => (
            <Link
              key={i}
              to={slide.href}
              className={`home__hero--slide ${i === activeSlide ? "home__hero--slide-active" : ""}`}
            >
              <img src={slide.src} alt={`Projet ${i + 1}`} />
            </Link>
          ))}
        </div>

        {/* Texte bas droite */}
        <div className="home__title--wrapper">
          <p>Graphiste</p>
          <p>/ Développeur web</p>
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
              <li>Contenu pour les réseaux sociaux</li>
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