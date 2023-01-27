const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  number: {
    type: String,
    required: true,
  },
  address:{
    type:String,
    required:true,
    max:300,
  }
});

module.exports = mongoose.model("Customer", customerSchema);
