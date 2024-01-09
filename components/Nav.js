import React from "react";
import Link from "next/link";
import Image from "next/image"


export default function Nav() {
  return (
    <nav className="max-w-[1920px]">
      <ul className="flex gap-6">
           <li>
              {/* <Image></Image> */}
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
}
