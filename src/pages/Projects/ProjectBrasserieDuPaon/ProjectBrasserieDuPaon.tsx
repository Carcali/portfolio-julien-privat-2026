import "./../Projects.scss"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectColors from "../../../components/ProjectColors/ProjectColors"
import ProjectCombinations from "../../../components/ProjectCombinations/ProjectCombinations"
import ProjectSliders from "../../../components/ProjectSliders/ProjectSliders"
import FontsPairing from "../../../components/FontsPairing/FontsPairing"

gsap.registerPlugin(ScrollTrigger)

import placeholder from "../../../assets/global/projects/brasserie-du-paon/hero-image-placeholder.jpg"
import cdvOr from "../../../assets/global/projects/brasserie-du-paon/cartes-de-visites-or-brasserie-du-paon-julien-privat.jpg"
import cdvMarron from "../../../assets/global/projects/brasserie-du-paon/cartes-de-visites-marron-brasserie-du-paon-julien-privat.jpg"
import tonneauMarron1 from "../../../assets/global/projects/brasserie-du-paon/tonneau-peint-brasserie-du-paon-1.jpg"
import tonneauMarron2 from "../../../assets/global/projects/brasserie-du-paon/tonneau-peint-brasserie-du-paon-2.jpg"
import signaletiquePortail from "../../../assets/global/projects/brasserie-du-paon/signaletique-entree-portail-brasserie-du-paon-julien-privat.jpg"
import signaletiquePorte from "../../../assets/global/projects/brasserie-du-paon/signaletique-porte-entree-brasserie-du-paon-julien-privat.jpg"
import depliantInterieur from "../../../assets/global/projects/brasserie-du-paon/interieur-depliant-105mm-210mm-ferme-gamme-biere-du-paon-julien-privat.jpg"
import depliantExterieur from "../../../assets/global/projects/brasserie-du-paon/exterieur-depliant-105mm-210mm-ferme-gamme-biere-du-paon-julien-privat.jpg"
import papeterie from "../../../assets/global/projects/brasserie-du-paon/bon-de-livraison-grille-tarifaire-brasserie-du-paon-julien-privat.jpg"
import imgCorreEtAssociees from "../../../assets/global/projects/corre-et-associees/cartes-de-visites-mockup-corre-et-associees-axe-1-2.jpg"
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

function ProjectBrasserieDuPaon() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)

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
          { id: 'bdp-or', label: '60', size: 'large' },
          { id: 'bdp-marron', label: '', size: 'wide' },
          { id: 'bdp-orange', label: '10', size: 'square' },
          { id: 'bdp-beige', label: '30', size: 'wide' },
          { id: 'bdp-kaki', label: '', size: 'square' },
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

      {/* Image 70% */}
      <section className="projects-details__image--section projects-details__wrapper">
        <div className="projects-details__image-70--div projects-details__wrapper--70">
          <img className="projects-details__image--image" src={tonneauMarron1} alt="Tonneau peint à la Brasserie 1" />
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

      {/* Image 70% */}
      <section className="projects-details__stacked-images--section">
        <div className="projects-details__stacked-images--div">
          <img
            className="projects-details__stacked-images--image border border-[#fff3e0]"
            src={depliantExterieur}
            alt="Extérieur - Brasserie du Paon"
          />
          <img
            className="projects-details__stacked-images--image border border-[#fff3e0]"
            src={depliantInterieur}
            alt="Intérieur - Brasserie du Paon"
          />
        </div>
      </section>

      {/* Image 100% */}
      <section className="projects-details__image-full--section">
        <img
          className="projects-details__image-full--image"
          src={papeterie}
          alt="Papeterie - Brasserie du Paon"
        />
      </section>

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