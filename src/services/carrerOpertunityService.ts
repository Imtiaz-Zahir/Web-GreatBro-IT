import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function getCarrerOpertunities(where?: Prisma.CarrerOpertunityWhereInput) {
  return prisma.carrerOpertunity.findMany({where});
}

function getCarrerOpertunity(where: Prisma.CarrerOpertunityWhereUniqueInput) {
  return prisma.carrerOpertunity.findUnique({ where });
}

function createCarrerOpertunity(description: string, courseId: string) {
  return prisma.carrerOpertunity.create({ data: { description, courseId } });
}

function updateCarrerOpertunity(id: string, description: string) {
  return prisma.carrerOpertunity.update({ where: { id }, data: { description } });
}

function deleteCarrerOpertunity(id: string) {
  return prisma.carrerOpertunity.delete({ where: { id } });
}

export {
  getCarrerOpertunities,
  getCarrerOpertunity,
  createCarrerOpertunity,
  updateCarrerOpertunity,
  deleteCarrerOpertunity,
};
