import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Berlin Snoww Budd flakey Smokey | Premium Delivery Bot",
  description: "The #1 Telegram bot in Berlin for top-shelf buds, flakey premium, and smokey imports. Fast, discreet express delivery. Order 24/7 via our secure chat application.",
  keywords: "Berlin, weed, weedy, delivery bot, telegram bot, snoww, flakey, smokey, premium, top-shelf",
  openGraph: {
    title: "Berlin Snoww Budd flakey Smokey",
    description: "Premium Quality, Fast & Discreet Delivery in Berlin. Order via Telegram.",
    url: "https://berlin-snoww-delivery.com",
    siteName: "Berlin Snoww Budd",
    images: [
      {
        url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Premium Buds Delivery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Berlin Snoww Budd flakey Smokey",
              "url": "https://t.me/Berlin_weedy",
              "applicationCategory": "ChatApplication",
              "operatingSystem": "Telegram",
              "description": "An automated Telegram delivery bot providing discreet, secure access to premium buds, flakey and smokey selections in Berlin.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
