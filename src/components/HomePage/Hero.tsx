import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 md:pt-24 flex min-h-[700px] w-full  items-center justify-center bg-black px-8 ">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="max-w-md space-y-4 sm:space-y-5 md:space-y-6">
          <h1 className="text-3xl  font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            GreatBro-IT
          </h1>
          <p className="text-sm text-white sm:text-base lg:text-lg">
            Welcome to GreatBro-IT , an innovative learning platform! Get ready
            to engage on a journey of knowledge with our innovative learning
            platform. Explore a wide range of courses, interactive lessons, and
            expert instructors, all designed to help you reach your full
            potential.
          </p>
          <div className="flex space-x-4">
            <Link href="/login">
              <button className="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 flex-nowrap items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Get Started
              </button>
            </Link>
            <Link href="/about">
              <button className="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Learn More
              </button>
            </Link>
          </div>
          <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
        </div>
        <div className="relative">
          <Image
            height={600}
            width={500}
            src="/images/hero.jpeg"
            alt="hero section image"
            className="relative z-0		  h-[600px]  w-[500px] rounded-b-full bg-gray-400  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
