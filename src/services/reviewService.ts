import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

function getReviews() {
  return prisma.review.findMany();
}

function getReview(id: string) {
  return prisma.review.findUnique({ where: { id } });
}

function createReview(data: Prisma.ReviewCreateInput) {
  return prisma.review.create({ data });
}

function updateReview(id: string, data: Prisma.ReviewUpdateInput) {
  return prisma.review.update({ where: { id }, data });
}

function deleteReview(id: string) {
  return prisma.review.delete({ where: { id } });
}

export { getReviews, getReview, createReview, updateReview, deleteReview };
