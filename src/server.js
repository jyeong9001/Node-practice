import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";

const logger = morgan("dev");
const app = express();
app.use(logger);
app.use(express.urlencoded({ extended: true }));

const PORT = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log("The server has ready to start!");

app.listen(PORT, handleListening);

// Router/Controller 분리 전 https://github.com/nomadcoders/wetube-reloaded/commit/2bc60946dac3f7d615707a88ea1e7a6a3deb9922
