import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GreatBro-IT",
  description: "GreatBro-IT a skill development platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body className={inter.className}>
       <Nav></Nav>
        <hr />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
