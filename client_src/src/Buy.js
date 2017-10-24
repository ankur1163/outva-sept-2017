import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Projects from './Projects.js';



import './App.css';





class Buy extends Component {
  constructor(props){
    super(props)
    this.state={hours:2,finalcost:0}
  }





  render() {

    return (
      <div className="wrapper">
       <div className="sidebar">
          <Sidebar />
       </div>
        <div className="project">
          <Projects/>
        </div>

        <div className="chat">
         <h2> Buy hours </h2>
         <input type="text" value={this.state.hours} onChange={(e)=>this.setState({hours=e.target.value})}/>
         <h2>{this.state.hours*7}</h2>

        </div>

      </div>
    )


  }
}

export default Buy;
