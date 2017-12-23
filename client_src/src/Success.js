import React, { Component } from 'react';
import Projects from './Projects';
import Sidebar from './Sidebar';
import axios from 'axios'




class Success extends Component {
  constructor(props) {
    super(props);


  }
  getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

  componentWillMount(){
    var paymentid = this.getParameterByName("paymentId");
    var payerid =this.getParameterByName("PayerID")



    axios.post('http://localhost:3000/api/meetups/successcredithours', {
      paymentid:paymentid,
      payerid:payerid

   })
   .then(function (response) {

     var url = response.data.pay;
     window.open(response.data.pay,"_self")
   })
   .catch(function (error) {

   });
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
         <h2 style={{color:"blue"}}>Your payment is succesful</h2>


        </div>

      </div>
    )


  }
}

export default Success;
