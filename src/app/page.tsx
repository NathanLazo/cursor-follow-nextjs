"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const tracker = useRef<HTMLDivElement | null>(null);

  const mouse = {
    x: 0,
    y: 0,
  };

  const onMouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const tick = () => {
    if (tracker.current) {
      tracker.current.style.left = `${mouse.x}px`;
      tracker.current.style.top = `${mouse.y}px`;
    }
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    tick();
  }, []);

  return (
    <main className='w-full h-screen'>
      <div
        ref={tracker}
        className='fixed h-8 w-8 border border-white rounded-full'
      ></div>
    </main>
  );
}
