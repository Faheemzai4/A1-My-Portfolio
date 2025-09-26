"use client";

import Reveal from "@/libs/reveal";
import Image from "next/image";
import React from "react";

export default function Courses() {
  return (
    <section className="w-full py-12 bg-gradient-to-t from-[#cbd5e1] to-[#64748b] items-center justify-center">
      <div className="relative max-w-[1200px] mx-auto px-4 w-full flex flex-col md:flex-row gap-10 items-center md:items-start">

        {/* Image Left */}
        <Reveal animation="animate-fade-in-left">
          <div className="flex-shrink-0 w-[200px] md:w-[300px] lg:w-[300px] ">
            <Image
              src="/my-picture/portfolioImage2.jpg"
              alt="M Faheem Khan"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </Reveal>

        {/* Text Right */}
        <Reveal animation="animate-fade-in-right">
          <div className="text-gray-900 text-center md:text-left space-y-6 flex-1">
            <h2 className="text-yellow-400 text-3xl font-bold mb-4">
              Certifications & Courses
            </h2>

            {/* Course 1 */}
            <Reveal animation="animate-fade-in-up delay-100">
              <div className="space-y-2">
                <p className="font-bold text-yellow-800">
                  React Fundamentals - Bytegrade Series
                </p>
                <p>
                  Completed multiple hands-on projects including Tech Bag App and
                  Corp Comments App. Learned component-based architecture, hooks,
                  form handling, state management, and best practices in modern
                  React development.
                </p>
              </div>
            </Reveal>

            {/* Course 2 */}
            <Reveal animation="animate-fade-in-up delay-200">
              <div className="space-y-2">
                <p className="font-bold text-yellow-700">
                  JavaScript: The Hard Part - Will Sentance Series
                </p>
                <p>
                  Deep dive into core JavaScript concepts such as closures,
                  callbacks, asynchronous behavior, and the event loop. Gained a
                  strong understanding of how JavaScript works under the hood with
                  real-time code walkthroughs and whiteboarding.
                </p>
              </div>
            </Reveal>

            {/* Course 3 */}
            <Reveal animation="animate-fade-in-up delay-300">
              <div className="space-y-2">
                <p className="font-bold text-yellow-700">
                  Beginner JavaScript - Wes Bos Series
                </p>
                <p>
                  Built real-world projects while learning modern JavaScript
                  concepts including DOM manipulation, event handling, and
                  array/object methods. Strengthened foundation and intermediate
                  JavaScript skills through hands-on exercises.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
