import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchprojectlist} from './actions/index.js'
import {fetchWeather} from './actions/index.js'
import {addProjectName} from './actions/index.js'
import {addSelectedRoom} from './actions/index.js'
import CKEditor from "react-ckeditor-component";



import './App.css';
import Chat from './Chat';

import Projectsnew from './Projectsnew'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';





class Projectandchatsection extends Component {
  constructor(props) {
    super(props);

    this.state={searchterm:"",dropdownvalue:1,dropdownvaluetwo:1,term:""}

  }

  componentWillMount(){
    this.props.fetchprojectlist();

  }

  projectclick(){

  };
  handledropdownChange = (event, index, value) => this.setState({dropdownvalue:value});
  handledropdowntwoChange = (event, index, value) => this.setState({dropdownvaluetwo:value});

  handleColor(e){



  }
  projectboxclicked(e){

    console.log("e.target.getAttribute('name')",e.target.getAttribute('name'))

    this.props.addSelectedRoom(e.target.getAttribute('name'))
  }
  addnewproject(e){
   console.log("add new project",this.state.term)

    if(this.state.term!==""){
      this.props.addProjectName(this.state.term);
    }

     this.setState({term:""})
  }


  render() {



    var projectclick =this.projectclick.bind(this);
    var handleColor = this.handleColor.bind(this);

    var classes =  "colorproject projectssection";
    var projectboxclicked = this.projectboxclicked.bind(this)
    var addnewproject= this.addnewproject.bind(this);
     var lr = null;
     var gr = ["<div></div>","<div></div>"]
    if(this.props.projectlist && this.props.projectlist.chatrooms && this.props.projectlist.chatrooms[0] && this.props.projectlist.chatrooms[0].name){

      var lr = this.props.projectlist.chatrooms.map(function(item,index){

         return (<div key={item.name} name={item.name} onClick={projectboxclicked} className="projectbox2">{item.name}
           </div>)
      })
    }

    console.log("lr ",lr)
    console.log("this.props.selectedroom",this.props.selectedroom);
    console.log("this.props",this.props);



    return (
      <div>
          <div className="pcs">
                <div>
                    <div className="topprojectbar">
                          <div>
                          {console.log("entered")}
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

                       <input type="text" value={this.state.term} onChange={(event)=>this.setState({term:event.target.value})}/>
                       <button onClick={addnewproject}> add</button>


                       {this.props.projectlist && this.props.projectlist.chatrooms && this.props.projectlist.chatrooms[0] && this.props.projectlist.chatrooms[0].name &&

                          lr
                          }




                      </div>
                  </div>
              <div>
                {this.props.projectlist && this.props.projectlist.selectedroom ?<Chat />:<p>nothing is </p>}
              </div>
          </div>
      </div>
    )


  }
}

function mapStateToProps(state){


  const projectlist=state.projectlist;
  const selectedroom = state.projectlist.selectedroom;
  console.log("state.projectlist.selectedroom ",state.projectlist.selectedroom)

  if(state.projectlist.chatrooms && state.projectlist.chatrooms[0] != null){

    console.log("correct entered")
    for(var i =0;i<state.projectlist.chatrooms.length;i++){

         if(state.projectlist.chatrooms[i].name===selectedroom){

           return {

             projectlist:state.projectlist


           }

         }
         else{
           return {
             projectlist:state.projectlist
           }
         }
    }

  }

  else{
    console.log("wron entered")
       selectedroom:null
  }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchprojectlist,fetchWeather,addSelectedRoom,addProjectName},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Projectandchatsection)
