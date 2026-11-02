import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quba Growth Lab | Your Embedded Growth Department",
  description:
    "Fractional growth agency: paid acquisition, high-converting funnels, AI video creative and social growth. Built for businesses that want real revenue, not vanity metrics.",
  openGraph: {
    title: "Quba Growth Lab | Your Embedded Growth Department",
    description:
      "Paid acquisition, funnels, AI video creative and social growth with bi-weekly revenue reporting.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
