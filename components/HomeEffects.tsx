"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement for the homepage: the entrance gate, pointer tilt,
 * cabinet parallax, and scroll reveal. Every effect degrades to static content
 * when JavaScript, fine pointers, or motion are unavailable.
 */
export default function HomeEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];
    const timers: number[] = [];

    // Scroll reveal (started once the entrance gate is out of the way)
    let revealStarted = false;
    const startReveal = () => {
      if (revealStarted || reduceMotion || !("IntersectionObserver" in window)) return;
      revealStarted = true;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).dataset.in = "true";
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
      root.dataset.reveal = "on";
      cleanups.push(() => {
        observer.disconnect();
        delete root.dataset.reveal;
      });
    };

    // Entrance gate
    const openButton = document.querySelector<HTMLButtonElement>("[data-gate-open]");
    const openGate = () => {
      if (root.dataset.gate !== "closed") return;
      try {
        sessionStorage.setItem("jl-gate", "open");
      } catch {
        // Storage can be unavailable in private modes; the gate still opens.
      }
      if (reduceMotion) {
        root.dataset.gate = "open";
        return;
      }
      root.dataset.gate = "opening";
      timers.push(window.setTimeout(startReveal, 450));
      timers.push(window.setTimeout(() => {
        root.dataset.gate = "open";
      }, 1500));
    };
    const onGateKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") openGate();
    };
    if (openButton) {
      openButton.addEventListener("click", openGate);
      window.addEventListener("keydown", onGateKey);
      if (root.dataset.gate === "closed") openButton.focus({ preventScroll: true });
      cleanups.push(() => {
        openButton.removeEventListener("click", openGate);
        window.removeEventListener("keydown", onGateKey);
      });
    }

    // Pointer tilt with glare
    if (finePointer && !reduceMotion) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((element) => {
        const strength = Number(element.dataset.tilt) || 8;
        const move = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          element.style.setProperty("--rx", `${((0.5 - y) * strength).toFixed(2)}deg`);
          element.style.setProperty("--ry", `${((x - 0.5) * strength * 1.2).toFixed(2)}deg`);
          element.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
          element.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
          element.dataset.tilting = "true";
        };
        const leave = () => {
          element.style.setProperty("--rx", "0deg");
          element.style.setProperty("--ry", "0deg");
          delete element.dataset.tilting;
        };
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
        });
      });

      const scene = document.querySelector<HTMLElement>("[data-parallax]");
      if (scene) {
        let frame = 0;
        const onMove = (event: PointerEvent) => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            scene.style.setProperty("--px", (event.clientX / window.innerWidth - 0.5).toFixed(3));
            scene.style.setProperty("--py", (event.clientY / window.innerHeight - 0.5).toFixed(3));
          });
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        cleanups.push(() => {
          cancelAnimationFrame(frame);
          window.removeEventListener("pointermove", onMove);
        });
      }
    }

    if (root.dataset.gate !== "closed") startReveal();

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
