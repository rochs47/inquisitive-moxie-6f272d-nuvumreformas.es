import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/language-context'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'NOVUM | Gestión & Obras - Reformas Integrales con Garantía Técnica',
  description: 'NOVUM: Gestión personalizada y ejecución técnica. Coordinamos cada detalle de tu reforma integral en Cataluña para que tú no tengas que preocuparte de nada.',
  keywords: ['reformas integrales', 'obras', 'construcción', 'arquitectura', 'ingeniería', 'Cataluña', 'NOVUM', 'Elecfont'],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ca" className="bg-background">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
