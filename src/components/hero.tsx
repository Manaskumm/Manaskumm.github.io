'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 border border-border"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Manas <span className="text-muted-foreground">Kummarapurugu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Software Engineer & Student studying Computer Science and Economics at Rutgers University.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            View Projects <ArrowRight size={18} />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Manaskumm"
              target="_blank"
              className="p-4 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/manaskumm"
              target="_blank"
              className="p-4 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:manaskumm@gmail.com"
              className="p-4 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
