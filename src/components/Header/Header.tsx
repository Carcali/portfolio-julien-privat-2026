import { useState } from "react"
import "./Header.scss"
import Logo from "../../assets/global/logo-julien-privat.svg"
import MenuFullwidth from "../MenuFullwidth/MenuFullwidth"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <img src={Logo} alt="Logo" className="header__logo" />
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