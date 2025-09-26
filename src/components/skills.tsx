"use client";

import SkillBars from "./skill-bars";
import Reveal from "@/libs/reveal";

export default function Skills() {
  return (
    <section className="w-full flex flex-col md:flex-row items-start bg-gradient-to-b from-gray-700 to-gray-500 py-12">
      <div className="relative max-w-[1200px] mx-auto items-stretch justify-center px-4 w-full gap-6">

        {/* Tech Stack & Skills */}
        <Reveal animation="animate-fade-in-left">
          <div className="my-5 space-y-6">
            <h2 className="text-red-800 text-2xl font-bold mb-4 text-center md:text-left">
              Tech Stack & Skills
            </h2>

            {/* Force row layout even on small screens */}
            <div className="flex flex-row flex-wrap gap-6">
              <div className="flex-1 bg-red-50 p-4 rounded-lg shadow-sm min-w-[250px]">
                <h3 className="font-bold text-red-700 mb-2 text-center md:text-left">
                  Tech Stack
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Next.js</li>
                  <li>React.js</li>
                  <li>Angular</li>
                  <li>Typescript</li>
                  <li>SQL</li>
                  <li>Prisma</li>
                  <li>RestAPIs</li>
                  <li>Firebase</li>
                  <li>Github</li>
                  <li>Bootstrap</li>
                </ul>
              </div>

              {/* Skills */}
              <div className="flex-1 bg-red-50 p-4 rounded-lg shadow-sm min-w-[250px]">
                <h3 className="font-bold text-red-700 mb-2 text-center md:text-left">
                  Skills
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Frontend Development</li>
                  <li>Next.js (scratch to deployment)</li>
                  <li>Authentication & Security</li>
                  <li>AI/ML</li>
                  <li>UI Improvements</li>
                  <li>Figma/PSD to HTML</li>
                  <li>Figma/PSD to Bootstrap</li>
                  <li>Figma/PSD to React App</li>
                  <li>Figma/PSD to Angular App</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Skills Bar */}
        <Reveal animation="animate-fade-in-right">
          <section className="flex-col p-4 space-y-6">
            <SkillBars />
          </section>
        </Reveal>
      </div>
    </section>
  );
}
