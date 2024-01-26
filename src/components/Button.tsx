"use client";
import React from "react";
import Link from "next/link";

const Button = (props: { children?: React.ReactNode }) => {
  return (
    <Link href="/login" className="my-7 md:my-0">
      <button className="text-gbWhite my-7 rounded-md  bg-sky-400 px-7 py-4  text-xl  md:my-0  md:ml-8 md:px-3 md:py-1  md:text-sm">
        {props?.children}
      </button>
    </Link>
  );
};

export default Button;
