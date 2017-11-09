import React, { Component } from 'react';
import Projects from './Projects';
import Sidebar from './Sidebar';





class Cancel extends Component {
  


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
         <h2 style={{color:"red"}}>Your payment got cancelled</h2>


        </div>

      </div>
    )


  }
}

export default Cancel;
