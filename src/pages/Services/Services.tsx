import { useEffect, useState } from "react"
import "./Services.scss"
import Seo from "../../components/Seo/Seo"
import { SERVICES } from "../../data/services"
import { searchServices } from "../../utils/searchServices"

const EXAMPLES = ["Logo", "Site e-commerce", "Carte de visite", "Réseaux sociaux", "Packaging"]
const TYPING_DELAY_MS = 400

function categorySlug(category: string) {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
}

function Services() {
  const [query, setQuery] = useState("")
  // Version "à retardement" de la requête : ne se met à jour que TYPING_DELAY_MS
  // après la dernière frappe, ce qui laisse le temps au faux effet de frappe du
  // chatbot de s'afficher avant de révéler les résultats.
  const [debouncedQuery, setDebouncedQuery] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQuery(query), TYPING_DELAY_MS)
    return () => clearTimeout(timeout)
  }, [query])

  const trimmedQuery = query.trim()
  const isTyping = trimmedQuery !== "" && debouncedQuery.trim() !== trimmedQuery
  const results = trimmedQuery && !isTyping ? searchServices(debouncedQuery, SERVICES, 5) : []

  return (
    <>
      <Seo
        title="Services — Branding, print, digital & développement web | Julien PRIVAT"
        description="Logotype, identité graphique, print, direction artistique, UI/UX design et développement de sites web : découvrez mes services de graphiste et développeur web freelance."
        path="/services"
      />
      <section className="services__hero--section">
        <h1 className="services__hero--title">Services</h1>
        <div className="services__hero--container">
          <p className="services__hero--text">Identité d’entreprise / Print / Digital / Développement web / Assets réseaux sociaux / Direction artistique / UI - UX Design</p>
        </div>
      </section>

      {/* Recherche façon faux chatbot */}
      <section className="services__search">
        <p className="services__search--intro">Décrivez ce que vous cherchez, je vous dis si c’est dans mes cordes.</p>

        <div className="services__search--bar">
          <svg className="services__search--icon" viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            className="services__search--input"
            placeholder="Ex : logo, carte de visite, site e-commerce…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Rechercher un service"
          />
          {query && (
            <button
              type="button"
              className="services__search--clear"
              onClick={() => setQuery("")}
              aria-label="Effacer la recherche"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

        {!query.trim() && (
          <div className="services__search--chips">
            {EXAMPLES.map((example) => (
              <button
                key={example}
                type="button"
                className="services__search--chip"
                onClick={() => setQuery(example)}
              >
                {example}
              </button>
            ))}
          </div>
        )}

        {query.trim() && (
          <div className="services__search--results" role="status" aria-live="polite">
            {isTyping ? (
              <div className="services__search--typing" aria-label="Recherche en cours">
                <span className="services__search--dot" />
                <span className="services__search--dot" />
                <span className="services__search--dot" />
              </div>
            ) : results.length > 0 ? (
              <>
                <p className="services__search--results-label">Ce qui correspond le mieux :</p>
                <ul className="services__search--list">
                  {results.map((service, index) => (
                    <li
                      key={service.id}
                      className={`services__search--result services__search--result-${categorySlug(service.category)}`}
                      style={{ animationDelay: `${index * 0.06}s` }}
                    >
                      <span className="services__search--result-category">{service.category}</span>
                      <span className="services__search--result-label">{service.label}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="services__search--empty">
                <p className="services__search--empty-text">
                  Rien de précis dans mes services pour « {query} »&nbsp;: mais chaque projet est différent, discutons-en.
                </p>
                <a href="/contact" className="services__search--empty-cta">Me contacter</a>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  )
}

export default Services