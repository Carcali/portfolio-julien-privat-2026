import gsap from "gsap"

/**
 * Anime un texte lettre par lettre : au survol de `root`, le texte trouvé via
 * `textSelector` (et son clone, généré ici) glisse vers le haut pour se
 * révéler à nouveau depuis le bas. Le parent direct du texte sert de fenêtre
 * de clip (position relative + overflow hidden côté CSS).
 */
export function initTextRollHover(root: HTMLElement, textSelector: string) {
  const textEl = root.querySelector<HTMLElement>(textSelector)
  const wrapper = textEl?.parentElement
  if (!textEl || !wrapper) return

  const letters = [...(textEl.textContent ?? "")]
  textEl.textContent = ""
  letters.forEach((letter) => {
    const span = document.createElement("span")
    span.textContent = letter === " " ? " " : letter
    textEl.appendChild(span)
  })

  wrapper.style.height = `${wrapper.clientHeight}px`

  const clone = textEl.cloneNode(true) as HTMLElement
  clone.setAttribute("aria-hidden", "true")
  wrapper.appendChild(clone)

  const handleEnter = () => {
    const [original, clonedEl] = wrapper.querySelectorAll<HTMLElement>(textSelector)
    gsap.to(original.children, { y: "-100%", ease: "power2.out", stagger: { amount: 0.14, from: "start" } })
    gsap.to(clonedEl.children, { y: "-100%", ease: "power2.out", stagger: { amount: 0.14, from: "start" } })
  }

  const handleLeave = () => {
    const [original, clonedEl] = wrapper.querySelectorAll<HTMLElement>(textSelector)
    gsap.to(original.children, { y: "0%", ease: "power2.out", stagger: { amount: 0.1, from: "end" } })
    gsap.to(clonedEl.children, { y: "0%", ease: "power2.out", stagger: { amount: 0.1, from: "end" } })
  }

  root.addEventListener("mouseenter", handleEnter)
  root.addEventListener("mouseleave", handleLeave)

  return () => {
    root.removeEventListener("mouseenter", handleEnter)
    root.removeEventListener("mouseleave", handleLeave)
  }
}
