import { useRef, useEffect, useState, useCallback } from "react"
import gsap from "gsap"
import "./DeviceFrame.scss"

type DeviceVariant = "desktop" | "tablet" | "mobile"

interface DeviceFrameProps {
  variant: DeviceVariant
  src: string | string[]
  alt?: string
  label?: string
  autoScrollDuration?: number
}

function DeviceFrame({
  variant,
  src,
  alt = "",
  label,
  autoScrollDuration = 8,
}: DeviceFrameProps) {
  const srcs = Array.isArray(src) ? src : [src]
  const hasMultiple = srcs.length > 1

  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scrollRatio, setScrollRatio] = useState(0) // 0–1 position du thumb

  const viewportRef  = useRef<HTMLDivElement>(null)
  const imgRef       = useRef<HTMLImageElement>(null)
  const trackRef     = useRef<HTMLDivElement>(null)
  const thumbRef     = useRef<HTMLDivElement>(null)
  const scrollTlRef  = useRef<gsap.core.Timeline | null>(null)
  const isDragging   = useRef(false)
  const dragStartY   = useRef(0)
  const dragStartRatio = useRef(0)

  const deviceLabel = label ?? variant.toUpperCase()
  const n = srcs.length

  // ── Calcul thumb height & position ─────────────────────────────────────────
  const getThumbHeight = useCallback(() => {
    const viewport = viewportRef.current
    const img      = imgRef.current
    if (!viewport || !img) return 40
    const ratio = viewport.offsetHeight / img.offsetHeight
    return Math.max(24, Math.min(ratio * viewport.offsetHeight, viewport.offsetHeight - 8))
  }, [])

  const updateThumb = useCallback(() => {
    const viewport = viewportRef.current
    const img      = imgRef.current
    const thumb    = thumbRef.current
    const track    = trackRef.current
    if (!viewport || !img || !thumb || !track) return

    const maxScroll   = img.offsetHeight - viewport.offsetHeight
    const ratio       = maxScroll > 0 ? viewport.scrollTop / maxScroll : 0
    const thumbH      = getThumbHeight()
    const trackH      = track.offsetHeight
    const maxThumbTop = trackH - thumbH

    setScrollRatio(ratio)
    gsap.set(thumb, { y: ratio * maxThumbTop })
  }, [getThumbHeight])

  // ── Sync scrollTop depuis ratio ─────────────────────────────────────────────
  const scrollToRatio = useCallback((ratio: number) => {
    const viewport = viewportRef.current
    const img      = imgRef.current
    if (!viewport || !img) return
    const maxScroll = img.offsetHeight - viewport.offsetHeight
    viewport.scrollTop = ratio * maxScroll
    updateThumb()
  }, [updateThumb])

  // ── Auto-scroll GSAP ────────────────────────────────────────────────────────
  const startAutoScroll = useCallback(() => {
    if (!autoScrollDuration || variant !== "desktop") return
    scrollTlRef.current?.kill()
    const viewport = viewportRef.current
    const img      = imgRef.current
    if (!viewport || !img) return

    viewport.scrollTop = 0
    updateThumb()

    const begin = () => {
      const maxScroll = img.offsetHeight - viewport.offsetHeight
      if (maxScroll <= 0) return

      scrollTlRef.current = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1.5,
        delay: 1.2,
        onUpdate: updateThumb,
      })
      scrollTlRef.current.to(viewport, {
        scrollTop: maxScroll,
        duration: autoScrollDuration,
        ease: "power1.inOut",
      })
    }

    if (img.complete) begin()
    else img.addEventListener("load", begin, { once: true })
  }, [autoScrollDuration, variant, updateThumb])

  useEffect(() => {
    startAutoScroll()
    return () => { scrollTlRef.current?.kill() }
  }, [current, startAutoScroll])


  // ── Scroll molette — listener natif { passive: false } pour preventDefault ──
  const screenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = screenRef.current
    if (!el) return

    const handler = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()
      scrollTlRef.current?.pause()
      const viewport = viewportRef.current
      const img      = imgRef.current
      if (!viewport || !img) return
      const maxScroll = img.offsetHeight - viewport.offsetHeight
      viewport.scrollTop = Math.min(maxScroll, Math.max(0, viewport.scrollTop + e.deltaY))
      updateThumb()
    }

    el.addEventListener("wheel", handler, { passive: false })
    return () => el.removeEventListener("wheel", handler)
  }, [updateThumb])
  // ── Drag scrollbar thumb ────────────────────────────────────────────────────
  const onThumbMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    isDragging.current    = true
    dragStartY.current    = e.clientY
    dragStartRatio.current = scrollRatio
    scrollTlRef.current?.pause()

    const onMove = (ev: MouseEvent) => {
      if (!isDragging.current) return
      const track = trackRef.current
      const thumb = thumbRef.current
      if (!track || !thumb) return
      const thumbH    = getThumbHeight()
      const trackH    = track.offsetHeight
      const maxTop    = trackH - thumbH
      const delta     = ev.clientY - dragStartY.current
      const newRatio  = Math.min(1, Math.max(0, dragStartRatio.current + delta / maxTop))
      scrollToRatio(newRatio)
    }

    const onUp = () => {
      isDragging.current = false
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup",   onUp)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup",   onUp)
  }, [scrollRatio, getThumbHeight, scrollToRatio])

  // Click sur le track (hors thumb) → scroll direct
  const onTrackClick = useCallback((e: React.MouseEvent) => {
    const track = trackRef.current
    const thumb = thumbRef.current
    if (!track || !thumb) return
    const rect     = track.getBoundingClientRect()
    const thumbH   = getThumbHeight()
    const clickY   = e.clientY - rect.top - thumbH / 2
    const maxTop   = track.offsetHeight - thumbH
    const newRatio = Math.min(1, Math.max(0, clickY / maxTop))
    scrollTlRef.current?.pause()
    scrollToRatio(newRatio)
  }, [getThumbHeight, scrollToRatio])

  // ── Navigation slides ────────────────────────────────────────────────────────
  const goTo = useCallback((nextIndex: number, direction: "next" | "prev") => {
    if (isAnimating || nextIndex === current) return
    setIsAnimating(true)
    scrollTlRef.current?.kill()

    const img      = imgRef.current
    const viewport = viewportRef.current
    if (!img || !viewport) return

    const xOut = direction === "next" ? "-4%" : "4%"
    const xIn  = direction === "next" ?  "4%" : "-4%"

    const tl = gsap.timeline({
      onComplete: () => { setCurrent(nextIndex); setIsAnimating(false) },
    })
    tl.to(img, { opacity: 0, x: xOut, duration: 0.22, ease: "power2.in" })
    tl.call(() => {
      img.src = srcs[nextIndex]
      gsap.set(img, { x: xIn })
      viewport.scrollTop = 0
      updateThumb()
    })
    tl.to(img, { opacity: 1, x: "0%", duration: 0.38, ease: "power3.out" })
  }, [current, isAnimating, srcs, updateThumb])

  const goNext = useCallback(() => goTo((current + 1) % n, "next"), [goTo, current, n])
  const goPrev = useCallback(() => goTo((current - 1 + n) % n, "prev"), [goTo, current, n])

  const thumbH = getThumbHeight()

  return (
    <div className={`device-frame device-frame--${variant}`}>

      {/* ── Méta ── */}
      <div className="device-frame__meta">
        <span className="device-frame__meta-label">{deviceLabel}</span>
        {hasMultiple && (
          <span className="device-frame__meta-counter">
            {String(current + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
        )}
      </div>

      {/* ── Ligne centrale : flèche gauche + shell + flèche droite ── */}
      <div className="device-frame__row">

        {/* Flèche précédente — à l'extérieur gauche */}
        {hasMultiple ? (
          <button
            className="device-frame__nav-arrow device-frame__nav-arrow--prev"
            onClick={goPrev}
            aria-label="Maquette précédente"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ) : (
          <div className="device-frame__nav-placeholder" />
        )}

        {/* ── Shell ── */}
        <div className="device-frame__shell">

          {variant === "mobile" && <div className="device-frame__notch" />}
          {variant === "tablet" && <div className="device-frame__camera" />}

          {variant === "desktop" && (
            <div className="device-frame__browser-bar">
              <div className="device-frame__browser-dots">
                <span className="device-frame__dot" />
                <span className="device-frame__dot" />
                <span className="device-frame__dot" />
              </div>
              <div className="device-frame__url-bar" />
            </div>
          )}

          {/* Viewport + scrollbar custom côte à côte */}
          <div className="device-frame__screen" ref={screenRef}>
            <div className="device-frame__viewport" ref={viewportRef}>
              <img
                ref={imgRef}
                className="device-frame__img"
                src={srcs[current]}
                alt={alt}
                draggable={false}
              />
            </div>

            {/* Scrollbar custom dans le browser */}
            <div
              className="device-frame__scrollbar-track"
              ref={trackRef}
              onClick={onTrackClick}
            >
              <div
                className="device-frame__scrollbar-thumb"
                ref={thumbRef}
                style={{ height: thumbH }}
                onMouseDown={onThumbMouseDown}
              />
            </div>
          </div>

          {variant === "mobile" && <div className="device-frame__home-bar" />}

          {/* Dots slides en bas du shell */}
          {hasMultiple && (
            <div className="device-frame__dots-nav">
              {srcs.map((_, i) => (
                <button
                  key={i}
                  className={`device-frame__dot-nav${i === current ? " device-frame__dot-nav--active" : ""}`}
                  onClick={() => goTo(i, i > current ? "next" : "prev")}
                  aria-label={`Maquette ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Flèche suivante — à l'extérieur droite */}
        {hasMultiple ? (
          <button
            className="device-frame__nav-arrow device-frame__nav-arrow--next"
            onClick={goNext}
            aria-label="Maquette suivante"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ) : (
          <div className="device-frame__nav-placeholder" />
        )}

      </div>



    </div>
  )
}

export default DeviceFrame