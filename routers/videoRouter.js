import express from "express";
import routes from "../routes";
import {
  getUplode,
  postUplode,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo
} from "../controllers/videoControllers";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.uplode, getUplode);
videoRouter.post(routes.uplode, uploadVideo, postUplode);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
