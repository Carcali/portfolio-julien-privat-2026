import { useState, useEffect, useRef } from "react"
import "./CategorySelect.scss"

export type Category = "Tous" | "Branding" | "Print" | "Digital" | "Développement web"

export const CATEGORIES: Category[] = [
  "Tous",
  "Branding",
  "Print",
  "Digital",
  "Développement web",
]

interface Props {
  active: Category
  onChange: (cat: Category) => void
}

function CategorySelect({ active, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Ferme le dropdown au clic extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (cat: Category) => {
    onChange(cat)
    setIsOpen(false)
  }

  return (
    <div
      ref={ref}
      className="category-select"
      onClick={() => setIsOpen((o) => !o)}
    >
      <div className={`category-select__trigger ${isOpen ? "category-select__trigger--open" : ""}`}>
        <span>{active}</span>
        <svg
          className={`category-select__arrow ${isOpen ? "category-select__arrow--open" : ""}`}
          width="12" height="12" viewBox="0 0 12 12" fill="none"
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {isOpen && (
        <ul className="category-select__dropdown">
          {CATEGORIES.map((cat) => (
            <li
              key={cat}
              className={`category-select__option ${active === cat ? "category-select__option--active" : ""}`}
              onClick={(e) => { e.stopPropagation(); handleSelect(cat) }}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CategorySelect