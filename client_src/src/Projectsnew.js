import React, { Component } from 'react';

import axios from 'axios';
import './App.css';
import Chat from './Chat';
import Projects from './Projects';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';





class Projectsnew extends Component {
  constructor(props) {
    super(props);
    this.state={setcolor:false,hours:2,searchterm:"",dropdownvalue:1,dropdownvaluetwo:1,

    chatrooms:[{key:1,color:false,name:"private-messages"},
    {key:2,color:false,name:"project2"},
    {key:3,color:false,name:"project3"},
    {key:4,color:false,name:"project 4"},
    {key:5,color:false,name:"project 5"},
    {key:6,color:false,name:"project 6"},
      {key:7,color:false,name:"project 7"},
    {key:8,color:false,name:"project 8"},
    {key:9,color:false,name:"project 9"}]
    ,projectchat:[{projectname:"private-messages",
    chatmessages:[{username:"ankur",message:"whatsup"},{username:"ankur",message:"kya hal hai"}]},
    {projectname:"project2",
    chatmessages:[{username:"ankur",message:"whatsup"},{username:"ankur",message:"kya hal hai"}]} ]}


  }

  handledropdownChange = (event, index, value) => this.setState({dropdownvalue:value});
  handledropdowntwoChange = (event, index, value) => this.setState({dropdownvaluetwo:value});

  handleColor(e){


    var key = e.currentTarget.getAttribute("data-key");
    key = parseInt(key)
    var ky = this.state.chatrooms;
    var classes ;


    for(var i =0;i<ky.length;i++){

      if(ky[i].key===key){

        if(ky[i].color==true){

          ky[i].color=false
        }
        else{

          ky[i].color=true;
        }



      }
      else{
        if(ky[i].color==true){

          ky[i].color=false
        }

      }

    }

    this.setState({chatrooms:ky});



  }

  render() {
    console.log("this.props.room",this.props)
    var tg= this.props.room
    var handleColor = this.handleColor.bind(this);


    var lr = this.state.chatrooms.map(function(item,index){


      var classes = item.color ? "colorproject projectssection":"simpleproject projectssection";
      return (
        <div  key={item.key} data-key={item.key} onClick={handleColor} className={classes}>
          <div>
             <img src="https://image.flaticon.com/teams/slug/freepik.jpg"
             width="50px" height="50px" />
          </div>
          <div>
            <p style={{fontWeight:"bold"}}>yes {item.name}</p>
          </div>


        </div>


      )
    })






    return (<p key={tg} onClick={this.props.onClick}>{this.props.room}</p>)

  }
}

export default Projectsnew;
