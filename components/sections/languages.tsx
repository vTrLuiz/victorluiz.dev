"use client";

import { InView } from "@/components/motion/in-view";
import { motion } from "motion/react";
import { Globe } from "lucide-react";

const languages = [
  {
    name: "Português",
    flag: "🇧🇷",
    level: "Nativo",
    proficiency: 100,
  },
  {
    name: "Inglês",
    flag: "🇺🇸",
    level: "Básico",
    proficiency: 40,
  },
  {
    name: "Espanhol",
    flag: "🇪🇸",
    level: "Intermediário",
    proficiency: 60,
  },
];

export function Languages() {
  return (
    <section id="languages" className="relative px-6 py-24 md:py-32">
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
              {"// idiomas"}
            </span>
          </div>
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
            Idiomas
          </h2>
        </InView>

        <div className="grid gap-6 md:grid-cols-3">
          {languages.map((language, index) => (
            <InView
              key={language.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewOptions={{ once: true, margin: "-50px" }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-4xl">{language.flag}</span>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {language.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {language.level}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.proficiency}%` }}
                    transition={{
                      duration: 1,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                  />
                </div>

                <div className="mt-2 text-right">
                  <span className="font-mono text-xs text-muted-foreground">
                    {language.proficiency}%
                  </span>
                </div>
              </motion.div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
