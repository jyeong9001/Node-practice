import express from "express";
import { trending } from "../controller/videoController";
import { join, login } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
