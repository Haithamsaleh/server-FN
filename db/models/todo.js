const mongoose = require('mongoose');
const tasks = new mongoose.Schema({
task:{type: String, required: true},
});
mongoose.exports = mongoose.model("Tasks",tasks);