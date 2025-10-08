import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Máté Horváth | Front-End Developer",
  description:
    "Front-end developer based in Pécs, Hungary. I build fast, accessible, and visually appealing websites using React, Next.js, and TypeScript for businesses and agencies.",
  keywords: [
    "Front-end developer",
    "React developer",
    "Next.js developer",
    "Freelance web developer",
    "Pécs web design",
    "TypeScript developer",
    "Web developer Hungary",
  ],
  authors: [{ name: "Máté Horváth", url: "https://horvathmate.dev/" }],
  metadataBase: new URL("https://horvathmate.dev/"),
  alternates: {
    canonical: "https://horvathmate.dev/",
  },
  openGraph: {
    title: "Máté Horváth | Front-End Developer",
    description:
      "Modern, accessible websites built with React, Next.js, and TypeScript. Available for freelance and contract work.",
    url: "https://horvathmate.dev/",
    siteName: "Máté Horváth Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview of Máté Horváth’s Front-End Developer portfolio website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Máté Horváth | Front-End Developer",
    description:
      "Building fast, accessible websites using React, Next.js, and TypeScript.",
    images: ["/preview.png"],
  },
  themeColor: "#040a11",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
