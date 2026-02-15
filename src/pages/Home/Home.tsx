import "./Home.scss"
import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel"

function Home() {
  return (
    <>
      <section>
        <div className="home__title--wrapper">
          <p>Graphiste</p>
          <p>/ Développeur web</p>
        </div>
      </section>
      {/* Promesse */}
      <section className="home__promise--section">
        <div className="home__promise--asking">
          <p>Savez-vous ce que vous venez chercher ?</p>
          <p>Ce n’est pas grave, nous sommes là pour le définir ensemble.</p>
        </div>
        <div className="home__promise--catchphrase">
          <p>Redécouvrons vos qualités, une relation de confiance couplée à des recherches cadrées pour un résultat incontestable.</p>
        </div>
      </section>
      {/* Mes services */}
      <section className="home__my-services--section">
        <h3 className="home__my-services--section-title">Mes services</h3>
        <div className="home__my-services--grid">

          <div className="home__my-services--unity">
            <p className="home__my-services--title">1. Branding</p>
            <ul className="home__my-services--list">
              <li>Création de logotype</li>
              <li>Identité graphique</li>
              <li>Charte graphique</li>
              <li>Direction artistique</li>
            </ul>
          </div>

          <div className="home__my-services--unity">
            <p className="home__my-services--title">2. Print</p>
            <ul className="home__my-services--list">
              <li>Cartes de visites</li>
              <li>Affiches / Dépliants / Brochures</li>
              <li>Papeterie</li>
              <li>Signalétique</li>
            </ul>
          </div>
        
          <div className="home__my-services--unity">
            <p className="home__my-services--title">3. Digital</p>
            <ul className="home__my-services--list">
              <li>Création de maquettes web</li>
              <li>Contenu pour les réseaux sociaux</li>
              <li>Création d’assets pour les sites et apps</li>
              <li>Évolution vers un projet digital</li>
              <li>Optimisation du référencement naturel</li>
            </ul>
          </div>

          <div className="home__my-services--unity">
            <p className="home__my-services--title">4. Développement web</p>
            <ul className="home__my-services--list">
              <li>UI / UX Design</li>
              <li>Création de sites Wordpress</li>
              <li>Accompagnement en e-commerce</li>
              <li>Tests fonctionnels</li>
            </ul>
          </div>

        </div>
      </section>
      {/* Les derniers projets */}
      <section className="home__last-projects--section">
        <div className="home__last-projects--header">
          <h3 className="home__last-projects--title">Les derniers projets</h3>
          <a href="/projets" className="home__last-projects--link">Voir tous les projets</a>
        </div>
        {/* <ProjectCarousel /> */}
      </section>
    </>
  )
}

export default Home