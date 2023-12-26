import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "SuperHero",
  description: "Organisation of SuperHeroes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <p>bonjour</p>
      </body>
    </html>
  )
}