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





class Projectandchatsection extends Component {
  constructor(props) {
    super(props);

    this.state={searchterm:"",dropdownvalue:1,dropdownvaluetwo:1,term:""}

  }

  componentWillMount(){
    this.props.fetchprojectlist();
    console.log("this.props.projectlist ",this.props.projectlist)
  }

  projectclick(){
    console.log("project clicked")
  };
  handledropdownChange = (event, index, value) => this.setState({dropdownvalue:value});
  handledropdowntwoChange = (event, index, value) => this.setState({dropdownvaluetwo:value});

  handleColor(e){
    console.log("handle color")


  }
  projectboxclicked(e){
    console.log("clicked")

    console.log("e.name ",e.target.getAttribute('name'))
    this.props.addSelectedRoom(e.target.getAttribute('name'))
  }
  addnewproject(e){
    console.log("this is great");

    if(this.state.term!==""){
      this.props.addProjectName(this.state.term);
    }

     this.setState({term:""})
  }


  render() {
    console.log("rendered again ")
    

    var projectclick =this.projectclick.bind(this);
    var handleColor = this.handleColor.bind(this);
    var classes =  "colorproject projectssection";
    var projectboxclicked = this.projectboxclicked.bind(this)
    var addnewproject= this.addnewproject.bind(this);
     var lr = null;
    if(this.props.projectlist && this.props.projectlist.chatrooms && this.props.projectlist.chatrooms[0] && this.props.projectlist.chatrooms[0].name){
       console.log("came again ",this.props.projectlist.chatrooms)
      var lr = this.props.projectlist.chatrooms.map(function(item,index){

         return (<div name={item.name} onClick={projectboxclicked} class="projectbox2">{item.name}   </div>)
      })
    }

    console.log("this.props.projectlist.selectedroom",this.props.projectlist.selectedroom)



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

                       <input type="text" value={this.state.term} onChange={(event)=>this.setState({term:event.target.value})}/>
                       <button onClick={addnewproject}> add</button>


                       {this.props.projectlist && this.props.projectlist.chatrooms && this.props.projectlist.chatrooms[0] && this.props.projectlist.chatrooms[0].name &&

                          lr
                          }



                      </div>
                  </div>
              <div>
                <Chat selectedroom={this.props.projectlist.selectedroom } rooms={this.state.projectnames} chat={this.state.projectchat}/>
              </div>
          </div>
      </div>
    )


  }
}

function mapStateToProps(state){
  console.log("state here ",state)
  return {
    projectlist:state.projectlist,
    books:state.books
  }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchprojectlist,fetchWeather,addProjectName,addSelectedRoom},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Projectandchatsection)
