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
  title: 'SreeCharan Desu • Web2 & DevOps Engineer',
  description:
    'Official site of SreeCharan Desu – A Pre-final year student proficient Web2 & DevOps Engineer. Explore projects, blogs, and more.',
  keywords: [
    'SreeCharan',
    'SreeCharan Desu',
    'Sr3x0r',
    'Desu',
    'Web2 Developer',
    'DevOps Engineer',
    'Tech Portfolio',
    'Web Development',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'SreeCharan Desu – Web2 & DevOps Engineer',
    description:
      'Official site of SreeCharan Desu – A Pre-final year student proficient Web2 & DevOps Engineer. Explore projects, blogs, and more.',
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
    title: 'SreeCharan Desu',
    description:
      'Official site of SreeCharan Desu – A pre-final year student proficient Web2 & DevOps Engineer. Explore projects, blogs, and more.',
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
        {/* Favicons for all platforms */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="koNSYWvj-OocClKflR2QfftPUCohXsaExIJ9ZVH0KBQ"
        />

        {/* Preload image (optional) */}
        <link rel="preload" as="image" href="/link-preview.png" />

        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph?.title} />
        <meta property="og:description" content={metadata.openGraph?.description} />
        <meta property="og:url" content={metadata.openGraph?.url} />
        <meta property="og:image" content={metadata.openGraph?.images?.[0]?.url} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />
        <meta property="og:type" content={metadata.openGraph?.type} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter?.title} />
        <meta name="twitter:description" content={metadata.twitter?.description} />
        <meta name="twitter:image" content={metadata.twitter?.images?.[0]} />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'SreeCharan Desu',
              url: 'https://sreecharandesu.in',
              image: 'https://sreecharandesu.in/link-preview.png',
              sameAs: [
                'https://github.com/sreecharan-desu',
                'https://linkedin.com/in/sreecharan-desu',
              ],
              jobTitle: 'Web2 & DevOps Engineer',
              worksFor: {
                '@type': 'CollegeOrUniversity',
                name: 'IIIT Andhra Pradesh',
              },
              description:
                'CS Junior turned Web2 & DevOps Engineer. Passionate about building scalable tools and impactful tech.',
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${jura.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
