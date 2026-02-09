import "dotenv/config"; 
import { PrismaClient } from "../generated/prisma/client.ts";

const prisma = new PrismaClient();

export const userRepository = {
    async findAll() {
        return prisma.user.findMany();
    },
    async create(data) {
        return prisma.user.create({ data });
    },
};
