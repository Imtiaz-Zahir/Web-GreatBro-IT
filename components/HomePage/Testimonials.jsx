import React from "react";
import Image from "next/image";
import img1 from "@/public/images/himel.jpeg";

export default function Testimonials() {
  return (
    <section className="flex flex-col text-white bg-black items-center">
      <section>
        <h4 className="ml-24 text-2xl">Our Testimonials</h4>
        <h2 className="text-4xl">What our Student say</h2>
      </section>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            <div className="w-full p-4 md:w-1/2">
              <div className="h-full rounded bg-sky-100 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  className="mb-4 block h-5 w-5 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  “The Mobile App Development course at bdcalling IT LTD was a
                  valuable and engaging experience. The instructors were
                  knowledgeable and supportive, and the hands-on projects helped
                  solidify our understanding. While the content was
                  comprehensive, some organization improvements and more
                  frequent assessments could enhance the
                </p>
                <a className="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src={img1}
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                  />
                  <span className="flex flex-grow flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Mehedi Hasan Himel
                    </span>
                    <span className="text-sm text-gray-500">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/2">
              <div className="h-full rounded bg-sky-100 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  className="mb-4 block h-5 w-5 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  “The Mobile App Development course at bdcalling IT LTD was a
                  valuable and engaging experience. The instructors were
                  knowledgeable and supportive, and the hands-on projects helped
                  solidify our understanding. While the content was
                  comprehensive, some organization improvements and more
                  frequent assessments could enhance the
                </p>
                <a className="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src={img1}
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                  />
                  <span className="flex flex-grow flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Mehedi Hasan Himel
                    </span>
                    <span className="text-sm text-gray-500">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex ">
        <div className="w-[50px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="arrow-circle-left"
          >
            <path
              fill="#3da5e9"
              d="M8.29,11.29a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42-1.42L11.41,13H15a1,1,0,0,0,0-2H11.41l1.3-1.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0ZM2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm18,0a8,8,0,1,1-8-8A8,8,0,0,1,20,12Z"
            ></path>
          </svg>
        </div>
        <div className="w-[50px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="arrow-circle-right"
          >
            <path
              fill="#3da5e9"
              d="M15.71,12.71a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-3-3a1,1,0,0,0-1.42,1.42L12.59,11H9a1,1,0,0,0,0,2h3.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0ZM22,12A10,10,0,1,0,12,22,10,10,0,0,0,22,12ZM4,12a8,8,0,1,1,8,8A8,8,0,0,1,4,12Z"
            ></path>
          </svg>
        </div>
      </section>
    </section>
  );
}
