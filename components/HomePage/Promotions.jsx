import React from "react";
import Link from "next/link";

export default function Promotions() {
  return (
    <section className="m-auto bg-black md:p-10 lg:max-w-[1320px]">
      {/* Number Related Section Start */}
      <section className="my-40 grid gap-10 bg-sky-300 p-20 text-black sm:grid-cols-2  sm:gap-5 md:grid-cols-5 md:gap-10  md:rounded-full lg:gap-20  ">
        <div>
          <h1 className="sm:text-2xl	lg:text-5xl">2560+</h1>
          <p className="text-lg">Successful Students</p>
        </div>
        <div>
          <h1 className="sm:text-2xl	lg:text-5xl">800+</h1>
          <p className="text-lg">Expert Freelancers</p>
        </div>
        <div>
          <h1 className="sm:text-2xl	lg:text-5xl">95+</h1>
          <p className="text-lg">Success Ratio</p>
        </div>
        <div>
          <h1 className="sm:text-2xl	lg:text-5xl">50+</h1>
          <p className="text-lg">Success Ratio</p>
        </div>
        <div>
          <h1 className="sm:text-2xl	lg:text-5xl">1800+</h1>
          <p className="text-lg">Success Ratio</p>
        </div>
      </section>
      {/* Number Related Section End */}

      {/* Promotional Message Section Start */}
      <section className="flex gap-20 rounded  bg-sky-300  p-20 py-20 text-black md:rounded-br-full md:rounded-tl-full ">
        <h1 className="md:text-2xl lg:text-4xl">
          Start Your Best Online/Offline <br /> Course with Us
        </h1>
        <Link href="login" className="flex items-end">
          {" "}
          <button className=" rounded-md bg-white  px-5 py-4 text-lg text-sky-500 md:px-10 lg:px-20 lg:text-xl ">
            Join Us
          </button>
        </Link>
      </section>
      {/* Promotional Message Section End */}
    </section>
  );
}
