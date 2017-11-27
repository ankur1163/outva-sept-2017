import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Dropzone from 'react-dropzone'
import 'react-tabs/style/react-tabs.css';
import {fetchprojectlist} from './actions/index.js'
import 'react-dates/initialize'
import DatePicker from 'react-date-picker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Dropdown } from 'semantic-ui-react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css';
import {Tasks_add_Who_Will_Do_This_Task} from './actions/index.js';
import {add_expand_task_number} from './actions/index.js';
import {add_new_task} from './actions/index.js';
import {task_done_undone} from './actions/index.js';


var ReactTags = require('react-tag-autocomplete');



class Todosingle extends Component {
  constructor(props){
    super(props);
    this.state={addtaskbutton:false,taskname:""}


  }

  handleDelete(i) {
    console.log("handle deleted")
  };
  handleAddition(tag) {
  console.log("handle addition")
  };

  expandtaskfunc(selectedroomname,taskid){
    console.log("amazing")
    console.log("selectedroomname",selectedroomname,"taskid",taskid)
    console.log("clicked task",selectedroomname,taskid)

    this.props.add_expand_task_number(selectedroomname,taskid);



  }
   onDrop(acceptedFiles, rejectedFiles) {
  // do stuff with files...
  console.log("files dropped")
}

uploadFile(files){
  console.log("upload files function")

}

  handledescription(e){
    console.log("handle description");
    this.setState({description:e.target.id})

  }

  onChangeFollower(event,data, nameid){

    console.log("data.value",data.value)
    console.log("this.props.selectedroom.name",this.props.selectedroom.name)
    console.log("event",event)
    console.log("id is coming ", nameid)
    var projectname = this.props.selectedroom.name;
    var taskid = nameid;

    var tags = data.value;
    this.props.Tasks_add_Who_Will_Do_This_Task(projectname,taskid,tags)


  }

  taskCheckbox(projectname,taskid){
    console.log("projectname ",projectname,"taskid",taskid)
   this.props.task_done_undone(projectname,taskid)

  }

  addtaskfunc(projectname,taskname){
    console.log("this.state.addtaskbutton",this.state.addtaskbutton)
    this.setState({addtaskbutton:!this.state.addtaskbutton})
    console.log("add task func",projectname,taskname)

      if(this.state.taskname!==""){
        this.props.add_new_task(projectname,taskname)
        this.setState({taskname:""})
      }



  }

  handleTaskTags(tags){
    console.log("handle task tags")
    console.log("tags ",tags)
    var tsk = this.state.tasks;
    tsk[0].tags=tags
    console.log("tags in ",tsk)

       this.setState({tasks:tsk});

        /*
      var expandedtaskno = this.state.expandtask;

      var tasklist = this.state.tasks;
      var tagtopush = tags[0];
      for(var i =0;i<this.state.tasks.length;i++){
        if(expandedtaskno===this.state.tasks[expandedtaskno].id){
           console.log("tags ",tags)

          tasklist[expandedtaskno].tasktags.push(tagtopush)
        }
      }

     this.setState({tasks:tasklist})
     console.log("tasktags ",tasklist)
     */

  }

  handlePriority(e){
    console.log("handle priority")
     var id = e.currentTarget.getAttribute("id");
     var tasks = this.state.tasks;



     var ft = tasks.map(function(item){

       if(item.id==id){


          var newitem = item;
          newitem.priority = e.currentTarget.getAttribute("value");
           return newitem
       }
       else{
             return item
       }
     })

     this.setState({tasks:ft})


  }
onChange = date => this.setState({ date })


  render() {
             console.log("this.props",this.props)

            var expandtask = this.props.selectedroom.expandtask;
            var taskCheckbox = this.taskCheckbox.bind(this);
            console.log("expandtask ",expandtask)
            var expandtaskfunc = this.expandtaskfunc.bind(this);

            var tasktags = this.props.selectedroom.tags;
            var membersofproject = this.props.selectedroom.membersofproject

           var roomname = this.props.selectedroom;
           var selectedroomname = this.props.selectedroom.name;
            var handleDelete=this.handleDelete.bind(this);
            var uploadFile= this.uploadFile.bind(this);
            var handleAddition=this.handleAddition.bind(this);
             var onChangeFollower = this.onChangeFollower.bind(this);
            var handlePriority=this.handlePriority.bind(this);
            var handleTaskTags=this.handleTaskTags.bind(this);
            var addtaskfunc = this.addtaskfunc.bind(this);
           var tr = this.props.selectedroom.tasks.map(function(item,index){
             console.log("item.id",item.id)
                   var startdate = item.startdate;
                   var enddate = item.enddate;
                   var description =item.description;
                   var files = item.files;
                   var priority = item.priority;
                   var repeat = item.repeat;
                   var followers = item.followers;
                   var tags = item.tags;




                   const doerselectedoptions = [{text: item.doer,value: item.doer,key:item.doer}]

                  console.log("item.id",item.id,"expandtask",expandtask);
             return (

               <div style={{borderBottom: "silver 0.5px solid",margin:"25px"}} id={item.id} key={index}>

               <input type="checkbox" onClick={()=>taskCheckbox(selectedroomname,item.id)} name={item.name} value={item.id} />
               &nbsp;&nbsp;&nbsp;
               <label id={item.id} onClick={()=>expandtaskfunc(selectedroomname,item.id)}>{
                 item.taskStatusLive ? item.taskname:<strike>{item.taskname}</strike>}</label>
                 <div style={expandtask==item.id ? {backgroundColor : "white"}:{display:"none"}}>
                  <Tabs>
                   <TabList>
                     <Tab><i className="fa fa-user-o" aria-hidden="true"></i></Tab>
                     <Tab><i className="fa fa-bars" aria-hidden="true"></i></Tab>
                     <Tab><i className="fa fa-paperclip" aria-hidden="true"></i></Tab>

                     <Tab><i className="fa fa-exclamation-circle" aria-hidden="true"></i></Tab>

                     <Tab><i className="fa fa-eye" aria-hidden="true"></i></Tab>
                     <Tab><i className="fa fa-repeat" aria-hidden="true"></i></Tab>
                     <Tab><i className="fa fa-bell" aria-hidden="true"></i></Tab>

                     <Tab><i className="fa fa-tags" aria-hidden="true"></i></Tab>

                   </TabList>

                   <TabPanel>
                   <div ref="idid" nameid={item.id} style={{height:"209px",width:"75%"}}>
                     <p>  Who will do this task? </p>
                     <Dropdown
                     onChange={(event, data) => onChangeFollower(event, data, item.id)}
                     placeholder='Select follower' fluid multiple selection
                     defaultValue={'patiala'}
                     options={membersofproject} />


                     </div>

                   </TabPanel>
                   <TabPanel>
                   <textarea id ={item.id} rows="12" cols="125">
                      {item.description}
                      </textarea>
                   </TabPanel>
                   <TabPanel>
                   <div style={{height:"209px",width:"75%"}}>
                      <Dropzone onDrop={uploadFile}/>
                     </div>
                   </TabPanel>

                   <TabPanel>
                   <div id={item.id} style={{height:"209px",width:"75%"}}>
                   <div id={item.id} value="none" onClick={handlePriority} style={item.priority=="none" ? {backgroundColor : "yellow",height:"30px",width:"60px",borderColor:"red",borderRadius: "4px",borderWidth:"5px"}:{backgroundColor:"white",height:"30px",width:"60px",borderColor:"black"}}>
                     <p id={item.id} value="none">none</p>
                   </div>

                    <div id={item.id} value="low"  onClick={handlePriority} style={item.priority=="low" ? {backgroundColor : "orange",height:"30px",width:"60px",borderColor:"red",borderRadius: "4px",borderWidth:"5px"}:{backgroundColor:"white",height:"30px",width:"60px",borderColor:"black"}}>
                      <p>low</p>
                    </div>
                    <div id={item.id} value="medium"  onClick={handlePriority} style={item.priority=="medium" ? {backgroundColor : "pink",height:"30px",width:"60px",borderColor:"red",borderRadius: "4px",borderWidth:"5px"}:{backgroundColor:"white",height:"30px",width:"60px",borderColor:"black"}}>
                      <p>medium</p>
                    </div>
                    <div id={item.id} value="high"  onClick={handlePriority} style={item.priority=="high" ? {backgroundColor : "seagreen",height:"30px",width:"60px",borderRadius: "4px",borderWidth:"5px",borderColor:"red"}:{backgroundColor:"white",height:"30px",width:"60px",borderColor:"black"}}>
                      <p>high</p>
                    </div>
                     </div>
                   </TabPanel>

                   <TabPanel>
                   <div style={{height:"209px",width:"75%"}}>
                     <p>Select follower</p>
                     <Dropdown onChange={(e) => this.onChangeFollower(e,item.id,"yes") }
                     placeholder='Select follower' fluid multiple selection options={doerselectedoptions} />
                     </div>
                   </TabPanel>
                   <TabPanel>
                   <div style={{height:"209px",width:"75%"}}>
                     <h2>Any content 1</h2>
                     </div>
                   </TabPanel>
                   <TabPanel>
                   <div style={{height:"209px",width:"75%"}}>
                     <h2>Any content 1</h2>
                     </div>
                   </TabPanel>
                   <TabPanel>
                   <div style={{height:"209px",width:"75%"}}>
                   <p>Please input your tags</p>
                     <TagsInput value={tasktags} onChange={handleTaskTags} />
                     </div>
                   </TabPanel>


                </Tabs>
                </div>
                </div>


             )
           })
    return (
      <div>
       <h2>Tasks </h2>
       {tr}
       {this.state.addtaskbutton ? <input
       type="text" style={{margin:"25px",width:"75%",borderRadius: "0.4rem"}}
       placeholder="Enter your task name here" value={this.state.taskname}
       onChange={(e)=>this.setState({taskname:e.target.value})} /> : null}<br/><br/>
       <button style={{marginLeft:"25px" }}
       onClick={()=>addtaskfunc(this.props.selectedroom.name,this.state.taskname)}>
       {this.state.addtaskbutton?<span>Submit</span>:<span>Add new task</span>}</button>


      </div>
    )


  }
}
//tyle={{width:"100%",border:"none",borderRadius: "0.4rem"}}
function mapStateToProps(state){

  const projectlist=state.projectlist;
  const selectedroom = state.projectlist.selectedroom;


  if(state.projectlist.selectedroom!==null){

    for(var i =0;i<state.projectlist.chatrooms.length;i++){

         if(state.projectlist.chatrooms[i].name===selectedroom){

           return {
             selectedroom:state.projectlist.chatrooms[i],
             projectlist:state.projectlist


           }
         }
    }

  }

  else{
       selectedroom:null
  }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({task_done_undone,add_new_task,fetchprojectlist,Tasks_add_Who_Will_Do_This_Task,add_expand_task_number},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Todosingle)
