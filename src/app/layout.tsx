import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SEO, BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: {
    default: SEO.defaultTitle,
    template: `%s | ${SEO.siteName}`,
  },
  description: SEO.defaultDescription,
  keywords: [...SEO.keywords],
  authors: [{ name: BUSINESS.owner }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SEO.url,
    siteName: SEO.siteName,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [
      {
        url: `${SEO.url}/images/logo-modern.jpg`,
        width: 1200,
        height: 630,
        alt: SEO.defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [`${SEO.url}/images/logo-modern.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: BUSINESS.name,
              description: BUSINESS.description,
              url: SEO.url,
              telephone: BUSINESS.phone.primary,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.location.address,
                addressLocality: BUSINESS.location.city,
                addressRegion: BUSINESS.location.province,
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: BUSINESS.location.coordinates.lat,
                longitude: BUSINESS.location.coordinates.lng,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [BUSINESS.social.facebook],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: BUSINESS.stats.satisfiedClients.replace(/[^0-9]/g, ""),
                bestRating: "5",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
