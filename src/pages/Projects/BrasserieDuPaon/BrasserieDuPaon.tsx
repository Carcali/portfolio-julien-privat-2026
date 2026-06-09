import "./../ProjectsDetails.scss"
import { useEffect, useRef } from "react"
import { useMobile } from "../../../hooks/useMobile"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
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

function BrasserieDuPaon() {
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
        <h1 className="projects-details__hero--title">Brasserie du Paon</h1>
        <div className="projects-details__hero--div">
          <img className="projects-details__hero--image" src={isMobile ? logoBrasserieDuPaonVertical : logoBrasserieDuPaonHorizontal} alt="Hero - Brasserie du Paon" />
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
          <img className="projects-details__double-image--image" src={cdvOr} alt="Cartes de visites or - Brasserie du Paon" />
          <img className="projects-details__double-image--image" src={cdvMarron} alt="Cartes de visites marrons - Brasserie du Paon" />
        </div>
      </section>

      {/* Carousel - Étiquettes Bière du Paon */}
      <section className="projects-details__sliders--section">
        <div className="projects-details__sliders--wrapper">
          <ProjectSliders
            slides={[
              { thumbnail: biereDuPaonLager, mainImage: biereDuPaonLager, alt: "Lager" },
              { thumbnail: biereDuPaonBlonde, mainImage: biereDuPaonBlonde, alt: "Blonde" },
              { thumbnail: biereDuPaonBlanche, mainImage: biereDuPaonBlanche, alt: "Blanche" },
              { thumbnail: biereDuPaonIPA, mainImage: biereDuPaonIPA, alt: "IPA" },
              { thumbnail: biereDuPaonBasilic, mainImage: biereDuPaonBasilic, alt: "Basilic" },
            ]}
          />
        </div>
      </section>

      {/* Carousel - Étiquettes Aliénor */}
      <section className="projects-details__sliders--section">
        <div className="projects-details__sliders--wrapper">
          <ProjectSliders
            slides={[
              { thumbnail: alienorLager, mainImage: alienorLager, alt: "Lager" },
              { thumbnail: alienorBlonde, mainImage: alienorBlonde, alt: "Blonde" },
              { thumbnail: alienorBlanche, mainImage: alienorBlanche, alt: "Blanche" },
              { thumbnail: alienorIPA, mainImage: alienorIPA, alt: "IPA" },
            ]}
          />
        </div>
      </section>

      {/* Double image vertical */}
      <section className="projects-details__double-image--section projects-details__wrapper">
        <div className="projects-details__double-image--div projects-details__wrapper--70">
          <img className="projects-details__double-image--image" src={bouteilleVerre} alt="Bouteille de verre - Brasserie du Paon" />
          <img className="projects-details__double-image--image" src={verreMousse} alt="Verre de mousse - Brasserie du Paon" />
        </div>
      </section>

      {/* Image 70% */}
      <section className="projects-details__image--section projects-details__wrapper">
        <div className="projects-details__image-70--div projects-details__wrapper--70">
          <img className="projects-details__image--image" src={tonneauMarron2} alt="Tonneau peint à la Brasserie 2" />
        </div>
      </section>

      {/* Double image vertical */}
      <section className="projects-details__double-image--section projects-details__wrapper">
        <div className="projects-details__double-image--div projects-details__wrapper--70">
          <img className="projects-details__double-image--image" src={signaletiquePortail} alt="Signalétique portail - Brasserie du Paon" />
          <img className="projects-details__double-image--image" src={signaletiquePorte} alt="Signalétique porte - Brasserie du Paon" />
        </div>
      </section>

      {/* Image 100% avec marges */}
      <section className="projects-details__image-full--section">
        <img
          className="projects-details__image-full--image"
          src={papeterie}
          alt="Papeterie - Brasserie du Paon"
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
            className="projects-details__stacked-images--image border border-[#8c502a]"
            src={depliantExterieur}
            alt="Extérieur - Brasserie du Paon"
          />
          <img
            className="projects-details__stacked-images--image border border-[#8c502a]"
            src={depliantInterieur}
            alt="Intérieur - Brasserie du Paon"
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
        />
      </section>

      {/* Projet suivant */}
      <section ref={sectionRef} className="projects-details__related--div">
        <img
          ref={imgRef}
          className="projects-details__related--img"
          src={logoPresentationAlineaHorizontal}
          alt="Projet suivant"
        />
        <div className="projects-details__related--text-div">
          <p ref={titleRef} className="projects-details__related--title">
            <span>Alinea Boutique</span>
          </p>
          <a href="/projets/alinea-boutique" className="projects-details__related--btn">
            Voir le projet suivant
          </a>
        </div>
      </section>
    </>
  )
}

export default BrasserieDuPaon