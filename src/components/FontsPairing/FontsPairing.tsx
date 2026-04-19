import './FontsPairing.scss'

interface FontPairingItem {
  title: string
  subtitle?: string
  fontClass: string
  titleClass?: string
  titleStyle?: React.CSSProperties
  type: 'principal' | 'secondary'
}

interface FontsPairingProps {
  fonts: FontPairingItem[]
}

function FontsPairing({ fonts }: FontsPairingProps) {
  return (
    <section className="projects-details__fonts-pairing--section projects-details__wrapper">
      <div className="projects-details__wrapper--70">
        <p className="projects-details__fonts-pairing--title">Fonts pairing</p>
        <div className="projects-details__fonts-pairing--container">
          {fonts.map((font, index) => (
            <div key={index}>
              <p
                className={`projects-details__fonts-pairing--${font.type}-title ${font.fontClass}${font.titleClass ? ` ${font.titleClass}` : ''}`}
                style={font.titleStyle}  // ← ajout
              >
                {font.title}
              </p>
              {font.subtitle && (
                <div className={`projects-details__fonts-pairing--${font.type}-text`}>
                  {font.subtitle.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FontsPairing
