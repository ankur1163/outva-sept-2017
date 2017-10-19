import React, { Component } from 'react';



import './App.css';

import Chat from './Chat.js'
import Sidebar from './Sidebar'
import Projects from './Projects'
import Todo from './Todo.js'



class App extends Component {
  constructor(props) {
    super(props);
    this.state={cchat:true}
  }

togglebutton(){
  this.setState({cchat:!this.state.cchat})
}



  render() {
    var togglebutton = this.togglebutton.bind(this);

    return (
      <div className="wrapper">
       <div className="sidebar">
          <Sidebar />
       </div>
        <div className="project">
          <Projects/>
        </div>

        <div className="chat">
         <h2 onClick={togglebutton}> Toggle chat </h2>
        {this.state.cchat?<Chat/>:<Todo/>}


        </div>

      </div>
    )


  }
}

export default App;
