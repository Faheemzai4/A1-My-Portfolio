// src/app/actions/contact.ts
"use server";

import nodemailer from "nodemailer";

const emailLimitStore: Record<string, { count: number; lastSent: number }> = {};

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { success: false, error: "All fields are required." };
    }

    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!emailLimitStore[email]) emailLimitStore[email] = { count: 0, lastSent: 0 };
    const userData = emailLimitStore[email];

    if (now - userData.lastSent > oneDay) userData.count = 0;
    if (userData.count >= 2) return { success: false, error: "You can only send 2 messages per day." };

    userData.count++;
    userData.lastSent = now;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `📩 New Contact Form Message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return { success: true, error: "" };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Email error:", message);
    return { success: false, error: "Failed to send message." };
  }
}
