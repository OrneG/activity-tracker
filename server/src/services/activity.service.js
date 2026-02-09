import { activityRepository } from "../repositories/activity.repository.js";

export const activityService = {
    async getAllActivities() {
        return activityRepository.findAll();
    },

    async createactivity(data) {
        if (!data.title || !data.type) {
            throw new Error("Missing required fields");
        }
        return activityRepository.create(data);
    },
};
