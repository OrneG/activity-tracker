import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.ts";

const prisma = new PrismaClient();

export const activityRepository = {
    async findAll(userId) {
        return prisma.activity.findMany({
            where: { userId },
            orderBy: { date: "desc" },
        })
    },
    async create(data) {
        return prisma.activity.create({
            data: {
                ...data,
                user: { connect: { id: userId } },
            },
        });
    },
};
