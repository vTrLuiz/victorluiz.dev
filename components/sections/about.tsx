'use client'

import { InView } from '@/components/motion/in-view'
import { TextEffect } from '@/components/motion/text-effect'
import { Badge } from '@/components/ui/badge'
import { Code2, Cloud, Database, Layout } from 'lucide-react'

const highlights = [
  {
    icon: Layout,
    title: 'Frontend',
    description: 'Interfaces responsivas e otimizadas para alta performance',
    skills: ['React', 'TypeScript', 'Next.js', 'HTML/CSS', 'Tailwind'],
  },
  {
    icon: Code2,
    title: 'Backend',
    description: 'Sistemas robustos com integrações via BFF',
    skills: ['.NET', 'C#', 'Node.js', 'REST APIs', 'BFF'],
  },
  {
    icon: Cloud,
    title: 'Cloud',
    description: 'Infraestrutura cloud-native e CI/CD',
    skills: ['GCP', 'Apigee', 'Docker', 'CI/CD', 'Cloud Run'],
  },
  {
    icon: Database,
    title: 'Dados',
    description: 'Arquitetura de microsservicos e banco de dados',
    skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis'],
  },
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          viewOptions={{ once: true, margin: '-100px' }}
        >
          <div className="mb-4">
            <span className="font-mono text-sm text-primary">{'// sobre mim'}</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            Quem sou eu
          </h2>
        </InView>

        <div className="grid gap-12 lg:grid-cols-2">
          <InView
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewOptions={{ once: true, margin: '-100px' }}
          >
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Desenvolvedor Full-Stack com 4+ anos de experiencia especializado
                no desenvolvimento de aplicacoes web escalaveis e de alta
                performance. Tenho expertise solida em{' '}
                <span className="font-medium text-foreground">
                  React, TypeScript e Next.js
                </span>{' '}
                para criacao de interfaces responsivas, alem de experiencia robusta
                em backend com{' '}
                <span className="font-medium text-foreground">.NET C#</span> e
                integracoes via BFF.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Competencias comprovadas em computacao em nuvem{' '}
                <span className="font-medium text-foreground">
                  (Google Cloud Platform)
                </span>
                , incluindo desenvolvimento e gerenciamento de APIs, infraestrutura
                cloud-native e implementacao de solucoes de Machine Learning.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Historico de entregas que geram impacto real no negocio, com foco
                em transformacao digital e produtos que conectam tecnologia aos
                resultados estrategicos da empresa.
              </p>
            </div>
          </InView>

          <InView
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewOptions={{ once: true, margin: '-100px' }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:bg-card/80"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-primary/20 bg-primary/5 text-[10px] font-medium text-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </InView>
        </div>
      </div>
    </section>
  )
}
