import { useEffect, useRef } from "react";

interface Satellite {
  angle: number;
  speed: number;
  orbitRadius: number;
  size: number;
  opacity: number;
}

export const OrbitalCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let satellites: Satellite[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initSatellites = () => {
      satellites = [];
      const centerX = canvas.offsetWidth / 2;
      const baseRadius = Math.min(centerX * 0.4, 200);

      // Create 8 satellites on different orbits
      for (let i = 0; i < 8; i++) {
        satellites.push({
          angle: (Math.PI * 2 * i) / 8 + Math.random() * 0.5,
          speed: 0.0003 + Math.random() * 0.0004,
          orbitRadius: baseRadius + 40 + i * 25,
          size: 2 + Math.random() * 2,
          opacity: 0.5 + Math.random() * 0.5,
        });
      }
    };

    const drawEarth = (centerX: number, centerY: number, radius: number) => {
      // Earth glow
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.8,
        centerX,
        centerY,
        radius * 1.5
      );
      gradient.addColorStop(0, "rgba(34, 211, 238, 0.15)");
      gradient.addColorStop(1, "rgba(34, 211, 238, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Earth sphere
      const earthGradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius
      );
      earthGradient.addColorStop(0, "#1e3a5f");
      earthGradient.addColorStop(0.5, "#0f172a");
      earthGradient.addColorStop(1, "#020617");
      
      ctx.fillStyle = earthGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Earth rim light
      ctx.strokeStyle = "rgba(34, 211, 238, 0.3)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawOrbit = (centerX: number, centerY: number, radius: number) => {
      ctx.strokeStyle = "rgba(34, 211, 238, 0.08)";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 10]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawSatellite = (x: number, y: number, size: number, opacity: number) => {
      // Satellite glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
      gradient.addColorStop(0, `rgba(34, 211, 238, ${opacity})`);
      gradient.addColorStop(1, "rgba(34, 211, 238, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size * 4, 0, Math.PI * 2);
      ctx.fill();

      // Satellite core
      ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawConnectionLines = (centerX: number, centerY: number) => {
      satellites.forEach((sat, i) => {
        if (i % 3 === 0) {
          const x = centerX + Math.cos(sat.angle) * sat.orbitRadius;
          const y = centerY + Math.sin(sat.angle) * sat.orbitRadius;
          
          ctx.strokeStyle = `rgba(34, 211, 238, ${sat.opacity * 0.15})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      });
    };

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const earthRadius = Math.min(width, height) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Draw orbits
      satellites.forEach((sat) => {
        drawOrbit(centerX, centerY, sat.orbitRadius);
      });

      // Draw connection lines
      drawConnectionLines(centerX, centerY);

      // Draw Earth
      drawEarth(centerX, centerY, earthRadius);

      // Update and draw satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const x = centerX + Math.cos(sat.angle) * sat.orbitRadius;
        const y = centerY + Math.sin(sat.angle) * sat.orbitRadius;
        drawSatellite(x, y, sat.size, sat.opacity);
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    initSatellites();
    animate();

    window.addEventListener("resize", () => {
      resize();
      initSatellites();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
};
