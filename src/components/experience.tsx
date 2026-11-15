import { experience } from '@/lib/portfolio'
import { Screen } from './screen'

export function Experience() {
  return (
    <Screen title="Experience" subtitle="Advancements">
      {experience.map(job => (
        <article className="worldCard stonePanel" key={job.id}>
          <img className="worldIcon" src={`/assets/images/${job.image}`} alt={`${job.company} logo in Minecraft pixel art`} width="112" height="112" />
          <div className="cardContent"><p className="eyebrow">{job.dates} · {job.location}</p><h2>{job.company}</h2><h3>{job.role}</h3>
            <ul className="achievementList">{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        </article>
      ))}
    </Screen>
  )
}
