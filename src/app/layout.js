import { Inter_Tight } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
