let mongoose=require('./mongooseWraper');

let meetingSchema=mongoose.Schema({
    date:{type:Date,unique:true},
    studentName:{type:String},
    teacherName:String,
    topic:String   
})

let studentSchema=mongoose.Schema({
    email:{type:String,requierd:true,unique:true},
    firstName:String,
    lastName:String,
    password:String,
    meetings:{type:[meetingSchema],default:[]}
})

module.exports=mongoose.model('student',studentSchema)