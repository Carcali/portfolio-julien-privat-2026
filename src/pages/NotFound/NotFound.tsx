import "./NotFound.scss"
import image404 from "../../assets/global/page-introuvable-julien-privat.jpg"

function NotFound() {
  return (
    <>
      <section className="not-found__hero--section">
        <h2 className="not-found__hero--title">
          Oups... On dirait que la page que vous recherchez n'existe pas.
        </h2>
        <img className="not-found__hero--image" src={image404} alt="Page introuvable" />
      </section>
      <section className="not-found__content--section">
        <p className="not-found__content--text">
          Ce n'est pas grave, vous pouvez toujours retourner sur la page d'accueil avec le bouton ci-dessous.
        </p>
        <a href="/accueil" className="not-found__content--link">Retourner à l'accueil</a>
      </section>
    </>
  )
}

export default NotFound