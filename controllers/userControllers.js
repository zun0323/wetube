import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "join" });
  } else {
    //To do: Register User
    //To do: Log user in
    res.redirect(routes.home);
  }
};

export const login = (req, res) => res.render("login", { pageTitle: "login" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "logout" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "userDetail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });
