const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema(
  {
    done:{
        type:Boolean,
    }
  }
);

module.exports = mongoose.model("Payment", PaymentSchema);
