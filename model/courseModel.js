const mongoose=require('./mongooseWraper')

let courseSchema=mongoose.Schema(
    {
        id:{type:String,requierd:true,unique:true},
        courseName:{type:String},
        department:{type:String}

    }
)

module.exports=mongoose.model('course',courseSchema)