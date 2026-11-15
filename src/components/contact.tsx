import { profile } from '@/lib/portfolio'
import { Screen } from './screen'

export function Contact() {
  return (
    <Screen title="Contact" subtitle="Multiplayer">
      <section className="stonePanel contactPanel"><p className="eyebrow">Join my world</p><h2>{profile.name}</h2>
        <dl><div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
          <div><dt>Phone</dt><dd><a href={`tel:${profile.phone}`}>{profile.phone}</a></dd></div>
          <div><dt>LinkedIn</dt><dd><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/manas-kumm ↗</a></dd></div>
          <div><dt>GitHub</dt><dd><a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/Manaskumm ↗</a></dd></div>
        </dl>
        <a className="minecraftButton" href={profile.resume ?? `mailto:${profile.email}?subject=Resume%20request`}>{profile.resume ? 'View resume ↗' : 'Request resume'}</a>
      </section>
    </Screen>
  )
}
