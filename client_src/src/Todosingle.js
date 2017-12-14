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
import 'react-tag-input/example/reactTags.css';
import {Tasks_add_Who_Will_Do_This_Task} from './actions/index.js';
import {add_expand_task_number} from './actions/index.js';
import {add_new_task} from './actions/index.js';
import {delete_tags_task} from './actions/index.js';

import {add_tags_task} from './actions/index.js';
import {task_done_undone} from './actions/index.js';
import {change_priority_tasks} from './actions/index.js';
import {change_follower_Task} from './actions/index.js';
import { WithContext as ReactTags } from 'react-tag-input';
//const ReactTags = require('react-tag-autocomplete');





class Todosingle extends Component {
  constructor(props){
    super(props);


       this.handleDrag = this.handleDrag.bind(this);
    this.state={
              addtaskbutton:false,taskname:"",
              tags: [{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],

              suggestions: ["mango", "pineapple", "orange", "pear"]
    }

       this.handleDrag = this.handleDrag.bind(this);


  }

  handleDelete(selectedroomname,itemid,tags) {


    //here tags contain only the id, no actual tag
     this.props.delete_tags_task(selectedroomname,itemid,tags)
 }

 handleAddition(selectedroomname,itemid,tags) {


   this.props.add_tags_task(selectedroomname,itemid,tags)


 }

 handleDrag(tag, currPos, newPos) {
     let tags = this.state.tags;

     // mutate array
     tags.splice(currPos, 1);
     tags.splice(newPos, 0, tag);

     // re-render
     this.setState({ tags: tags });
 }
  /*

  handleDelete (i) {
     const tags = this.state.tags.slice(0)
     tags.splice(i, 1)
     this.setState({ tags })
   }


   handleAddition (tag) {
     const tags = [].concat(this.state.tags, tag)
     this.setState({ tags })
   }
   */

  expandtaskfunc(selectedroomname,taskid){


    this.props.add_expand_task_number(selectedroomname,taskid);



  }
   onDrop(acceptedFiles, rejectedFiles) {
  // do stuff with files...

}

uploadFile(files){


}
/*

  handledescription(e){
    console.log("handle description");
    this.setState({description:e.target.id})

  }
  */

  onChangeDoer(event,data, nameid){


    var projectname = this.props.selectedroom.name;
    var taskid = nameid;

    var tags = data.value;
    this.props.Tasks_add_Who_Will_Do_This_Task(projectname,taskid,tags)


  }

  onChangeFollower(event,data, nameid){

    var projectname = this.props.selectedroom.name;
    var taskid = nameid;

    var followers = data.value;
    this.props.change_follower_Task(projectname,taskid,followers)


  }

  taskCheckbox(projectname,taskid){

   this.props.task_done_undone(projectname,taskid)

  }

  addtaskfunc(projectname,taskname){

    this.setState({addtaskbutton:!this.state.addtaskbutton})


      if(this.state.taskname!==""){
        this.props.add_new_task(projectname,taskname)
        this.setState({taskname:""})
      }



  }

/*
  handleTaskTags(tags){
    console.log("handle task tags")
    console.log("tags ",tags)
    var tsk = this.state.tasks;
    tsk[0].tags=tags
    console.log("tags in ",tsk)

       this.setState({tasks:tsk});


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


  }
*/
  handlePriority(selectedroomname,taskid,priority){

     this.props.change_priority_tasks(selectedroomname,taskid,priority)


  }
onChange = date => this.setState({ date })


  render() {

             //this is for task tags


              //task tag ends

            var expandtask = this.props.selectedroom.expandtask;
            var taskCheckbox = this.taskCheckbox.bind(this);

            var expandtaskfunc = this.expandtaskfunc.bind(this);

            var tasktags = this.props.selectedroom.tags;
            var membersofproject = this.props.selectedroom.membersofproject;

            //related to tags
            var tasktags = this.state.tags;



           var selectedroomname = this.props.selectedroom.name;
            var handleDelete = this.handleDelete.bind(this)
            //var handleAddition = this.handleAddition.bind(this)
            var handleDrag = this.handleDrag.bind(this)

            //related to tags end


           var roomname = this.props.selectedroom;

            var handleDelete=this.handleDelete.bind(this);
            var uploadFile= this.uploadFile.bind(this);

             var onChangeDoer = this.onChangeDoer.bind(this);
             var onChangeFollower = this.onChangeFollower.bind(this);
            var handlePriority=this.handlePriority.bind(this);
            var tasktagsuggestionsprops = this.props.selectedroom.tasktagssuggestions
            //var handleTaskTags=this.handleTaskTags.bind(this);
            var addtaskfunc = this.addtaskfunc.bind(this);
           var tr = this.props.selectedroom.tasks.map((item,index)=>{

                   var startdate = item.startdate;
                   var enddate = item.enddate;
                   var description =item.description;
                   var files = item.files;
                   var priority = item.priority;
                   var repeat = item.repeat;
                   var followers = item.followers;
                   var tags = item.tags;
                  var tasktagssuggestions = tasktagsuggestionsprops
                   var tg;




                   const doerselectedoptions = [{text: item.doer,value: item.doer,key:item.doer}]



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
                     onChange={(event, data) => onChangeDoer(event, data, item.id)}
                     placeholder='Select who will do this task' fluid multiple selection
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
                   <div id={item.id} value="none" onClick={()=>handlePriority(selectedroomname,item.id,"none")} style={item.priority=="none" ?
                   {backgroundColor : "yellow",height:"30px",width:"60px",borderColor:"red",borderRadius: "4px",borderWidth:"5px"}:{backgroundColor:"white",height:"30px",width:"60px",borderColor:"black"}}>
                     <p id={item.id} value="none">none</p>
                   </div>

                    <div id={item.id} value="low"  onClick={()=>handlePriority(selectedroomname,item.id,"low")} style={item.priority=="low" ? {backgroundColor : "orange",height:"30px",width:"60px",borderColor:"red",borderRadius: "4px",borderWidth:"5px"}:{backgroundColor:"white",height:"30px",width:"60px",borderColor:"black"}}>
                      <p>low</p>
                    </div>
                    <div id={item.id} value="medium"  onClick={()=>handlePriority(selectedroomname,item.id,"medium")} style={item.priority=="medium" ? {backgroundColor : "pink",height:"30px",width:"60px",borderColor:"red",borderRadius: "4px",borderWidth:"5px"}:{backgroundColor:"white",height:"30px",width:"60px",borderColor:"black"}}>
                      <p>medium</p>
                    </div>
                    <div id={item.id} value="high"  onClick={()=>handlePriority(selectedroomname,item.id,"high")} style={item.priority=="high" ? {backgroundColor : "seagreen",height:"30px",width:"60px",borderRadius: "4px",borderWidth:"5px",borderColor:"red"}:{backgroundColor:"white",height:"30px",width:"60px",borderColor:"black"}}>
                      <p>high</p>
                    </div>
                     </div>
                   </TabPanel>

                   <TabPanel>
                   <div style={{height:"209px",width:"75%"}}>
                     <p>Select follower</p>
                     <Dropdown onChange={(event,data) => onChangeFollower(event, data, item.id) }
                     placeholder='Select follower' fluid multiple selection options={membersofproject} />
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

                     <ReactTags tags={item.tasktags}
                     suggestions={tasktagsuggestionsprops}
                     handleDelete={this.handleDelete.bind(this,selectedroomname,item.id)}
                     handleAddition={this.handleAddition.bind(this,selectedroomname,item.id)}
                     handleDrag={handleDrag} />
                     </div>
                   </TabPanel>


                </Tabs>
                <button>save</button>
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
    return bindActionCreators({change_follower_Task,delete_tags_task,change_priority_tasks,task_done_undone,add_tags_task,add_new_task,fetchprojectlist,
      Tasks_add_Who_Will_Do_This_Task,add_expand_task_number},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Todosingle)
