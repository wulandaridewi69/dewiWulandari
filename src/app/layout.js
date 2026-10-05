import { Geist, Geist_Mono } from 'next/font/google';
import { siteMeta } from '@/data/site';
import { profile } from '@/data/profile';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: `%s — ${siteMeta.shortName}`,
  },
  description: siteMeta.description,
  keywords: [...siteMeta.keywords],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMeta.url,
    siteName: siteMeta.name,
    title: siteMeta.title,
    description: siteMeta.description,
    images: [{ url: profile.avatar, width: 512, height: 512, alt: profile.fullName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.title,
    description: siteMeta.description,
    images: [profile.avatar],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only rounded-full focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}