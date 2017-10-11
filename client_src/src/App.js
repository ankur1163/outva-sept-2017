import React, { Component } from 'react';



import './App.css';

import Chat from './Chat.js'
import Sidebar from './Sidebar'
import Projects from './Projects'



class App extends Component {





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
          <Chat/>
        </div>

      </div>
    )


  }
}

export default App;
