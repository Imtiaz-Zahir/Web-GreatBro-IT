import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

function getLessons(where?: Prisma.LessonWhereInput) {
  return prisma.lesson.findMany({ where });
}

function getLesson(where: Prisma.LessonWhereUniqueInput) {
  return prisma.lesson.findUnique({ where });
}

function createLesson(data: Prisma.LessonCreateInput) {
  return prisma.lesson.create({ data });
}

function updateLesson(id: string, data: Prisma.LessonUpdateInput) {
  return prisma.lesson.update({ where: { id }, data });
}

function deleteLesson(id: string) {
  return prisma.lesson.delete({ where: { id } });
}

export { getLessons, getLesson, createLesson, updateLesson, deleteLesson };
