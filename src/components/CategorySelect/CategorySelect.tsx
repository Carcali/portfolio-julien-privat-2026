import { useState } from "react"
import "./CategorySelect.scss"

const categories = ["Print", "Digital", "Développement web"]

function CategorySelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (category: string) => {
    setSelected(category)
    setIsOpen(false)
  }

  return (
    <div className="category-select" onClick={() => setIsOpen(!isOpen)}>
      <div className={`category-select__trigger ${isOpen ? "category-select__trigger--open" : ""}`}>
        <span>{selected ?? "Catégories"}</span>
        <svg
          className={`category-select__arrow ${isOpen ? "category-select__arrow--open" : ""}`}
          width="12" height="12" viewBox="0 0 12 12" fill="none"
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {isOpen && (
        <ul className="category-select__dropdown">
          {categories.map((cat) => (
            <li
              key={cat}
              className={`category-select__option ${selected === cat ? "category-select__option--active" : ""}`}
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