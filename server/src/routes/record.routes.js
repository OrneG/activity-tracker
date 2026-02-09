import express from "express";
import { recordController } from "../controllers/record.controller.js";

const router = express.Router();

router.get("/", recordController.getAll);
router.post("/", recordController.create);

export default router;
