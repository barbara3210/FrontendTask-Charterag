import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'],
  display: 'swap',
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
const openSans = Open_Sans({
  weight: ['400', '600'], 
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: "Welcome to Charterag",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} ${dmSans.className}`}>
      <body>{children}</body>
    </html>
  );
}
