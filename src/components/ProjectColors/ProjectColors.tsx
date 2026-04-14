import { useState } from "react"

interface ColorConfig {
  hex?: string
  gradient?: string
  label?: string
  labelColor?: string
  size: 'large' | 'wide' | 'square'
  dimmed?: boolean
}

interface ProjectColorsProps {
  colors: ColorConfig[]
}

function ProjectColors({ colors }: ProjectColorsProps) {
  const [activeColor, setActiveColor] = useState<string | null>(null)

  const leftColor = colors.find(c => c.size === 'large')
  const rightColors = colors.filter(c => c.size !== 'large')

  const renderCard = (color: ColorConfig) => {
    const key = color.hex ?? color.gradient ?? ''
    const isActive = activeColor === key

    return (
      <div
        key={key}
        className={`projects-details__colors--card projects-details__colors--card-${color.size} ${isActive ? 'is-active' : ''} ${color.dimmed ? 'is-dimmed' : ''}`}
        style={{
          background: color.gradient
            ? `linear-gradient(90deg, ${color.gradient})`
            : color.hex
        }}
        onClick={() => setActiveColor(prev => prev === key ? null : key)}
      >
        <span
          className="projects-details__colors--label"
          style={{ color: color.labelColor ?? '#f5efe6' }}
        >
          {color.label}
        </span>
      </div>
    )
  }

  return (
    <section className="projects-details__colors--section projects-details__wrapper">
      <div className="projects-details__wrapper--70">
        <p className="projects-details__combinations--title">Couleurs</p>
        <div className="projects-details__colors--grid">
          {leftColor && renderCard(leftColor)}
          <div className="projects-details__colors--right-col">
            <div className="projects-details__colors--top-row">
              {rightColors.slice(0, 2).map(renderCard)}
            </div>
            <div className="projects-details__colors--bottom-row">
              {rightColors.slice(2, 4).map(renderCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectColors