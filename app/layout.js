import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({weight:["100","200","300","400","500","600","700","800","900"],subsets:["latin"]})

export const metadata = {
  title: "GreatBro-IT",
  description: "GreatBro-IT a skill development platform",
};

export default function RootLayout({ children }) {3
  
  return (
    <html lang="en" className="p-6">
      <body className={poppins.className}>
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
