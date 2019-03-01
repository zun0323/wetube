export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const serach = (req, res) =>
  res.render("search", { pageTitle: "search" });
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "videos" });
export const uplode = (req, res) =>
  res.render("uplode", { pageTitle: "uplode" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "videoDetail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
