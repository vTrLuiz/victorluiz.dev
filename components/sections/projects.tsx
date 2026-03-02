"use client";

import { InView } from "@/components/motion/in-view";
import { LazyIframe } from "@/components/ui/lazy-iframe";
import { motion } from "motion/react";
import { ExternalLink, Github, Folder, Play } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  featured: boolean;
  preview: string;
}

const projects: Project[] = [
  {
    title: "Capputeeno",
    description:
      "E-commerce frontend construido com Next.js e TypeScript. Interface responsiva para listagem e compra de produtos, com gerenciamento de estado e integracao com API.",
    tech: ["TypeScript", "Next.js", "CSS", "API REST"],
    github: "https://github.com/vTrLuiz/Capputeeno-Front",
    live: "https://capputeeno-vtrluiz.vercel.app/",
    featured: true,
    preview: "https://capputeeno-vtrluiz.vercel.app/",
  },
  {
    title: "Mia Brigaderia",
    description:
      "Website elegante para uma brigaderia artesanal, apresentando produtos com um design moderno e atraente. Interface focada na experiencia do usuario.",
    tech: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    github: "https://github.com/vTrLuiz/miabrigaderia",
    live: "https://vtrluiz.github.io/miabrigaderia/",
    featured: true,
    preview: "https://vtrluiz.github.io/miabrigaderia/",
  },
  {
    title: "FortPred",
    description:
      "Plataforma de previsoes e analises desenvolvida para fornecer insights e dados estrategicos. Sistema robusto focado em performance e confiabilidade.",
    tech: ["JavaScript", "React", "Node.js", "Data Analysis"],
    github: "https://github.com/vTrLuiz/fortpred",
    live: "http://fortpred.com.br/",
    featured: true,
    preview: "http://fortpred.com.br/",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewOptions={{ once: true, margin: "-50px" }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 ${
          project.featured
            ? "border-primary/20 shadow-lg shadow-primary/5"
            : "border-border"
        } hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10`}
      >
        {/* Featured indicator */}
        {project.featured && (
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        )}

        {/* Preview Section with Play Overlay */}
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <LazyIframe
            src={project.preview}
            title={`${project.title} preview`}
            className="h-full w-full scale-110 transform border-0 transition-transform duration-700 group-hover:scale-105"
            style={{ pointerEvents: "none" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent transition-opacity duration-300 group-hover:opacity-40" />

          {/* Play button overlay - aparece ao hover */}
          {project.live && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
              >
                <Play size={16} fill="currentColor" />
                <span>Ver Projeto</span>
              </a>
            </motion.div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:ring-primary/30">
                <Folder size={20} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                {project.live && (
                  <span className="text-xs text-muted-foreground">
                    Live Demo
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                  aria-label={`GitHub ${project.title}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                  aria-label={`Live ${project.title}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} />
                </motion.a>
              )}
            </div>
          </div>

          <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.05 }}
                className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary transition-colors hover:border-primary/30 hover:bg-primary/10"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl" />
        </div>
      </motion.div>
    </InView>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          viewOptions={{ once: true, margin: "-100px" }}
        >
          <div className="mb-4">
            <span className="font-mono text-sm text-primary">
              {"// projetos"}
            </span>
          </div>
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
            O que construi
          </h2>
        </InView>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
