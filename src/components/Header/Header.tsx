import "./Header.scss"
// import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="p-4 bg-black text-white flex justify-between items-center">
      <div className="font-bold text-xl">MonPortfolio</div>
      <nav className="space-x-4">
        {/*<NavLink to="/" className={({ isActive }) => isActive ? "text-secondary" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-secondary" : ""}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "text-secondary" : ""}>Projects</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? "text-secondary" : ""}>Services</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-secondary" : ""}>Contact</NavLink> */}
      </nav>
    </header>
  )
}

export default Header