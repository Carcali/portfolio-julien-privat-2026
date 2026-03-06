import { useEffect, useRef } from "react"
import { Outlet, useLocation } from "react-router-dom"
import gsap from "gsap"
import { useLenis } from "../hooks/useLenis"
import Header from "../components/Header/Header"
import Cursor from "../components/Cursor/Cursor"
import Footer from "../components/Footer/Footer"

export default function MainLayout() {
  const mainRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useLenis()

  useEffect(() => {
    // Remet le scroll en haut à chaque changement de page
    window.scrollTo(0, 0)

    const main = mainRef.current
    if (!main) return

    gsap.fromTo(
      main,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        clearProps: "all",
      }
    )
  }, [location.pathname])

  return (
    <>
      <Cursor />
      <Header />
      <main ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}