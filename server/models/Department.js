const { Schema, model } = require('mongoose');

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Department = model('Department', departmentSchema);

module.exports = Department;
