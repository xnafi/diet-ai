import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata = {
  title: "Diet AI",
  description: "Track your nutrition smarter and simpler with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} font-inter-tight`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
