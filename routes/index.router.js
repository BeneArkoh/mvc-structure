const { Router } = require("express");
const { login, register } = require("../controllers/index.controller");

const indexRouter = Router();

indexRouter.get("/", login);

indexRouter.get("/register", register);

module.exports = indexRouter;
