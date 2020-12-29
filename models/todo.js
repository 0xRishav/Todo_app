//requiring mongoose
const mongoose = require('mongoose');


// Schema for todo list 
const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema);

//exporting the schema
module.exports = Todo;