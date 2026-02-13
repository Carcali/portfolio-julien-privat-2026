import "./Header.scss"
import Logo from "../../assets/global/logo-julien-privat.svg"
// import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="fixed w-full flex justify-between items-center px-[5vw] pt-[5vh]">
      <img src={Logo} alt="Logo" className="h-12"/>
      <button className="header__menu--button">
        Menu
      </button>
    </header>
  )
}

export default Header