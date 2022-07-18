const express = require("express");
const { 
    createtask,
    getTask,
    deletedtaskByUser,
    taskdone,
} = require("./../controller/todo")
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");
const tasksRouter = express.Router();

tasksRouter.post("/newtask",authentication, createtask);
tasksRouter.get("/tasks", getTask);
tasksRouter.delete("/del/:id", deletedtaskByUser);
tasksRouter.put("/task/:id", taskdone);


module.exports = tasksRouter;