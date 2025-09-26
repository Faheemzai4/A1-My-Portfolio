"use client";

import Image from "next/image";
import Link from "next/link";
import { useTyping } from "@/hooks/useTyping";
import Reveal from "@/libs/reveal";
import { Orbitron } from "next/font/google";

export const orbitron = Orbitron({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Dashboard() {
  const typedName = useTyping(
    ["Web Developer", "Next.js Enthusiast", "Angular.js", "React.js + Vite"],
    100,
    500
  );

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen flex justify-center">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row sm:text-center md:text-left items-center justify-center gap-12 px-4 text-white">

        {/* Image Section */}
        <Reveal animation="animate-fade-in-left">
          <section className="flex-shrink-0  w-[400px]  select-none">
            <Image
              src="/my-picture/myProfile.png"
              alt="Dashboard Visual"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-auto"
              priority
            />
            <p
              className={`${orbitron.className} mt-5 text-sm sm:text-base font-bold text-center tracking-wide`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
                {typedName}
                <span className="animate-blink">|</span>
              </span>
            </p>
          </section>
        </Reveal>


        {/* Text Section */}
        <Reveal animation="animate-fade-in-right">
          <section className="max-w-xl md:text-left md:pt-12">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Faheem Khan</h1>

            <p className="text-lg text-gray-200 mb-4">
              I'm a Frontend Developer specializing in React/Next.js and Angular. I create beautiful, responsive web applications with clean and maintainable code.
            </p>

            <p className="text-lg text-gray-200 mb-4">
              Explore my projects, check out my skills, and see what I've been working on recently.
            </p>

            {/* Buttons */}
            <Reveal animation="animate-fade-in-up delay-300">
              <div className="flex flex-wrap gap-4 mt-6 sm:mb-6 flex flex-col sm:flex-row justify-center md:justify-start">
                <button
                  onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-300"
                >
                  Visit Skills
                </button>

                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </Reveal>

          </section>
        </Reveal>

      </div>
    </section>
  );
}
