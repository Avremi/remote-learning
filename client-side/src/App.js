import React, { Component } from 'react';
import 'antd/dist/antd.css'
import logo from './logo.svg';
import './App.css';
import LessonsView from './containers/LessonsView/LessonsView'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Student from './components/Student'
import TeacherList from './components/Search/TeacherList'
import Filter from './components/Search/Filter'
import StudentSideBilder from './containers/LessonsView/StudentSideBilder/StudentSideBilder'
// for test
import {Button} from 'antd'
import StudentLogin from './components/StudentLogin/StudentLogin' 
const mys = {
  font: '40px'
}

//<Button>Click me!</Button>
//<StudentSideBilder/>

class App extends Component {
  
  render() {
    return (
      <div className="App" >

        <Navbar />
        <StudentLogin/>
        <Footer style={mys} />


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