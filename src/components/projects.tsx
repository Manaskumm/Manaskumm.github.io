'use client'

import { useState } from 'react'
import { projects } from '@/lib/portfolio'
import { Screen } from './screen'

export function Projects() {
  const [query, setQuery] = useState('')
  const filtered = projects.filter(project => `${project.title} ${project.stack.join(' ')}`.toLowerCase().includes(query.toLowerCase().trim()))
  return (
    <Screen title="Projects" subtitle="Select world">
      <div className="projectSearch"><label htmlFor="project-search">Search by project or technology</label><input id="project-search" type="search" value={query} onChange={event => setQuery(event.target.value)} /><p role="status">{filtered.length} / {projects.length} worlds</p></div>
      {filtered.map(project => (
        <article className="worldCard stonePanel" key={project.id}>
          <img className="worldIcon" src={`/assets/images/${project.image}`} alt={`Minecraft pixel art for ${project.title}`} width="112" height="112" />
          <div className="cardContent"><p className="eyebrow">{project.period}</p><h2>{project.title}</h2><p>{project.description}</p>
            {project.details && <p>{project.details}</p>}
            <ul className="inventoryTags" aria-label="Project technologies">{project.stack.map(skill => <li key={skill}>{skill}</li>)}</ul>
            {project.link && <a className="textLink" href={project.link} target="_blank" rel="noopener noreferrer">View repository ↗</a>}
            {'demo' in project && project.demo && <a className="textLink" href={project.demo} target="_blank" rel="noopener noreferrer">Visit project ↗</a>}
          </div>
        </article>
      ))}
      {filtered.length === 0 && <p className="emptyState">No projects match your search.</p>}
    </Screen>
  )
}
