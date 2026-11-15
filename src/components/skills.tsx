import { skillCategories } from '@/lib/portfolio'
import { Screen } from './screen'

export function Skills() {
  return (
    <Screen title="Skills" subtitle="Inventory">
      <div className="skillsGrid">{skillCategories.map(category => (
        <section className="stonePanel skillPanel" key={category.title}><h2>{category.title}</h2><ul className="inventoryTags">{category.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></section>
      ))}</div>
    </Screen>
  )
}
