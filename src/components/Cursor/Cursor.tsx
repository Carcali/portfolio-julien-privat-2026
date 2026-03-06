import { useEffect, useRef } from "react"
import "./Cursor.scss"

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    const bindTargets = () => {
      document.querySelectorAll<HTMLElement>("a, button, [data-cursor]").forEach((el) => {
        el.removeEventListener("mouseover", el._cursorOver as EventListener)
        el.removeEventListener("mouseout", el._cursorOut as EventListener)

        const over = () => ring.style.setProperty("--size", "80px")
        const out = () => ring.style.setProperty("--size", "40px")

        el._cursorOver = over
        el._cursorOut = out
        el.addEventListener("mouseover", over)
        el.addEventListener("mouseout", out)
      })
    }

    const observer = new MutationObserver(bindTargets)
    bindTargets()
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener("mousemove", onMove)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return <div ref={ringRef} className="cursor__ring" aria-hidden="true" />
}

declare global {
  interface HTMLElement {
    _cursorOver?: EventListener
    _cursorOut?: EventListener
  }
}