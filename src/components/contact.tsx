"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(false);
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    setLoading(false);
    if (result.success) {
      setSuccess(true);
      e.currentTarget.reset(); // clear form
    } else {
      setError(result.error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" required />
      <input name="email" type="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-green-600">✅ Message sent!</p>}
      {error && <p className="text-red-600">❌ {error}</p>}
    </form>
  );
}
