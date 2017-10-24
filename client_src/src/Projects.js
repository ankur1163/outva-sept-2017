import React, { Component } from 'react';



import './App.css';





class Projects extends Component {
  constructor(props){
    super(props)
    this.state={hours:2}
  }





  render() {

    return (
         <div>
           <h3>Project Section  - Hours available -{this.state.hours}</h3>

         </div>
    )


  }
}

export default Projects;
