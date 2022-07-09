const mongoose= require("mongoose")
mongoose.connect("mongodb://localhost/todolist")
var userSchema= mongoose.Schema({
  todo:String,
  time:{
type:Date,
default:Date.now()
  }
})
module.exports=mongoose.model("user",userSchema)