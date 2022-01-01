import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";

const logger = morgan("dev");
const app = express();
app.use(logger);

const PORT = 4000;

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log("The server has ready to start!");

app.listen(PORT, handleListening);
