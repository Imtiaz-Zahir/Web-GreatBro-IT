import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/Logo.jpeg";

export default function Nav() {
  return (
    <section className="fixed  top-0 w-full bg-sky-100">
      <section className="">
        <nav className="flex h-[100px] max-w-[1320px] items-center justify-evenly m-auto">
          <Link href="/">
            <Image
              className="rounded-md"
              height={50}
              src={Logo}
              alt="Logo GreatBro IT"
            />
          </Link>
          <ul className="flex items-center">
            <Link href="/">
              <li className="rounded-md  px-7 py-4 hover:bg-sky-400  hover:text-white">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="rounded-md  px-7 py-4 hover:bg-sky-400  hover:text-white">
                About Us
              </li>
            </Link>
            <Link href="/courses" className="">
              <li className="flex  items-center rounded-md px-7 py-4 hover:bg-sky-400 hover:text-white ">
                <span>Courses</span>
                <svg
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="angle-down"
                >
                  <path
                    fill="000"
                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"
                  ></path>
                </svg>
              </li>
            </Link>
            <Link href="/blogs">
              <li className="rounded-md  px-7 py-4 hover:bg-sky-400  hover:text-white">
                Blogs
              </li>
            </Link>
            <Link href="/contact">
              <li className="rounded-md  px-7 py-4 hover:bg-sky-400  hover:text-white">
                Contact Us
              </li>
            </Link>
          </ul>
          <div className="rounded-md bg-sky-500 px-7 py-4 text-white   hover:bg-sky-400">
            <Link href="/login" className=" flex items-center gap-1 ">
              <svg
                width={24}
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="user-circle"
              >
                <path
                  fill="white"
                  d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"
                ></path>
              </svg>
              <span>login</span>
            </Link>
          </div>
        </nav>
      </section>
    </section>
  );
}
