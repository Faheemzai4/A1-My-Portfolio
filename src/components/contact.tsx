"use client";

import { useState } from "react";
import Reveal from "@/libs/reveal";
import { sendContactEmail } from "@/app/actions/contact";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // reset messages
    setSuccessMsg("");
    setErrorMsg("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await sendContactEmail(formData);
      if (res.success) {
        setSuccessMsg("✅ Thank you! Your message has been sent.");
        e.currentTarget.reset();
      } else {
        setErrorMsg(`❌ ${res.error}`);
      }
    } catch {
      setErrorMsg("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative py-12 flex items-center justify-center bg-gradient-to-t from-[#e5e7eb] to-[#9ca3af]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-900 to-yellow-900" />

      <Reveal animation="animate-fade-in-up">
        {/* Updated max width to make contact card bigger */}
        <div className="w-full sm:w-2xl md:min-w-3xl bg-white rounded-2xl shadow-xl p-12 sm:p-8">
          <Reveal animation="animate-fade-in-up delay-100">
            <h1 className="text-4xl sm:text-3xl font-bold text-center mb-6 text-gray-900">
              Contact Me
            </h1>
          </Reveal>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-4">
            {/* Name */}
            <Reveal animation="animate-fade-in-up delay-200">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-xs font-medium mb-1 text-gray-700">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg p-4 sm:p-3 bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-xs"
                />
              </div>
            </Reveal>

            {/* Email */}
            <Reveal animation="animate-fade-in-up delay-300">
              <div>
                <label htmlFor="email" className="block text-sm sm:text-xs font-medium mb-1 text-gray-700">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg p-4 sm:p-3 bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-xs"
                />
              </div>
            </Reveal>

            {/* Message */}
            <Reveal animation="animate-fade-in-up delay-400">
              <div>
                <label htmlFor="message" className="block text-sm sm:text-xs font-medium mb-1 text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg p-4 sm:p-3 bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-xs"
                />
              </div>
            </Reveal>

            {/* Submit Button */}
            <Reveal animation="animate-fade-in-up delay-500">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 sm:py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold text-white disabled:opacity-50 text-sm sm:text-xs"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </Reveal>
          </form>

          {/* Success / Error messages */}
          {successMsg ? (
            <Reveal animation="animate-fade-in-up delay-600">
              <p className="mt-4 text-green-600 font-semibold text-center text-sm sm:text-xs">{successMsg}</p>
            </Reveal>
          ) : errorMsg ? (
            <Reveal animation="animate-fade-in-up delay-600">
              <p className="mt-4 text-red-600 font-semibold text-center text-sm sm:text-xs">{errorMsg}</p>
            </Reveal>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
