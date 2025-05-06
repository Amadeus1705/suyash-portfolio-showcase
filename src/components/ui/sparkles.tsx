
"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setCanvasSize({ width, height });
        canvas.width = width;
        canvas.height = height;
      }
    });

    resizeObserver.observe(canvas.parentElement || document.body);

    const particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      blinking: boolean;
      alpha: number;
      alphaSpeed: number;
    }[] = [];

    const density = particleDensity || 100;
    const particleCount = Math.floor((canvas.width * canvas.height) / 10000) * (density / 100);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize || 2) + (minSize || 0.5),
        speed: (speed || 0.5) * (0.5 + Math.random()),
        color: particleColor || "#ffffff",
        blinking: Math.random() > 0.5,
        alpha: 1,
        alphaSpeed: 0.01 + Math.random() * 0.01,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (background) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      for (const particle of particles) {
        // Update alpha for blinking effect
        if (particle.blinking) {
          particle.alpha += particle.alphaSpeed;
          if (particle.alpha <= 0 || particle.alpha >= 1) {
            particle.alphaSpeed = -particle.alphaSpeed;
          }
        }

        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Move the particle
        particle.y -= particle.speed;

        // If particle is off screen, reset its position
        if (particle.y < -particle.size) {
          particle.y = canvas.height + particle.size;
          particle.x = Math.random() * canvas.width;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
    };
  }, [background, minSize, maxSize, speed, particleColor, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("w-full h-full", className)}
      style={{
        background: background || "transparent",
      }}
    />
  );
};

export function SparklesBackground({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={70}
        className="w-full h-full"
        particleColor="#FFFFFF"
        speed={0.5}
      />
    </div>
  );
}
