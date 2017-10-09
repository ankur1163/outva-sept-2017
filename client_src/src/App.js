import React, { Component } from 'react';

import axios from 'axios';

import Pusher from 'pusher-js'

import './App.css';



class App extends Component {

  constructor(props) {
    super(props);

    this.state={"username":"ankur","messages":[],"pusher":"","message":""}
  }


  componentWillMount(){
    /*
    const pusher = new Pusher("2cf1cc85bdc7ecb3de23",{
      cluster: 'ap2'
    });
    console.log("this.pusher",pusher)
    var chatRoom = pusher.subscribe('messages'); */
    this.pusher = new Pusher("2cf1cc85bdc7ecb3de23",{
      cluster: 'ap2'
    });
    this.chatRoom =this.pusher.subscribe('messages');


  }


  sm(e){
    console.log("click here clicked again")
    console.log("this.state.username",this.state.username)


 var text = this.state.message;
console.log("text",text)
 // if the text is blank, do nothing
 if (text === "") return;
  console.log("this.state.username",this.state.username)
 var message = {
   username: this.state.username,
   text: text,
   date: new Date()
 }

 axios.post('http://localhost:3000/api/meetups/pusher', {
   username: this.state.username,
   text: message,
   time: new Date()
  })
  .then(function (response) {
    console.log("response back",response.data);
  })
  .catch(function (error) {
    console.log(error);
  });


  }

  txch(e){

    var tx = e.target.value;
    this.setState({"message":tx})
    console.log("tx",tx)

  }

  usch(e){
    console.log(e.target.value)
    this.setState({"username":e.target.value})

  }

  componentDidMount(){

    var text = "message a geya"
    console.log("date is ",new Date())

    var message = {
   username: "ankur1",
   text: text,
   time: new Date()
 }


 axios.post('http://localhost:3000/api/meetups/pusher', {
   username: this.state.username,
   text: message,
   date: new Date()
  })
  .then(function (response) {
    console.log("data is here",response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log("this.chatroom",this.chatroom)
  this.chatRoom.bind('new_message', function(message){
    console.log("message a geya ",message)
    this.setState({messages: this.state.messages.concat(message)})
  }, this);

  }
  render() {
    var sm = this.sm.bind(this)
    var txch = this.txch.bind(this)
    var usch = this.usch.bind(this)
    return (
      <div>

      <h1>ankur is here {this.state.username}</h1>
      <h2>yeah we got it {this.state.pusher}</h2>
      <p>username</p><input type="text" onChange={usch}/>
      <p>message</p><input type="text" onChange={txch}/>
      <button onClick={sm}>click here</button>

      </div>
    );
  }
}

export default App;
