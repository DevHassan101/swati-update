import type { Metadata } from "next";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ActionButtons from "./components/ActionButtons";
import {Outfit} from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Swati-Kaur",
  description: "Developed by Swati-Kaur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
        <ActionButtons />
        <Footer />
      </body>
    </html>
  );
}
