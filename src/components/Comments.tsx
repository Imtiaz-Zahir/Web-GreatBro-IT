import React from "react";

export default async function Comments({ promise }: { promise: Promise<any> }) {
  const comments = await promise;
  return (
    <div className="mt-10">
      <h1>Comments</h1>
      <ul>
        {comments.map((comment:{id:number,body:string}) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}
