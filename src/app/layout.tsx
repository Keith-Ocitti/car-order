import { Sidebar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Car Rentals",
  description: "This is a car rental application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col md:flex-row min-h-screen ">
          <Sidebar />

          <main className="flex-grow ">{children}</main>
        </div>
      </body>
    </html>
  );
}
