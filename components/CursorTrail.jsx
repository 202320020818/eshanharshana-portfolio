"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!dot || !finePointer.matches || reducedMotion.matches) return;

    const handlePointerMove = (event) => {
      dot.style.transform = `translate3d(${event.clientX - 4}px, ${event.clientY - 4}px, 0)`;
      dot.style.opacity = "1";
    };

    const hideDot = () => {
      dot.style.opacity = "0";
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", hideDot);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", hideDot);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-[#b7fff0] opacity-0 shadow-[0_0_10px_4px_rgba(56,180,151,0.65),0_0_24px_8px_rgba(56,180,151,0.28)] transition-opacity duration-150"
      />
    </div>
  );
}
