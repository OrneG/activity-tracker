import { activityService } from "../services/activity.service.js";

export const activityController = {
    async getAll(req, res) {
        try {
            const { userId } = req.params;
            const activities = await activityService.getactivitysByUserId(Number(userId));
            res.json(activities);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async create(req, res) {
        try {
            const { userId } = req.params;
            const activity = await activityService.createactivityForUser(Number(userId), req.body);
            res.status(201).json(activity);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

};
