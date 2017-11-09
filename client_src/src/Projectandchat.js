import React, { Component } from 'react';


import './App.css';
import Chat from './Chat';

import Projectsnew from './Projectsnew'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';





class Projectandchatsection extends Component {
  constructor(props) {
    super(props);
    this.state={setcolor:false,hours:2,searchterm:"",dropdownvalue:1,dropdownvaluetwo:1,rooms:["private-messages","project2","project3","project4","project5",
    "project6","project7","project8","project9"],chatrooms:[{key:1,color:false,name:"private-messages"},
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

  projectclick(){
    console.log("project clicked")
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
    var projectclick =this.projectclick.bind(this);
    var handleColor = this.handleColor.bind(this);
     var projectr = this.state.rooms.map(function(item,index){

          return (<Projectsnew onClick={projectclick} key={index} room={item} /> )
     })

     var lr = this.state.chatrooms.map(function(item,index){


       var classes = item.color ? "colorproject projectssection":"simpleproject projectssection";
       return (
         <div  key={item.key} data-key={item.key} onClick={handleColor} className={classes}>
           <div>
              <img src="https://rsc002.moxtra.com/board/Bc2JZUzFEWX2sYsLUJ1QRJ0/4?access_token=ZMk0MgAAAV9nNhHjAACowFVTMmdMcVUyaVNDS2tMZkY3Um9KcGxBIAAAAAFUNzYwXzBQWERPWUNSbkN2bjZzVTFHWCAgICAgICAgICAg&sessionid=mxweb-42689df9-1f38-4d4b-92b0-f8b22ada02f9"
              width="50px" height="50px" />
           </div>
           <div>
             <p style={{fontWeight:"bold"}}>{item.name}</p>
           </div>


         </div>


       )
     })

    return (
      <div>
          <div className="pcs">
                <div>
                    <div className="topprojectbar">
                          <div>
                              <MuiThemeProvider>
                                <TextField type ="text" style ={{width:"50px"}} value ={this.state.searchterm} onChange ={(e) =>this.setState({searchterm:e.target.value})}/>
                              </MuiThemeProvider>
                            </div>
                            <div>
                               <MuiThemeProvider>
                                <DropDownMenu value={this.state.dropdownvalue} onChange={this.handledropdownChange}>
                                  <MenuItem value={1} primaryText="All" />
                                  <MenuItem value={2} primaryText="Favorites" />
                                  <MenuItem value={3} primaryText="Unread" />

                                </DropDownMenu>
                             </MuiThemeProvider>
                            </div>
                            <div>
                            <MuiThemeProvider>
                             <DropDownMenu value={this.state.dropdownvaluetwo} onChange={this.handledropdowntwoChange}>
                               <MenuItem value={1} primaryText="+" />
                               <MenuItem value={2} primaryText="Group conversation" />
                               <MenuItem value={3} primaryText="Direct message" />

                             </DropDownMenu>
                          </MuiThemeProvider>
                        </div>
                      </div>
                      <div className="projectslist" >
                       {projectr}
                      </div>
                  </div>
              <div>
                <Chat rooms={this.state.projectnames} chat={this.state.projectchat}/>
              </div>
          </div>
      </div>
    )


  }
}

export default Projectandchatsection;
