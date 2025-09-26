"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { Lobster } from "next/font/google";
import { Menu, X } from "lucide-react";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

const Logo = memo(() => (
  <button
    onClick={() => {
      const el = document.getElementById("home");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }}
    className="flex items-center space-x-3"
  >
    <Image src="/new.svg" alt="Faheem Zai Logo" width={50} height={50} />
    <span
      className={`text-3xl text-[#FFEFD5] font-extrabold tracking-wide ${lobster.variable}`}
      style={{ fontFamily: "var(--font-logo)" }}
    >
      Faheem
    </span>
  </button>
));

const menuItems = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Courses", href: "courses" },
  { name: "Contact", href: "contact" },
];

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const item of menuItems) {
        const section = document.getElementById(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = item.href;
            break;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // offset for fixed header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-700 via-teal-900 to-stone-600 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 md:py-4 flex items-center justify-between">
        {/* Logo left */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex ml-20 space-x-6 font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={`transition ${active === item.href
                  ? "text-blue-600 font-bold"
                  : "text-white hover:text-blue-500"
                  }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
            className="text-white hover:text-blue-500 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col p-2 font-medium bg-gradient-to-b from-blue-900 to-yellow-900">
          {menuItems.map((item) => (
            <li key={item.href} className="w-full">
              <button
                onClick={() => {
                  scrollToSection(item.href);
                  setIsOpen(false);
                }}
                className={`w-full text-left block rounded-md px-4 py-3 transition ${active === item.href
                  ? "bg-blue-800 text-white font-bold"
                  : "text-white hover:bg-blue-700 hover:text-white"
                  }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
