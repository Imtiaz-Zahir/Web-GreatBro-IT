import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function getCategories(where?: Prisma.CategoryWhereInput) {
  return prisma.category.findMany({ where });
}

function getCategory(where: Prisma.CategoryWhereUniqueInput) {
  return prisma.category.findUnique({ where });
}

function createCategory(name: string) {
  return prisma.category.create({ data: { name } });
}

function updateCategory(id: string, name: string) {
  return prisma.category.update({ where: { id }, data: { name } });
}

function deleteCategory(id: string) {
  return prisma.category.delete({ where: { id } });
}

export {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
