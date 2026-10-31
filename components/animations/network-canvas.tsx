"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type NetworkNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = reducedMotion ?? window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let width = 0;
    let height = 0;
    let isIntersecting = false;
    let isTabVisible = document.visibilityState === "visible";
    let nodes: NetworkNode[] = [];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        if (!reduced) {
          n1.x += n1.vx;
          n1.y += n1.vy;
          if (n1.x < 0 || n1.x > width) n1.vx *= -1;
          if (n1.y < 0 || n1.y > height) n1.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 136, 0.7)";
        ctx.fill();
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 135) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(0, 255, 136, ${(1 - dist / 135) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      if (!reduced && isIntersecting && isTabVisible) {
        raf = requestAnimationFrame(draw);
      }
    };

    const resize = () => {
      if (!canvas.parentElement) return;
      const previousWidth = width;
      const previousHeight = height;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const nodeCount = window.matchMedia("(max-width: 640px)").matches ? 20 : 38;
      if (nodes.length !== nodeCount) {
        nodes = Array.from({ length: nodeCount }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 1.2,
        }));
      } else if (previousWidth && previousHeight) {
        nodes.forEach((node) => {
          node.x = (node.x / previousWidth) * width;
          node.y = (node.y / previousHeight) * height;
        });
      }

      if (isIntersecting && isTabVisible) {
        cancelAnimationFrame(raf);
        draw();
      }
    };

    const onVisibilityChange = () => {
      isTabVisible = document.visibilityState === "visible";
      if (isIntersecting && isTabVisible) draw();
      else cancelAnimationFrame(raf);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      if (isIntersecting && isTabVisible) draw();
      else cancelAnimationFrame(raf);
    });

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    if (reduced) draw();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-75"
    />
  );
}
