import { Assistant } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";

const assistant = Assistant({ subsets: ["hebrew", "latin", "latin-ext"], display: 'auto' });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={assistant.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
