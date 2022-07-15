const express = require("express");
const { create, getRoles } = require("./../controller/role");
const roleRouter = express.Router();


roleRouter.post("/createRole", create);

// admin
roleRouter.get("/role", getRoles);

module.exports = roleRouter;
