import React from "react";
import Link from "next/link";
import Image from "next/image";
import Exceptional from "@/public/images/exceptional.png"

export default function WhyExceptional() {
  return (
    <section className="max-w-[1320px] mx-auto my-[75px] grid grid-cols-2 gap-16">
      <Image className="rounded-lg" src={Exceptional}  alt="GreatBro-IT Image Exceptional"/>
      <div>
        <h1 className="text-5xl font-semibold">Why We’re Exceptional</h1>
        <p className="my-7">
          Learn with bdCalling offers various courses and upon successful
          completion, we offer job opportunities within our company.
          Additionally, we provide scholarships in different categories to
          support aspiring individuals. We guarantee a refund if anyone is
          dissatisfied with the course. Our training program includes hands-on
          experience with real client projects, ensuring a comprehensive
          learning experience.
        </p>
        <div></div>
        <ul className="my-12 grid grid-cols-2 justify-between items-center gap-y-5 text-lg font-medium list-inside list-image-[url(../public/check.svg)]">
            <li>Free Seminar</li>
            <li>Provide Best Support</li>
            <li>Expert Many Teacher</li>
            <li>Lifetime access</li>
        </ul>
        <Link
          href="/courses"
          className="px-[30px] py-4 rounded-md border border-[#2492EB] text-[#2492EB] inline-flex items-center"
        >
          More About
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="angle-right-b"
            className="ml-[10px] w-5 h-5"
          >
            <path
              fill="#2492EB"
              d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
