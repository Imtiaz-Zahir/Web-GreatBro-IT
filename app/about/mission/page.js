import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import thumb from "@/public/images/Cover.jpeg";
export default function Mission() {
  return (
    <section className="mt-10">
      <div>
        <h1> Mission Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          accusantium? Dolorem vero cum beatae accusamus eum veritatis dolorum
          labore omnis ullam consequuntur autem repudiandae, non dolores esse
          assumenda id asperiores, voluptates a harum alias. Nemo iste dolorum
          nesciunt, eum consequuntur eligendi consectetur. Aperiam autem vitae
          velit magni ea nemo praesentium.
        </p>
      </div>
      <div className="w-[400px]">
        <Image src={thumb} alt="image"></Image>
      </div>
      <Button></Button>
    </section>
  );
}
