"use client";

import { InView } from "@/components/motion/in-view";
import { TracingBeam } from "@/components/motion/tracing-beam";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Analista de TI Jr.",
    company: "Junto Seguros",
    period: "Out 2024 - Presente",
    location: "Rio de Janeiro, Brasil",
    description:
      'Atuei como Desenvolvedor Frontend com contribuicoes no backend via BFF em .NET (C#). Participei da criacao do produto "Assessorias", conectando corretores a empresas digitalmente.',
    achievements: [
      "Dashboard de Assessorias com indicadores de performance e graficos",
      "Tela de Pagamentos para gestao de recebimentos",
      "Upload de Notas Fiscais integrado ao fluxo de compliance",
      "Produto gerou R$ 1.2M+ em seguros nas primeiras semanas",
    ],
    tech: ["TypeScript", "React", ".NET C#", "PostgreSQL", "CircleCI"],
  },
  {
    role: "DevOps Engineer",
    company: "IPNET Growth Partner",
    period: "Jan 2024 - Set 2024",
    location: "Rio de Janeiro, Brasil",
    description:
      "Liderei projetos de integracao ao GCP utilizando Apigee. Criei documentacao de suporte e realizei revisoes de codigo.",
    achievements: [
      "Desenvolvimento de APIs com Apigee (Google Cloud)",
      "Provisionamento automatizado com Terraform",
      "Documentacao tecnica no wiki da empresa",
      "CI/CD com GitLab para deploy continuo",
    ],
    tech: ["JavaScript", "Apigee", "Terraform", "GCP", "GitLab CI/CD"],
  },
  {
    role: "Desenvolvedor Front-end",
    company: "Marinha do Brasil",
    period: "Ago 2021 - Mai 2023",
    location: "Rio de Janeiro, Brasil",
    description:
      "Desenvolvimento de aplicacoes frontend para sistemas internos da Marinha do Brasil, contribuindo para a modernizacao digital da instituicao.",
    achievements: [
      "Desenvolvimento de interfaces para sistemas internos",
      "Implementacao de componentes reutilizaveis",
      "Trabalho em ambiente com alta seguranca de dados",
    ],
    tech: ["React", "JavaScript", "CSS", "HTML"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
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
              {"// experiencia"}
            </span>
          </div>
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
            Onde trabalhei
          </h2>
        </InView>

        <TracingBeam className="pl-6 md:pl-16">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <InView
                key={exp.company}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewOptions={{ once: true, margin: "-50px" }}
              >
                <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 md:p-8">
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase size={14} />
                        <span className="text-sm font-medium">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <ul className="mb-5 space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
