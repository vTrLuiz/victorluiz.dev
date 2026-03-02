"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, X } from "lucide-react";

export function EasterEggs() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Victor Luiz Terminal v1.0.0",
    "Digite 'help' para ver os comandos disponíveis",
    "",
  ]);
  const [matrixMode, setMatrixMode] = useState(false);
  const [devMode, setDevMode] = useState(false);

  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  // Console messages on load
  useEffect(() => {
    const styles = {
      title: "color: #06B6D4; font-size: 24px; font-weight: bold;",
      subtitle: "color: #8B5CF6; font-size: 14px;",
      info: "color: #10B981; font-size: 12px;",
      easter: "color: #F59E0B; font-size: 16px; font-weight: bold;",
    };

    console.log("%c👋 Olá, Developer!", styles.title);
    console.log("%cBem-vindo ao meu portfólio!", styles.subtitle);
    console.log(
      "%c\n🚀 Stack: React 19 + Next.js 15 + TypeScript + Tailwind CSS",
      styles.info,
    );
    console.log("%c💎 Animações: Motion (Framer Motion)", styles.info);
    console.log("%c\n🎮 Easter Eggs disponíveis:", styles.easter);
    console.log(
      "%c  • Konami Code: ↑↑↓↓←→←→BA",
      "color: #F59E0B; font-size: 12px;",
    );
    console.log(
      "%c  • Terminal: Ctrl/Cmd + K",
      "color: #F59E0B; font-size: 12px;",
    );
    console.log(
      "%c  • Comandos: 'matrix', 'clear', 'whoami', 'projects', 'skills'",
      "color: #F59E0B; font-size: 12px;",
    );
    console.log(
      "%c\n📫 Entre em contato: victorluizsoares16@gmail.com",
      "color: #06B6D4; font-size: 12px;",
    );
  }, []);

  // Konami Code handler
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === konamiCode[konamiIndex]) {
        setKonamiIndex((prev) => prev + 1);
      } else {
        setKonamiIndex(0);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIndex]);

  // Activate developer mode on Konami Code completion
  useEffect(() => {
    if (konamiIndex === konamiCode.length) {
      setDevMode(true);
      setTerminalHistory((prev) => [
        ...prev,
        "🎮 KONAMI CODE ATIVADO! Developer Mode ON",
        "Você desbloqueou poderes especiais! 🚀",
        "",
      ]);
      setShowTerminal(true);
      setKonamiIndex(0);

      // Fun effect
      document.body.style.animation = "rainbow 3s linear";
      setTimeout(() => {
        document.body.style.animation = "";
      }, 3000);
    }
  }, [konamiIndex]);

  // Terminal toggle (Ctrl/Cmd + K)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setShowTerminal((prev) => !prev);
      }
      if (e.key === "Escape") {
        setShowTerminal(false);
        setMatrixMode(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Terminal commands
  const handleCommand = useCallback((cmd: string) => {
    const command = cmd.trim().toLowerCase();
    let output: string[] = [];

    switch (command) {
      case "help":
        output = [
          "Comandos disponíveis:",
          "  help     - Mostra este menu",
          "  whoami   - Informações sobre mim",
          "  projects - Lista meus projetos",
          "  skills   - Minhas habilidades",
          "  matrix   - Ativa modo Matrix 😎",
          "  clear    - Limpa o terminal",
          "  exit     - Fecha o terminal",
          "",
        ];
        break;

      case "whoami":
        output = [
          "Victor Luiz Soares",
          "Desenvolvedor Front-End",
          "4+ anos de experiência",
          "React • TypeScript • Next.js • .NET",
          "📍 Brasil",
          "",
        ];
        break;

      case "projects":
        output = [
          "📦 Meus Projetos:",
          "  1. Capputeeno - E-commerce com Next.js",
          "  2. Mia Brigaderia - Website elegante",
          "  3. FortPred - Plataforma de análises",
          "",
        ];
        break;

      case "skills":
        output = [
          "⚡ Tech Stack:",
          "Frontend: React, TypeScript, Next.js, Tailwind",
          "Backend: C#, .NET, Node.js, PostgreSQL",
          "Cloud: Google Cloud, Apigee, Terraform",
          "Tools: Git, GitLab, CI/CD",
          "",
        ];
        break;

      case "matrix":
        setMatrixMode(true);
        output = ["Entrando no Matrix... 🕶️", ""];
        setTimeout(() => setMatrixMode(false), 10000);
        break;

      case "clear":
        setTerminalHistory([]);
        return;

      case "exit":
        setShowTerminal(false);
        return;

      case "":
        return;

      default:
        output = [
          `Comando não encontrado: ${command}`,
          "Digite 'help' para ver os comandos",
          "",
        ];
    }

    setTerminalHistory((prev) => [...prev, `$ ${cmd}`, ...output]);
  }, []);

  // Matrix effect
  useEffect(() => {
    if (!matrixMode) return;

    const canvas = document.getElementById(
      "matrix-canvas",
    ) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, [matrixMode]);

  return (
    <>
      {/* Matrix Mode */}
      <AnimatePresence>
        {matrixMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-50"
          >
            <canvas id="matrix-canvas" className="h-full w-full bg-black" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="font-mono text-4xl font-bold text-green-400"
              >
                Wake up, Neo...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Developer Mode Badge */}
      <AnimatePresence>
        {devMode && !showTerminal && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed right-4 top-4 z-50 rounded-lg border border-green-500/50 bg-green-500/10 px-3 py-1.5 font-mono text-xs text-green-400 shadow-lg"
          >
            🚀 DEV MODE
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-x-4 bottom-4 top-4 z-50 md:inset-x-auto md:left-1/2 md:top-1/2 md:w-[700px] md:-translate-x-1/2 md:-translate-y-1/2"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-black/95 shadow-2xl backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-primary" />
                  <span className="font-mono text-sm text-foreground">
                    victor@dev:~
                  </span>
                </div>
                <button
                  onClick={() => setShowTerminal(false)}
                  className="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Terminal Output */}
              <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
                {terminalHistory.map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.startsWith("$")
                        ? "text-green-400"
                        : line.startsWith("🎮") || line.startsWith("🚀")
                          ? "text-yellow-400"
                          : "text-gray-300"
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex items-center gap-2 border-t border-border bg-muted/30 px-4 py-3">
                <span className="text-green-400">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCommand(terminalInput);
                      setTerminalInput("");
                    }
                  }}
                  className="flex-1 bg-transparent font-mono text-sm text-foreground outline-none"
                  placeholder="Digite 'help' para começar..."
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint */}
      <AnimatePresence>
        {!showTerminal && !devMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 3 }}
            className="fixed bottom-4 right-4 z-40 rounded-lg border border-primary/20 bg-background/80 px-3 py-2 text-xs text-muted-foreground backdrop-blur-sm"
          >
            💡 Pressione{" "}
            <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono">
              Ctrl+K
            </kbd>{" "}
            para abrir o terminal
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
