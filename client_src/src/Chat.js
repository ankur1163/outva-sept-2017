import React, { Component } from 'react';
import CKEditor from "react-ckeditor-component";

import axios from 'axios';

import Pusher from 'pusher-js'
import ChatBubble from 'react-chat-bubble';
import Todosingle from './Todosingle';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addSelectedRoom} from './actions/index.js';
import {addEditorText} from './actions/index.js';
import {SaveData} from './actions/index.js';
import {messageArrived} from './actions/index.js';



import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './App.css';



class Chat extends Component {

  constructor(props) {
    super(props);

    this.state={text:"amazing is quill",content: 'content',"username":"ankur","messages":[{
        "type" : 0,
        "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
        "text": "Hello! Good Morning!,how are you ankur",
        "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
    }, {
        "type": 1,
        "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
        "text": "Hello! Good Afternoon!",
        "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
    }],"pusher":"","message":"","selectoption":null}
  }


  componentWillMount(){


    this.pusher = new Pusher("2cf1cc85bdc7ecb3de23",{
       authEndpoint: 'http://localhost:3000/api/meetups/auth',


      cluster: 'ap2'

    });


    this.chatRoom =this.pusher.subscribe('private-messages');


  }

  handlequillChange(value) {


    var room = this.props.selectedroom.name
    this.props.addEditorText(value,room)
  }

  updateContent(newContent) {
        this.setState({
            content: newContent
        })
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

  })
  .catch(function (error) {

  });


  }

  txch(e){

    var tx = e.target.value;
    this.setState({"message":tx})


  }

  usch(e){

    this.setState({"username":e.target.value})

  }
  selectoption(e){

    var selectoption2 = e.target.getAttribute('name')

    this.setState({selectoption:selectoption2})

  }


  onChange(evt){

     var newContent = evt.editor.getData();
     this.setState({
       content: newContent
     })
   }

   onBlur(evt){

   }

   savenotepad(){
     console.log("button clicked in save notepad");

     var id = this.props.allrooms.id;
     var oldstate = this.props.allrooms;
     console.log("id is ",id)
     console.log("oldstate ",oldstate)
     console.log("this.props.allrooms",this.props.allrooms)
     this.props.SaveData(id,oldstate)

   }

   afterPaste(evt){

   }
  componentDidMount(){

    var text = "message a geya"


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
     console.log("message arrived ",message)
  })
  .catch(function (error) {

  });

  this.chatRoom.bind('new_message', function(message){
    console.log("message arrived ",message)
    var text = message.text
    var date = message.time
    var username = message.username
    var id = 1
    //text date username id
    this.props.messageArrived(text,date,username,id)

    message.image="https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png"


    this.setState({messages: this.state.messages.concat(message)})
  }, this);

  }
  render() {

    var handlequillChange = this.handlequillChange.bind(this)



    var selectoption=this.selectoption.bind(this);
    var updateContent = this.updateContent.bind(this);
    var sm = this.sm.bind(this)
    var txch = this.txch.bind(this)
    var usch = this.usch.bind(this)
    var onChange = this.onChange.bind(this);
    var onBlur = this.onBlur.bind(this);
    var afterPaste = this.afterPaste.bind(this);
    var save = this.savenotepad.bind(this);

    return (
      <div className="nestedchat">
        <div>
           <button name="chat" onClick={selectoption}> chat </button>
           <button name="To do" onClick={selectoption}> To do </button>
           <button name="Notepad" onClick={selectoption}>Notepad</button>
           <button name="Settings" onClick={selectoption}>Settings</button>
        </div>

          <div className="chatarea">




          {this.props.selectedroom && this.state.selectoption==="chat" && this.state.selectoption!=="To do" &&
          this.state.selectoption!=="Settings" && this.state.selectoption!=="Notepad"
           ? <ChatBubble messages = {this.props.selectedroom.messages} /> : null}
           {this.state.selectoption==="To do" && this.state.selectoption!=="chat" &&
           this.state.selectoption!=="Settings" && this.state.selectoption!=="Notepad"
            ? <Todosingle/>: null}
            {this.props.selectedroom  && this.state.selectoption==="Notepad" &&
            this.state.selectoption!=="Settings" &&  this.state.selectoption!=="chat" &&
            this.state.selectoption!=="To do"
             ?   <div><ReactQuill value={this.props.selectedroom.text}
                  onChange={handlequillChange} /> <button onClick={save}>Save</button>
                  </div>: null}



          </div>
          {this.props.selectedroom && this.state.selectoption==="chat" && this.state.selectoption!=="To do" &&
          this.state.selectoption!=="Settings" && this.state.selectoption!=="Notepad"
           ?  <div>
             <p>username<input type="text" onChange={usch}/>
             message<input type="text" onChange={txch}/>
             <button onClick={sm}>click here</button></p>

            </div> : null}

            {this.props.selectedroom && this.state.selectoption==="Settings" && this.state.selectoption!=="To do" &&
            this.state.selectoption!=="chat" && this.state.selectoption!=="Notepad"
             ?  <div>
               <h2>this is great</h2>

              </div> : null}

      </div>
    );
  }
}

function mapStateToProps(state){

  const projectlist=state.projectlist;
  const selectedroom = state.projectlist.selectedroom;


  if(state.projectlist.selectedroom!==null){

    for(var i =0;i<state.projectlist.chatrooms.length;i++){

         if(state.projectlist.chatrooms[i].name===selectedroom){

           return {
             selectedroom:state.projectlist.chatrooms[i],
             allrooms:state.projectlist


           }
         }
    }

  }

  else{
       selectedroom:null
  }



}
function mapDispatchToProps(dispatch){
    return bindActionCreators({addSelectedRoom,addEditorText,SaveData,messageArrived},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat)
