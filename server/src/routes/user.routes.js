import express from "express";
import { activityController } from "../controllers/activity.controller.js";

const router = express.Router();

router.get("/:userId/activities", activityController.getAll);
router.post("/:userId/activities", activityController.create);

export default router;
