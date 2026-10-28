import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cadi67.com"),
  icons: {
    icon: "/favicon.svg",
  },
  title: "CADI67 — Professional Property Services · Nationwide",
  description:
    "CADI67 delivers expert renovation, remodeling, construction, painting, flooring, and property maintenance across 12 states including New York, California, Florida, and more.",
  keywords: [
    "property services",
    "renovation",
    "remodeling",
    "construction",
    "painting",
    "flooring",
    "property maintenance",
    "nationwide contractor",
    "Corona NY",
    "NYC contractor",
  ],
  openGraph: {
    title: "CADI67 - Professional Property Services",
    description:
      "Expert renovation, construction, painting, and maintenance. Serving 12 states nationwide.",
    url: "https://cadi67.com",
    siteName: "CADI67",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CADI67 - Professional Property Services",
    description:
      "Expert renovation, construction, painting, and maintenance. Serving 12 states nationwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <main className="overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
