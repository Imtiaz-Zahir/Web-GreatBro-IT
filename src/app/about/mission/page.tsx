import Button from "@/components/Button";
import React from "react";
import Image from "next/image";

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
        <Image src="/images/Cover.jpeg" alt="image" height={180} width={400}></Image>
      </div>
      <Button></Button>
    </section>
  );
}
