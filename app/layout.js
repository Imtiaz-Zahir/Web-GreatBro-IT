import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "GreatBro-IT",
  description: "GreatBro-IT a skill development platform",
};

export default function RootLayout({ children }) {
  3;

  return (
    <html lang="en">
      <body className={`bg-black text-white ${poppins.className}`}>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
