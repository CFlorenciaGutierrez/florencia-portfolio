'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const canUseCursor = () => finePointer.matches && !reducedMotion.matches;

    const updateEnabled = () => {
      const nextEnabled = canUseCursor();
      setEnabled(nextEnabled);
      document.documentElement.toggleAttribute(
        'data-custom-cursor',
        nextEnabled
      );
    };

    updateEnabled();
    finePointer.addEventListener('change', updateEnabled);
    reducedMotion.addEventListener('change', updateEnabled);

    return () => {
      finePointer.removeEventListener('change', updateEnabled);
      reducedMotion.removeEventListener('change', updateEnabled);
      document.documentElement.removeAttribute('data-custom-cursor');
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let frame = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };

    const move = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const animate = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move, { passive: true });
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      window.cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div ref={glowRef} className="cursor-ambient-glow" aria-hidden="true" />
  );
}
