'use client'

import { InView } from '@/components/motion/in-view'
import { TextEffect } from '@/components/motion/text-effect'
import { motion } from 'motion/react'
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'victorluiz.dev@gmail.com',
    href: 'mailto:victorluiz.dev@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/vluizdev',
    href: 'https://www.linkedin.com/in/vluizdev/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@vTrLuiz',
    href: 'https://github.com/vTrLuiz/',
  },
  {
    icon: MapPin,
    label: 'Localizacao',
    value: 'Rio de Janeiro, Brasil',
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          viewOptions={{ once: true, margin: '-100px' }}
        >
          <div className="mb-4">
            <span className="font-mono text-sm text-primary">
              {'// contato'}
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Vamos trabalhar juntos?
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-base leading-relaxed text-muted-foreground">
            Estou aberto a novas oportunidades e projetos interessantes. Se voce
            quer conversar sobre tecnologia ou tem uma proposta, entre em contato!
          </p>
        </InView>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, index) => (
            <InView
              key={link.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewOptions={{ once: true, margin: '-50px' }}
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary/30 hover:bg-card/80"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <link.icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="flex-shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 text-left">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <link.icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground">
                      {link.value}
                    </p>
                  </div>
                </div>
              )}
            </InView>
          ))}
        </div>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewOptions={{ once: true }}
        >
          <div className="mt-12">
            <a
              href="mailto:victorluiz.dev@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              <Mail size={16} />
              Enviar Email
            </a>
          </div>
        </InView>
      </div>
    </section>
  )
}
