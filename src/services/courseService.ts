import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

function getCourses(
  skip?: number,
  take?: number,
  where?: Prisma.CourseWhereInput,
  include?: Prisma.CourseInclude,
) {
  return prisma.course.findMany({ where, take, skip, include });
}

function getCourse(
  where: Prisma.CourseWhereUniqueInput,
  include?: Prisma.CourseInclude,
) {
  return prisma.course.findUnique({ where, include });
}

function createCourse(data: Prisma.CourseCreateInput) {
  return prisma.course.create({ data });
}

function updateCourse(id: string, data: Prisma.CourseUpdateInput) {
  return prisma.course.update({ where: { id }, data });
}

function deleteCourse(id: string) {
  return prisma.course.delete({ where: { id } });
}

export { getCourses, getCourse, createCourse, updateCourse, deleteCourse };
