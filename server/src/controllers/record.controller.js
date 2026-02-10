import { recordService } from "../services/record.service.js";

export const recordController = {
    async getAll(req, res) {
        try {
            const { activityId } = req.params;
            const records = await recordService.getRecords(Number(activityId));
            res.json(records);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async create(req, res) {
        try {
            const { activityId } = req.params;
            const record = await recordService.createRecord(Number(activityId), req.body);
            res.status(201).json(record);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

};
