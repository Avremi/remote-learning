import React, { Component } from 'react';
//import {Button} from 'antd'



const Teacher = (props) => {

    let timetecher = props.Time.map((time, index) => {
        return <option key={index} value={index}>{time} </option>
    })

    return (
        <div style={{ width: 200, border: 'solid', background: 'lightblue' }} >
            <p> Name: {props.name}</p>
            <p> Course: {props.Course}</p>
            <p> Order a lesson: </p>
            <select className = 'custom-select ' onChange={props.handlerChoosTime}>
                {timetecher}
            </select>
        </div>

    )


}

export default Teacher;