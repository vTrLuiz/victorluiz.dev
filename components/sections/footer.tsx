"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-primary">{"<VL />"}</span>
          <span className="text-xs text-muted-foreground">
            {"// "}Victor Luiz Soares
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vTrLuiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/vluizdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:contatovluiz@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          Feito com Next.js & Motion
        </p>
      </div>
    </footer>
  );
}
