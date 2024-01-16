import React from "react";
import CourseCart from "@/components/HomePage/CourseCart";

export default function Courses() {
  return (
    <section className="mx-auto max-w-[1320px] my-24">
      <div className="mx-auto mb-[60px] w-2/5 text-center">
        <h1 className="text-7xl font-semibold">Course</h1>
        <p className="text-lg">
          Unlock your IT potential with bdCAlling today and embark on a journey
          of learning and growth!
        </p>
      </div>
      <form className="relative mb-[75px] flex items-center">
        <input
          type="text"
          name="search"
          placeholder="Search Course..."
          className="w-full rounded-full border border-gray-300 px-[30px] py-[18px] focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-2 rounded-full bg-sky-600 p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g
                stroke="#FFF"
                strokeWidth="2"
                transform="translate(-1687 -1941)"
              >
                <g transform="translate(1688 1942)">
                  <circle cx="7.5" cy="7.5" r="7.5"></circle>
                  <path d="M18 18l-5.2-5.2"></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </form>
      <div className="flex gap-6">
        <div className="flex w-1/3 flex-col gap-[30px]">
          <div className="flex flex-col gap-[30px] p-[30px]">
            <h4 className="text-lg font-medium">Course</h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium">
                <input type="checkbox" name="all" className="h-5 w-5" />
                <label htmlFor="all">All Course</label>
              </div>
              <span>(90)</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium">
                <input type="checkbox" name="all" className="h-5 w-5" />
                <label htmlFor="all">All Course</label>
              </div>
              <span>(90)</span>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] p-[30px]">
            <h4 className="text-lg font-medium">Course Categories</h4>
            <div className="flex items-center gap-2 font-medium">
              <input type="checkbox" name="all" className="h-5 w-5" />
              <label htmlFor="all">All Course</label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <CourseCart />
          <CourseCart />
          <CourseCart />
          <button className="px-[30px] py-[16px] rounded-md col-span-2 bg-sky-500 mx-auto">See More</button>
        </div>
      </div>
    </section>
  );
}
