import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WhyExceptional() {
  return (
    <section className="dark:bg-gbDark  lg:py-20">
      <section className="bg-gbSkyV2 dark:bg-gbDark  dark:border-gbSky first-letter mx-auto my-[75px] grid justify-items-center gap-8 rounded-lg  p-10  shadow-lg hover:shadow-2xl sm:grid-cols-1 lg:max-w-[1320px] lg:grid-cols-2 lg:gap-16 dark:border">
        <Image
          className="rounded-lg"
          src="/images/exceptional.png"
          height={500}
          width={560}
          alt="GreatBro-IT Image Exceptional"
        />
        <div className="">
          <h1 className="text-5xl font-semibold">Why We’re Exceptional</h1>
          <p className="my-7">
            GreatBro-IT offers various courses and upon successful completion,
            we offer job opportunities within our company. Additionally, we
            provide scholarships in different categories to support aspiring
            individuals. We guarantee a refund if anyone is dissatisfied with
            the course. Our training program includes hands-on experience with
            real client projects, ensuring a comprehensive learning experience.
          </p>
          <div></div>
          <ul className="my-12 grid list-inside list-image-[url(../../public/check.svg)] grid-cols-2 items-center justify-between gap-y-5 text-lg font-medium">
            <li>Free Seminar</li>
            <li>Provide Best Support</li>
            <li>Expert Many Teacher</li>
            <li>Lifetime access</li>
          </ul>
          <Link
            href="/courses"
            className="border-gbSky hover:bg-gbSky hover:text-gbWhite inline-flex items-center rounded-md border  px-8 py-4"
          >
            More About
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="angle-right-b"
              className="ml-[10px] h-5 w-5"
            >
              <path
                fill="#2492EB"
                d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
              ></path>
            </svg>
          </Link>
        </div>
      </section>
    </section>
  );
}
