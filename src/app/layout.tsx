import type { Metadata } from "next";
import { Cormorant_Garamond, Urbanist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deltahealthandwellness.com"),
  title: "Delta Health & Wellness | Sacramento Cannabis Dispensary",
  description:
    "Premium recreational cannabis in Sacramento. Expert budtenders, the best deals, and over 850 products with tax-inclusive pricing. Located between Land Park and downtown.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Delta Health & Wellness | Sacramento Cannabis Dispensary",
    description:
      "Premium recreational cannabis in Sacramento. Expert budtenders, the best deals, and 850+ products.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Health & Wellness | Sacramento Cannabis Dispensary",
    description:
      "Premium recreational cannabis in Sacramento. Expert budtenders, the best deals, and 850+ products.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dispensary",
    name: "Delta Health & Wellness",
    description:
      "Premium recreational cannabis dispensary in Sacramento with 850+ products, tax-inclusive pricing, and expert budtenders.",
    url: "https://deltahealthandwellness.com",
    telephone: "+1-916-885-0888",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2416 17th St",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      postalCode: "95818",
      addressCountry: "US",
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
      opens: "09:00",
      closes: "21:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2200",
    },
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${urbanist.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
