"use client";

import { useEffect, useRef } from "react";

function drawCanvas(canvas: HTMLCanvasElement) {
  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;
  canvas.width  = W * devicePixelRatio;
  canvas.height = H * devicePixelRatio;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(devicePixelRatio, devicePixelRatio);

  ctx.fillStyle = "#0B1324";
  ctx.fillRect(0, 0, W, H);

  const vpX = W * 0.68;
  const vpY = H * 0.50;

  const NUM = 160;
  for (let i = 0; i < NUM; i++) {
    const angle = (i / NUM) * Math.PI * 2;
    const len   = Math.hypot(W, H) * 1.4;
    const ex    = vpX + Math.cos(angle) * len;
    const ey    = vpY + Math.sin(angle) * len;

    const isFloor = angle > Math.PI * 0.55 && angle < Math.PI * 1.45;
    const baseA   = isFloor ? 0.11 : 0.055;

    const g = ctx.createLinearGradient(vpX, vpY, ex, ey);
    g.addColorStop(0,    `rgba(255,200,140,${baseA * 2.5})`);
    g.addColorStop(0.06, `rgba(255,240,220,${baseA * 1.2})`);
    g.addColorStop(0.25, `rgba(250,250,245,${baseA * 0.5})`);
    g.addColorStop(0.7,  `rgba(250,250,245,${baseA * 0.15})`);
    g.addColorStop(1,    "rgba(250,250,245,0)");

    ctx.beginPath();
    ctx.moveTo(vpX, vpY);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = g;
    ctx.lineWidth   = 0.55;
    ctx.stroke();
  }

  const vg = ctx.createLinearGradient(vpX, 0, vpX, H);
  vg.addColorStop(0,    "rgba(255,255,255,0)");
  vg.addColorStop(0.15, "rgba(255,255,255,0.25)");
  vg.addColorStop(0.40, "rgba(255,255,255,0.75)");
  vg.addColorStop(0.48, "rgba(255,255,255,0.95)");
  vg.addColorStop(0.50, "rgba(255,138,61,1)");
  vg.addColorStop(0.56, "rgba(255,255,255,0.55)");
  vg.addColorStop(0.75, "rgba(255,255,255,0.15)");
  vg.addColorStop(1,    "rgba(255,255,255,0)");
  ctx.beginPath();
  ctx.moveTo(vpX, 0);
  ctx.lineTo(vpX, H);
  ctx.strokeStyle = vg;
  ctx.lineWidth   = 1.4;
  ctx.stroke();

  const rg = ctx.createRadialGradient(vpX, vpY, 0, vpX, vpY, 220);
  rg.addColorStop(0,    "rgba(255,138,61,0.75)");
  rg.addColorStop(0.12, "rgba(255,138,61,0.35)");
  rg.addColorStop(0.4,  "rgba(255,100,30,0.1)");
  rg.addColorStop(1,    "rgba(255,100,30,0)");
  ctx.fillStyle = rg;
  ctx.beginPath();
  ctx.arc(vpX, vpY, 220, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#FF8A3D";
  ctx.beginPath();
  ctx.arc(vpX, vpY, 3, 0, Math.PI * 2);
  ctx.fill();

  const northY = H * 0.04;
  ctx.fillStyle = "rgba(255,138,61,0.85)";
  ctx.beginPath();
  ctx.arc(vpX, northY, 2.5, 0, Math.PI * 2);
  ctx.fill();

  const vig = ctx.createRadialGradient(W * 0.4, H * 0.4, 0, W * 0.4, H * 0.4, Math.max(W, H) * 0.75);
  vig.addColorStop(0,   "rgba(11,19,36,0)");
  vig.addColorStop(0.6, "rgba(11,19,36,0.1)");
  vig.addColorStop(1,   "rgba(11,19,36,0.55)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, W, H);
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    drawCanvas(canvas);

    const onResize = () => drawCanvas(canvas);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-h1">
            Intelligence<br/>that moves<br/>work forward.
          </h1>
          <p className="hero-sub">
            Northrise builds applied AI solutions<br/>
            that deliver real impact—securely,<br/>
            responsibly, and at scale.
          </p>
          <a href="#products" className="btn-primary">
            Explore the platform &nbsp;→
          </a>
        </div>
      </div>
    </section>
  );
}
