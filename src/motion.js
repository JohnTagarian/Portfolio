import { useCallback, useEffect, useRef, useState } from 'react'

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [query])

  return matches
}

export function useMotionPreferences() {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const desktopPointer = useMediaQuery('(min-width: 768px) and (hover: hover) and (pointer: fine)')
  return { reducedMotion, canTilt: desktopPointer && !reducedMotion }
}

export function useHeroMotion(artworkRef, reducedMotion) {
  useEffect(() => {
    const artwork = artworkRef.current
    if (!artwork) return

    if (reducedMotion) {
      artwork.dataset.motion = 'static'
      return
    }

    let inViewport = !('IntersectionObserver' in window)
    const update = () => {
      artwork.dataset.motion = inViewport && !document.hidden ? 'running' : 'paused'
    }
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
        inViewport = entry.isIntersecting
        update()
      })
      : null

    update()
    observer?.observe(artwork)
    document.addEventListener('visibilitychange', update)

    return () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', update)
      artwork.dataset.motion = 'paused'
    }
  }, [artworkRef, reducedMotion])
}

export function useSectionReveal(mainRef, reducedMotion) {
  const revealed = useRef(new WeakSet())

  useEffect(() => {
    const main = mainRef.current
    if (!main || reducedMotion || !('IntersectionObserver' in window) || !main.animate) return

    const tokens = getComputedStyle(main)
    const duration = parseFloat(tokens.getPropertyValue('--duration-reveal')) || 240
    const easing = tokens.getPropertyValue('--ease-ui').trim() || 'ease-out'
    const animations = new Set()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        observer.unobserve(target)
        if (revealed.current.has(target)) return

        revealed.current.add(target)
        if (document.hidden || target.matches(':focus-within')) return

        // Animate visible content; no hidden state remains if enhancement is unavailable.
        const animation = target.animate([
          { opacity: 0.45, transform: 'translateY(12px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration, easing })
        animations.add(animation)
        animation.onfinish = animation.oncancel = () => animations.delete(animation)
      })
    }, { threshold: 0.08 })

    main.querySelectorAll('[data-reveal]').forEach(section => observer.observe(section))
    return () => {
      observer.disconnect()
      animations.forEach(animation => animation.cancel())
    }
  }, [mainRef, reducedMotion])
}

export function useCardTilt(enabled) {
  const sceneRef = useRef(null)
  const cardRef = useRef(null)
  const frameRef = useRef(0)
  const pointerRef = useRef(null)

  const resetTilt = useCallback(() => {
    cancelAnimationFrame(frameRef.current)
    frameRef.current = 0
    pointerRef.current = null
    const card = cardRef.current
    if (!card) return
    card.classList.remove('is-tilting')
    const properties = ['--tilt-x', '--tilt-y', '--glow-x', '--glow-y']
    properties.forEach(name => card.style.removeProperty(name))
  }, [])

  useEffect(() => {
    resetTilt()
    return resetTilt
  }, [enabled, resetTilt])

  function handlePointerMove(event) {
    if (!enabled || event.pointerType !== 'mouse' || sceneRef.current?.matches(':focus-within')) return
    pointerRef.current = { x: event.clientX, y: event.clientY }
    if (frameRef.current) return

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = 0
      const scene = sceneRef.current
      const card = cardRef.current
      const pointer = pointerRef.current
      if (!scene || !card || !pointer) return
      const bounds = scene.getBoundingClientRect()
      if (!bounds.width || !bounds.height) return
      const x = Math.max(0, Math.min(1, (pointer.x - bounds.left) / bounds.width))
      const y = Math.max(0, Math.min(1, (pointer.y - bounds.top) / bounds.height))
      card.style.setProperty('--tilt-x', `${((0.5 - y) * 8).toFixed(2)}deg`)
      card.style.setProperty('--tilt-y', `${((x - 0.5) * 8).toFixed(2)}deg`)
      card.style.setProperty('--glow-x', `${(x * 100).toFixed(1)}%`)
      card.style.setProperty('--glow-y', `${(y * 100).toFixed(1)}%`)
      card.classList.add('is-tilting')
    })
  }

  return { sceneRef, cardRef, handlePointerMove, resetTilt }
}
