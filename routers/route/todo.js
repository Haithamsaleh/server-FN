const express = require("express");
const { 
    createtask,
    getTask,
    deletedtaskByUser,
    taskdone,
    deltask,
} = require("./../controller/todo")
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");
const tasksRouter = express.Router();

tasksRouter.post("/newtask",authentication, createtask);
tasksRouter.get("/tasks", getTask);
tasksRouter.delete("/deltask/:id", deletedtaskByUser);
tasksRouter.put("/task/:id", authentication ,taskdone);
tasksRouter.delete("/del/:id", deltask);



module.exports = tasksRouter;