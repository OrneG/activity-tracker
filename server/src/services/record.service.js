import { recordRepository } from "../repositories/record.repository.js";

export const recordService = {
    async getRecords(activityId, filters) {
        return recordRepository.findAll(activityId, filters);
    },

    async createRecord(activityId, data) {
        if (!data.calification || !data.date) {
            throw new Error("Missing required fields");
        }
        return recordRepository.create({ ...data, activityId });
    },
};
