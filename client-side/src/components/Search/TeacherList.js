import React, { Component } from 'react'
import Teacher from './Teacher'

const TeacherList = (props) => {
    let Teachs = props.filteredTeach.map((teacher,i) => {
        return <div className ="col-sm-2" key={i}> 
        <Teacher key={i} name={teacher.name} Course={teacher.Course} Time={teacher.Time} handlerChoosTime={props.handlerChoosTime}/>
        </div>
    })
    return (
        <div className ="row" style = {{marginTop: '10px'}}>
            {Teachs}
        </div>
    )

}

export default TeacherList;