import { coursework, profile } from '@/lib/portfolio'
import { Screen } from './screen'

export function About() {
  return (
    <Screen title="About Me" subtitle="Player profile">
      <article className="profilePanel stonePanel">
        <p className="eyebrow">Computer Science + Economics</p>
        <h2>{profile.name}</h2>
        <p>I study Computer Science and Economics at Rutgers University–New Brunswick. My experience includes AI workflow automation, machine learning and semantic retrieval, and real-time voice and video applications.</p>
        <p>I have interned at Conquest Advisors, FlyRank AI, and Langpal, and build projects across AI, security, and Solana.</p>
        <a className="textLink" href="#experience">View experience →</a>
      </article>
      <article className="educationPanel stonePanel">
        <img className="educationIcon" src="/assets/images/rutgers.webp" alt="Pixel-art Rutgers R" width="96" height="96" />
        <div><p className="eyebrow">Education</p><h2>{profile.university}</h2>
          <p>{profile.degree}</p><p className="gold">{profile.educationDates} · GPA {profile.gpa}</p>
          <p>Graduating a semester early.</p>
        </div>
        <div className="coursework"><h3>Relevant coursework</h3><ul>{coursework.map(course => <li key={course}>{course}</li>)}</ul></div>
      </article>
    </Screen>
  )
}
