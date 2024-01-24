"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Nav() {
  let [open, setOpen] = useState(false);
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact Us", link: "/contact" },
  ];
  return (
    <section className="fixed top-0 z-50 w-full   bg-black  lg:w-full">
      <section className="m-auto w-full lg:max-w-[1320px]">
        <div className="px-7 py-4  md:flex md:items-center md:justify-between md:px-10">
          <div
            className="flex cursor-pointer items-center font-[Poppins] text-2xl font-bold
      text-gray-800"
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                className="rounded-md"
                height={50}
                width={50}
                src="/images/Logo.jpeg"
                alt="Logo GreatBro IT"
              />
              <span className="text-white"> GreatBro-IT</span>
            </Link>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 w-14 cursor-pointer  md:hidden"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="times"
              >
                <path
                  fill="#fff"
                  d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="bars"
              >
                <path
                  fill="#fff"
                  d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
                ></path>
              </svg>
            )}
          </div>

          <ul
            className={`absolute left-0 z-[-1]  w-full  bg-black pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="my-7 md:my-0">
                <Link
                  href={link.link}
                  className="my-7 rounded-md px-7 md:px-3 md:py-1 py-4 text-xl md:text-sm  text-white hover:bg-sky-400 md:my-0  md:ml-8"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Button>Login</Button>
          </ul>
        </div>
      </section>
    </section>
  );
}
