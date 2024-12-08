import type { Metadata } from "next";
import { Inter , Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
weight:['400', '500' , '700'] });

export const metadata: Metadata = {
  title: "shopping experts",
  description: "shopping experts",
};

const poppins = Poppins({
  subsets : ['latin'],
  weight: ['400' , '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}</body>
    </html>
  );
}

