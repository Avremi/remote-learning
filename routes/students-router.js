var express = require('express');
var router = express.Router();

let studentController =require('../controller/studentController')
router.post("/",studentController.new);
router.post("/meetings",studentController.newMeeting);
router.delete("/meetings",studentController.deleteMeeting);



module.exports=router