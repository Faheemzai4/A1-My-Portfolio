// app/actions/contact.ts
"use server";

import nodemailer from "nodemailer";

// Simple in-memory store (for demo only; use Redis/DB in production)
const emailLimitStore: Record<string, { count: number; lastSent: number }> = {};

export async function sendContactEmail(formData: FormData) {
  try {
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message) {
      return { success: false, error: "All fields are required." };
    }

    // Rate limit check (2 messages per day)
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!emailLimitStore[email]) emailLimitStore[email] = { count: 0, lastSent: 0 };

    const userData = emailLimitStore[email];

    if (now - userData.lastSent > oneDay) userData.count = 0;

    if (userData.count >= 2) {
      return { success: false, error: "You can only send 2 messages per day." };
    }

    userData.count++;
    userData.lastSent = now;

    // Debug log
    console.log("📨 Sending email with:", {
      host: process.env.SMTP_HOST,
      user: process.env.SMTP_USER,
      passSet: !!process.env.SMTP_PASS,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `📩 New Contact Form Message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    console.log("✅ Email sent:", info);

    return { success: true, error: "" };
  } catch (err) {
    console.error("❌ Email error:", err instanceof Error ? err.message : err);
    return { success: false, error: err instanceof Error ? err.message : "Failed to send message." };
  }
}
