const { models } = require("mongoose");
const tasksModel = require("./../../db/models/todo")

const createtask = (req, res) => {

    const { task, userId, completeBy, importance } = req.body;
    const newtask = new tasksModel({

        userId:req.token.id,
        task: task,
        completeBy: completeBy,
        importance: importance,

    });
    newtask
        .save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}
//stoped here because err Cannot read properties of undefined (reading 'id')
const getTask = (req, res) => {
    console.log(id);
    tasksModel
        .find({isdel: false })

        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};
const deletedtaskByUser = (req, res) => {
    const { id } = req.params;

    console.log(id);
    tasksModel
        .findByIdAndUpdate(id, { isdel: true }, { new: true })
        .exec()
        .then((result) => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};
const taskdone = (req, res) => {
    const { id } = req.params;

    console.log(id);
    tasksModel
        .findByIdAndUpdate(id, { isdone: true }, { new: true })
        .exec()
        .then((result) => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};
module.exports = {
    createtask,
    getTask,
    deletedtaskByUser,
    taskdone,

};
