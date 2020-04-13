var express = require('express');
var router = express.Router();

let courseController =require('../controller/courseController')
router.post("/",courseController.new)
.get("/",courseController.index);



module.exports=router