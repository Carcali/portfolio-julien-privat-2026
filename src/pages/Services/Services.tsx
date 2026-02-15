import "./Services.scss"

function Services() {
  return (
    <>
      <section className="services__hero--section">
        <h1 className="services__hero--title">Services</h1>
        <div className="services__hero--container">
          <p className="services__hero--text">Identité d’entreprise / Print / Digital / Développement web / Contenu réseaux sociaux / Direction artistique / UI - UX Design</p>
        </div>
      </section>
      {/* Cards des services */}
      <section className="services__cards">
        <p className="services__cards--explanation">Retrouvez mes différents services proposés, si toutefois vous avez une demande spécifique contactons-nous pour en discuter</p>
        <div className="services__cards--container">
          {/* Print */}
          <div className="services__cards--unity">
            <h2 className="services__cards--title">Print</h2>
            <ul className="services__cards--list">
              <li className="services__cards--item">Logotype</li>
              <li className="services__cards--item">Charte graphique</li>
              <li className="services__cards--item">Cartes de visites</li>
              <li className="services__cards--item">Posters / Affiches</li>
              <li className="services__cards--item">Livres / Catalogues / Brochures</li>
              <li className="services__cards--item">Dépliants</li>
              <li className="services__cards--item">Produits dérivés</li>
              <li className="services__cards--item">Évènementiel (cartons d’invitations, roll-up, kakémono…)</li>
              <li className="services__cards--item">Packaging</li>
              <li className="services__cards--item">Agendas</li>
              <li className="services__cards--item">Calendriers</li>
              <li className="services__cards--item">Signalétique</li>
              <li className="services__cards--item">Vitrines / Enseignes</li>
              <li className="services__cards--item">Toute création graphique imprimable</li>
              <li className="services__cards--item">Notions de pré-presse et de colorimétrie</li>
            </ul>
          </div>
          {/* Digital */}
          <div className="services__cards--unity">
            <h2 className="services__cards--title">Digital</h2>
            <ul className="services__cards--list">
              <li className="services__cards--item">Gestion et maintenance compléte du site (maintenance des mises à jours, actualisation des différents contenus, maintenance sécurité…)</li>
              <li className="services__cards--item">Optimisation du référencement naturel</li>
              <li className="services__cards--item">Création de contenus dédiés aux sites et à différents intervenants pour le digital</li>
              <li className="services__cards--item">Ajouts et gestions des produits, des stocks et des commandes pour les e-commerces</li>
              <li className="services__cards--item">Gestion des réseaux sociaux : créer du contenu, un planning de posts, répondre aux commentaires, faire du référencement, gérer la relation client/entreprise.</li>
              <li className="services__cards--item">Assurance d’une direction artistique et du respect de la charte graphique</li>
            </ul>
          </div>
          {/* Développement web */}
          <div className="services__cards--unity">
            <h2 className="services__cards--title">Développement web</h2>
            <ul className="services__cards--list">
              <li className="services__cards--item">Création de sites vitrines Wordpress</li>
              <li className="services__cards--item">Développement frontend</li>
              <li className="services__cards--item">UI / UX design</li>
              <li className="services__cards--item">Maquettes de sites / applications</li>
              <li className="services__cards--item">Tests fonctionnels</li>
              <li className="services__cards--item">Tests end-to-end Playwright</li>
              <li className="services__cards--item">Reformatage de styles</li>
              <li className="services__cards--item">Aide à la gestion d’un e-commerce</li>
              <li className="services__cards--item">Accompagnement pour la mise en place d’un e-commerce</li>
              <li className="services__cards--item">Créations de librairies d’assets visuels prêts à l’emploi pour applications</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Process steps */}
      {/* <section className="services__process--section">
        <div className="services__process--container">
          <h2 className="services__process--title">Le processus est la garantie d’un bon résultat</h2>
        </div>
      </section> */}
    </>
  )
}

export default Services