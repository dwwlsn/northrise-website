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

  const vpX = W * 0.70;
  const vpY = H * 0.63;

  /* ── Floor radial lines: fan from VP into the lower-left quadrant ── */
  const ANGLE_START = Math.PI * 0.48; // just past straight-down-left
  const ANGLE_END   = Math.PI * 1.55; // covers lower half
  const NUM_RADIAL  = 48;

  for (let i = 0; i <= NUM_RADIAL; i++) {
    const t     = i / NUM_RADIAL;
    const angle = ANGLE_START + t * (ANGLE_END - ANGLE_START);
    const len   = Math.hypot(W, H) * 1.6;
    const ex    = vpX + Math.cos(angle) * len;
    const ey    = vpY + Math.sin(angle) * len;

    const g = ctx.createLinearGradient(vpX, vpY, ex, ey);
    g.addColorStop(0,    "rgba(255,138,61,0.28)");
    g.addColorStop(0.05, "rgba(200,215,255,0.14)");
    g.addColorStop(0.25, "rgba(180,200,255,0.055)");
    g.addColorStop(0.7,  "rgba(180,200,255,0.018)");
    g.addColorStop(1,    "rgba(180,200,255,0)");

    ctx.beginPath();
    ctx.moveTo(vpX, vpY);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = g;
    ctx.lineWidth   = 0.6;
    ctx.stroke();
  }

  /* ── Depth arc cross-lines (exponentially spaced, denser near horizon) ── */
  const NUM_ARCS = 14;
  const maxR     = Math.hypot(W, H) * 0.85;

  for (let i = 1; i <= NUM_ARCS; i++) {
    const t     = i / NUM_ARCS;
    const r     = t * t * maxR;                          // quadratic: close together near VP
    const alpha = (1 - t) * 0.13;                        // fade with distance

    ctx.beginPath();
    ctx.arc(vpX, vpY, r, ANGLE_START, ANGLE_END);
    ctx.strokeStyle = `rgba(160,185,255,${alpha})`;
    ctx.lineWidth   = 0.55;
    ctx.stroke();
  }

  /* ── Vertical axis line: VP up to top of canvas ── */
  const vg = ctx.createLinearGradient(vpX, 0, vpX, vpY);
  vg.addColorStop(0,    "rgba(255,255,255,0)");
  vg.addColorStop(0.55, "rgba(255,255,255,0.22)");
  vg.addColorStop(0.82, "rgba(255,255,255,0.75)");
  vg.addColorStop(0.93, "rgba(255,255,255,0.95)");
  vg.addColorStop(1,    "rgba(255,138,61,1)");

  ctx.beginPath();
  ctx.moveTo(vpX, 0);
  ctx.lineTo(vpX, vpY);
  ctx.strokeStyle = vg;
  ctx.lineWidth   = 1.5;
  ctx.stroke();

  /* ── Orange glow at VP ── */
  const rg = ctx.createRadialGradient(vpX, vpY, 0, vpX, vpY, 180);
  rg.addColorStop(0,    "rgba(255,138,61,0.90)");
  rg.addColorStop(0.08, "rgba(255,138,61,0.50)");
  rg.addColorStop(0.28, "rgba(255,100,30,0.14)");
  rg.addColorStop(0.6,  "rgba(255,80,20,0.04)");
  rg.addColorStop(1,    "rgba(255,80,20,0)");

  ctx.fillStyle = rg;
  ctx.beginPath();
  ctx.arc(vpX, vpY, 180, 0, Math.PI * 2);
  ctx.fill();

  /* ── VP dot ── */
  ctx.fillStyle = "#FF8A3D";
  ctx.beginPath();
  ctx.arc(vpX, vpY, 2.8, 0, Math.PI * 2);
  ctx.fill();

  /* ── North-star dot at top of axis ── */
  const northY = H * 0.032;
  ctx.fillStyle = "rgba(255,138,61,0.80)";
  ctx.beginPath();
  ctx.arc(vpX, northY, 2.2, 0, Math.PI * 2);
  ctx.fill();

  /* ── Dark vignette: pulls attention left toward text ── */
  const vig = ctx.createRadialGradient(W * 0.28, H * 0.42, 0, W * 0.28, H * 0.42, Math.max(W, H) * 0.82);
  vig.addColorStop(0,   "rgba(11,19,36,0)");
  vig.addColorStop(0.45, "rgba(11,19,36,0.08)");
  vig.addColorStop(1,   "rgba(11,19,36,0.62)");
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
            Explore the platform &nbsp;↗
          </a>
        </div>
      </div>
    </section>
  );
}
