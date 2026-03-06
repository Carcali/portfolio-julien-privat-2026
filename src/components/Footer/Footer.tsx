import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer__container">
      <a href="/contact" className="footer__cta">Gardon contact ?</a>
      <div className="footer__menu--div">
        <a href="/accueil" className="footer__menu--link">Accueil</a>
        <a href="/projets" className="footer__menu--link">Projets</a>
        <a href="/services" className="footer__menu--link">Services</a>
        <a href="/a-propos" className="footer__menu--link">À propos</a>
        <a href="/contact" className="footer__menu--link">Contact</a>
      </div>
      <div className="footer__credits--div">
        <a href="/mentions-legales" className="footer__credits--legals">Mentions légales</a>
        <p className="footer__credits--name">Julien PRIVAT 2026©</p>
      </div>
    </footer>
  )
}

export default Footer