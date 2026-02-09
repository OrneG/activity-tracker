import { userRepository } from "../repositories/user.repository.js";

export const userService = {
    async getAllusers() {
        return userRepository.findAll();
    },

    async createUser(data) {
        if (!data.name || !data.email) {
            throw new Error("Missing required fields");
        }
        return userRepository.create(data);
    },
};
