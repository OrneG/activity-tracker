import express from "express";
import activityRouter from "./routes/activity.routes.js";
import recordRouter from "./routes/record.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use("/activities", activityRouter);
app.use("/records", recordRouter);
app.use("/users", userRouter);

export default app;
