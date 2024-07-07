import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kimgosung",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-blue-500 to-purple-500`}
      >
        <main className="flex justify-center items-center min-h-screen px-2 sm:px-4 md:px-10 lg:px-16 pb-16 sm:pb-32 md:pb-48">
          {children}
        </main>
      </body>
    </html>
  );
}
