import { useState } from "react"

interface ColorConfig {
  id: string
  label?: string
  size: 'large' | 'wide' | 'square'
  position?: 'left' | 'right'
}

interface ProjectColorsProps {
  colors: ColorConfig[]
}

function ProjectColors({ colors }: ProjectColorsProps) {
  const [activeColor, setActiveColor] = useState<string | null>(null)

  const handleColorClick = (colorId: string) => {
    setActiveColor(prev => prev === colorId ? null : colorId)
  }

  const leftColor = colors.find(c => c.size === 'large')
  const rightColors = colors.filter(c => c.size !== 'large')

  return (
    <section className="projects-details__colors--section projects-details__wrapper">
      <div className="projects-details__wrapper--70">
        <p className="projects-details__combinations--title">Couleurs</p>
        <div className="projects-details__colors--grid">
          {leftColor && (
            <div
              className={`projects-details__colors--card projects-details__colors--card-${leftColor.id} projects-details__colors--card-large ${activeColor === leftColor.id ? 'is-active' : ''}`}
              onClick={() => handleColorClick(leftColor.id)}
            >
              <span className="projects-details__colors--label">{leftColor.label}</span>
            </div>
          )}
          <div className="projects-details__colors--right-col">
            <div className="projects-details__colors--top-row">
              {rightColors.slice(0, 2).map(color => (
                <div
                  key={color.id}
                  className={`projects-details__colors--card projects-details__colors--card-${color.id} projects-details__colors--card-${color.size} ${activeColor === color.id ? 'is-active' : ''}`}
                  onClick={() => handleColorClick(color.id)}
                >
                  <span className="projects-details__colors--label">{color.label}</span>
                </div>
              ))}
            </div>
            <div className="projects-details__colors--bottom-row">
              {rightColors.slice(2, 4).map(color => (
                <div
                  key={color.id}
                  className={`projects-details__colors--card projects-details__colors--card-${color.id} projects-details__colors--card-${color.size} ${activeColor === color.id ? 'is-active' : ''}`}
                  onClick={() => handleColorClick(color.id)}
                >
                  <span className="projects-details__colors--label">{color.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectColors
