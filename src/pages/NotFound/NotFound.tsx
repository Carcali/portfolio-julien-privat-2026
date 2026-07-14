import "./NotFound.scss"
import Seo from "../../components/Seo/Seo"
import image404 from "../../assets/global/page-introuvable-julien-privat.jpg"

function NotFound() {
  return (
    <>
      <Seo
        title="Page introuvable — Julien PRIVAT"
        description="Cette page n'existe pas ou plus. Retournez à l'accueil du portfolio de Julien PRIVAT, graphiste et développeur web freelance."
        path="/404"
        noindex
      />
      <section className="not-found__hero--section">
        <h1 className="not-found__hero--title">
          Oups... On dirait que la page que vous recherchez n'existe pas.
        </h1>
        <img className="not-found__hero--image" src={image404} alt="Page introuvable" width={400} height={500} />
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