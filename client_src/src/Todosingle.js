import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropzone from 'react-dropzone'
import 'react-tabs/style/react-tabs.css';
import 'react-dates/initialize'
import DatePicker from 'react-date-picker';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Dropdown } from 'semantic-ui-react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
var ReactTags = require('react-tag-autocomplete');



class Todosingle extends Component {
  constructor(props){
    super(props);
    this.state={moretags:[],tags: [
        { id: 1, name: "Ankur" }

      ],
      suggestions: [
        { id: 3, name: "megha" },
        { id: 4, name: "Margaret" },
        { id: 5, name: "Mr. ram" },
        { id: 6, name: "Tom" }
      ],expandtask:0,tasks:[{id:0,taskname:"go to school",doer:["ankur","megha"],startdate:"",enddate:"",description:"description for project 1",
      files:["file.docs","doc1.txt"],priority:"high",followers:["ankur","megha","uma"],repeats:"",reminders:[],tags:[]},
    {id:1,taskname:"web design",doer:["ankur","megha"],startdate:"",enddate:"",description:"description for project 1",
    files:["file.docs","doc1.txt"],priority:"low",followers:["tom","martha","cindy"],repeats:"",reminders:[],tags:[]}



  ]}

  }

  handleDelete(i) {
    var tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags: tags })
  };
  handleAddition(tag) {
    var tags = this.state.tags.concat(tag)
    this.setState({ tags: tags })
  };

  expandtaskfunc(e){
    var id = e.target.id;
    console.log("id is ",id)
    this.setState({expandtask:id})

  }
   onDrop(acceptedFiles, rejectedFiles) {
  // do stuff with files...
  console.log("accepted files",acceptedFiles);
  console.log("rejected files",rejectedFiles)
}

uploadFile(files){
  console.log("upload files: ",files)
}

  handledescription(e){

    this.setState({description:e.target.id})

  }

  onChangeFollower(event,data){
    console.log("event is ",event,"data is ",data);
    var tochange = data.value;
    this.setState({followers:tochange})
  }

  handleMoreTags(tags){
     this.setState({moretags:tags})
  }

  handlePriority(e){
     var id = e.currentTarget.getAttribute("id");
     var tasks = this.state.tasks;



     var ft = tasks.map(function(item){
       console.log("item in ",item);
       if(item.id==id){


          var newitem = item;
          newitem.priority = e.currentTarget.getAttribute("value");
           return newitem
       }
       else{
             return item
       }
     })
     console.log("ft s",ft)
     this.setState({tasks:ft})


  }
onChange = date => this.setState({ date })


  render() {
           console.log("start date is ",this.state.startDate,"end date is ",this.state.endDate);
            console.log("this.state ",this.state);

            var expandtask = this.state.expandtask;
            var expandtaskfunc = this.expandtaskfunc.bind(this);
            var tags = this.state.tags;
            var moretags = this.state.moretags;
            var suggestions = this.state.suggestions;
            var handleDelete=this.handleDelete.bind(this);
            var uploadFile= this.uploadFile.bind(this);
            var handleAddition=this.handleAddition.bind(this);
             var onChangeFollower = this.onChangeFollower.bind(this);
            var handlePriority=this.handlePriority.bind(this);
            var handleMoreTags=this.handleMoreTags.bind(this);
           var tr = this.state.tasks.map(function(item,index){
                   var startdate = item.startdate;
                   var enddate = item.enddate;
                   var description =item.description;
                   var files = item.files;
                   var priority = item.priority;
                   var repeat = item.repeat;
                   var followers = item.followers;
                   var tags = item.tags;

                   console.log("item.priority",item.priority)
                   const options = item.followers.map(function(itemagain){
                     return {key:itemagain,text:itemagain,value:itemagain}
                   })



             return (
               <div id={item.id} key={index}>
               <p id={item.id} onClick={expandtaskfunc}>{item.taskname}</p>
                 <div style={expandtask==index ? {backgroundColor : "white"}:{display:"none"}}>
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
                   <div style={{height:"209px",width:"75%"}}>
                     <p>  Who will do this task? </p>
                     <Dropdown onChange={onChangeFollower} placeholder='Select follower' fluid multiple selection options={options} />
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
                     <Dropdown onChange={onChangeFollower} placeholder='Select follower' fluid multiple selection options={options} />
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
                     <TagsInput value={moretags} onChange={handleMoreTags} />
                     </div>
                   </TabPanel>


                </Tabs>
                </div>
                </div>


             )
           })
    return (
      <div>
       {tr}

      </div>
    )


  }
}

export default Todosingle;
