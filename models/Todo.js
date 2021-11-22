const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ToDoSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true,},
    dateCreated: {type: String, required: false,},
    complete: {type: Boolean, required: false,},
    dateComplete: {type: String, required: false,},
    author: {type: Schema.Types.ObjectId, ref: 'User'}
  }
);

//Export model
module.exports = mongoose.model('Todo', ToDoSchema);

