"use client";

import { useEffect } from "react";

export function useScrollAnimation(className = "animate-fade-in-up") {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer.unobserve(entry.target); // play once
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className]);
}
