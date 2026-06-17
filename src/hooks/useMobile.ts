import { useEffect, useState } from "react"

export function useMobile(query: string = "(max-width: 768px)"): boolean {
  // Valeur initiale STABLE : false au serveur ET au 1er rendu client → pas de mismatch.
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)

    // Détection réelle, après hydratation.
    setMatches(mediaQuery.matches)
    mediaQuery.addEventListener("change", handler)

    return () => mediaQuery.removeEventListener("change", handler)
  }, [query])

  return matches
}