import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import "./Header.scss"
import Logo from "../../assets/global/logo-beige-julien-privat.svg"
import MenuFullwidth from "../MenuFullwidth/MenuFullwidth"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/accueil" || location.pathname === "/"

  useEffect(() => {
    if (!isHome) return

    const hero = document.querySelector(".home__hero--section")
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [isHome, location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showHeaderLogo = !isHome || !heroVisible
  const isOverHero = isHome && heroVisible
  const showScrolledShadow = scrolled && !isOverHero

  return (
    <>
      <header
        className={`header ${showScrolledShadow ? "header--scrolled" : ""} ${isOverHero ? "header--transparent" : ""}`}
      >
        <a href="/accueil">
          <img
            src={Logo}
            alt="Logo Julien Privat"
            className={`header__logo ${showHeaderLogo ? "" : "header__logo--hidden"}`}
          />
        </a>
        <button
          className={`header__menu--button ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
        >
          Menu
        </button>
      </header>
      <MenuFullwidth isOpen={menuOpen} onClose={() => setMenuOpen(false)} logo={Logo} />
    </>
  )
}

export default Header