"use client";

import { motion } from "framer-motion";
import { GraduationCap, FolderGit2 } from "lucide-react";

export function About() {
    return (
        <section className="py-24 relative" id="about">
            <div className="container mx-auto px-4 grid lg:grid-cols-[0.8fr_1fr] gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <div className="aspect-[4/5] bg-card rounded-2xl overflow-hidden flex items-center justify-center border border-white/10">
                        <span className="text-9xl font-bold text-muted">MK</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-primary text-lg font-medium mb-2">About Me</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Driven by <span className="text-primary">innovation</span> and data.
                    </h2>
                    <div className="space-y-4 text-muted-foreground text-lg mb-8">
                        <p>
                            I am currently pursuing a double major in Computer Science and
                            Economics at Rutgers University (Class of 2028). I have a passion for
                            full-stack development, machine learning, and financial modeling.
                        </p>
                        <p>
                            My experience ranges from developing secure browser extensions to
                            building predictive models for financial markets. I was a Program
                            Assistant at Rutgers Math Corps, helping students succeed.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="p-6 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-1">Education</h3>
                            <p className="text-muted-foreground">Rutgers '28</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                <FolderGit2 size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-1">Projects</h3>
                            <p className="text-muted-foreground">3 Completed</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
