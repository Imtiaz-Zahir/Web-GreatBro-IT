import getAllPosts from "@/lib/getAllPosts";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Post - GreatBro-IT",
  description: "GreatBro-IT a skill development platform",
};

export default async function Posts() {
  const posts = await getAllPosts();
  return (
    <div className="mt-6">
      <h1>All Posts</h1>
      <ul className="mt-6">
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
