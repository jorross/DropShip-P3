const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Valid email required!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
  admin: {
    type: Boolean,
    required: true,
  }
});

const User = model("User", userSchema);

module.exports = User;
