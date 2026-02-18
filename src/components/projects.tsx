"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { BouncingText } from "@/components/ui/bouncing-text";

const projects = [
    {
        title: "Gmail Phishing Link Scanner",
        category: "React & Chrome Ext",
        description:
            "A Chrome extension detecting phishing attempts in real-time using React 18 and content scripts. Features a risk assessment UI.",
        image: "/assets/images/phishing-scanner.png",
        link: "https://github.com/Manaskumm/gmail-phishing-scanner",
    },
    {
        title: "S&P 500 Predictor",
        category: "Python & ML",
        description:
            "Predictive model using RandomForestClassifier to forecast S&P 500 price movements. Visualized data with Matplotlib and Pandas.",
        image: "/assets/images/stock-predictor.png",
        link: "https://github.com/Manaskumm/S-P-Index-Fund-Predictor",
    },
    {
        title: "Interactive Text Animator",
        category: "Java Swing",
        description:
            "Java-based animation app allowing users to control text movement with collision detection and keyboard handling.",
        image: "/assets/images/text-animator.webp",
        link: "http://github.com/Manaskumm/Text-Animator",
    },
];

export function Projects() {
    return (
        <section className="py-24 bg-white/5" id="projects">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <p className="text-primary text-lg font-medium mb-2">Portfolio</p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Recent <span className="text-primary">Works</span>
                    </h2>
                </div>

                <div className="grid gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                            className="group grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className={`relative rounded-2xl overflow-hidden bg-card border border-white/10 ${index % 2 === 1 ? "md:order-2" : ""} ${project.title === "Interactive Text Animator" ? "aspect-[4/3]" : "aspect-video"}`}>
                                {project.title === "Interactive Text Animator" ? (
                                    <BouncingText />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </>
                                )}
                            </div>
                            <div className={`${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.title}
                                    </a>
                                </h3>
                                <p className="text-muted-foreground text-lg mb-6">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
                                >
                                    View Project <ArrowUpRight size={20} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
