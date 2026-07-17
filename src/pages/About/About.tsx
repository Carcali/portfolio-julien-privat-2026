import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./About.scss"
import Seo from "../../components/Seo/Seo"
import { initTextRollHover } from "../../utils/textRollHover"
import imageHero from "../../assets/global/photo-julien-privat-graphiste-developpeur-web-2026.jpg"
import cv from "../../assets/global/CV-PRIVAT-JULIEN-DEVELOPPEUR-WEB-GRAPHISTE.pdf";

gsap.registerPlugin(ScrollTrigger)

type ParcoursStep = {
  date: string
  location: string
  title: string
  text: string
}

const parcours: ParcoursStep[] = [
  {
    date: "2017 — 2020",
    location: "Gradignan",
    title: "Diplôme ESAA Aquitaine",
    text: "Communication visuelle, spécialisation conception graphique (équivalent Master 1), complétée par des stages en agence (Les Ortigues, Emmanuelle Mury Graphiste).",
  },
  {
    date: "2019 — 2023",
    location: "Bordeaux et Gironde",
    title: "Graphiste freelance",
    text: "Print, digital, direction artistique et gestion de projets, sur site et en remote.",
  },
  {
    date: "2021 — 2022",
    location: "Saint-Germain-du-Puch",
    title: "Alinéa Signalisation",
    text: "Salariat : création et gestion de la communication print / digital, gestion d'un projet e-commerce (alinea-boutique.com).",
  },
  {
    date: "2023 — 2024",
    location: "Remote",
    title: "Wild Code School",
    text: "Formation intensive de développeur web (5 mois), spécialisation PHP, préparation au titre RNCP « Développeur web et web mobile ».",
  },
  {
    date: "2024 — Aujourd'hui",
    location: "Bordeaux / Nord-Gironde",
    title: "Développeur web & graphiste freelance",
    text: "Accompagnement de clients en identité de marque, sites web sur-mesure et direction artistique.",
  },
  {
    date: "Mai 2024 — Aujourd'hui",
    location: "Remote",
    title: "Piter VMS Solutions",
    text: "Développeur front-end & UI/UX Designer — conception et développement continu de l'interface d'une plateforme SaaS de gestion des prestataires (VMS).",
  },
]

function About() {
  const cvLinkRef = useRef<HTMLAnchorElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineProgressRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const addStep = (el: HTMLDivElement | null, i: number) => { stepsRef.current[i] = el }

  // CTA "Découvrir mon CV" : texte en roll au survol
  useEffect(() => {
    if (!cvLinkRef.current) return
    return initTextRollHover(cvLinkRef.current, ".about__presentation--link-cv-text")
  }, [])

  // Parcours : révélation des étapes au scroll + ligne de progression animée
  useEffect(() => {
    const steps = stepsRef.current.filter(Boolean)

    steps.forEach((el) => {
      if (!el) return
      const dot = el.querySelector<HTMLElement>(".about__parcours--step-dot")

      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            // Le dot reste rempli une fois l'étape atteinte, et redevient creux si on remonte au-dessus
            onEnter: () => dot?.classList.add("about__parcours--step-dot--filled"),
            onLeaveBack: () => dot?.classList.remove("about__parcours--step-dot--filled"),
          },
        }
      )
    })

    if (lineProgressRef.current && timelineRef.current) {
      gsap.fromTo(
        lineProgressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      )
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <>
      <Seo
        title="À propos — Julien PRIVAT, graphiste & développeur web"
        description="Je favorise le rapport humain et l'échange pour avancer, avec transparence sur ma méthode de travail et les solutions disponibles pour votre projet."
        path="/a-propos"
        image={imageHero}
        imageAlt="Portrait de Julien PRIVAT"
      />
      <section className="about__hero--section">
        <h1 className="about__hero--title">À propos</h1>
        <img className="about__hero--image" src={imageHero} alt="Portrait de Julien PRIVAT" width={500} height={700} />
      </section>
      <section className="about__presentation--section">
        <h2 className="about__presentation--title">Faisons les présentations</h2>
        <p className="about__presentation--text">Je favorise le rapport humain et l’échange pour avancer, je suis transparent vis-à-vis de ma méthode de travail ainsi que des contraintes et solutions disponibles. Il n’y a pas de questions bêtes n’hésitez pas à me contacter pour avoir des renseignements ou pour toute collaboration si vous avez déjà un projet en tête.</p>
        <p className="about__presentation--text-cv">Si vous voulez en savoir plus sur moi ou mon parcours n’hésitez pas à télécharger mon CV sur le bouton ci-dessous.</p>
        <a
          href={cv}
          download="CV_Julien_Privat.pdf"
          ref={cvLinkRef}
          className="about__presentation--link-cv"
        >
          <span className="about__presentation--link-cv-inner">
            <span className="about__presentation--link-cv-text">Découvrir mon CV</span>
          </span>
        </a>
      </section>
      <section className="about__parcours--section">
        <h2 className="about__parcours--title">Mon parcours</h2>
        <div className="about__parcours--timeline" ref={timelineRef}>
          <div className="about__parcours--line" />
          <div className="about__parcours--line-progress" ref={lineProgressRef} />
          {parcours.map((step, i) => (
            <div
              className={`about__parcours--step ${i % 2 === 0 ? "about__parcours--step-right" : "about__parcours--step-left"}`}
              key={step.title}
              ref={(el) => addStep(el, i)}
            >
              <span className="about__parcours--step-dot" />
              <div className="about__parcours--step-content">
                <div className="about__parcours--step-meta">
                  <span className="about__parcours--step-date">{step.date}</span>
                  <span className="about__parcours--step-location">{step.location}</span>
                </div>
                <h3 className="about__parcours--step-title">{step.title}</h3>
                <p className="about__parcours--step-text">{step.text}</p>
              </div>
              <div className="about__parcours--step-spacer" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About