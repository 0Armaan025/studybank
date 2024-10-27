import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const helvetica = localFont({
  src: "./fonts/Helvetica CE Medium.otf",
  variable: "--font-helvetica",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "StudyBank",
  description: "Your own study bank - Armaan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${helvetica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
