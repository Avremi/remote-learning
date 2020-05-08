import React, { Component } from "react";
const Filter = (props) => {

    return (
        <div>
          <input onChange={props.handlerInput} type="text" placeholder="Search teacher"/>
          
        </div>
    )
} 

export default Filter;

