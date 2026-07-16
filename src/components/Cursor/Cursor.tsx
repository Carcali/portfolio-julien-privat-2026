import { useEffect, useRef, useState } from "react"
import "./Cursor.scss"

const isTouchDevice = () => {
  if (typeof window === "undefined") return false // build SSG : pas de window
  return window.matchMedia("(hover: none), (pointer: coarse)").matches
}

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted) return
    if (isTouchDevice()) return // ← sortie immédiate sur mobile/tablette

    const ring = ringRef.current
    if (!ring) return

    const cursorPos = { x: 0, y: 0 }
    const ringPos = { x: 0, y: 0 }
    const easing = 8

    const onMove = (e: MouseEvent) => {
      cursorPos.x = e.clientX
      cursorPos.y = e.clientY
    }

    let rafId: number
    const loop = () => {
      ringPos.x += (cursorPos.x - ringPos.x) / easing
      ringPos.y += (cursorPos.y - ringPos.y) / easing
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    // Délégation : un seul listener, pas besoin de re-binder au moindre changement du DOM
    const interactiveSelector = "a, button, [data-cursor]"

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (target?.closest(interactiveSelector)) {
        ring.classList.add("cursor__ring--active")
      }
    }

    const onOut = (e: MouseEvent) => {
      const target = e.target as Element | null
      const related = e.relatedTarget as Element | null
      if (target?.closest(interactiveSelector) && !related?.closest?.(interactiveSelector)) {
        ring.classList.remove("cursor__ring--active")
      }
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    window.addEventListener("mouseout", onOut)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("mouseout", onOut)
      cancelAnimationFrame(rafId)
    }
  }, [mounted])

  // Au serveur et au tout premier rendu client : rien.
  if (!mounted) return null
  if (isTouchDevice()) return null // pas de rendu DOM sur mobile

  return <div ref={ringRef} className="cursor__ring" aria-hidden="true" />
}