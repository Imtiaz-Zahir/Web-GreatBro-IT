import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function getJobPositions() {
  return prisma.jobPosition.findMany();
}

function getJobPosition(id: string) {
  return prisma.jobPosition.findUnique({ where: { id } });
}

function createJobPosition(name: string, courseId: string) {
  return prisma.jobPosition.create({ data: { name, courseId } });
}

function updateJobPosition(id: string, name: string) {
  return prisma.jobPosition.update({ where: { id }, data: { name } });
}

function deleteJobPosition(id: string) {
  return prisma.jobPosition.delete({ where: { id } });
}

export {
  getJobPositions,
  getJobPosition,
  createJobPosition,
  updateJobPosition,
  deleteJobPosition,
};
