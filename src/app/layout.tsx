import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanva CRM",
  description: "Professional CRM",
  keywords: ["Z.ai", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "AI development", "React"],
  authors: [{ name: "Hanva CRM" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/loo.svg",
  },
  openGraph: {
    title: "Hanva CRM",
    description: "Professional CRM",
    url: "https://hanva.in",
    siteName: "hanva.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanva CRM",
    description: "Professional CRM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
