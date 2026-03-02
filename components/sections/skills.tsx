"use client";

import { InView } from "@/components/motion/in-view";
import { motion } from "motion/react";
import { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiSharp,
  SiDotnet,
  SiNodedotjs,
  SiPostgresql,
  SiGooglecloud,
  SiTerraform,
  SiGit,
  SiGitlab,
} from "react-icons/si";
import { Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", highlight: true, icon: SiReact, color: "#61DAFB" },
      {
        name: "TypeScript",
        highlight: true,
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Next.js",
        highlight: true,
        icon: SiNextdotjs,
        color: "#FFFFFF",
        isGradient: false,
      },
      {
        name: "Tailwind CSS",
        highlight: true,
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      { name: "HTML/CSS", highlight: true, icon: SiHtml5, color: "#E34F26" },
      {
        name: "JavaScript",
        highlight: true,
        icon: SiJavascript,
        color: "#F7DF1E",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "C# / .NET", highlight: true, icon: SiSharp, color: "#512BD4" },
      { name: "Node.js", highlight: true, icon: SiNodedotjs, color: "#339933" },
      {
        name: "PostgreSQL",
        highlight: true,
        icon: SiPostgresql,
        color: "#4169E1",
      },
      { name: "REST APIs", highlight: true, icon: Database, color: "#14B8A6" },
      {
        name: "BFF Pattern",
        highlight: true,
        icon: SiDotnet,
        color: "#512BD4",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      {
        name: "Google Cloud",
        highlight: true,
        icon: SiGooglecloud,
        color:
          "linear-gradient(135deg, #4285F4 0%, #DB4437 25%, #F4B400 50%, #0F9D58 100%)",
        isGradient: true,
      },
      {
        name: "Apigee",
        highlight: true,
        icon: Cloud,
        color: "linear-gradient(135deg, #FF6D00 0%, #FFA726 100%)",
        isGradient: true,
      },
      {
        name: "Terraform",
        highlight: true,
        icon: SiTerraform,
        color: "#7B42BC",
      },
      {
        name: "CI/CD",
        highlight: true,
        icon: SiGitlab,
        color: "linear-gradient(135deg, #FC6D26 0%, #E24329 100%)",
        isGradient: true,
      },
      {
        name: "GitLab",
        highlight: true,
        icon: SiGitlab,
        color: "linear-gradient(135deg, #FC6D26 0%, #E24329 100%)",
        isGradient: true,
      },
      { name: "Git", highlight: true, icon: SiGit, color: "#F05032" },
    ],
  },
];

const tools = [
  "React",
  "TypeScript",
  "Next.js",
  "C#",
  ".NET",
  "Node.js",
  "PostgreSQL",
  "GCP",
  "Apigee",
  "Terraform",
  "Git",
  "CircleCI",
  "GitLab",
  "Tailwind",
  "JavaScript",
  "Docker",
];

interface SkillBadgeProps {
  skill: {
    name: string;
    highlight: boolean;
    icon: any;
    color: string;
    isGradient?: boolean;
  };
  index: number;
}

function SkillBadge({ skill, index }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  const getBorderColor = () => {
    if (!isHovered) return "hsl(var(--primary) / 0.3)";
    return skill.color;
  };

  const getTextStyle = () => {
    if (!isHovered) return { color: "hsl(var(--primary))" };
    if (skill.isGradient) {
      return {
        backgroundImage: skill.color,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      };
    }
    return { color: skill.color };
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-default"
    >
      <span
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-300"
        style={{
          borderColor: getBorderColor(),
          backgroundColor: "hsl(var(--primary) / 0.1)",
        }}
      >
        {skill.isGradient && isHovered ? (
          <span
            className="inline-flex items-center justify-center"
            style={{
              backgroundImage: skill.color,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <Icon className="h-4 w-4 flex-shrink-0" />
          </span>
        ) : (
          <Icon
            className="h-4 w-4 flex-shrink-0 transition-colors duration-300"
            style={isHovered && !skill.isGradient ? { color: skill.color } : {}}
          />
        )}
        <span className="whitespace-nowrap" style={getTextStyle()}>
          {skill.name}
        </span>
      </span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
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
              {"// habilidades"}
            </span>
          </div>
          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
            Tech Stack
          </h2>
        </InView>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <InView
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              viewOptions={{ once: true, margin: "-50px" }}
            >
              <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/20">
                <h3 className="mb-6 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </div>
            </InView>
          ))}
        </div>

        {/* Scrolling Tech Marquee */}
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewOptions={{ once: true }}
        >
          <div className="relative mt-16 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...tools, ...tools, ...tools].map((tool, i) => (
                <span
                  key={`${tool}-${i}`}
                  className="flex-shrink-0 whitespace-nowrap rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>
        </InView>
      </div>
    </section>
  );
}
