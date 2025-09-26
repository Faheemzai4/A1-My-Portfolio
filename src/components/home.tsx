"use client";

import { useEffect } from "react";
import AboutPage from "@/app/(app)/about-app/page";
import DashboardPage from "@/app/(app)/dashboard-app/page";
import SkillsPage from "@/app/(app)/skills-app/page";
import Coursespage from "@/app/(app)/Courses-app/page";
import ContactPage from "@/app/(app)/contact-app/page";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HomeComponent() {
  useScrollAnimation(); // hook to enable animations

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className="flex flex-col bg-white">
      <section id="home" className="scroll-animate"><DashboardPage /></section>
      <section id="about" className="scroll-animate"><AboutPage /></section>
      <section id="skills" className="scroll-animate"><SkillsPage /></section>
      <section id="courses" className="scroll-animate"><Coursespage /></section>
      <section id="contact" className="scroll-animate"><ContactPage /></section>
    </main>
  );
}
