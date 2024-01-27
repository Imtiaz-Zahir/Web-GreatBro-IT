import { getCategories } from "@/services/categoryService";
import type { NextRequest } from "next/server";

export async function GET(reqest: NextRequest) {
  const query = reqest.nextUrl.searchParams.get("query");
  try {
    if (query) {
      const categories = await getCategories({
        name: { startsWith: query },
      });

      return Response.json(categories);
    } else {
      const categories = await getCategories();
      return Response.json(categories);
    }
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
