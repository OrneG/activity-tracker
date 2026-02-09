import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.ts";

const prisma = new PrismaClient();

export const recordRepository = {
    async findAll(activityId) {
        return prisma.record.findMany({
            where: { activityId }
        })
    },
    async create(data) {
        return prisma.record.create({
            data: {
                ...data,
                activity: { connect: { id: activityId } },
            },
        });
    },
};
