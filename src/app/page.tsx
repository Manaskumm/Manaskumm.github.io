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
  "Rutgers '28!",
  "CS + Econ!",
  "Hello World!",
]

// Minecraft title screen music tracks (C418 - Volume Beta) from Archive.org
const bgMusicTracks = [
  'https://archive.org/download/Minecraftostvolumebeta/C418-Minecraft%20Soundtrack%20Volume%20Beta/09.%20Mutation.ogg',
  'https://archive.org/download/Minecraftostvolumebeta/C418-Minecraft%20Soundtrack%20Volume%20Beta/06.%20Moog%20City%202.ogg',
  'https://archive.org/download/Minecraftostvolumebeta/C418-Minecraft%20Soundtrack%20Volume%20Beta/17.%20Beginning%202.ogg',
]

export default function Home() {
  const [menuState, setMenuState] = useState<MenuState>('main')
  const [splash, setSplash] = useState('')
  const [isMuted, setIsMuted] = useState(false)
  const [musicStarted, setMusicStarted] = useState(false)

  const clickSoundRef = useRef<HTMLAudioElement | null>(null)
  const bgMusicRef = useRef<HTMLAudioElement | null>(null)
  const trackIndexRef = useRef(0)

  useEffect(() => {
    setSplash(splashTexts[Math.floor(Math.random() * splashTexts.length)])

    // Shuffle track order on load
    trackIndexRef.current = Math.floor(Math.random() * bgMusicTracks.length)
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
    if (musicStarted) return
    setMusicStarted(true)

    const audio = bgMusicRef.current
    if (audio) {
      audio.src = bgMusicTracks[trackIndexRef.current]
      audio.volume = 0.3
      audio.play().catch(() => {})
    }
  }, [musicStarted])

  const playClick = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0
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

  const renderContent = () => {
    switch (menuState) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'skills':
        return <Skills />
      case 'contact':
        return <Contact />
      default:
        return null
    }
  }

  return (
    <>
      {/* Click sound */}
      <audio
        ref={clickSoundRef}
        src="https://cdn.discordapp.com/attachments/639163306749198356/681612670016815134/minecraft_click-AudioTrimmer.com.mp3"
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

      {menuState === 'main' ? (
        /* ====== MAIN MENU ====== */
        <div className="mainMenu">
          {/* Logo area - Minecraft-style logo image with true transparency */}
          <div className="logo" style={{ flexDirection: 'column' }}>
            <img 
              src="/assets/images/manas-logo.png" 
              alt="MANAS Portfolio" 
              style={{
                width: '100%',
                maxWidth: '450px',
                height: 'auto',
              }}
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
          </div>
        </div>
      ) : (
        /* ====== CONTENT OVERLAY ====== */
        <div className="contentOverlay">
          <h2 style={{ textTransform: 'capitalize' }}>{menuState}</h2>
          {renderContent()}
          <div className="backBtnWrapper">
            <div
              className="mainBtn"
              onClick={handleBack}
              style={{ width: '200px' }}
            >
              <div className="textBtn">Done</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
