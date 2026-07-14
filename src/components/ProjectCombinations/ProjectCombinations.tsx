import type { CSSProperties } from 'react'

interface CombinationConfig {
  logo: string
  alt: string
  bgColor?: string
  bgClass?: string
}

interface ProjectCombinationsProps {
  combinations: CombinationConfig[]
  variant?: 'extend' | 'compact'
}

function ProjectCombinations({ combinations, variant = 'extend' }: ProjectCombinationsProps) {
  return (
    <section className="projects-details__combinations--section projects-details__wrapper">
      <div className="projects-details__wrapper--70">
        {variant === 'extend' && (
          <p className="projects-details__combinations--title">Combinaisons</p>
        )}
        <div className={`projects-details__combinations--grid ${variant === 'compact' ? 'projects-details__combinations--grid-compact' : ''}`}>
          {combinations.map((combo, index) => {
            const style: CSSProperties = combo.bgColor
              ? { backgroundColor: combo.bgColor }
              : {}

            const className = `projects-details__combinations--card ${
              combo.bgClass ? `projects-details__combinations--card-${combo.bgClass}` : ''
            } ${variant === 'compact' ? 'projects-details__combinations--card-compact' : ''}`

            return (
              <div key={index} className={className} style={style}>
                <img
                  className="projects-details__combinations--logo"
                  src={combo.logo}
                  alt={combo.alt}
                  loading="lazy"
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