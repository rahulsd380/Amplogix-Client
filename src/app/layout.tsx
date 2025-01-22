import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import Footer from "@/Components/Shared/Footer/Footer";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Amplogix",
  description: "Empowering Your Success through Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-neutral-10`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <ScrollToTop/>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
