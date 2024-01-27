import { createCourse, getCourses } from "@/services/courseService";
import { getCategory,createCategory } from "@/services/categoryService";
import { validateCreateCourseInput, validateIsAdmin } from "@/validations";
import type { NextRequest } from "next/server";

export async function GET(reqest: NextRequest) {
  try {
    const courses = await getCourses();
    return Response.json(courses);
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(reqest: NextRequest) {
  if (!validateIsAdmin(reqest)) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const data: unknown = await reqest.json();

    if (!validateCreateCourseInput(data)) {
      return new Response("Bad Request", { status: 400 });
    }

    const category = await getCategory({ name: data.categoryName });
    if(!category){
        await createCategory(data.categoryName);
    }

    await createCourse({
      name: data.name,
      image: data.image,
      description: data.description,
      price: data.price,
      level: data.level,
      category:{
        connect: {
          name: data.categoryName
        }
      }
    });

    return new Response("Course Created", { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
