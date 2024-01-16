import React from "react";
import Link from "next/link";
import CourseCart from "./CourseCart";

export default function PopularCourses() {
  return (
    <section className="mx-auto bg-black px-5 py-20 lg:max-w-[1320px]">
      <div className="mb-[30px] flex justify-between">
        <div>
          <p className="text-xl font-medium text-sky-500">Top Courses</p>
          <h1 className="text-4xl font-semibold text-white">
            Most Popular Courses
          </h1>
        </div>
        <Link
          href="/courses"
          className="mb-auto flex items-center rounded-md bg-sky-500 px-[30px] py-4 text-white  hover:bg-sky-400"
        >
          All Course View
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="angle-right-b"
            className="ml-[10px] h-5 w-5"
          >
            <path
              fill="#FFF"
              d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
            ></path>
          </svg>
        </Link>
      </div>
      <ul className="mb-[75px] flex list-inside list-none flex-wrap items-center gap-8 ">
        <Link
          href="/"
          className="rounded-md border border-sky-500 px-3 py-1 text-sky-500 hover:bg-sky-500 hover:text-white"
        >
          All
        </Link>
        <Link
          href="/"
          className="rounded-md border border-sky-500 px-3 py-1 text-sky-500 hover:bg-sky-500 hover:text-white"
        >
          Digital Marketing
        </Link>
        <Link
          href="/"
          className="rounded-md border border-sky-500 px-3 py-1 text-sky-500 hover:bg-sky-500 hover:text-white"
        >
          Graphics
        </Link>
        <Link
          href="/"
          className="rounded-md border border-sky-500 px-3 py-1 text-sky-500 hover:bg-sky-500 hover:text-white"
        >
          UI/UX Design
        </Link>
        <Link
          href="/"
          className="rounded-md border border-sky-500 px-3 py-1 text-sky-500 hover:bg-sky-500 hover:text-white"
        >
          Python Programming
        </Link>
        <Link
          href="/"
          className="rounded-md border border-sky-500 px-3 py-1 text-sky-500 hover:bg-sky-500 hover:text-white"
        >
          Front-End Web Development
        </Link>
      </ul>
      <div className="ap-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CourseCart />
        <CourseCart />
        <CourseCart />
      </div>
    </section>
  );
}
