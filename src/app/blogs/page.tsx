import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Blog - GreatBro-IT",
  description: "GreatBro-IT a skill development platform",
};
export default function Blogs() {
  const blogs = [
    { id: 1, title: "Blog 1", description: "Blog 1 description." },
    { id: 2, title: "Blog 2", description: "Blog 2 description." },
  ];
  return (
    <section className="mt-10">
      <div>Blog page</div>
      <ul>
        {blogs.map((blog) => (
          <div className="m-5" key={blog.title}>
            <Link href={`/blogs/${blog.id}`}>
              <li>{blog.title}</li>
              <p>{blog.description}</p>
            </Link>
          </div>
        ))}
      </ul>
    </section>
  );
}
