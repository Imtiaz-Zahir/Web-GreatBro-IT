import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function getJobPositions(where?: Prisma.JobPositionWhereInput) {
  return prisma.jobPosition.findMany({where});
}

function getJobPosition(where: Prisma.JobPositionWhereUniqueInput) {
  return prisma.jobPosition.findUnique({ where });
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
