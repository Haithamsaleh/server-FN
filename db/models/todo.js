const mongoose = require('mongoose');
const tasks = new mongoose.Schema({
task:{type: String, required: true},
complete:{type: Boolean, default: false},
date:{type: Date, default: new Date},
completeBy:{type: date},
importance:{ type: String, required: true},

});
mongoose.exports = mongoose.model("Tasks",tasks);
// stoped here because