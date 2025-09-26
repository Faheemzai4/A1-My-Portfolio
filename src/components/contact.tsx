"use client";

import { sendContactEmail } from "@/app/actions/contact";
import Reveal from "@/libs/reveal";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function Contact() {
  const [state, formAction] = useActionState(sendContactEmail, {
    success: false,
    error: "",
  });

  return (
    <section className="relative py-12 flex items-center justify-center bg-gradient-to-t from-[#e5e7eb] to-[#9ca3af]">
      {/* Gradient background only for this section */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-900 to-yellow-900" />

      {/* Contact Card */}
      <Reveal animation="animate-fade-in-up">
        <div className="w-full max-w-2xl sm:max-w-xl bg-white rounded-2xl shadow-xl p-8 sm:p-6">
          <Reveal animation="animate-fade-in-up delay-100">
            <h1 className="text-3xl sm:text-2xl font-bold text-center mb-6 text-gray-900">
              Contact Me
            </h1>
          </Reveal>

          <Reveal animation="animate-fade-in-up delay-200">
            <p className="text-center text-gray-600 mb-6 sm:mb-4 text-base sm:text-sm">
              Got a question, idea, or opportunity? Send me a message!
            </p>
          </Reveal>

          <form action={formAction} className="space-y-4 sm:space-y-3">
            {/* Name */}
            <Reveal animation="animate-fade-in-up delay-300">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-xs font-medium mb-1 text-gray-700"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg p-3 sm:p-2 bg-gray-50 border border-gray-300 
                             focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-xs"
                />
              </div>
            </Reveal>

            {/* Email */}
            <Reveal animation="animate-fade-in-up delay-400">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-xs font-medium mb-1 text-gray-700"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg p-3 sm:p-2 bg-gray-50 border border-gray-300 
                             focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-xs"
                />
              </div>
            </Reveal>

            {/* Message */}
            <Reveal animation="animate-fade-in-up delay-500">
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-xs font-medium mb-1 text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg p-3 sm:p-2 bg-gray-50 border border-gray-300 
                             focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-xs"
                />
              </div>
            </Reveal>

            {/* Submit Button */}
            <Reveal animation="animate-fade-in-up delay-600">
              <SubmitButton />
            </Reveal>
          </form>

          {/* Success / Error messages */}
          {state.success && (
            <Reveal animation="animate-fade-in-up delay-700">
              <p className="mt-4 text-green-600 font-semibold text-center text-sm sm:text-xs">
                ✅ Thank you! Your message has been sent.
              </p>
            </Reveal>
          )}
          {state.error && (
            <Reveal animation="animate-fade-in-up delay-700">
              <p className="mt-4 text-red-600 font-semibold text-center text-sm sm:text-xs">
                ❌ {state.error}
              </p>
            </Reveal>
          )}
        </div>
      </Reveal>
    </section>
  );
}

// Submit button
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-700 
                 transition font-semibold text-white disabled:opacity-50 text-sm sm:text-xs"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}
