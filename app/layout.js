import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

export const metadata = {
  title: "GreatBro-IT",
  description: "GreatBro-IT a skill development platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body className={inter.className}>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
