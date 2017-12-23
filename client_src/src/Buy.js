import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Projects from './Projects.js';
import { Button} from 'semantic-ui-react';
import axios from 'axios';



import './App.css';





class Buy extends Component {
  constructor(props){
    super(props)
    this.state={hours:2}
  }
 handlePay(){

   var pay = this.state.hours*7;
   axios.post('http://localhost:3000/api/meetups/pay', {
   cost:pay
  })
  .then(function (response) {

    var url = response.data.pay;
    window.open(response.data.pay,"_self")
  })
  .catch(function (error) {
    
  });
 }




  render() {
    var handlePay=this.handlePay.bind(this)

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
         <input type="text" value={this.state.hours} onChange={(e)=>this.setState({hours:e.target.value})}/>
         <h2>$ {this.state.hours*7}</h2> <Button onClick={handlePay} primary >Buy now {this.state.hours * 7}</Button>

        </div>

      </div>
    )


  }
}

export default Buy;
