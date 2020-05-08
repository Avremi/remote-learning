let Student = require('../model/studentModel')

exports.new = function (req, res) {
    let student = new Student();
    student.email = req.body.email;
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.password = req.body.password;
    console.log(req.body.email)
    student.save(function (err) {
        //console.log(err.toJSON())
        if (err) {
            res.json({
                status: 'fail',
                message: err.toString() || 'error'
            })
        }
        else {

            res.json({
                status: 'success',
                message: 'new student user created',
                data: student
            })
        }
    })

}

exports.newMeeting = function (req, res) {
    let newMeeting = {
        date: req.body.date,
        studentName: req.body.studentName,
        teacherName: req.body.teacherName,
        topic: req.body.topic
    }
    Student.findOne({ email: req.body.email }, function (err, student) {
        if (err) {
            res.json({
                status: 'fail',
                message: 'error'
            })
        }
        else {
            student.meetings.push(newMeeting);
            student.save(function (err) {
                if (err) {
                    res.json({
                        status: 'fail',
                        message: 'error'
                    })
                }
                else {
                    res.json({
                        status: 'success',
                        message: 'new meeting created',
                        data: newMeeting
                    })
                }
            })
        }
    })

}

exports.deleteMeeting = function (req, res) {
    Student.findOne({ email: req.query.email }, function (err, student) {


        console.log(student);
        if(err){
            res.json({
                status: 'fail',
                message: 'Student not found'
            })
        }
        let meetingDate=new Date(req.query.date).getTime();
        let meeting=student.meetings.find(
            m=>m.date.getTime()==meetingDate);
        if(!meeting){
            res.json({
                status: 'fail',
                message: 'meeting not found'
            })
            return;
        }
        student.meetings.id(meeting._id).remove();
            // if (err) {
            //     res.json({
            //         status: 'fail',
            //         message: err.toString() || 'error'
            //     })
            //     return;
            // }
            student.save(
                function (err, student) {
                    if (err) {
                        res.json({
                            status: 'fail',
                            message: err.toString() || 'error'
                        })
                    }
                    else {
                        res.json({
                            status: 'success',
                            message: 'meeting at: ' + meeting.date.toString() + '  deleted',
                            data: meeting
                        })
                    }
                });
        //})
    })

}
