import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.ts";

const prisma = new PrismaClient();

export const recordRepository = {
    async findAll(activityId, filters = {}) {
        const { year, month } = filters;

        let dateCondition = undefined;
        if (year && month) {
            const y = Number(year);
            const m = Number(month);
            if (!isNaN(y) && !isNaN(m) && m >= 1 && m <= 12) {
                const start = new Date(y, m - 1, 1);
                const end = new Date(y, m, 1);
                dateCondition = { gte: start, lt: end };
            }
        }

        return prisma.record.findMany({
            where: {
                activityId,
                ...(dateCondition && { date: dateCondition }),
            },
        });
    },
    async create(data) {
        return prisma.record.create({ data });
    },
};
