import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TeacherController {
    static async create({ name, email }: { name: string; email: string }) {
        return await prisma.teacher.create({
          data: { name, email }
        });
      }

  static async getById(id: number) {
    try {
      return await prisma.teacher.findUnique({ where: { id } });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getAll() {
    try {
      return await prisma.teacher.findMany();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async delete(id: number) {
    try {
      return await prisma.teacher.delete({ where: { id } });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}