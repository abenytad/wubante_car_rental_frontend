import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wubante Car Rental",
  description: "The best car rental platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ReduxProvider>
        <Header />
        {children}</ReduxProvider></body>
    </html>
  );
}
