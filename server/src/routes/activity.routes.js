import express from "express";
import { activityController } from "../controllers/activity.controller.js";

const router = express.Router({ mergeParams: true });

router.get("/", activityController.getAll);

router.post("/", activityController.create);

export default router;
