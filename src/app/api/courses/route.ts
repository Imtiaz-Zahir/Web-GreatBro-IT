import { createCourse,getCourses } from "@/services/courseService";
import validateIsAdmin from "@/validations/validateIsAdmin";
import type { NextRequest } from "next/server";

export async function GET(reqest: NextRequest){
    try {
        const courses = await getCourses();
        return Response.json(courses);
    } catch (error) {
        console.log(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

// export async function POST(reqest: NextRequest){
//     if(!validateIsAdmin(reqest)){
//         return new Response('Unauthorized', { status: 401 });
//     }

//     try {
//         const data:unknown = await reqest.json();

//         await createCourse(data);
//         return new Response("Course Created", { status: 201});
//     } catch (error) {
//         console.error(error);
//     return new Response("Internal Server Error", { status: 500 });
//     }
// }