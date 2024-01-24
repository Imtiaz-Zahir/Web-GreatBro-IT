import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

function getLessons() {
  return prisma.lesson.findMany();
}

function getLesson(id: string) {
  return prisma.lesson.findUnique({ where: { id } });
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
