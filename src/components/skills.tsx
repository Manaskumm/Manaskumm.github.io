"use client";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "Java", "C", "Javascript", "HTML", "CSS"],
    },
    {
        title: "Technologies",
        skills: ["Git", "React", "React Native", "Next.js", "SQL/PostgreSQL", "Linux", "Supabase", "Vercel"],
    },
    {
        title: "Activities",
        skills: ["Undergraduate Student Alliance of Computer Scientists (USACS)", "Blueprint at Rutgers"],
    },
];

export function Skills() {
    return (
        <section id="skills">
            {skillCategories.map((category, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#ffff00', marginBottom: '8px', textShadow: '1px 1px #3f3f00' }}>
                        {category.title}
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {category.skills.map((skill, sIndex) => (
                            <span
                                key={sIndex}
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    padding: '4px 10px',
                                    fontSize: '12px',
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
