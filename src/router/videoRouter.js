import express from "express";

const videoRouter = express.Router();

videoRouter.get("/watch", handleWatchVideo);

export default videoRouter;
