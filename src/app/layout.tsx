import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Providers from "./providers";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "GreatBro-IT",
  description: "GreatBro-IT a skill development platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${poppins.className}`}>
        <Providers>
          <Nav></Nav>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
