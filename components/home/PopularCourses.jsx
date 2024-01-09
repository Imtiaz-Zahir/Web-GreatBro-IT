import React from "react";
import Link from "next/link";
import CourseCart from "../CourseCart";

export default function PopularCourses() {
  return (
    <section className="max-w-[1320px] mx-auto my-[75px]">
      <div className="flex justify-between mb-[30px]">
        <div>
          <p className="font-medium text-xl">Top Courses</p>
          <h1 className="font-semibold text-4xl">Most Popular Courses</h1>
        </div>
        <Link
          href="/courses"
          className="px-[30px] py-4 rounded-md buttonBG flex mb-auto items-center text-white"
        >
          All Course View
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="angle-right-b"
            className="ml-[10px] w-5 h-5"
          >
            <path
              fill="#FFF"
              d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
            ></path>
          </svg>
        </Link>
      </div>
      <ul className="flex items-center gap-x-[30px] list-disc list-inside mb-[75px]">
        <li>All</li>
        <li>Wordpress</li>
      </ul>
      <div className="grid grid-cols-3 gap-6">
        <CourseCart/>
        <CourseCart/>
        <CourseCart/>
      </div>
    </section>
  );
}
