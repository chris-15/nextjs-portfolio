import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris Sarmiento-Salas",
  description: "Portfolio for Chris Sarmiento-Salas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <NavBar />
        <main className="my-8 flex-1">{children}</main>
       <Footer />
      </body>
    </html>
  );
}
