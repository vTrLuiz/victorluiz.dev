import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { EasterEggs } from "@/components/easter-eggs";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://victorluiz.dev"),
  title: {
    default: "Victor Luiz | Desenvolvedor Front-End",
    template: "%s | Victor Luiz",
  },
  description:
    "Desenvolvedor Front-End com 4+ anos de experiência criando aplicações web escaláveis e de alta performance com React, TypeScript e Next.js.",
  keywords: [
    "Desenvolvedor Front-End",
    "Front-End Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    ".NET",
    "Full Stack",
    "Portfolio",
    "Victor Luiz",
    "Victor Luiz Soares",
    "Web Developer",
    "GCP",
    "Google Cloud",
    "C#",
    "Node.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "Victor Luiz Soares" }],
  creator: "Victor Luiz Soares",
  publisher: "Victor Luiz Soares",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://victorluiz.dev",
    siteName: "Victor Luiz Portfolio",
    title: "Victor Luiz | Desenvolvedor Front-End",
    description:
      "Desenvolvedor Front-End com 4+ anos de experiência. React, TypeScript, Next.js, .NET, GCP.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Victor Luiz - Desenvolvedor Front-End",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Luiz | Desenvolvedor Front-End",
    description:
      "Desenvolvedor Front-End com 4+ anos de experiência. React, TypeScript, Next.js.",
    images: ["/og-image.png"],
    creator: "@vtrluiz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <EasterEggs />
        </ThemeProvider>
      </body>
    </html>
  );
}
