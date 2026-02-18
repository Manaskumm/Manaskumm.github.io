"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"],
    },
    {
        title: "Web Development",
        skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Node.js"],
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "AWS", "Linux", "VS Code"],
    },
];

export function Skills() {
    return (
        <section className="py-24 relative" id="skills">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-primary text-lg font-medium mb-2">My Skills</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Technical <span className="text-primary">Expertise</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            A comprehensive skillset in modern web technologies, focusing on
                            performance, accessibility, and design.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                className="bg-card border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-colors"
                            >
                                <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-sm font-medium transition-colors border border-white/5"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="pt-12 border-t border-white/10 mt-12 text-center"
                    >
                        <h3 className="text-xl font-medium mb-4">Relevant Coursework</h3>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Calculus I & II, Linear Algebra, Intro to CS, Data Structures,
                            Computer Architecture, Discrete I, Micro/Macroeconomics
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
