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

videoRouter.get(routes.home, videos);
videoRouter.get(routes.uplode, uplode);
videoRouter.post(routes.videoDetail, videoDetail);
videoRouter.post(routes.editVideo, editVideo);
videoRouter.post(routes.deleteVideo, deleteVideo);

export default videoRouter;
