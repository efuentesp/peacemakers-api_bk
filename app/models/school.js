// Generated by CoffeeScript 1.6.3
var Schema, SchoolSchema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

SchoolSchema = new Schema({
  name: {
    type: String,
    "default": ''
  },
  www: {
    type: String,
    "default": ''
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});

mongoose.model('School', SchoolSchema);