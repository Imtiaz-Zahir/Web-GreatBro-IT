import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

function getEnrollments(where?: Prisma.EnrollmentWhereInput) {
  return prisma.enrollment.findMany({where});
}

function getEnrollment(where: Prisma.EnrollmentWhereUniqueInput) {
  return prisma.enrollment.findUnique({ where });
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