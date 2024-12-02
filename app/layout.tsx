import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

import "./globals.css";
import Footer from "../components/Footer";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris Sarmiento-Salas",
  description: "Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${roboto.className} scroll-smooth antialiased`}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
