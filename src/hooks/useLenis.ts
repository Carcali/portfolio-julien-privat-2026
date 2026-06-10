// src/hooks/useLenis.js
import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,       // durée de l'inertie (en secondes)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // courbe exponentielle
      smoothWheel: true,
    })

    // Synchronise Lenis avec GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])
}