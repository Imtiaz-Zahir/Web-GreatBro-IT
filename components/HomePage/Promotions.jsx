import React from "react";
import Link from "next/link";

export default function Promotions() {
  return (
    <section className="m-auto lg:max-w-[1320px]">
      {/* Number Related Section Start */}
      <section className="my-40 flex gap-20 rounded-full bg-sky-500 p-20 text-white">
        <div>
          <h1 className="text-5xl	">2560+</h1>
          <p className="text-lg">Successful Students</p>
        </div>
        <div>
          <h1 className="text-5xl	">800+</h1>
          <p className="text-lg">Expert Freelancers</p>
        </div>
        <div>
          <h1 className="text-5xl	">95+</h1>
          <p className="text-lg">Success Ratio</p>
        </div>
        <div>
          <h1 className="text-5xl	">50+</h1>
          <p className="text-lg">Success Ratio</p>
        </div>
        <div>
          <h1 className="text-5xl	">1800+</h1>
          <p className="text-lg">Success Ratio</p>
        </div>
      </section>
      {/* Number Related Section End */}

      {/* Promotional Message Section Start */}
      <section className="my-40 flex gap-20  rounded-br-full rounded-tl-full bg-sky-500 p-20 text-white">
        <h1 className="text-4xl">
          Start Your Best Online/Offline <br /> Course with Us
        </h1>
        <Link href="login" className="flex items-end">
          {" "}
          <button className=" rounded-md bg-white  py-4 text-sky-500 lg:px-20 lg:text-xl ">
            Join Us
          </button>
        </Link>
      </section>
      {/* Promotional Message Section End */}
    </section>
  );
}
