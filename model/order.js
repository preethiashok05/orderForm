const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    orderid:{
      type:Number,
      required:'required.',
      unique:true
    },
    product_name:{
        type:String,
        required:'This field is required.'
    },
    price:{
        type: Number,
        required:'required.'
    },
    date:{
        type:Date,
        default:Date.now,
    },
  }
   
);

module.exports = mongoose.model("Order", MessageSchema);
