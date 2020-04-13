let Course = require('../model/courseModel');


exports.new = function (req, res) {
    let course = new Course();
    course.id = req.body.id;
    course.courseName = req.body.courseName;
    course.department = req.body.department;
    console.log(req.body.id)
    course.save(function (err) {
        if (err) {
            res.json({
                status: 'fail',
                message: err.errors.id.message || 'error'
            })
        }
        else {

            res.json({
                status: 'success',
                message: 'new Course created',
                data: course
            })
        }
    })

}

exports.index=function(req,res){
    Course.find(function(err,courses){
        if (err) {
            res.json({
                status: 'fail',
                message: err.toString() || 'error'
            })
        }
        else {

            res.json({
                status: 'success',
                message: 'courses retrived',
                data: courses
            })
        }
    })
}