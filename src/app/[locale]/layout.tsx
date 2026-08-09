import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://horvathmate.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Máté Horváth | Front-End Engineer",
    template: "%s | Máté Horváth",
  },

  description:
    "Front-end Engineer based in Pécs, Hungary, building fast, accessible, and visually polished web applications with React, Next.js, and TypeScript.",

  keywords: [
    "Front-end Engineer",
    "Frontend Engineer",
    "Front-end Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer Hungary",
    "Frontend Developer Hungary",
    "React Developer Hungary",
    "Web Developer Pécs",
  ],

  authors: [
    {
      name: "Máté Horváth",
      url: siteUrl,
    },
  ],

  creator: "Máté Horváth",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Máté Horváth Portfolio",
    title: "Máté Horváth | Front-End Engineer",
    description:
      "Front-end Engineer building fast, accessible, and visually polished web applications with React, Next.js, and TypeScript.",
    images: [
      {
        url: "/preview.webp",
        width: 1200,
        height: 630,
        alt: "Máté Horváth Front-End Engineer portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Máté Horváth | Front-End Engineer",
    description:
      "Front-end Engineer building fast, accessible web applications with React, Next.js, and TypeScript.",
    images: ["/preview.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#040a11",
  width: "device-width",
  initialScale: 1,
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>

        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}