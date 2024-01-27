import type { NextRequest } from "next/server";
import { getCourse } from "@/services/courseService";

export async function GET({ params }: { params: { courseId: string } }) {
  try {
    const course = getCourse(params.courseId);
    if (!course) return new Response("Course not found", { status: 404 });
    return Response.json(course);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// export function DELETE(request: NextRequest) {

// }
