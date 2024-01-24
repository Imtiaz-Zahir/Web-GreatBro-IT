import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function getLearningPoints() {
  return prisma.learningPoint.findMany();
}

function getLearningPoint(id: string) {
  return prisma.learningPoint.findUnique({ where: { id } });
}

function createLearningPoint(name: string, courseId: string) {
  return prisma.learningPoint.create({ data:{name,courseId} });
}

function updateLearningPoint(id: string, name: string) {
  return prisma.learningPoint.update({ where: { id }, data:{name} });
}

function deleteLearningPoint(id: string) {
  return prisma.learningPoint.delete({ where: { id } });
}

export { getLearningPoints, getLearningPoint, createLearningPoint, updateLearningPoint, deleteLearningPoint };