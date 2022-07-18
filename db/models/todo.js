const mongoose = require('mongoose');
const tasks = new mongoose.Schema({
userId:[ { type: mongoose.Schema.Types.ObjectId, ref: "User" }],
task:{type: String, required: true},
complete:{type: Boolean, default: false},
date:{type: Date, default: new Date},
completeBy:{type: Date,},
importance:{ type: String, required: true},
isdel: { type: Boolean, default: false},
isdone: { type: Boolean, default: false},

});
mongoose.exports = mongoose.model("Tasks",tasks);
