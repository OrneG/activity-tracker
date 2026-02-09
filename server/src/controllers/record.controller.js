import { recordService } from "../services/record.service.js";

export const recordController = {
    async getAll(req, res) {
        try {
            const { userId } = req.params;
            const records = await recordService.getRecordsByUserId(Number(userId));
            res.json(records);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async create(req, res) {
        try {
            const { userId } = req.params;
            const record = await recordService.createRecordForUser(Number(userId), req.body);
            res.status(201).json(record);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

};
