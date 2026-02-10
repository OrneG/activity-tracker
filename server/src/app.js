import express from "express";
import activityRouter from "./routes/activity.routes.js";
import recordRouter from "./routes/record.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use("/users", userRouter);

app.use("/users/:userId/activities", activityRouter);

app.use("/activities/:activityId/records", recordRouter);

export default app;
