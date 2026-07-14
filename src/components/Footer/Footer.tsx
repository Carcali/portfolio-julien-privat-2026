import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer__container">
      <a href="/contact" className="footer__cta">Restons en contact ?</a>
      <div className="footer__socials--div">
        <a href="https://www.linkedin.com/in/julien-privat-7a4990203/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn de Julien Privat" className="footer__socials--link">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
          </svg>
        </a>
        <a href="https://github.com/Carcali" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub de Julien Privat" className="footer__socials--link">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" aria-hidden="true">
            <path d="M12 2.2c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.52 9.52 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.2c0-5.52-4.48-10-10-10Z" />
          </svg>
        </a>
      </div>
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