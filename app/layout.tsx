import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "CADI67 — Professional Property Services · Corona, NY",
  description:
    "CADI67 delivers expert renovation, remodeling, construction, painting, flooring, and property maintenance across Corona, Queens, and the greater NYC area.",
  keywords: [
    "property services",
    "renovation",
    "remodeling",
    "construction",
    "painting",
    "flooring",
    "property maintenance",
    "Corona NY",
    "Queens NY",
    "NYC contractor",
  ],
  openGraph: {
    title: "CADI67 — Professional Property Services",
    description:
      "Expert renovation, construction, painting, and maintenance. Serving Corona, NY and surrounding areas.",
    url: "https://cadi67.com",
    siteName: "CADI67",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
