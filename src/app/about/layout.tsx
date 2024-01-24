import React from "react";
import Link from "next/link";
export const metadata = {
  title: "About - GreatBro-IT",
  description: "About Page, GreatBro-IT a skill development platform",
};

export default function AboutLayout({ children }:{children:React.ReactNode}) {
  return (
    <div>
      <nav className="mt-6 mb-6">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
