import React, { Component } from 'react';

import axios from 'axios';

import Pusher from 'pusher-js'
import ChatBubble from 'react-chat-bubble';

import './App.css';



class Chat extends Component {

  constructor(props) {
    super(props);

    this.state={"username":"ankur","messages":[{
        "type" : 0,
        "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
        "text": "Hello! Good Morning!,how are you ankur",
        "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
    }, {
        "type": 1,
        "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
        "text": "Hello! Good Afternoon!",
        "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
    }],"pusher":"","message":""}
  }


  componentWillMount(){

    this.pusher = new Pusher("2cf1cc85bdc7ecb3de23",{
       authEndpoint: 'http://localhost:3000/api/meetups/auth',


      cluster: 'ap2'

    });

 console.log("this.pusher",this.pusher);
 console.log("this.pusher.subscribe",this.pusher.subscribe)
    this.chatRoom =this.pusher.subscribe('private-messages');


  }


  sm(e){



 var text = this.state.message;

 // if the text is blank, do nothing
 if (text === "") return;

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
    console.log("message is ",message)
    message.image="https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png"


    this.setState({messages: this.state.messages.concat(message)})
  }, this);

  }
  render() {
    var sm = this.sm.bind(this)
    var txch = this.txch.bind(this)
    var usch = this.usch.bind(this)
    return (
      <div className="nestedchat">
      
        <div className="chatarea">
          <ChatBubble messages = {this.state.messages} />
        </div>
      <div>


      <p>username</p><input type="text" onChange={usch}/>
      <p>message</p><input type="text" onChange={txch}/>
      <button onClick={sm}>click here</button>
       </div>
      </div>
    );
  }
}

export default Chat;
