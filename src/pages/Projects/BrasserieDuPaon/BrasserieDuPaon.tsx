import "./../ProjectsDetails.scss"
import "./BrasserieDuPaon.scss"
import { useEffect, useRef } from "react"
import { useMobile } from "../../../hooks/useMobile"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Seo from "../../../components/Seo/Seo"
import { creativeWorkSchema, breadcrumbSchema } from "../../../components/Seo/structuredData"
import { initTextRollHover } from "../../../utils/textRollHover"
import ProjectColors from "../../../components/ProjectColors/ProjectColors"
import ProjectCombinations from "../../../components/ProjectCombinations/ProjectCombinations"
import ProjectSliders from "../../../components/ProjectSliders/ProjectSliders"
import FontsPairing from "../../../components/FontsPairing/FontsPairing"

gsap.registerPlugin(ScrollTrigger)

import logoBrasserieDuPaonHorizontal from "../../../assets/global/projects/brasserie-du-paon/logo-tonneau-peint-brasserie-du-paon-julien-privat.jpg"
import logoBrasserieDuPaonVertical from "../../../assets/global/projects/brasserie-du-paon/logo-presentation-2-brasserie-du-paon-julien-privat.jpg"
import cdvOr from "../../../assets/global/projects/brasserie-du-paon/cartes-de-visites-or-brasserie-du-paon-julien-privat.jpg"
import cdvMarron from "../../../assets/global/projects/brasserie-du-paon/cartes-de-visites-marron-brasserie-du-paon-julien-privat.jpg"
import tonneauMarron2 from "../../../assets/global/projects/brasserie-du-paon/tonneau-peint-brasserie-du-paon-2.jpg"
import signaletiquePortail from "../../../assets/global/projects/brasserie-du-paon/signaletique-entree-portail-brasserie-du-paon-julien-privat.jpg"
import signaletiquePorte from "../../../assets/global/projects/brasserie-du-paon/signaletique-porte-entree-brasserie-du-paon-julien-privat.jpg"
import depliantInterieur from "../../../assets/global/projects/brasserie-du-paon/interieur-depliant-105mm-210mm-ferme-gamme-biere-du-paon-julien-privat.jpg"
import depliantExterieur from "../../../assets/global/projects/brasserie-du-paon/exterieur-depliant-105mm-210mm-ferme-gamme-biere-du-paon-julien-privat.jpg"
import papeterie from "../../../assets/global/projects/brasserie-du-paon/bon-de-livraison-grille-tarifaire-brasserie-du-paon-julien-privat.jpg"
import dossierPresentation from "../../../assets/global/projects/brasserie-du-paon/dossier-de-presentation-professionnel-marron-brasserie-du-paon-julien-privat.jpg"
import verreMousse from "../../../assets/global/projects/brasserie-du-paon/verre-mousse-brasserie-du-paon-julien-privat.jpg"
import bouteilleVerre from "../../../assets/global/projects/brasserie-du-paon/bouteille-verre-brasserie-du-paon-julien-privat.jpg"
import LogoBeige from "../../../assets/global/projects/brasserie-du-paon/logo-beige-complet-bieres-artisanales-brasserie-du-paon.svg"
import LogoOrange from "../../../assets/global/projects/brasserie-du-paon/logo-cuivre-biere-complet-bieres-artisanales-brasserie-du-paon.svg"

// ProjectSliders
import biereDuPaonLager from "../../../assets/global/projects/brasserie-du-paon/mockup-paysage-biere-gamme-biere-du-paon-lager-texte.jpg"
import biereDuPaonBlonde from "../../../assets/global/projects/brasserie-du-paon/mockup-paysage-biere-gamme-biere-du-paon-blonde-texte.jpg"
import biereDuPaonBlanche from "../../../assets/global/projects/brasserie-du-paon/mockup-paysage-biere-gamme-biere-du-paon-blanche-texte.jpg"
import biereDuPaonIPA from "../../../assets/global/projects/brasserie-du-paon/mockup-paysage-biere-gamme-biere-du-paon-ipa-texte.jpg"
import biereDuPaonBasilic from "../../../assets/global/projects/brasserie-du-paon/mockup-paysage-biere-gamme-biere-du-paon-basilic-texte.jpg"

import alienorLager from "../../../assets/global/projects/brasserie-du-paon/mockup-paysage-biere-gamme-alienor-lager-texte.jpg"
import alienorBlonde from "../../../assets/global/projects/brasserie-du-paon/mockup-paysage-biere-gamme-alienor-blonde-texte.jpg"
import alienorBlanche from "../../../assets/global/projects/brasserie-du-paon/mockup-paysage-biere-gamme-alienor-blanche-texte.jpg"
import alienorIPA from "../../../assets/global/projects/brasserie-du-paon/mockup-paysage-biere-gamme-alienor-ipa-texte.jpg"

import logoPresentationAlineaHorizontal from "../../../assets/global/projects/alinea/logo-presentation-alinea-boutique-julien-privat.jpg"

const BG_COLOR = "#150e0a" // couleur la plus foncée de l'image (cohérent avec le hero de Home)

function BrasserieDuPaon() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const fullscreenSectionRef = useRef<HTMLElement>(null)
  const fullscreenImgRef = useRef<HTMLImageElement>(null)
  const relatedBtnRef = useRef<HTMLAnchorElement>(null)
  const isMobile = useMobile()

  // Teinte le header et le footer (variable CSS globale) le temps de l'affichage de la page
  useEffect(() => {
    document.documentElement.style.setProperty("--project-bg-color", BG_COLOR)
    return () => { document.documentElement.style.removeProperty("--project-bg-color") }
  }, [])

  // Texte en roll au survol du CTA "Voir le projet suivant"
  useEffect(() => {
    if (!relatedBtnRef.current) return
    return initTextRollHover(relatedBtnRef.current, ".projects-details__related--btn-text")
  }, [])

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
    <div className="projects-details__page" style={{ backgroundColor: BG_COLOR }}>
      <Seo
        title="Brasserie du Paon — Identité de marque & print | Julien PRIVAT"
        description="Reprise et création d'une brasserie artisanale en circuit court : une identité ancrée dans son territoire, animée par l'héritage d'un lieu."
        path="/projets/brasserie-du-paon"
        image={logoBrasserieDuPaonHorizontal}
        imageAlt="Identité de marque Brasserie du Paon"
        type="article"
        jsonLd={[
          creativeWorkSchema({
            name: "Brasserie du Paon",
            description: "Reprise et création d'une brasserie artisanale en circuit court : une identité ancrée dans son territoire, animée par l'héritage d'un lieu.",
            path: "/projets/brasserie-du-paon",
            image: logoBrasserieDuPaonHorizontal,
            dateCreated: "2023",
            keywords: ["Branding", "Print"],
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Projets", path: "/projets" },
            { name: "Brasserie du Paon", path: "/projets/brasserie-du-paon" },
          ]),
        ]}
      />
      <section className="projects-details__hero--section">
        <h1 className="projects-details__hero--title">Brasserie du Paon</h1>
        <div className="projects-details__hero--div">
          <img
            className="projects-details__hero--image"
            src={isMobile ? logoBrasserieDuPaonVertical : logoBrasserieDuPaonHorizontal}
            alt="Hero - Brasserie du Paon"
            width={isMobile ? 1000 : 1400}
            height={isMobile ? 1400 : 900}
          />
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
                La Brasserie du Paon est animée par une envie : produire une bière artisanale ancrée dans son territoire. La brasserie s'appuie sur un réseau local de la matière première jusqu'à la distribution, avec une gamme permanente complétée par des bières de saison. En reprenant une brasserie déjà existante, l'entreprise devait affirmer une nouvelle identité capable d'incarner son projet artisanal et son ancrage local, sans renier l'héritage du lieu. L'axe retenu mise sur le savoir-faire et la curiosité, traduits par une communication qui valorise l'artisanat, l'immersion et la proximité des producteurs qui font vivre chaque recette.
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
            bgColor: '#432a1c',
            logo: LogoOrange,
            alt: 'Logo variante marron'
          },
          {
            bgColor: '#a5805e',
            logo: LogoBeige,
            alt: 'Logo variante or'
          },
          {
            bgColor: '#82755f',
            logo: LogoBeige,
            alt: 'Logo variante kaki'
          },
          {
            bgColor: '#d26114',
            logo: LogoBeige,
            alt: 'Logo variante orange'
          }
        ]}
      />

      {/* Colors */}
      <ProjectColors
        colors={[
          { hex: '#a5805e', label: '60', size: 'large', labelColor: '#fff3db' },
          { hex: '#432a1c', label: '', size: 'wide', dimmed: true },
          { hex: '#d26114', label: '10', size: 'square', labelColor: '#fff3db' },
          { hex: '#fff3db', label: '30', size: 'wide', labelColor: '#a5805e' },
          { hex: '#82755f', label: '', size: 'square', dimmed: true },
        ]}
      />

      {/* Fonts pairing */}
      <FontsPairing
        fonts={[
          {
            title: 'Playfair Display',
            subtitle: 'Typographie\nPrincipale',
            fontClass: 'playfair-semibold-italic',
            type: 'principal'
          },
          {
            title: 'Compadre',
            subtitle: 'Typographie\nSecondaire',
            fontClass: 'compadre-extended',
            type: 'secondary'
          }
        ]}
      />

      {/* Double image vertical */}
      <section className="projects-details__double-image--section projects-details__wrapper">
        <div className="projects-details__double-image--div projects-details__wrapper--70">
          <img className="projects-details__double-image--image" src={cdvOr} alt="Cartes de visites or - Brasserie du Paon" width={960} height={1080} loading="lazy" />
          <img className="projects-details__double-image--image" src={cdvMarron} alt="Cartes de visites marrons - Brasserie du Paon" width={960} height={1080} loading="lazy" />
        </div>
      </section>

      {/* Carousel - Étiquettes Bière du Paon */}
      <section className="projects-details__sliders--section">
        <div className="projects-details__sliders--wrapper">
          <ProjectSliders
            slides={[
              { thumbnail: biereDuPaonLager, mainImage: biereDuPaonLager, alt: "Bière Lager - Brasserie du Paon" },
              { thumbnail: biereDuPaonBlonde, mainImage: biereDuPaonBlonde, alt: "Bière Blonde - Brasserie du Paon" },
              { thumbnail: biereDuPaonBlanche, mainImage: biereDuPaonBlanche, alt: "Bière Blanche - Brasserie du Paon" },
              { thumbnail: biereDuPaonIPA, mainImage: biereDuPaonIPA, alt: "Bière IPA - Brasserie du Paon" },
              { thumbnail: biereDuPaonBasilic, mainImage: biereDuPaonBasilic, alt: "Bière Basilic - Brasserie du Paon" },
            ]}
          />
        </div>
      </section>

      {/* Carousel - Étiquettes Aliénor */}
      <section className="projects-details__sliders--section">
        <div className="projects-details__sliders--wrapper">
          <ProjectSliders
            slides={[
              { thumbnail: alienorLager, mainImage: alienorLager, alt: "Bière Lager - Brasserie du Paon" },
              { thumbnail: alienorBlonde, mainImage: alienorBlonde, alt: "Bière Blonde - Brasserie du Paon" },
              { thumbnail: alienorBlanche, mainImage: alienorBlanche, alt: "Bière Blanche - Brasserie du Paon" },
              { thumbnail: alienorIPA, mainImage: alienorIPA, alt: "Bière IPA - Brasserie du Paon" },
            ]}
          />
        </div>
      </section>

      {/* Double image vertical */}
      <section className="projects-details__double-image--section projects-details__wrapper">
        <div className="projects-details__double-image--div projects-details__wrapper--70">
          <img className="projects-details__double-image--image" src={bouteilleVerre} alt="Bouteille de verre - Brasserie du Paon" width={960} height={1080} loading="lazy" />
          <img className="projects-details__double-image--image" src={verreMousse} alt="Verre de mousse - Brasserie du Paon" width={960} height={1080} loading="lazy" />
        </div>
      </section>

      {/* Image 70% */}
      <section className="projects-details__image--section projects-details__wrapper">
        <div className="projects-details__image-70--div projects-details__wrapper--70">
          <img className="projects-details__image--image" src={tonneauMarron2} alt="Tonneau peint à la Brasserie 2" width={1400} height={900} loading="lazy" />
        </div>
      </section>

      {/* Double image vertical */}
      <section className="projects-details__double-image--section projects-details__wrapper">
        <div className="projects-details__double-image--div projects-details__wrapper--70">
          <img className="projects-details__double-image--image" src={signaletiquePortail} alt="Signalétique portail - Brasserie du Paon" width={1400} height={1000} loading="lazy" />
          <img className="projects-details__double-image--image" src={signaletiquePorte} alt="Signalétique porte - Brasserie du Paon" width={1400} height={1000} loading="lazy" />
        </div>
      </section>

      {/* Image 100% avec marges */}
      <section className="projects-details__image-full--section">
        <img
          className="projects-details__image-full--image"
          src={papeterie}
          alt="Papeterie - Brasserie du Paon"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </section>

      {/* Image 70% */}
      <section className="projects-details__stacked-images--section">
        <div className="projects-details__stacked-images--div">
          <div className="flex justify-between w-full mb-4">
            <p className="projects-details__deliverable--title">Dépliant - Extérieur / Intérieur</p>
            <p className="projects-details__deliverable--format">105 mm - 210 mm</p>
          </div>
          <img
            className="projects-details__stacked-images--image"
            src={depliantExterieur}
            alt="Extérieur - Brasserie du Paon"
            width={1600}
            height={809}
            loading="lazy"
          />
          <img
            className="projects-details__stacked-images--image"
            src={depliantInterieur}
            alt="Intérieur - Brasserie du Paon"
            width={1600}
            height={809}
            loading="lazy"
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
          src={dossierPresentation}
          alt="Dossier de présentation - Brasserie du Paon"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </section>

      {/* Projet suivant */}
      <section ref={sectionRef} className="projects-details__related--div">
        <img
          ref={imgRef}
          className="projects-details__related--img"
          src={logoPresentationAlineaHorizontal}
          alt={`Projet suivant : Alinea Boutique`}
          width={1400}
          height={900}
          loading="lazy"
        />
        <div className="projects-details__related--text-div">
          <p ref={titleRef} className="projects-details__related--title">
            <span>Alinea Boutique</span>
          </p>
          <a ref={relatedBtnRef} href="/projets/alinea-boutique" className="projects-details__related--btn">
            <span className="projects-details__related--btn-inner">
              <span className="projects-details__related--btn-text">Voir le projet suivant</span>
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default BrasserieDuPaon