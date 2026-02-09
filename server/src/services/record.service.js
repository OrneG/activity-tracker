import { recordRepository } from "../repositories/record.repository.js";

export const recordService = {
    async getAllRecords(userId) {
        return recordRepository.findAll(userId);
    },

    async createRecord(userId, data) {
        if (!data.calification || !data.date || !data.type) {
            throw new Error("Missing required fields");
        }
        return recordRepository.create(userId, data);
    },
};
