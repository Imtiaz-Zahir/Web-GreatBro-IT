import type { Prisma } from "@prisma/client";

type CourseCreateInput = Prisma.CourseCreateInput & {
  categoryName: string;
};

export default function validateCreateCourseInput(
  input: unknown,
): input is CourseCreateInput {
  if (typeof input !== "object" || input === null) {
    return false;
  }
  if (
    "name" in input &&
    "image" in input &&
    "description" in input &&
    "price" in input &&
    "level" in input &&
    "categoryName" in input
  ) {
    return true;
  }

  return false;
}
