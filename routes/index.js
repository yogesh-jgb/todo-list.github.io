var express = require('express');
var router = express.Router();
var todoModel=require("./users")

/* GET home page. */
router.get('/', function(req, res) {
  todoModel.find()
  .then(function(data){
    res.render('index', {data});
  }) 
});
router.post("/todo",function(req,res){
  todoModel.create({
    todo:req.body.todo
  }).then(function(){
    res.redirect("/")
  })
})
router.get("/delete/:_id",function(req,res){
  todoModel.findOneAndDelete({_id:req.params._id})
  .then(function(){
    res.redirect("/")
  })
})

module.exports = router;
