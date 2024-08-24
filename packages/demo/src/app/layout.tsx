import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutProvider } from "./layoutProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CCC Demo",
  description: "A demo for the CCC library",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex min-h-full flex-col">
      <head>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
        />
      </head>
      <body className={`flex grow flex-col ${inter.className}`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}