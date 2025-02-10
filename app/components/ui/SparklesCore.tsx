import React, { useRef, useEffect } from "react";
import { cn } from "../../../lib/utils";

interface SparklesCoreProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore = (props: SparklesCoreProps) => {
  const {
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 100,
    className,
    particleColor = "#fff",
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Array<Particle>>([]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (!canvas) return;
      if (!entries || !entries[0]) return;

      const { width, height } = entries[0].contentRect;
      canvas.width = width;
      canvas.height = height;

      particles.current = createParticles(particleDensity, width, height);
    });

    resizeObserver.observe(canvas);

    const renderLoop = () => {
      if (!canvas) return;
      if (!ctx) return;

      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle) => {
        particle.update();
        particle.draw(ctx, particleColor);
      });

      requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      resizeObserver.disconnect();
    };
  }, [background, particleColor, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full", className)}
    />
  );
};

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeDirection: 1 | -1;

  constructor(
    x: number,
    y: number,
    size: number,
    speedX: number,
    speedY: number
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.opacity = Math.random();
    this.fadeDirection = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.opacity >= 1) this.fadeDirection = -1;
    if (this.opacity <= 0) this.fadeDirection = 1;

    this.opacity += 0.01 * this.fadeDirection;
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${hexToRgb(color)}, ${this.opacity})`;
    ctx.fill();
  }
}

function createParticles(density: number, width: number, height: number) {
  const particles: Array<Particle> = [];
  for (let i = 0; i < density; i++) {
    const size = Math.random() * 1 + 0.4;
    const x = Math.random() * width;
    const y = Math.random() * height;
    const speedX = Math.random() * 0.2 - 0.1;
    const speedY = Math.random() * 0.2 - 0.1;
    particles.push(new Particle(x, y, size, speedX, speedY));
  }
  return particles;
}

function hexToRgb(hex: string) {
  // Remove # if present
  hex = hex.replace("#", "");
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
} 