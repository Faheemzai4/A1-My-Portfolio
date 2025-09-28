"use client";

import Reveal from "@/libs/reveal";
import Image from "next/image";
import { useState } from "react";

export default function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full py-12 bg-gradient-to-b from-slate-800 to-teal-900">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 text-white">

        {/* Image Section */}
        <Reveal animation="animate-fade-in-left">
          <div className="w-[200px] md:w-[300px]">
            <Image
              src="/my-picture/profileImage.png"
              alt="M Faheem Khan"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-auto"
              priority
            />
          </div>
        </Reveal>


        {/* Text Section */}
        <Reveal animation="animate-fade-in-right">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">About My Journey</h1>

            <p className="text-gray-200 mb-3">
              I am Muhammad Faheem, a passionate web developer focused on building modern, scalable, and user-friendly applications with technologies like Next.js, TypeScript, and Tailwind CSS. I enjoy creating impactful digital solutions that combine clean design with solid engineering.
            </p>

            {showMore && (
              <>
                <Reveal animation="animate-fade-in-right delay-300">
                  <p className="text-gray-200 mb-3">
                    I started my IT journey back in 2022 after completing my intermediate in computer science at Punjab College. Alongside my bachelor &apos;s degree, I began exploring HTML and CSS, then gradually moved on to JavaScript and modern frameworks.
                  </p>
                </Reveal>

                <Reveal animation="animate-fade-in-left">
                  <p className="text-gray-200 mb-3">
                    My first framework experience was with Angular and TypeScript, followed by React and Next.js. I&apos;ve worked on multiple projects, building responsive, SEO-friendly web applications using Tailwind CSS and modern best practices.
                  </p>
                </Reveal>

                <Reveal animation="animate-fade-in-right delay-300">
                  <p className="text-gray-200 mb-3">
                    I enjoy tackling challenging problems and continuously learning new technologies to improve my craft. I&apos;m passionate about writing clean, maintainable code and delivering high-quality user experiences.
                  </p>
                </Reveal>

              </>
            )}

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-3 px-3 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition text-sm md:text-base"
            >
              {showMore ? "Show Less" : "Read More"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
