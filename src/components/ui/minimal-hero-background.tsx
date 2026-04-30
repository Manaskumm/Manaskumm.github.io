'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

interface MinimalHeroBackgroundProps {
  className?: string
}

export function MinimalHeroBackground({ className = '' }: MinimalHeroBackgroundProps) {
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    particles: THREE.Points
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const SEPARATION = 120
    const AMOUNTX = 50
    const AMOUNTY = 50

    const scene = new THREE.Scene()
    const bgColor = theme === 'light' ? 0xffffff : 0x0a0a0a
    scene.fog = new THREE.Fog(bgColor, 1500, 8000)

    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      1,
      10000
    )
    camera.position.set(0, 400, 1400)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(bgColor, 1)

    containerRef.current.appendChild(renderer.domElement)

    const positions: number[] = []
    const colors: number[] = []

    const geometry = new THREE.BufferGeometry()

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
        const y = 0
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2

        positions.push(x, y, z)

        if (theme === 'light') {
          colors.push(0.2, 0.2, 0.2)
        } else {
          colors.push(0.9, 0.9, 0.9)
        }
      }
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    )
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 6,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    let count = 0
    let animationId: number

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      const positionAttribute = geometry.attributes.position
      const positions = positionAttribute.array as Float32Array

      let i = 0
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const index = i * 3

          positions[index + 1] =
            Math.sin((ix + count) * 0.25) * 40 +
            Math.sin((iy + count) * 0.4) * 40

          i++
        }
      }

      positionAttribute.needsUpdate = true

      renderer.render(scene, camera)
      count += 0.08
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    animate()

    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles: points,
      animationId,
    }

    return () => {
      window.removeEventListener('resize', handleResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        sceneRef.current.scene.traverse((object) => {
          if (object instanceof THREE.Points) {
            object.geometry.dispose()
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })

        sceneRef.current.renderer.dispose()

        if (containerRef.current && sceneRef.current.renderer.domElement) {
          containerRef.current.removeChild(
            sceneRef.current.renderer.domElement
          )
        }
      }
    }
  }, [theme])

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  )
}
