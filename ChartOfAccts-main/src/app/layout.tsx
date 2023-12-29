// RootLayout.js
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Client } from "@clerk/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chart of Accountants",
  description: "A network of Accountants connecting other Accountants to jobs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className="bg-gradient-to-b from-teal-500 to-blue-500"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
