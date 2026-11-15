'use client'

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { profile } from '@/lib/portfolio'

function subscribeToHash(callback: () => void) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

export default function Home() {
  const section = useSyncExternalStore(subscribeToHash, () => window.location.hash.slice(1), () => 'main')
  useEffect(() => {
    document.getElementById('content')?.focus({ preventScroll: true })
    window.scrollTo(0, 0)
  }, [section])
  const [soundOn, setSoundOn] = useState(false)
  const clickSound = useRef<HTMLAudioElement>(null)
  const playClick = useCallback(() => {
    if (soundOn && clickSound.current) {
      clickSound.current.currentTime = 0.3
      void clickSound.current.play().catch(() => {})
    }
  }, [soundOn])
  const pages: Record<string, React.ReactNode> = { about: <About />, experience: <Experience />, projects: <Projects />, skills: <Skills />, contact: <Contact /> }

  return (
    <div className="portfolio" onClick={playClick}>
      <a href="#content" className="skipLink" onClick={event => { event.preventDefault(); document.getElementById('content')?.focus() }}>Skip to content</a>
      <audio ref={clickSound} src="/assets/sounds/click.mp3" preload="none" />
      <div className="backgroundMainMenu" aria-hidden="true" />
      {pages[section] ?? (
        <main className="mainMenu" id="content" tabIndex={-1}>
          <div className="logo"><img src="/assets/images/manas-logo.webp" alt="Manas, in Minecraft stone lettering" width="734" height="188" className="logoImage" fetchPriority="high" /><span className="subtitle">CS + Econ!</span></div>
          <h1 className="playerName">{profile.name}</h1>
          <p className="menuDescription">Rutgers University–New Brunswick<br />Computer Science + Economics · Jan 2028</p>
          <nav aria-label="Main menu" className="menuLinks">
            <a className="minecraftButton" href="#about">About Me</a>
            <a className="minecraftButton" href="#experience">Experience</a>
            <a className="minecraftButton" href="#projects">Projects</a>
            <a className="minecraftButton" href="#skills">Skills</a>
            <div className="menuSecondary"><a className="minecraftButton" href="#contact">Contact</a><a className="minecraftButton" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a className="minecraftButton" href={profile.resume ?? `mailto:${profile.email}?subject=Resume%20request`}>{profile.resume ? 'Resume ↗' : 'Request resume'}</a></div>
          </nav>
        </main>
      )}
      <button type="button" className="soundToggle minecraftButton" aria-pressed={soundOn} onClick={() => setSoundOn(!soundOn)}>Sound: {soundOn ? 'On' : 'Off'}</button>
    </div>
  )
}
