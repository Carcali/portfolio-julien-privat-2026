import "./../ProjectsDetails.scss"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ImageCarousel from "../../../components/ImageCarousel/ImageCarousel"

gsap.registerPlugin(ScrollTrigger)

import logoBrasserieDuPaonHorizontal from "../../../assets/global/projects/brasserie-du-paon/logo-tonneau-peint-brasserie-du-paon-julien-privat.jpg"

const carouselImages = [
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-premiere-de-couverture-julien-privat.jpg", alt: "Première de couverture" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page1-julien-privat.jpg", alt: "Page 1" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page2-julien-privat.jpg", alt: "Page 2" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page3-julien-privat.jpg", alt: "Page 3" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page4-julien-privat.jpg", alt: "Page 4" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page5-julien-privat.jpg", alt: "Page 5" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page6-julien-privat.jpg", alt: "Page 6" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page7-julien-privat.jpg", alt: "Page 7" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page8-julien-privat.jpg", alt: "Page 8" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page9-julien-privat.jpg", alt: "Page 9" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page10-julien-privat.jpg", alt: "Page 10" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page11-julien-privat.jpg", alt: "Page 11" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page12-julien-privat.jpg", alt: "Page 12" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page13-julien-privat.jpg", alt: "Page 13" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page14-julien-privat.jpg", alt: "Page 14" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page15-julien-privat.jpg", alt: "Page 15" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page16-julien-privat.jpg", alt: "Page 16" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page17-julien-privat.jpg", alt: "Page 17" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page18-julien-privat.jpg", alt: "Page 18" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page19-julien-privat.jpg", alt: "Page 19" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page20-julien-privat.jpg", alt: "Page 20" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page21-julien-privat.jpg", alt: "Page 21" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page22-julien-privat.jpg", alt: "Page 22" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page23-julien-privat.jpg", alt: "Page 23" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page24-julien-privat.jpg", alt: "Page 24" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page25-julien-privat.jpg", alt: "Page 25" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-page26-julien-privat.jpg", alt: "Page 26" },
  { src: "/src/assets/global/projects/le-temps-des-fleurs/le-temps-des-fleurs-quatrieme-de-couverture-julien-privat.jpg", alt: "Quatrième de couverture" },
]

function LeTempsDesFleurs() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const fullscreenSectionRef = useRef<HTMLElement>(null)
  const fullscreenImgRef = useRef<HTMLImageElement>(null)

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
      {/* Hero */}
      <section className="projects-details__hero--section">
        <h1 className="projects-details__hero--title">"Le temps<br />des fleurs"</h1>
        <p className="projects-details__mission--text logofolio__subtitle">
          Un livre en cadeau pour mes grands-mères compilant mes photographies de fleurs à travers mes voyages et leurs jardins.
          <br />
          Un sujet dans une harmonie de couleurs pour admirer ce que la nature offre.
        </p>
        <p className="projects-details__mission--instructions w-full flex justify-center mt-6">
          Faites défiler les vues en cliquant sur les fléches ou grâce à la barre de défilement en-dessous.
        </p>
      </section>

      <section className="mb-[10vh]">
        <ImageCarousel images={carouselImages} />
      </section>

      {/* Projet suivant */}
      <section ref={sectionRef} className="projects-details__related--div">
        <img
          ref={imgRef}
          className="projects-details__related--img"
          src={logoBrasserieDuPaonHorizontal}
          alt="Projet suivant"
        />
        <div className="projects-details__related--text-div">
          <p ref={titleRef} className="projects-details__related--title">
            <span>Brasserie du Paon</span>
          </p>
          <a href="/projets/brasserie-du-paon" className="projects-details__related--btn">
            Voir le projet suivant
          </a>
        </div>
      </section>
    </>
  )
}

export default LeTempsDesFleurs