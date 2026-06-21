'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

type MenuState = 'main' | 'about' | 'projects' | 'skills' | 'contact'

const splashTexts = [
  "Available for hire!",
  "Full-stack developer!",
  "AI-native engineer!",
  "ML Intern @ FlyRank!",
  "Rutgers '28!",
  "CS + Econ!",
  "Hello World!",
]

// Minecraft title screen music tracks (C418 - Volume Beta) from Archive.org
// Using .mp3 for cross-browser compatibility (Safari doesn't support .ogg)
const bgMusicTracks = [
  'https://archive.org/download/Minecraftostvolumebeta/C418-Minecraft%20Soundtrack%20Volume%20Beta/09.%20Mutation.mp3',
  'https://archive.org/download/Minecraftostvolumebeta/C418-Minecraft%20Soundtrack%20Volume%20Beta/06.%20Moog%20City%202.mp3',
  'https://archive.org/download/Minecraftostvolumebeta/C418-Minecraft%20Soundtrack%20Volume%20Beta/17.%20Beginning%202.mp3',
]

export default function Home() {
  const [menuState, setMenuState] = useState<MenuState>('main')
  const [splash, setSplash] = useState('')
  const [isMuted, setIsMuted] = useState(false)
  const musicStartedRef = useRef(false)

  const clickSoundRef = useRef<HTMLAudioElement | null>(null)
  const bgMusicRef = useRef<HTMLAudioElement | null>(null)
  const trackIndexRef = useRef(0)

  useEffect(() => {
    const splashFrame = requestAnimationFrame(() => {
      setSplash(splashTexts[Math.floor(Math.random() * splashTexts.length)])
    })

    // Shuffle track order on load
    trackIndexRef.current = Math.floor(Math.random() * bgMusicTracks.length)

    return () => cancelAnimationFrame(splashFrame)
  }, [])

  // Play the next track when the current one ends
  const handleTrackEnd = useCallback(() => {
    trackIndexRef.current = (trackIndexRef.current + 1) % bgMusicTracks.length
    if (bgMusicRef.current) {
      bgMusicRef.current.src = bgMusicTracks[trackIndexRef.current]
      bgMusicRef.current.play().catch(() => {})
    }
  }, [])

  // Start background music on first user interaction
  const startMusic = useCallback(() => {
    if (musicStartedRef.current) return
    musicStartedRef.current = true

    const audio = bgMusicRef.current
    if (audio) {
      audio.src = bgMusicTracks[trackIndexRef.current]
      audio.volume = 0.3
      audio.play().catch(() => {})
    }
  }, [])

  const playClick = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0.3 // skip initial silence
      clickSoundRef.current.play().catch(() => {})
    }
  }

  const handleBtn = (state: MenuState) => {
    startMusic()
    playClick()
    setMenuState(state)
  }

  const handleBack = () => {
    startMusic()
    playClick()
    setMenuState('main')
  }

  const toggleMute = () => {
    startMusic()
    playClick()
    const newMuted = !isMuted
    setIsMuted(newMuted)
    if (bgMusicRef.current) {
      bgMusicRef.current.muted = newMuted
    }
  }

  return (
    <>
      {/* Click sound */}
      <audio
        ref={clickSoundRef}
        src="/assets/sounds/click.mp3"
        preload="auto"
      />

      {/* Background music */}
      <audio
        ref={bgMusicRef}
        onEnded={handleTrackEnd}
        preload="none"
      />

      {/* Panorama background - exact CodePen match */}
      <div className="backgroundMainMenu" />

      {/* Music toggle button */}
      <div
        className="musicToggle"
        onClick={toggleMute}
        title={isMuted ? 'Unmute music' : 'Mute music'}
      >
        <div className="textBtn" style={{ padding: '6px 10px', fontSize: '12px' }}>
          {isMuted ? '🔇 Music Off' : '🔊 Music On'}
        </div>
      </div>

      {menuState === 'projects' ? (
        <Projects onBack={handleBack} playClick={playClick} startMusic={startMusic} />
      ) : menuState === 'about' ? (
        <About onBack={handleBack} playClick={playClick} startMusic={startMusic} />
      ) : menuState === 'skills' ? (
        <Skills onBack={handleBack} playClick={playClick} startMusic={startMusic} />
      ) : menuState === 'contact' ? (
        <Contact onBack={handleBack} playClick={playClick} startMusic={startMusic} />
      ) : menuState === 'main' ? (
        /* ====== MAIN MENU ====== */
        <div className="mainMenu">
          {/* Logo area - Minecraft-style logo image with true transparency */}
          <div className="logo">
            <img 
              src="/assets/images/manas-logo.png?v=2" 
              srcSet="/assets/images/manas-logo@2x.png?v=2 2x"
              alt="MANAS Portfolio" 
              className="logoImage"
              width={734}
              height={188}
            />
            <div className="subtitle">{splash}</div>
          </div>

          {/* Main buttons - mn1 */}
          <div className="mn1">
            <a><div className="mainBtn" onClick={() => handleBtn('about')}>
              <div className="textBtn">About Me</div>
            </div></a>
            <a><div className="mainBtn" onClick={() => handleBtn('projects')}>
              <div className="textBtn">Projects</div>
            </div></a>
            <a><div className="mainBtn" onClick={() => handleBtn('skills')}>
              <div className="textBtn">Skills</div>
            </div></a>
          </div>

          {/* Bottom row - mn2 */}
          <div className="mn2">
            <div className="secondBtn" onClick={() => handleBtn('contact')}>
              <div className="textBtn">Contact</div>
            </div>
            <div className="secondBtn" onClick={() => {
              startMusic()
              playClick()
              window.open('https://github.com/Manaskumm', '_blank')
            }}>
              <div className="textBtn">GitHub</div>
            </div>
            <div className="secondBtn" onClick={() => {
              startMusic()
              playClick()
              window.open('/resume.pdf', '_blank')
            }}>
              <div className="textBtn">Resume</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
