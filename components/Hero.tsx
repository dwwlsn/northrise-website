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

  /* Horizon point ("the launch site") — slightly right of center, on the horizon */
  const vpX = W * 0.62;
  const vpY = H * 0.58;

  /* ──────────────────────────────────────────────────────────────
   * 1. FLOOR FAN — radial lines going DOWNWARD from the VP only
   *    Angle range: 4 o'clock (~25°) through 6 o'clock (90°) to 8 o'clock (~155°)
   *    No lines above the horizon. This is what makes it read as a floor.
   * ────────────────────────────────────────────────────────────── */
  const ANGLE_START = Math.PI * 0.14;  // ~25°  (toward bottom-right)
  const ANGLE_END   = Math.PI * 0.86;  // ~155° (toward bottom-left)
  const NUM_RAYS    = 60;

  for (let i = 0; i <= NUM_RAYS; i++) {
    const t     = i / NUM_RAYS;
    const angle = ANGLE_START + t * (ANGLE_END - ANGLE_START);
    const len   = Math.hypot(W, H) * 1.4;
    const ex    = vpX + Math.cos(angle) * len;
    const ey    = vpY + Math.sin(angle) * len;

    /* Edge rays fade so the fan doesn't have a hard cutoff at start/end */
    const edgeFade = Math.sin(Math.PI * t);             // 0 at edges, 1 in middle
    const baseA    = 0.06 + 0.10 * edgeFade;

    const g = ctx.createLinearGradient(vpX, vpY, ex, ey);
    g.addColorStop(0,    `rgba(255,180,120,${baseA * 1.6})`);
    g.addColorStop(0.04, `rgba(255,210,170,${baseA * 1.3})`);
    g.addColorStop(0.20, `rgba(180,200,235,${baseA * 0.55})`);
    g.addColorStop(0.55, `rgba(160,185,225,${baseA * 0.18})`);
    g.addColorStop(1,    "rgba(150,175,220,0)");

    ctx.beginPath();
    ctx.moveTo(vpX, vpY);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = g;
    ctx.lineWidth   = 0.55;
    ctx.stroke();
  }

  /* ──────────────────────────────────────────────────────────────
   * 2. HORIZON GLOW — a faint horizontal band at vpY suggesting horizon
   * ────────────────────────────────────────────────────────────── */
  const horizon = ctx.createLinearGradient(0, vpY, W, vpY);
  horizon.addColorStop(0,    "rgba(255,138,61,0)");
  horizon.addColorStop(0.35, "rgba(255,138,61,0.05)");
  horizon.addColorStop(0.62, "rgba(255,138,61,0.18)");
  horizon.addColorStop(0.85, "rgba(255,138,61,0.05)");
  horizon.addColorStop(1,    "rgba(255,138,61,0)");
  ctx.fillStyle = horizon;
  ctx.fillRect(0, vpY - 1, W, 2);

  /* ──────────────────────────────────────────────────────────────
   * 3. ROCKET TRAIL — bright vertical line from VP straight up
   *    This is the hero element. Crisp, bright, with orange ignition at base.
   * ────────────────────────────────────────────────────────────── */
  const trail = ctx.createLinearGradient(vpX, 0, vpX, vpY);
  trail.addColorStop(0,    "rgba(255,255,255,0)");
  trail.addColorStop(0.40, "rgba(255,255,255,0.12)");
  trail.addColorStop(0.70, "rgba(255,255,255,0.55)");
  trail.addColorStop(0.88, "rgba(255,235,210,0.92)");
  trail.addColorStop(0.97, "rgba(255,180,110,1)");
  trail.addColorStop(1,    "rgba(255,138,61,1)");

  ctx.beginPath();
  ctx.moveTo(vpX, 0);
  ctx.lineTo(vpX, vpY);
  ctx.strokeStyle = trail;
  ctx.lineWidth   = 1.6;
  ctx.stroke();

  /* ──────────────────────────────────────────────────────────────
   * 4. IGNITION GLOW — tight orange burst at the VP
   * ────────────────────────────────────────────────────────────── */
  const glow = ctx.createRadialGradient(vpX, vpY, 0, vpX, vpY, 140);
  glow.addColorStop(0,    "rgba(255,210,150,1)");
  glow.addColorStop(0.05, "rgba(255,150,70,0.85)");
  glow.addColorStop(0.18, "rgba(255,120,50,0.30)");
  glow.addColorStop(0.45, "rgba(255,100,40,0.07)");
  glow.addColorStop(1,    "rgba(255,80,20,0)");

  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(vpX, vpY, 140, 0, Math.PI * 2);
  ctx.fill();

  /* North-star dot at the very top of the trail */
  ctx.fillStyle = "rgba(255,180,110,0.85)";
  ctx.beginPath();
  ctx.arc(vpX, H * 0.028, 2, 0, Math.PI * 2);
  ctx.fill();

  /* ──────────────────────────────────────────────────────────────
   * 5. VIGNETTE — darken the left side so hero text reads cleanly
   * ────────────────────────────────────────────────────────────── */
  const vig = ctx.createLinearGradient(0, 0, W, 0);
  vig.addColorStop(0,    "rgba(11,19,36,0.85)");
  vig.addColorStop(0.30, "rgba(11,19,36,0.45)");
  vig.addColorStop(0.55, "rgba(11,19,36,0)");
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
