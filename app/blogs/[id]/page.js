import NotFound from "next/navigation";
import React from "react";

export default function BlogPage({ params }) {
  const { id } = params;
  if (id === "3") {
    NotFound();
  }
  return <div className="mt-6">The Blog is {id}</div>;
}




