import { activityRepository } from "../repositories/activity.repository.js";

export const activityService = {
    async getActivities(userId) {
        return activityRepository.findAll(userId);
    },

    async createActivity(userId, data) {
        if (!data.title || !data.type) {
            throw new Error("Missing required fields");
        }
        return activityRepository.create({ ...data, userId });
    },
};
