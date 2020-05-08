import React, { Component } from 'react';
import Filter from '../../../components/Search/Filter'
import TeacherList from '../../../components/Search/TeacherList'
class StudentSideBilder extends Component {
    state = {
        teachers: [
            { name: 'elchay', Course: ['Computer', ' ', 'Math', ' ', 'Physics'],Time:['1/1/2020 8-9','1/1/2020 10-11'] },
            { name: 'avraham', Course: ['Computer', ' ', 'Math', ' ', 'Physics'],Time:['2/2/2020 8-9','2/2/2020 10-11'] },
            { name: 'dan', Course: ['Computer', ' ', 'Math', ' ', 'Physics'],Time:['3/3/2020 8-9','3/3/2020 10-11'] }
        ],
        FilterBox: ''
    }
    handlerInput = (ev) => {
        this.setState({ FilterBox: ev.target.value })
    }

    // when the student chose option time from select this fun return the key of this option , we can chack that with alert 
    handlerChoosTime = (ev) =>{
        this.setState({value: ev.target.value})
     //   alert("you pick somthing")
    }
    render() {
        let filteredTeach = this.state.teachers.filter((teacher) => {
            return teacher.name.toLowerCase().includes(this.state.FilterBox.toLowerCase())
       })
        return (
            <div> 
                <Filter handlerInput={this.handlerInput} />
                <TeacherList filteredTeach={filteredTeach} handlerChoosTime={this.handlerChoosTime} />
            </div>
        )
    }
}
export default StudentSideBilder;