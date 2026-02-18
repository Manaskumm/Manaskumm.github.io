"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <p className="text-primary text-xl font-medium mb-4">Hello, I'm</p>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                        Manas <span className="text-primary">Kummarapurugu</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                        A Computer Science and Economics student at Rutgers University,
                        building software that solves real-world problems.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="rounded-full text-lg px-8" asChild>
                            <a href="#projects">View Work</a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full text-lg px-8" asChild>
                            <a href="#contact">Contact Me</a>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center items-center"
                >
                    <div className="w-80 h-80 bg-gradient-to-tr from-primary to-purple-600 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-morph blur-3xl opacity-50 absolute" />
                </motion.div>
            </div>
        </section>
    );
}
