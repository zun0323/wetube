import express from "express";
import routes from "../routes";
import { home, serach } from "../controllers/videoControllers";
import { join, login, logout } from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, serach);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
