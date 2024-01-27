import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

function getReviews(where?: Prisma.ReviewWhereInput) {
  return prisma.review.findMany({ where });
}

function getReview(where: Prisma.ReviewWhereUniqueInput) {
  return prisma.review.findUnique({ where });
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
