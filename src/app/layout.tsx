import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/header";
import AppFooter from "@/components/footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (favicon + title)
export const metadata: Metadata = {
  title: "Faheem Zai",
  description: "Faheem Zai's Portfolio",
  icons: {
    icon: "/new.svg", // favicon in /public/logo/
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <AppHeader />

          <main className="flex-1 mx-auto w-full ">
            {children}
          </main>

          <AppFooter />
        </div>

        <Toaster
          position="bottom-right"
          toastOptions={{
            success: { style: { background: "green", color: "white" } },
            error: { style: { background: "red", color: "white" } },
          }}
        />
      </body>
    </html>
  );
}
