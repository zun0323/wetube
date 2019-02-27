import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.home, (req, res) => res.send("videos"));
videoRouter.get(routes.uplode, (req, res) => res.send("uplode"));
videoRouter.post(routes.videoDetail, (req, res) => res.send("videoDetail"));
videoRouter.post(routes.editVideo, (req, res) => res.send("editVideo"));
videoRouter.post(routes.deleteVideo, (req, res) => res.send("deleteVideo"));

export default videoRouter;
