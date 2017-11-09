import React, { Component } from 'react';
import './App.css';


import Sidebar from './Sidebar'


import Projectandchat from './Projectandchat';




class Apphome extends Component {
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
              <Sidebar/>
           </div>
            <div className="project">
              <Projectandchat/>
            </div>
        </div>

    )


  }
}

export default Apphome;
