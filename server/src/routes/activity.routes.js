import express from "express";
import { recordController } from "../controllers/record.controller.js";

const router = express.Router();

router.get("/:userId/records", recordController.getAll);
router.post("/:userId/records", recordController.create);

export default router;
