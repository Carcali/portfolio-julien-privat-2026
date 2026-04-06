import { CSSProperties } from 'react'

interface CombinationConfig {
  bgClass?: string
  bgColor?: string
  logo: string
  alt: string
}

interface ProjectCombinationsProps {
  combinations: CombinationConfig[]
}

function ProjectCombinations({ combinations }: ProjectCombinationsProps) {
  return (
    <section className="projects-details__combinations--section projects-details__wrapper">
      <div className="projects-details__wrapper--70">
        <p className="projects-details__combinations--title">Combinaisons</p>
        <div className="projects-details__combinations--grid">
          {combinations.map((combo, index) => {
            const style: CSSProperties = combo.bgColor
              ? { backgroundColor: combo.bgColor }
              : {}

            const className = `projects-details__combinations--card ${
              combo.bgClass ? `projects-details__combinations--card-${combo.bgClass}` : ''
            }`

            return (
              <div
                key={index}
                className={className}
                style={style}
              >
                <img
                  className="projects-details__combinations--logo"
                  src={combo.logo}
                  alt={combo.alt}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectCombinations
