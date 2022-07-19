const tasksModel = require("./../../db/models/todo")

const createtask = (req, res) => {

    const {task,userId,completeBy,importance} = req.body;
    const newTask = new tasksModel({

        task: task,
        userId: req.token.id,
        completeBy: completeBy,
        importance: importance,

    });
    newTask
        .save()
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}
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

const deltask = (req, res) => {
    const { id } = req.params;

    console.log(id);
    tasksModel
        .findByIdAndRemove(id)
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
    deltask,

};
