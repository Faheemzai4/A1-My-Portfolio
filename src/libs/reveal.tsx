"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  animation = "animate-fade-in-up",
}: {
  children: React.ReactNode;
  animation?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);

            // reset animation when leaving, so it replays next time
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? animation : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
