'use client'

import { motion } from 'motion/react'
import { TextEffect } from '@/components/motion/text-effect'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Glow effect */}
      <div className="absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-sm text-primary">
            Full-Stack Software Engineer
          </span>
        </motion.div>

        <TextEffect
          per="char"
          preset="fade-in-blur"
          delay={0.3}
          speedReveal={1.5}
          as="h1"
          className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          Victor Luiz Soares
        </TextEffect>

        <TextEffect
          per="word"
          preset="slide"
          delay={1.2}
          as="p"
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Desenvolvedor Full-Stack com 4+ anos de experiencia criando aplicacoes web escalaveis e de alta performance com React, TypeScript, Next.js e .NET
        </TextEffect>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Entre em Contato
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/30 hover:bg-secondary/80"
          >
            Ver Projetos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/vTrLuiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/vluizdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:victorluiz.dev@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 3 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 3 },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground"
          aria-label="Scroll para baixo"
        >
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown size={16} />
        </a>
      </motion.div>
    </section>
  )
}
