import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  duration?: number;
}

export const Counter = ({ value, prefix = "", suffix = "", display, duration = 1600 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || display) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value, duration, display]);

  return (
    <span ref={ref} className="tabular-nums">
      {display ?? `${prefix}${current}${suffix}`}
    </span>
  );
};
