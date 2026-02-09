import { userService } from "../services/user.service.js";

export const userController = {
    async getAll(req, res) {
        try {
            const users = await userService.getAllusers();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async create(req, res) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
};
