import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function getCategories() {
  return prisma.category.findMany();
}

function getCategory(id: string) {
  return prisma.category.findUnique({ where: { id } });
}

function createCategory(name: string) {
  return prisma.category.create({ data:{name} });
}

function updateCategory(id: string, name: string) {
  return prisma.category.update({ where: { id }, data:{name} });
}

function deleteCategory(id: string) {
  return prisma.category.delete({ where: { id } });
}

export { getCategories, getCategory, createCategory, updateCategory, deleteCategory };