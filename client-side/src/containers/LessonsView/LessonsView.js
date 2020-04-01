import React,{ Component } from "react";

class LessonsView extends Component {
    render(){
     const lessons = [
        {
            date: '02/02/2020',
            teacher: 'moshe',
            student:'avi',
            issue:'mathmathics'
        },
        {
            date: '03/02/2020',
            teacher: 'moshe',
            student:'avi',
            issue:'phisics'
        }
    ]
        return (<div>
            <h1>
                at: {lessons[0].date}
            </h1>
            <p> between {lessons[0].teacher} and {lessons[0].student}</p>
            <p>
                on issu: {lessons[0].issue}
            </p>

            
        </div>);
    }
}
export default LessonsView;