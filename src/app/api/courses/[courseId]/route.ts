import type { NextRequest } from "next/server";
import { getCourse, deleteCourse } from "@/services/courseService";
import { validateIsAdmin } from "@/validations";

export async function GET(
  _: NextRequest,
  { params }: { params: { courseId: string } },
) {
  try {
    const course = getCourse({ id: params.courseId });
    if (!course) return new Response("Course not found", { status: 404 });
    return Response.json(course);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  reqest: NextRequest,
  { params }: { params: { courseId: string } },
) {
  try {
    if (!validateIsAdmin(reqest)) {
      return new Response("Unauthorized", { status: 401 });
    }

    await deleteCourse(params.courseId);
    return new Response("Course Deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
