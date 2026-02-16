"use client";

import { InView } from "@/components/motion/in-view";
import { motion } from "motion/react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Devfix.pro",
    description:
      "Plataforma web moderna construida com TypeScript e Next.js. Projeto pessoal focado em solucoes praticas para desenvolvedores, com deploy automatizado na Vercel.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/vTrLuiz/Devfix.pro",
    live: "https://devfix-nine.vercel.app",
    featured: true,
  },
  {
    title: "Capputeeno",
    description:
      "E-commerce frontend construido com Next.js e TypeScript. Interface responsiva para listagem e compra de produtos, com gerenciamento de estado e integracao com API.",
    tech: ["TypeScript", "Next.js", "CSS", "API REST"],
    github: "https://github.com/vTrLuiz/Capputeeno-Front",
    live: "https://capputeeno-vtrluiz.vercel.app/",
    featured: true,
  },
  {
    title: "API E-commerce",
    description:
      "Backend REST API para e-commerce construido com JavaScript/Node.js. Endpoints para gerenciamento de produtos, categorias e pedidos.",
    tech: ["JavaScript", "Node.js", "REST API"],
    github: "https://github.com/vTrLuiz/Api-Ecommerce",
    live: null,
    featured: true,
  },
  {
    title: "Assessorias - Junto Seguros",
    description:
      "Produto digital que conecta corretores a empresas. Inclui dashboard de performance, gestao de pagamentos e upload de notas fiscais. Gerou R$ 1.2M+ em seguros.",
    tech: ["React", "TypeScript", ".NET C#", "PostgreSQL"],
    github: null,
    live: null,
    featured: true,
  },
];

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

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <InView
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewOptions={{ once: true, margin: "-50px" }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`group relative flex h-full flex-col rounded-xl border bg-card p-6 transition-all hover:border-primary/30 md:p-8 ${
                  project.featured ? "border-primary/20" : "border-border"
                }`}
              >
                {project.featured && (
                  <div className="absolute -top-px left-8 right-8 h-px bg-primary/50" />
                )}

                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Folder size={20} />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label={`GitHub ${project.title}`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label={`Live ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
