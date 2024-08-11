import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundMapLayout } from "../components/background-map-layout/background-map-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cogent | Restaurant picker",
  description:
    "An app to help you pick a restaurant for today's lunch - interview assignment demo app",
  icons: [
    {
      url: "https://www.cogent.co.jp/wp-content/themes/cogentlabs/static/img/favicon/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
    {
      url: "https://www.cogent.co.jp/wp-content/themes/cogentlabs/static/img/favicon/16x16.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "https://www.cogent.co.jp/wp-content/themes/cogentlabs/static/img/favicon/32x32.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundMapLayout>{children}</BackgroundMapLayout>
      </body>
    </html>
  );
}
