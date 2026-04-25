import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bot-site-cyan.vercel.app"),
  title: "Berlin Snoww Budd flakey Smokey | #1 Premium Delivery Bot",
  description: "Get the best Snoww, Flakey, and Smokey selections in Berlin. #1 Telegram bot for top-shelf buds with fast, discreet, express delivery. Secure and private 24/7 service.",
  keywords: "Berlin weed delivery, telegram bot berlin, snoww buds, flakey premium, smokey imports, discreet delivery berlin, top shelf buds, berlin cannabis bot, fast delivery berlin",
  alternates: {
    canonical: "https://bot-site-cyan.vercel.app",
  },
  openGraph: {
    title: "Berlin Snoww Budd flakey Smokey | Premium Delivery Bot",
    description: "Premium Quality, Fast & Discreet Delivery in Berlin. Order 24/7 via Telegram.",
    url: "https://bot-site-cyan.vercel.app",
    siteName: "Berlin Snoww Budd",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists in public folder or use the Unsplash one
        width: 1200,
        height: 630,
        alt: "Berlin Snoww Budd - Premium Delivery",
      },
    ],
    locale: "en_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berlin Snoww Budd flakey Smokey",
    description: "Fast & Discreet Premium Delivery in Berlin via Telegram.",
    images: ["/og-image.jpg"],
  },
  category: "Business",
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
              "url": "https://bot-site-cyan.vercel.app",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Telegram",
              "description": "Premium automated Telegram delivery service for Snoww, Flakey and Smokey selections in Berlin. Express discreet delivery guaranteed.",
              "serviceArea": {
                "@type": "City",
                "name": "Berlin"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
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
