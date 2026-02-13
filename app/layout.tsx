import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Victor Luiz | Full-Stack Software Engineer',
  description:
    'Desenvolvedor Full-Stack com 4+ anos de experiencia. React, TypeScript, Next.js, .NET, GCP. Portfolio profissional.',
  keywords: [
    'Software Engineer',
    'React',
    'TypeScript',
    'Next.js',
    '.NET',
    'Full Stack',
    'Portfolio',
    'Victor Luiz',
    'Desenvolvedor',
    'GCP',
    'C#',
  ],
  openGraph: {
    title: 'Victor Luiz | Full-Stack Software Engineer',
    description:
      'Desenvolvedor Full-Stack com 4+ anos de experiencia. React, TypeScript, Next.js, .NET, GCP.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0c10',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
        </ThemeProvider>
      </body>
    </html>
  )
}
