import express from "express";
import routes from "../routes";
import {
  videos,
  uplode,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get(routes.uplode, uplode);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
