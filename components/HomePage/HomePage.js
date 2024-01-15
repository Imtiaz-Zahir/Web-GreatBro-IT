import React from "react";
import PopularCourses from "./PopularCourses";
import WhyExceptional from "./WhyExceptional";
import Promotions from "./Promotions";
import Testimonials from "./Testimonials";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <main className="bg-black">
      <Hero />
      <PopularCourses />
      <WhyExceptional />
      <Testimonials />
      <Promotions />
    </main>
  );
}
