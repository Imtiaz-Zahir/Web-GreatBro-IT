import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

function getEnrollments() {
  return prisma.enrollment.findMany();
}

function getEnrollment(id: string) {
  return prisma.enrollment.findUnique({ where: { id } });
}

function createEnrollment(data: Prisma.EnrollmentCreateInput) {
  return prisma.enrollment.create({ data });
}

function updateEnrollment(id: string, data: Prisma.EnrollmentUpdateInput) {
  return prisma.enrollment.update({ where: { id }, data });
}

function deleteEnrollment(id: string) {
  return prisma.enrollment.delete({ where: { id } });
}

export { getEnrollments, getEnrollment, createEnrollment, updateEnrollment, deleteEnrollment };