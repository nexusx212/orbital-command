import { useEffect, useRef } from "react";

/**
 * Lightweight animated globe: rotating wireframe sphere with African city nodes
 * and flowing data connections. Canvas 2D for performance and small bundle size.
 */
const CITIES = [
  { name: "Lagos", lat: 6.5, lon: 3.4 },
  { name: "Abuja", lat: 9.1, lon: 7.5 },
  { name: "Accra", lat: 5.6, lon: -0.2 },
  { name: "Dakar", lat: 14.7, lon: -17.4 },
  { name: "Cairo", lat: 30.0, lon: 31.2 },
  { name: "Nairobi", lat: -1.3, lon: 36.8 },
  { name: "Addis Ababa", lat: 9.0, lon: 38.7 },
  { name: "Kigali", lat: -1.9, lon: 30.1 },
  { name: "Johannesburg", lat: -26.2, lon: 28.0 },
  { name: "Casablanca", lat: 33.6, lon: -7.6 },
  { name: "Kinshasa", lat: -4.3, lon: 15.3 },
  { name: "Luanda", lat: -8.8, lon: 13.2 },
];

const LINKS: [number, number][] = [
  [0, 1], [0, 2], [2, 3], [3, 9], [1, 4], [4, 6], [6, 5], [5, 7], [5, 8], [0, 10], [10, 11], [11, 8], [9, 4],
];

export const GlobeCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let radius = 0;
    let raf = 0;
    let rotation = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      radius = Math.min(width, height) * 0.38;
    };

    const particles = Array.from({ length: 70 }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 0.55 + Math.random() * 0.75,
      speed: 0.0008 + Math.random() * 0.0016,
      size: Math.random() * 1.6 + 0.4,
      o: 0.15 + Math.random() * 0.5,
    }));

    const project = (lat: number, lon: number, rot: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + rot) * (Math.PI / 180);
      const x = radius * Math.sin(phi) * Math.sin(theta);
      const y = -radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.cos(theta);
      return { x, y, z };
    };

    const draw = (t: number) => {
      rotation = (t * 0.008) % 360;
      const cx = width / 2;
      const cy = height / 2;
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(cx, cy);

      // ambient particles
      particles.forEach((p) => {
        p.a += p.speed;
        const pr = radius * p.r;
        const x = Math.cos(p.a) * pr * 1.35;
        const y = Math.sin(p.a) * pr * 0.55;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(189, 94%, 55%, ${p.o * 0.6})`;
        ctx.fill();
      });

      // outer glow
      const glow = ctx.createRadialGradient(0, 0, radius * 0.6, 0, 0, radius * 1.5);
      glow.addColorStop(0, "hsla(221, 83%, 53%, 0.22)");
      glow.addColorStop(1, "hsla(221, 83%, 53%, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // sphere body
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(217, 60%, 10%, 0.55)";
      ctx.fill();
      ctx.strokeStyle = "hsla(189, 94%, 55%, 0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // latitude rings
      for (let lat = -60; lat <= 60; lat += 30) {
        const r = radius * Math.cos((lat * Math.PI) / 180);
        const y = -radius * Math.sin((lat * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(0, y, r, r * 0.22, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "hsla(210, 60%, 80%, 0.12)";
        ctx.stroke();
      }

      // longitude arcs
      for (let i = 0; i < 12; i++) {
        const angle = ((i * 30 + rotation) * Math.PI) / 180;
        const rx = Math.abs(radius * Math.cos(angle));
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "hsla(210, 60%, 80%, 0.09)";
        ctx.stroke();
      }

      // connections
      const points = CITIES.map((c) => project(c.lat, c.lon, rotation));
      LINKS.forEach(([a, b], idx) => {
        const p1 = points[a];
        const p2 = points[b];
        if (p1.z < -radius * 0.35 && p2.z < -radius * 0.35) return;
        const mx = (p1.x + p2.x) / 2;
        const my = (p1.y + p2.y) / 2;
        const lift = 1.28;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(mx * lift, my * lift, p2.x, p2.y);
        ctx.strokeStyle = "hsla(189, 94%, 55%, 0.3)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // travelling data pulse
        const prog = ((t * 0.00025 + idx * 0.13) % 1);
        const inv = 1 - prog;
        const px = inv * inv * p1.x + 2 * inv * prog * mx * lift + prog * prog * p2.x;
        const py = inv * inv * p1.y + 2 * inv * prog * my * lift + prog * prog * p2.y;
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(189, 94%, 65%, 0.95)";
        ctx.fill();
      });

      // city nodes
      points.forEach((p) => {
        const front = p.z > -radius * 0.2;
        const alpha = front ? 0.95 : 0.25;
        ctx.beginPath();
        ctx.arc(p.x, p.y, front ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(221, 90%, 70%, ${alpha})`;
        ctx.fill();
        if (front) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 7 + Math.sin(t * 0.003) * 2, 0, Math.PI * 2);
          ctx.strokeStyle = "hsla(189, 94%, 60%, 0.35)";
          ctx.stroke();
        }
      });

      ctx.restore();
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
};
