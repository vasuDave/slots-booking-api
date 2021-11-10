const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true,
    },
    mobile:{
        type:Number,
        require:true
    }
  },
  { timestamps: true }
);

module.exports=mongoose.model('User',UserSchema);