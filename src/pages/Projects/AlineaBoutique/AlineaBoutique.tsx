import "./../ProjectsDetails.scss"
import "./AlineaBoutique.scss"
import { useEffect, useRef } from "react"
import { useMobile } from "../../../hooks/useMobile"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Seo from "../../../components/Seo/Seo"
import { creativeWorkSchema, breadcrumbSchema } from "../../../components/Seo/structuredData"
import { initTextRollHover } from "../../../utils/textRollHover"
import InfiniteCarousel from "../../../components/InfiniteCarousel/InfiniteCarousel"

gsap.registerPlugin(ScrollTrigger)

import logoPresentationAlineaHorizontal from "../../../assets/global/projects/alinea/logo-presentation-alinea-boutique-julien-privat.jpg"
import logoPresentationAlineaVertical from "../../../assets/global/projects/alinea/logo-presentation-2-alinea-boutique-julien-privat.jpg"
import cdvDouble from "../../../assets/global/projects/alinea/cartes-de-visites-alinea-boutique-julien-privat.jpg"
import cdvFinitions from "../../../assets/global/projects/alinea/cartes-de-visites-finitions-alinea-boutique-julien-privat.jpg"
import depliantInterieur from "../../../assets/global/projects/alinea/interieur-depliant-160x90mm-8-volets-alinea-boutique-julien-privat.jpg"
import depliantExterieur from "../../../assets/global/projects/alinea/exterieur-depliant-160x90mm-8-volets-alinea-boutique-julien-privat.jpg"
import poster from "../../../assets/global/projects/alinea/poster-1200x800mm-alinea-boutique-julien-privat.jpg"
import mementoA5 from "../../../assets/global/projects/alinea/memento-a5-alinea-boutique-julien-privat.png"
import etiquette from "../../../assets/global/projects/alinea/etiquette-pour-panneau-alinea-boutique.png"
import panneauxManquants from "../../../assets/global/projects/alinea/panneaux-manquants-alinea-boutique-julien-privat.jpg"
import gabaritPsd from "../../../assets/global/projects/alinea/gabarit-psd-alinea-boutique-julien-privat.jpg"
import illustrationTechnique1 from "../../../assets/global/projects/alinea/illustration-technique-1-alinea-boutique-julien-privat.jpg"
import illustrationTechnique2 from "../../../assets/global/projects/alinea/illustration-technique-2-alinea-boutique-julien-privat.jpg"
import illustrationTechnique3 from "../../../assets/global/projects/alinea/illustration-technique-3-alinea-boutique-julien-privat.jpg"
import produitsAssocies from "../../../assets/global/projects/alinea/produits-associes-alinea-boutique-julien-privat.jpg"
import pluginInteractive from "../../../assets/global/projects/alinea/plugin-texte-interactif-alinea-boutique-julien-privat.jpg"
import ficheTechniquePlugin from "../../../assets/global/projects/alinea/fiche-technique-panneau-directionnel-alinea-boutique-julien-privat.jpg"
import profondeurNiveau from "../../../assets/global/projects/alinea/profondeur-de-niveaux-alinea-boutique-julien-privat.jpg"
import stripeChorus from "../../../assets/global/projects/alinea/schema-stripe-chorus-alinea-boutique-julien-privat.jpg"
// Agenda
import agendaAlinea1 from "../../../assets/global/projects/alinea/agenda-a5-1ere-de-couverture-alinea-boutique-julien-privat.jpg"
import agendaAlinea2 from "../../../assets/global/projects/alinea/agenda-a5-memorandum-alinea-boutique-julien-privat.jpg"
import agendaAlinea3 from "../../../assets/global/projects/alinea/agenda-a5-calendrier-alinea-boutique-julien-privat.jpg"
import agendaAlinea4 from "../../../assets/global/projects/alinea/agenda-a5-planning-semaine-alinea-boutique-julien-privat.jpg"
import agendaAlinea5 from "../../../assets/global/projects/alinea/agenda-a5-panneaux-alinea-boutique-julien-privat.jpg"
import agendaAlinea6 from "../../../assets/global/projects/alinea/agenda-a5-4eme-de-couverture-alinea-boutique-julien-privat.jpg"

import logoPresentationBlayaiseHorizontal from "../../../assets/global/projects/blayaise-dexpertise-comptable/logo-presentation-blayaise-expertise-comptable-julien-privat.jpg"

const BG_COLOR = "#141414" // couleur la plus foncée de l'image (cohérent avec le hero de Home)

function AlineaBoutique() {
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

  const fichesAlinea = [
    { src: agendaAlinea1, label: "Couverture" },
    { src: agendaAlinea2, label: "Mémorandum" },
    { src: agendaAlinea3, label: "Calendrier" },
    { src: agendaAlinea4, label: "Planning de la semaine" },
    { src: agendaAlinea5, label: "Panneaux" },
    { src: agendaAlinea6, label: "Quatrième de couverture" },
  ]

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
          title="Alinea Boutique — Signalétique & identité de marque | Julien PRIVAT"
          description="Signalétique et peinture routière ainsi que mobilier urbain : un cadrage clair pour structurer un catalogue dense et le rendre accessible à tous ses publics."
          path="/projets/alinea-boutique"
          image={logoPresentationAlineaHorizontal}
          imageAlt="Identité de marque Alinea Boutique"
          type="article"
          jsonLd={[
            creativeWorkSchema({
              name: "Alinea Boutique",
              description: "Signalétique et peinture routière ainsi que mobilier urbain : un cadrage clair pour structurer un catalogue dense et le rendre accessible à tous ses publics.",
              path: "/projets/alinea-boutique",
              image: logoPresentationAlineaHorizontal,
              dateCreated: "2021",
              keywords: ["Branding", "Print", "Digital"],
            }),
            breadcrumbSchema([
              { name: "Accueil", path: "/" },
              { name: "Projets", path: "/projets" },
              { name: "Alinea Boutique", path: "/projets/alinea-boutique" },
            ]),
          ]}
        />
        <section className="projects-details__hero--section">
        <h1 className="projects-details__hero--title">Alinea Boutique</h1>
        <div className="projects-details__hero--div">
            <img
              className="projects-details__hero--image"
              src={isMobile ? logoPresentationAlineaVertical : logoPresentationAlineaHorizontal}
              alt="Hero image - Alinea"
              width={isMobile ? 708 : 1400}
              height={isMobile ? 1000 : 900}
            />
        </div>
        </section>

        {/* Brief */}
        <section className="projects-details__brief--section projects-details__wrapper">
        <div className="projects-details__wrapper--70">
            <div className="projects-details__brief--section-title">
            <p className="projects-details__brief--section-title-text">
                E-commerce / Print / Digital / Gestion de projet / UI-UX Design
            </p>
            </div>
            <div className="projects-details__brief--grid">
              <div className="projects-details__brief--unity">
                  <p className="projects-details__mission--title">Mission</p>
                  <p className="projects-details__mission--text">
                  Alinéa Boutique, c'est une entreprise familiale française spécialisée dans la signalétique routière, le mobilier urbain et la signalisation pour collectivités, professionnels et particuliers. Ils proposent un catalogue très large : panneaux routiers (police, directionnels, temporaires), bornes, balises, supports, accessoires, avec un savoir-faire métier important (réglementation, fabrication, personnalisation).
                  </p>
              </div>
              <div className="projects-details__brief--unity">
                  <p className="projects-details__deliverables--title">Livrables</p>
                  <ul className="projects-details__deliverables--list">
                  <li>Dépliants</li>
                  <li>Maquettes de site</li>
                  <li>Parcours UX</li>
                  <li>Création d'assets</li>
                  <li>Documentation technique</li>
                  <li>Supports print</li>
                  <li>Plaquettes commerciales</li>
                  <li>Signalétique</li>
                  <li>Photographies</li>
                  </ul>
              </div>
              <a href="https://alinea-boutique.com/" target="_blank" className="projects-details__external--btn">
                Voir le site
              </a>
            </div>
        </div>
        </section>

        {/* Double image vertical */}
        <section className="projects-details__double-image--section projects-details__wrapper">
          <div className="projects-details__double-image--div projects-details__wrapper--70">
            <img className="projects-details__double-image--image" src={cdvDouble} alt="Cartes de visites - Alinea Boutique" width={960} height={1080} loading="lazy" />
            <img className="projects-details__double-image--image" src={cdvFinitions} alt="Cartes de visites fînitions - Alinea Boutique" width={960} height={1080} loading="lazy" />
          </div>
        </section>

        {/* Image 70% */}
        <section className="projects-details__stacked-images--section">
          <div className="projects-details__stacked-images--div">
            <div className="flex justify-between w-full mb-4">
              <p className="projects-details__deliverable--title">Dépliant - Extérieur / Intérieur</p>
              <p className="projects-details__deliverable--format">160 mm - 90 mm x 8 volets</p>
            </div>
            <img
              className="projects-details__stacked-images--image"
              src={depliantExterieur}
              alt="Extérieur du dépliant - Alinea Boutique"
              width={1400}
              height={311}
              loading="lazy"
            />
            <img
              className="projects-details__stacked-images--image"
              src={depliantInterieur}
              alt="Intérieur du dépliant - Alinea Boutique"
              width={1400}
              height={311}
              loading="lazy"
            />
            <div className="flex flex-col justify-center w-full mt-4 mb-4">
              <p className="projects-details__text text-center">Ce dépliant est un outil destiné aux clients, aux commerciaux mais surtout aux travailleurs de terrain.</p>
              <p className="projects-details__text text-center">On retrouve l'essentiel des panneaux mais aussi les spécificités de gamme, les volets lui permettent d'avoir un format compact et aisément manipulable.</p>
            </div>
          </div>
        </section>

        {/* Image 70% - full height */}
        <section className="projects-details__contained-image--section projects-details__wrapper">
          <div className="projects-details__contained-image--div">
            <div className="flex justify-between w-full mb-4">
              <p className="projects-details__deliverable--title">Poster</p>
              <p className="projects-details__deliverable--format">1200 mm - 800 mm</p>
            </div>
            <img
              className="projects-details__contained-image--image"
              src={poster}
              alt="Poster grand format"
              width={1400}
              height={2100}
              loading="lazy"
            />
          </div>
        </section>

        {/* Image 70% */}
        <section className="projects-details__image--section projects-details__wrapper">
          <div className="projects-details__image-70--div">
            <img className="projects-details__image--image" src={mementoA5} alt="Memento au format A5" width={1000} height={1400} loading="lazy" />
          </div>
        </section>

        {/* Image 70% */}
        <section className="projects-details__stacked-images--section">
          <div className="projects-details__stacked-images--div">
            <div className="flex justify-start w-full mb-4 gap-2">
              <p className="projects-details__deliverable--title">Étiquette</p>
              <p className="projects-details__deliverable--format">- 135 mm - 60 mm</p>
            </div>
            <img
              className="projects-details__stacked-images--image"
              src={etiquette}
              alt="Étiquette allant derrière les panneaux"
              width={805}
              height={700}
              loading="lazy"
            />
          </div>
        </section>

        {/* Image verticale */}
        <InfiniteCarousel fiches={fichesAlinea} />

        {/* ─── Stats clés du projet ─────────────────────────────────────────── */}
        <section className="projects-details__stats--section projects-details__wrapper">
          <div className="projects-details__stats--div projects-details__wrapper--70">
            <p className="projects-details__section--label">Le projet en chiffres</p>
            <div className="projects-details__stats--grid">
              <div className="projects-details__stats--card" data-index="01">
                <p className="projects-details__stats--number">671</p>
                <p className="projects-details__stats--label">Produits ajoutés</p>
              </div>
              <div className="projects-details__stats--card" data-index="02">
                <p className="projects-details__stats--number">45</p>
                <p className="projects-details__stats--label">Catégories différentes</p>
              </div>
              <div className="projects-details__stats--card" data-index="03">
                <p className="projects-details__stats--number">100<span>+</span></p>
                <p className="projects-details__stats--label">Pages de documentation technique</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Réflexion UX ─────────────────────────────────────────────────── */}
        <section className="projects-details__ux--section projects-details__wrapper">
          <div className="projects-details__ux--div projects-details__wrapper--70">
            <div className="projects-details__section--header">
              <p className="projects-details__section--label">Réflexion UX</p>
              <h2 className="projects-details__section--title">
                Structurer la complexité pour la rendre invisible.
              </h2>
            </div>

            {/* Bloc 1 — Arborescence */}
            <div className="projects-details__ux--block">
              <div className="projects-details__ux--block-text">
                <p className="projects-details__ux--block-number">01</p>
                <h3 className="projects-details__ux--block-title">Profondeur de niveau</h3>
                <p className="projects-details__ux--block-desc">
                  Définition d'une arborescence claire permettant de naviguer parmi des centaines de produits sans surcharge cognitive. Chaque niveau a été pensé pour limiter le nombre de clics tout en gardant une logique métier cohérente.
                </p>
              </div>
              <div className="projects-details__ux--block-media projects-details__ux--block-media-wide">
                {/* MÉDIA : Schéma de l'arborescence — format paysage ~1600x900px ou SVG */}
                <img
                    className="projects-details__media--image-wide"
                    src={profondeurNiveau}
                    alt="Schéma arborescence"
                    width={900}
                    height={467}
                    loading="lazy"
                  />
              </div>
            </div>

            {/* Bloc 2 — Plugin de prévisualisation — bloc en pleine largeur */}
            <div className="projects-details__ux--feature">
              <div className="projects-details__ux--feature-header">
                <p className="projects-details__ux--block-number">02</p>
                <h3 className="projects-details__ux--block-title">Plugin de prévisualisation interactive</h3>
              </div>
              <div className="projects-details__ux--feature-grid">
                <div className="projects-details__ux--feature-media">
                  {/* MÉDIA : Vidéo ou GIF du plugin en action — format paysage ~1920x1080px */}
                  <img
                    className="projects-details__media--image-wide"
                    src={pluginInteractive}
                    alt="Plugin de prévisualisation interactive"
                    width={1400}
                    height={725}
                    loading="lazy"
                  />
                </div>
                <div className="projects-details__ux--feature-text">
                  <p className="projects-details__ux--block-desc">
                    Mise en développement (en collaboration avec un développeur externe) d'un plugin permettant de prévisualiser interactivement le texte sur les panneaux. L'utilisateur visualise en temps réel le rendu de son texte avant la commande. Les panneaux des villes, la vitesse, les distances, les directions sont tous simulés pour correspondre au mieux à la réalité.
                  </p>
                  <p className="projects-details__ux--block-desc">
                    Étude approfondie de la méthode de calcul des tailles de caractères selon le nombre de lettres et le type de panneau, en se basant sur les fiches techniques fournisseurs et la réglementation routière française.
                  </p>
                </div>
              </div>
              <div className="projects-details__ux--feature-sub">
                {/* MÉDIA : Fiche technique correspondante — format portrait A4 ~900x1200px */}
                <img
                  src={ficheTechniquePlugin}
                  alt="Fiche technique du plugin de prévisualisation interactive"
                  width={991}
                  height={1400}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bloc 03 — Code produit */}
            <div className="projects-details__ux--block">
              <div className="projects-details__ux--block-text">
                <p className="projects-details__ux--block-number">03</p>
                <h3 className="projects-details__ux--block-title">Structure du code produit</h3>
                <p className="projects-details__ux--block-desc">
                  Conception d'une nomenclature de codes produits lisible et systématique. Chaque caractère a une fonction précise, et la structure laisse une marge confortable pour la croissance du catalogue ainsi que pour l'ajout de nouvelles familles de produits.
                </p>
              </div>

              <div className="projects-details__product-code">
                {/* Schéma anatomique du code */}
                <div className="projects-details__product-code--anatomy">
                  <div className="projects-details__product-code--display">
                    <span className="projects-details__product-code--segment projects-details__product-code--segment-family">P</span>
                    <span className="projects-details__product-code--segment projects-details__product-code--segment-cat">1</span>
                    <span className="projects-details__product-code--segment projects-details__product-code--segment-sub">0</span>
                    <span className="projects-details__product-code--segment projects-details__product-code--segment-id">0001</span>
                  </div>

                  <div className="projects-details__product-code--legend">
                    <div className="projects-details__product-code--leg projects-details__product-code--leg-family">
                      <span className="projects-details__product-code--leg-marker"></span>
                      <p className="projects-details__product-code--leg-title">Famille de produit</p>
                      <p className="projects-details__product-code--leg-desc">Une lettre identifiant le type général : P pour Panneau, M pour Mobilier urbain, etc.</p>
                    </div>
                    <div className="projects-details__product-code--leg projects-details__product-code--leg-cat">
                      <span className="projects-details__product-code--leg-marker"></span>
                      <p className="projects-details__product-code--leg-title">Catégorie</p>
                      <p className="projects-details__product-code--leg-desc">Un chiffre désignant la grande catégorie au sein de la famille.</p>
                    </div>
                    <div className="projects-details__product-code--leg projects-details__product-code--leg-sub">
                      <span className="projects-details__product-code--leg-marker"></span>
                      <p className="projects-details__product-code--leg-title">Sous-catégorie</p>
                      <p className="projects-details__product-code--leg-desc">Un chiffre précisant la sous-catégorie au sein de la grande catégorie.</p>
                    </div>
                    <div className="projects-details__product-code--leg projects-details__product-code--leg-id">
                      <span className="projects-details__product-code--leg-marker"></span>
                      <p className="projects-details__product-code--leg-title">Identifiant produit</p>
                      <p className="projects-details__product-code--leg-desc">Quatre chiffres réservés au produit lui-même, laissant une marge de 9 999 références par sous-catégorie.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Création d'assets ─────────────────────────────────────────────── */}
        <section className="projects-details__assets--section projects-details__wrapper">
          <div className="projects-details__assets--div projects-details__wrapper--70">
            <div className="projects-details__section--header">
              <p className="projects-details__section--label">Création d'assets</p>
              <h2 className="projects-details__section--title">
                Construire un système visuel cohérent.
              </h2>
            </div>

            {/* Grille modulaire variée */}
            <div className="projects-details__assets--grid">
              {/* Carte large — Panneaux */}
              <div className="projects-details__assets--card projects-details__assets--card-wide">
                <div className="projects-details__assets--card-media">
                  {/* MÉDIA : Collection de panneaux — format paysage ~1600x1000px */}
                  <img
                    className="projects-details__media--image-landscape"
                    src={panneauxManquants}
                    alt="Illustration des panneaux manquants créés pour le projet"
                    width={650}
                    height={480}
                    loading="lazy"
                  />
                </div>
                <div className="projects-details__assets--card-text">
                  <h3 className="projects-details__assets--card-title">Panneaux manquants</h3>
                  <p className="projects-details__assets--card-desc">
                    Création des panneaux absents du catalogue fournisseur pour assurer la cohérence visuelle de la gamme complète proposée sur le site. Format vectoriel pour prévoir l'impression à l'usine.
                  </p>
                </div>
              </div>

              {/* Carte moyenne — Gabarit */}
              <div className="projects-details__assets--card">
                <div className="projects-details__assets--card-media">
                  {/* MÉDIA : Screenshot gabarit PSD avec grille + nommage — format portrait ~1000x1300px */}
                  <img
                    className="projects-details__media--image-landscape"
                    src={gabaritPsd}
                    alt="Gabarit Photoshop avec grille pour uniformiser les images et leur nommage"
                    width={650}
                    height={480}
                    loading="lazy"
                  />
                </div>
                <div className="projects-details__assets--card-text">
                  <h3 className="projects-details__assets--card-title">Gabarit & nommage</h3>
                  <p className="projects-details__assets--card-desc">
                    Mise en place de gabarits pour normer les images et leur nommage, au service du référencement, de la performance et de l'homogénéité des formats.
                  </p>
                </div>
              </div>

              {/* Carte pleine largeur — Illustrations techniques */}
              <div className="projects-details__assets--card projects-details__assets--card-full">
                {/* Maintenant : projects-details__assets--media-grid */}
                <div className="projects-details__assets--media-grid">
                  <img className="projects-details__media--image-fill" src={illustrationTechnique1} alt="Illustration technique isométrique 1/3 - Alinea Boutique" width={450} height={450} loading="lazy" />
                  <img className="projects-details__media--image-fill" src={illustrationTechnique2} alt="Illustration technique isométrique 2/3 - Alinea Boutique" width={450} height={450} loading="lazy" />
                  <img className="projects-details__media--image-fill" src={illustrationTechnique3} alt="Illustration technique isométrique 3/3 - Alinea Boutique" width={450} height={450} loading="lazy" />
                </div>
                <div className="projects-details__assets--card-text">
                  <h3 className="projects-details__assets--card-title">Illustrations techniques</h3>
                  <p className="projects-details__assets--card-desc">
                    Vues isométriques entièrement vectorielles, pensées comme un système graphique réutilisable et évolutif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Parcours UX & paiement ────────────────────────────────────────── */}
        <section className="projects-details__journey--section projects-details__wrapper">
          <div className="projects-details__journey--div projects-details__wrapper--70">
            <div className="projects-details__section--header">
              <p className="projects-details__section--label">Parcours utilisateur</p>
              <h2 className="projects-details__section--title">
                Penser chaque interaction, du B2B au particulier.
              </h2>
            </div>

            {/* Stripe + Chorus */}
            <div className="projects-details__journey--payment">
              <div className="projects-details__journey--payment-text">
                <p className="projects-details__ux--block-number">01</p>
                <h3 className="projects-details__journey--block-title">Stripe & Chorus</h3>
                <p className="projects-details__ux--block-desc">
                  Réflexion autour d'un fonctionnement hybride avec deux moyens de paiement : Stripe pour les particuliers et professionnels, et Chorus Pro pour les collectivités via un système de bon de commande, indispensable dans le cadre des marchés publics.
                </p>
                <div className="projects-details__journey--tags">
                  <span className="projects-details__journey--tag">B2B</span>
                  <span className="projects-details__journey--tag">B2C</span>
                  <span className="projects-details__journey--tag">Collectivités</span>
                </div>
              </div>
              <div className="projects-details__journey--payment-media">
                {/* MÉDIA : Schéma Stripe / Chorus ou screenshot du flow — format paysage ~1400x1000px */}
                <img
                    className="projects-details__media--image-landscape"
                    src={stripeChorus}
                    alt="Schéma Stripe / Chorus"
                    width={650}
                    height={480}
                    loading="lazy"
                  />
              </div>
            </div>

            {/* Produits associés */}
            <div className="projects-details__journey--row">
              <div className="projects-details__journey--row-text">
                <p className="projects-details__ux--block-number">02</p>
                <h3 className="projects-details__journey--block-title">Produits associés</h3>
                <p className="projects-details__ux--block-desc">
                  Choix éditorial des produits associés sur la base d'une connaissance fine du métier : suggérer ce qui est réellement utile et cohérent (visserie, accessoires, support) plutôt qu'une logique purement algorithmique.
                </p>
              </div>
              <div className="projects-details__journey--row-media">
                {/* MÉDIA : Screenshot des produits associés — format paysage ~1400x900px */}
                <img
                    className="projects-details__media--image-landscape"
                    src={produitsAssocies}
                    alt="Produits associés au panneau Stop AB4"
                    width={650}
                    height={480}
                    loading="lazy"
                  />
              </div>
            </div>

            {/* Notifications mails par rôle */}
            <div className="projects-details__journey--mails">
              <div className="projects-details__journey--mails-header">
                <p className="projects-details__ux--block-number">03</p>
                <h3 className="projects-details__journey--block-title">Notifications par mail contextualisées</h3>
                <p className="projects-details__ux--block-desc">
                  Système de notifications mail dont le contenu est filtré selon le rôle du destinataire, pour ne révéler que l'information pertinente à chacun.
                </p>
              </div>
              <div className="projects-details__journey--roles">
                <div className="projects-details__journey--role">
                  <p className="projects-details__journey--role-name">Client</p>
                  <p className="projects-details__journey--role-info">Confirmation, suivi de commande, livraison</p>
                </div>
                <div className="projects-details__journey--role">
                  <p className="projects-details__journey--role-name">Administrateur</p>
                  <p className="projects-details__journey--role-info">Détails complets, marges, données internes</p>
                </div>
                <div className="projects-details__journey--role">
                  <p className="projects-details__journey--role-name">Atelier / Production</p>
                  <p className="projects-details__journey--role-info">Spécifications techniques, fiches de production</p>
                </div>
                <div className="projects-details__journey--role">
                  <p className="projects-details__journey--role-name">Comptabilité</p>
                  <p className="projects-details__journey--role-info">Facturation, références Chorus, suivi paiement</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ─────────────────────────────────────────────────────────────────────── */}

        {/* Projet suivant */}
        <section ref={sectionRef} className="projects-details__related--div">
            <img
            ref={imgRef}
            className="projects-details__related--img"
            src={logoPresentationBlayaiseHorizontal}
            alt={`Projet suivant : Blayaise Expertise Comptable`}
            width={1400}
            height={900}
            loading="lazy"
            />
            <div className="projects-details__related--text-div">
            <p ref={titleRef} className="projects-details__related--title">
                <span>Blayaise Expertise Comptable</span>
            </p>
            <a ref={relatedBtnRef} href="/projets/blayaise-expertise-comptable" className="projects-details__related--btn">
                <span className="projects-details__related--btn-inner">
                    <span className="projects-details__related--btn-text">Voir le projet suivant</span>
                </span>
            </a>
            </div>
        </section>
    </div>
  )
}

export default AlineaBoutique