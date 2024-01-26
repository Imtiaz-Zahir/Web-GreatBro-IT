import React from "react";
import Link from "next/link";
import CourseCart from "./CourseCart";

export default function PopularCourses() {
  let Courses = [
    { name: "All", link: "/courses" },
    { name: "Digital Marketing", link: "/courses/Digital-Marketing" },
    { name: "Graphics", link: "/courses/Graphics" },
    { name: "UI/UX Design", link: "/courses/UI-UX-Design" },
    { name: "Python Programming", link: "/courses/Python Programming" },
    {
      name: "Front-End Web Development",
      link: "courses/Front-End-Web-Development",
    },
  ];
  return (
    <section className="dark:bg-gbDark">
      <section className="dark:bg-gbDark mx-auto px-5 py-20 lg:max-w-[1320px]">
        <div className="mb-[30px] flex justify-between">
          <div>
            <p className="text-gbSky text-xl font-medium">Top Courses</p>
            <h1 className="text-4xl font-semibold ">Most Popular Courses</h1>
          </div>
          <Link
            href="/courses"
            className="hover:bg-gbBlue text-gbWhite bg-gbSky mb-auto flex items-center rounded-md px-[30px] py-4"
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
          {Courses.map((course, index) => (
            <Link
              href={course.link}
              key={index}
              className="border-gbSky text-gbSky hover:bg-gbSky hover:text-gbWhite rounded-md border px-3 py-1 hover:border-transparent"
            >
              {course.name}
            </Link>
          ))}
        </ul>
        <div className="ap-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CourseCart />
          <CourseCart />
          <CourseCart />
        </div>
      </section>
    </section>
  );
}
