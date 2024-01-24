import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

function getLectures() {
  return prisma.lecture.findMany();
}

function getLecture(id: string) {
  return prisma.lecture.findUnique({ where: { id } });
}

function createLecture(data: Prisma.LectureCreateInput) {
  return prisma.lecture.create({ data });
}

function updateLecture(id: string, data: Prisma.LectureUpdateInput) {
  return prisma.lecture.update({ where: { id }, data });
}

function deleteLecture(id: string) {
  return prisma.lecture.delete({ where: { id } });
}

export { getLectures, getLecture, createLecture, updateLecture, deleteLecture };
