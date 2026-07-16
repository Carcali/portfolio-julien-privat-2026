import { useEffect, useRef } from "react"
import "./About.scss"
import Seo from "../../components/Seo/Seo"
import { initTextRollHover } from "../../utils/textRollHover"
import imageHero from "../../assets/global/photo-julien-privat-graphiste-developpeur-web-2026.jpg"
import cv from "../../assets/global/CV-PRIVAT-JULIEN-DEVELOPPEUR-WEB-GRAPHISTE.pdf";

function About() {
  const cvLinkRef = useRef<HTMLAnchorElement>(null)

  // CTA "Découvrir mon CV" : texte en roll au survol
  useEffect(() => {
    if (!cvLinkRef.current) return
    return initTextRollHover(cvLinkRef.current, ".about__presentation--link-cv-text")
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
    </>
  )
}

export default About