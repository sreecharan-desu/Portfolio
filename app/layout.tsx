import { Geist, Geist_Mono, Jura } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const jura = Jura({
  variable: '--font-jura',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata: any = {
  title: 'SreeCharan Desu • FullStack & DevOps Engineer',
  description:
    'Official site of SreeCharan Desu – CS Junior turned FullStack & DevOps Engineer. Explore projects, blogs, and more.',
  keywords: [
    'SreeCharan',
    'SreeCharan Desu',
    'Sr3x0r',
    'Desu',
    'FullStack Developer',
    'DevOps Engineer',
    'Tech Portfolio',
    'Web Development',
  ],
  icons: {
    icon: '/sr3x0r-icon.jpeg',
  },
  openGraph: {
    title: 'SreeCharan Desu – FullStack & DevOps Engineer',
    description:
      'Official site of SreeCharan Desu – CS Junior turned FullStack & DevOps Engineer. Explore projects, blogs, and more.',
    url: 'https://sreecharandesu.in/',
    siteName: 'SreeCharan Desu',
    images: [
      {
        url: 'https://sreecharandesu.in/link-preview.png',
        width: 1200,
        height: 630,
        alt: 'SreeCharan Desu',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SreeCharan Desu – FullStack & DevOps Engineer',
    description:
      'Official site of SreeCharan Desu – CS Junior turned FullStack & DevOps Engineer. Explore projects, blogs, and more.',
    images: ['https://sreecharandesu.in/link-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="koNSYWvj-OocClKflR2QfftPUCohXsaExIJ9ZVH0KBQ"
        />
        <link rel="preload" as="image" href="/sr3x0r-icon.jpeg" />
        {/* Explicit title & description in case Next.js doesn’t inject automatically */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Reinforce primary keywords */}
        <meta name="keywords" content={metadata.keywords.join(', ')} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.openGraph?.title} />
        <meta property="og:description" content={metadata.openGraph?.description} />
        <meta property="og:url" content={metadata.openGraph?.url} />
        <meta property="og:image" content={metadata.openGraph?.images?.[0]?.url} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />
        <meta property="og:type" content={metadata.openGraph?.type} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter?.title} />
        <meta name="twitter:description" content={metadata.twitter?.description} />
        <meta name="twitter:image" content={metadata.twitter?.images?.[0]} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${jura.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
