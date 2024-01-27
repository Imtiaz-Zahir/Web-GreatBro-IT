import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

function getLectures(where?: Prisma.LectureWhereInput) {
  return prisma.lecture.findMany({ where });
}

function getLecture(where: Prisma.LectureWhereUniqueInput) {
  return prisma.lecture.findUnique({ where });
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
