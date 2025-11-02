import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';
import { Navbar } from '@/src/components/Navbar';

export const metadata: Metadata = {
  title: 'RentEase',
  description: 'Minimalist property and room management',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-beige text-charcoal dark:bg-navy dark:text-beige">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="mx-auto max-w-6xl p-4">{children}</main>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js').catch(() => {}); }); }`,
          }}
        />
      </body>
    </html>
  );
}
