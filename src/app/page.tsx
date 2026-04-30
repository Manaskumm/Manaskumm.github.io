'use client'

import { useState, useEffect, useRef } from 'react'
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

export default function Home() {
  const [menuState, setMenuState] = useState<MenuState>('main')
  const [splash, setSplash] = useState('')
  const clickSoundRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setSplash(splashTexts[Math.floor(Math.random() * splashTexts.length)])
  }, [])

  const playClick = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0
      clickSoundRef.current.play().catch(() => {})
    }
  }

  const handleBtn = (state: MenuState) => {
    playClick()
    setMenuState(state)
  }

  const handleBack = () => {
    playClick()
    setMenuState('main')
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

      {/* Panorama background - exact CodePen match */}
      <div className="backgroundMainMenu" />

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
