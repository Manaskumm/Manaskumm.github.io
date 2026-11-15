import type { ReactNode } from 'react'

export function Screen({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <main className="worldScreen" id="content" tabIndex={-1}>
      <header className="worldHeader">
        <p className="eyebrow">{subtitle}</p>
        <h1>{title}</h1>
        <nav className="sectionNav" aria-label="Portfolio sections">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="worldContent" key={title}>{children}</div>
      <footer className="worldFooter"><a href="#main" className="minecraftButton backButton">Back to menu</a></footer>
    </main>
  )
}
