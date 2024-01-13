import React from "react";
import PopularCourses from "./PopularCourses";
import WhyExceptional from "./WhyExceptional";
import Promotions from "./Promotions";

export default function HomePage() {
  return (
    <main>
      <PopularCourses />
      <WhyExceptional />
      <Promotions/>
    </main>
  );
}
