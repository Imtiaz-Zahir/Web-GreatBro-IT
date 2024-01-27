import type { Prisma } from "@prisma/client"

export default function validateCreateCourseInput(input: unknown): input is Prisma.CourseCreateInput {
  if (typeof input !== "object" || input === null) {
    return false
  }
  if ("name" in input && typeof input.name !== "string") {
    return false
  }
  if ("description" in input && typeof input.description !== "string") {
    return false
  }
  if ("price" in input && typeof input.price !== "number") {
    return false
  }
  if ("image" in input && typeof input.image !== "string") {
    return false
  }

  return true;
}
