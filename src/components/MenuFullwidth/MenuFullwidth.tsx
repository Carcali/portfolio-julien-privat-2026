import { useEffect, useRef } from "react"
import { NavLink, useLocation } from "react-router-dom"
import gsap from "gsap"
import "./MenuFullwidth.scss"

interface MenuFullwidthProps {
  isOpen: boolean
  onClose: () => void
  logo: string
}

const menuItems = [
  { label: "Accueil", path: "/" },
  { label: "Projets", path: "/projets" },
  { label: "Services", path: "/services" },
  { label: "A propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
]

function MenuFullwidth({ isOpen, onClose, logo }: MenuFullwidthProps) {
  const location = useLocation()
  const menuRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<(HTMLLIElement | null)[]>([])
  const initialized = useRef(false)

  const initLetters = () => {
    if (initialized.current) return
    initialized.current = true

    itemsRef.current.forEach((menuItem) => {
      if (!menuItem) return

      const textEl = menuItem.querySelector<HTMLElement>(".menu-item__text")
      if (!textEl) return

      const letters = [...(textEl.textContent ?? "")]
      textEl.textContent = ""
      letters.forEach((letter) => {
        const span = document.createElement("span")
        span.textContent = letter === " " ? "\u00A0" : letter
        textEl.appendChild(span)
      })

      const anchor = textEl.parentElement as HTMLElement
      anchor.style.height = `${anchor.clientHeight}px`

      const clone = textEl.cloneNode(true) as HTMLElement
      clone.setAttribute("aria-hidden", "true")
      anchor.appendChild(clone)

      anchor.addEventListener("mouseenter", () => {
        const [original, clone] = anchor.querySelectorAll<HTMLElement>(".menu-item__text")
        gsap.to(original.children, {
          y: "-100%",
          ease: "power2.out",
          stagger: { amount: 0.14, from: "start" },
        })
        gsap.to(clone.children, {
          y: "-100%",
          ease: "power2.out",
          stagger: { amount: 0.14, from: "start" },
        })
      })

      anchor.addEventListener("mouseleave", () => {
        const [original, clone] = anchor.querySelectorAll<HTMLElement>(".menu-item__text")
        gsap.to(original.children, {
          y: "0%",
          ease: "power2.out",
          stagger: { amount: 0.1, from: "end" },
        })
        gsap.to(clone.children, {
          y: "0%",
          ease: "power2.out",
          stagger: { amount: 0.1, from: "end" },
        })
      })
    })
  }

  const handleNavClick = (targetPath: string) => {
    const isSamePage = location.pathname === targetPath
    onClose()
    if (!isSamePage) {
      // Changement de page : scroll en haut après la fermeture du menu
      // On attend la fin de l'animation de fermeture (~0.8s)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
      }, 800)
    }
    // Même page : on ne touche pas au scroll, le scroll lock le restaure déjà
  }

  const closeRef = useRef<HTMLButtonElement>(null)

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = "0"
      document.body.style.right = "0"
      document.body.style.overflow = "hidden"
    } else {
      const savedTop = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.overflow = ""
      if (savedTop) {
        window.scrollTo({ top: parseInt(savedTop) * -1, behavior: "instant" })
      }
    }

    return () => {
      const savedTop = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.overflow = ""
      if (savedTop) {
        window.scrollTo({ top: parseInt(savedTop) * -1, behavior: "instant" })
      }
    }
  }, [isOpen])

  // Animation ouverture / fermeture
  useEffect(() => {
  const menu = menuRef.current
    if (!menu) return

    if (isOpen) {
      gsap.set(menu, { display: "flex" })
      initLetters()

      gsap.fromTo(
        menu,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power3.inOut" }
      )
      gsap.fromTo(
        itemsRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.5 }
      )

      // Bouton Fermer — après les items
      gsap.fromTo(
        closeRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 1.1 }
      )
    } else {
      // Reset pour la prochaine ouverture
      gsap.set(closeRef.current, { y: 16, opacity: 0 })

      gsap.to(menu, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => { gsap.set(menu, { display: "none" }) },
      })
    }
  }, [isOpen])

  return (
    <section
      ref={menuRef}
      className="menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation principale"
    >
      {/* Fermer — haut droite */}
      <button
        ref={closeRef}
        className="menu-overlay__close"
        onClick={onClose}
        aria-label="Fermer le menu"
      >
        Fermer
      </button>

      {/* Liste — haut gauche */}
      <div className="menu-nav">
        <nav>
          <ul className="menu">
            {menuItems.map((item, i) => (
              <li
                key={item.label}
                ref={(el) => { itemsRef.current[i] = el }}
                className="js-menu-item menu-item"
              >
                <NavLink to={item.path} onClick={() => handleNavClick(item.path)}>
                  {({ isActive }) => (
                    <div className={`menu-item__text ${isActive ? 'menu-item__text--active' : ''}`}>
                      {item.label}
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Tagline + logo — bas droite */}
      <div className="menu-bottom">
        <div className="menu-bottom__tagline">
          <span>Graphiste</span>
          <span>/ Développeur web</span>
        </div>
        <img src={logo} alt="Logo Julien Privat" width={843} height={158} loading="lazy" className="menu-bottom__logo" />
      </div>
    </section>
  )
}

export default MenuFullwidth