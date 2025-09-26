// app/actions/contact.ts
"use server";

import nodemailer from "nodemailer";

// Simple in-memory store (for demo only; use Redis/DB in production)
const emailLimitStore: Record<string, { count: number; lastSent: number }> = {};

export async function sendContactEmail(
  prevState: { success: boolean; error: string },
  formData: FormData
) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { success: false, error: "All fields are required." };
    }

    // Rate limit check
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!emailLimitStore[email]) {
      emailLimitStore[email] = { count: 0, lastSent: 0 };
    }

    const userData = emailLimitStore[email];

    if (now - userData.lastSent > oneDay) {
      // Reset count if 1 day passed
      userData.count = 0;
    }

    if (userData.count >= 2) {
      return {
        success: false,
        // You can only send 2 messages per day. Try again tomorrow.
        error: "You can only send 2 messages",
      };
    }

    // Update state
    userData.count++;
    userData.lastSent = now;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `📩 New Contact Form Message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    console.log("✅ Email sent to:", process.env.RECEIVER_EMAIL);

    return { success: true, error: "" };
  } catch (err) {
    console.error("❌ Email error:", err instanceof Error ? err.message : err);
    return { success: false, error: "Failed to send message." };
  }
}
