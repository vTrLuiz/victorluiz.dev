"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
}

export const BackgroundBoxes = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | undefined>(undefined);
  const mousePos = useRef({ x: -1000, y: -1000 }); // Iniciar fora da tela
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Obter cor primária computada
    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();
    const primaryHsl = primaryColor || "217 91% 60%";

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Criar nós
    const nodeCount = 50;
    nodesRef.current = [];
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodesRef.current.push({
        x,
        y,
        originalX: x,
        originalY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Atualizar e desenhar nós
      nodesRef.current.forEach((node, i) => {
        // Distância do mouse ao nó
        const dx = mousePos.current.x - node.x;
        const dy = mousePos.current.y - node.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

        // Repulsão suave do mouse
        if (distanceToMouse < 150 && distanceToMouse > 0) {
          const force = (150 - distanceToMouse) / 150;
          node.x -= (dx / distanceToMouse) * force * 3;
          node.y -= (dy / distanceToMouse) * force * 3;
        }

        // Movimento base contínuo
        node.x += node.vx;
        node.y += node.vy;

        // Bounce nas bordas (inverte direção)
        if (node.x < 0) {
          node.x = 0;
          node.vx *= -1;
        }
        if (node.x > canvas.width) {
          node.x = canvas.width;
          node.vx *= -1;
        }
        if (node.y < 0) {
          node.y = 0;
          node.vy *= -1;
        }
        if (node.y > canvas.height) {
          node.y = canvas.height;
          node.vy *= -1;
        }

        // Desenhar conexões
        nodesRef.current.forEach((otherNode, j) => {
          if (i === j) return;
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            // Aumentar opacidade para ficar mais visível
            let opacity = (1 - distance / 150) * 0.25;

            // Highlight se próximo ao mouse
            const midX = (node.x + otherNode.x) / 2;
            const midY = (node.y + otherNode.y) / 2;
            const dxMouse = mousePos.current.x - midX;
            const dyMouse = mousePos.current.y - midY;
            const distToMouse = Math.sqrt(
              dxMouse * dxMouse + dyMouse * dyMouse,
            );

            if (distToMouse < 120) {
              opacity *= 2.5; // Aumenta ainda mais a opacidade se perto do mouse
            }

            ctx.strokeStyle = `hsl(${primaryHsl} / ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });

        // Desenhar nó
        const distNodeToMouse = Math.sqrt(
          Math.pow(mousePos.current.x - node.x, 2) +
            Math.pow(mousePos.current.y - node.y, 2),
        );
        const isNearMouse = distNodeToMouse < 120;

        ctx.fillStyle = `hsl(${primaryHsl})`;
        ctx.shadowBlur = isNearMouse ? 20 : 8;
        ctx.shadowColor = `hsl(${primaryHsl})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, isNearMouse ? 4 : 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden",
        className,
      )}
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
};
