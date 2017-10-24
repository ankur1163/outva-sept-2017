import React, { Component } from 'react';
import Projects from './Projects';
import Sidebar from './Sidebar';




class Mention extends Component {





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
         <h2> Mention page is here </h2>


        </div>

      </div>
    )


  }
}

export default Mention;
