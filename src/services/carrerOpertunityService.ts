import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function getCarrerOpertunities() {
  return prisma.carrerOpertunity.findMany();
}

function getCarrerOpertunity(id: string) {
  return prisma.carrerOpertunity.findUnique({ where: { id } });
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
