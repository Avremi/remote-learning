import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LessonsView from './containers/LessonsView/LessonsView'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Student from './components/Student'
//import { Component } from 'react';

const mys = {
  font:'40px'
}



class App extends Component{
  state = {
    students: [
      {Fname:'elchay',Course:['Computer',' ','Math',' ','Physics']},
      {Fname:'avraham',Course:['Computer',' ','Math',' ','Physics']},
      {Fname:'dan',Course:['Computer',' ','Math',' ','Physics']}
    ]
  }

  render(){
    
    return(
      <div className ="App" >
        <Navbar/>
        <h1> hi</h1>
        <Student Fname={this.state.students[0].Fname} Course={this.state.students[0].Course}/>
        <Student Fname={this.state.students[1].Fname} Course={this.state.students[1].Course}/>
        <Student Fname={this.state.students[2].Fname} Course={this.state.students[2].Course}/>

        {/* this is for you to see the footer stick to the bottom */}  
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>
        <p> footer stick to the bottom</p>


        <Footer style={mys}/>
      </div>
    );
  }
}


export default App;


//function App() {
 // return (
   // <LessonsView>

    //</LessonsView>
   // <div>
    //  <Navbar/>
    
      
    //</div>
  //);
//}