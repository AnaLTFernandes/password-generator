import prisma from "../config/database.js";

async function createPasswordRepository(password: string): Promise<void> {
  await prisma.password.create({
    data: { password },
  });
}

export default {
  createPasswordRepository
};
