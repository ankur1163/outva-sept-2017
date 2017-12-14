import axios from 'axios';
const API_KEY = 'a21891776b9486374eb67cad13e50d0c';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const req = {selectedroom:"",setcolor:false,hours:2,searchterm:"",
selectedroom:null,
dropdownvalue:1,
dropdownvaluetwo:1,

chatrooms:[
           {
             key:1,

             tasktagssuggestions:["mango", "pineapple", "orange", "pear"],
            color:false,
            name:"private-messages",

            notepad:"first one",
            text:"ankur",
            "messages":[{
                "type" : 0,
                "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
                "text": "project 1 , Hello! Good Morning!,how are you ankur",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }, {
                "type": 1,
                "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
                "text": "project 1 ,Hello! Good Afternoon!",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }],
            expandtask:null,
            membersofproject:[
                              {text: 'a',value: 'a'},
                              {text: 'b',value: 'b'},
                              {text: 'c',value: 'c'},
                              {text: 'd',value: 'd'},
                              {text: 's',value: 's'},
                              {text: 'e',value: 'e'},
                            ],
            tasks:[
              {
                id:0,
                taskname:"private message go to school",
                doer:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
                startdate:"",
                taskStatusLive:true,
                enddate:"",
                description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"high",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
                tasktags:[{ id: 1, text: "3Thailand" }, { id: 2, text: "3India" }]
             },
             {
               id:1,
               taskname:"web design",
               doer:[{text: ' 2 2 2 Jenny ank Hess',value: 'Jenny Hess'}],
               startdate:"",
               taskStatusLive:true,
               enddate:"",
               description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"low",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
                tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
             }



             ]
          },
          {
            key:2,
            tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
            tasktagssuggestions:["mango", "pineapple", "orange", "pear"],
            color:false,
            name:"project2",
            notepad:"this is great",
            text:"megha",
            "messages":[{
                "type" : 0,
                "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
                "text": "project 2, Hello! Good Morning!,how are you ankur",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }, {
                "type": 1,
                "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
                "text": "project 2, Hello! Good Afternoon!",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }],
            expandtask:null,
            membersofproject:[
                              {text: 'rajpura',value: 'rajpura'},
                              {text: 'patiala',value: 'patiala'},
                              {text: 'sangrur',value: 'sangrur'},
                              {text: 'bathinda',value: 'bathinda'},
                              {text: 'delhi',value: 'delhi'},
                              {text: 'gur',value: 'gur'},
                            ],
            tasks:[
              {
                id:0,
                taskname:"project 2 go to school",
                doer:[{text: 'patiala',value: 'patiala'}],
                startdate:"",
                taskStatusLive:true,
                enddate:"",
                description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"high",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "4Thailand" }, { id: 2, text: "4India" }]
             },
             {
               id:1,
               taskname:"web design",
               doer:["ankur","megha"],
               startdate:"",
               taskStatusLive:true,
               enddate:"",
               description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"low",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
             }



        ]
        },
          {
            key:3,
            tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
            tasktagssuggestions:["mango", "pineapple", "orange", "pear"],
            color:false,
            name:"project3",
            notepad:"awesome is awesome",
            text:"yeah",
            "messages":[{
                "type" : 0,
                "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
                "text": "project 3,Hello! Good Morning!,how are you ankur",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }, {
                "type": 1,
                "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
                "text": "project 3, Hello! Good Afternoon!",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }],
            expandtask:null,
            membersofproject:[
                              {text: 'pen',value: 'pen'},
                              {text: 'pencil',value: 'pencil'},
                              {text: 'lo',value: 'lo'},

                            ],
            tasks:[
              {
                id:0,
                taskname:"project 3 go to school",
                doer:[{text: 'rajpura',value: 'rajpura'}],
                startdate:"",
                taskStatusLive:true,
                enddate:"",
                description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"high",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
             },
             {
               id:1,
               taskname:"web design",
               doer:["ankur","megha"],
               startdate:"",
               taskStatusLive:true,
               enddate:"",
               description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"low",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
             }



        ]
          },
          {
            key:4,
            tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
            tasktagssuggestions:["mango", "pineapple", "orange", "pear"],
            color:false,
            name:"project 4",
            notepad:"hulk hulk",
            text:"shimla",
            "messages":[{
                "type" : 0,
                "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
                "text": "project 4, Hello! Good Morning!,how are you ankur",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }, {
                "type": 1,
                "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
                "text": "project 4 ,Hello! Good Afternoon!",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }],
            expandtask:null,
            membersofproject:[
                              {text: 'laptop',value: 'laptop'},
                              {text: 'mouse',value: 'mouse'},
                              {text: 'pc',value: 'pc'},

                            ],
            tasks:[
              {
                id:0,
                taskname:"project 4 go to school",
                doer:[{text: 'barnala',value: 'barnala'}],
                startdate:"",
                taskStatusLive:true,
                enddate:"",
                description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"high",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
             },
             {
               id:1,
               taskname:"web design",
               doer:["ankur","megha"],
               startdate:"",
               taskStatusLive:true,
               enddate:"",
               description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"low",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
             }



              ]
         },
          {
            key:5,
            tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
            tasktagssuggestions:["mango", "pineapple", "orange", "pear"],
            color:false,
            name:"project 5",
            notepad:"going to new york",
            text:"delhi",
            "messages":[{
                "type" : 0,
                "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
                "text": "project 5 Hello! Good Morning!,how are you ankur",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }, {
                "type": 1,
                "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
                "text": "project 5 Hello! Good Afternoon!",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }],
            expandtask:null,
            membersofproject:[
                              {text: 'ko',value: 'ko'},
                              {text: 'jo',value: 'jo'},
                              {text: 'co',value: 'co'},

                            ],
            tasks:[
              {
                id:0,
                taskname:"project 5 go to school",
                doer:[{text: 'almirah',value: 'almirah'}],
                startdate:"",
                taskStatusLive:true,
                enddate:"",
                description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"high",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
             },
             {
               id:1,
               taskname:"web design",
               doer:["ankur","megha"],
               startdate:"",
               taskStatusLive:true,
               enddate:"",
               description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"low",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
             }



        ]
         },
          {
            key:6,
            tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
            tasktagssuggestions:["mango", "pineapple", "orange", "pear"],
            color:false,
            name:"project 6",
            notepad:"coming back to london",
            text:"rajpura",
            "messages":[{
                "type" : 0,
                "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
                "text": "project 6 Hello! Good Morning!,how are you ankur",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }, {
                "type": 1,
                "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
                "text": "project 6 Hello! Good Afternoon!",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }],
            expandtask:null,
            membersofproject:[
                              {text: 'fan',value: 'fan'},
                              {text: 'pan',value: 'pan'},
                              {text: 'can',value: 'can'},

                            ],
            tasks:[
              {
                id:0,
                taskname:"project 7 go to school",
                doer:[{text: 'laptop',value: 'laptop'}],
                startdate:"",
                taskStatusLive:true,
                enddate:"",
                description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"high",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
             },
             {
               id:1,
               taskname:"web design",
               doer:["ankur","megha"],
               startdate:"",
               taskStatusLive:true,
               enddate:"",
               description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"low",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
             }



        ]
          },
            {
              key:7,
              tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
              tasktagssuggestions:["mango", "pineapple", "orange", "pear"],
              color:false,
              name:"project 7",
              notepad:"the charger is lit",
              text:"paper",
              "messages":[{
                  "type" : 0,
                  "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
                  "text": "project 7 Hello! Good Morning!,how are you ankur",
                  "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
              }, {
                  "type": 1,
                  "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
                  "text": "project 7 Hello! Good Afternoon!",
                  "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
              }],
              expandtask:null,
              membersofproject:[
                                {text: 'boy',value: 'boy'},
                                {text: 'girl',value: 'girl'},
                                {text: 'parent',value: 'parent'},

                              ],
              tasks:[
                {
                  id:0,
                  taskname:"project 7 go to school",
                  doer:[{text: 'get u ',value: 'get u'}],
                  startdate:"",
                  taskStatusLive:true,
                  enddate:"",
                  description:"description for project 1",
                 files:["file.docs","doc1.txt"],
                 priority:"high",
                 followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
                 repeats:"",
                 reminders:[],
                 tags:[],
                 tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
               },
               {
                 id:1,
                 taskname:"web design",
                 doer:["ankur","megha"],
                 startdate:"",
                 taskStatusLive:true,
                 enddate:"",
                 description:"description for project 1",
                 files:["file.docs","doc1.txt"],
                 priority:"low",
                 followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
                 repeats:"",
                 reminders:[],
                 tags:[],
                 tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
               }



          ]
           },

           //start task
          {
            key:8,
            tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
            tasktagssuggestions:["mango", "pineapple", "orange", "pear"],
            color:false,
            name:"project 8",
            notepad:"running in the ground",
            text:"bharthal",
          "messages":[{
              "type" : 0,
              "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
              "text": "project 8 Hello! Good Morning!,how are you ankur",
              "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
          }, {
              "type": 1,
              "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
              "text": "project 8 Hello! Good Afternoon!",
              "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
          }],
          expandtask:null,
          membersofproject:[
                            {text: 'tv',value: 'tv'},
                            {text: 'bv',value: 'bv'},
                            {text: 'pv',value: 'pv'},

                          ],
          tasks:[
            {
              id:0,
              taskname:"go to school",
              doer:["ankur","megha"],
              startdate:"",
              taskStatusLive:true,
              enddate:"",
              description:"description for project 1",
             files:["file.docs","doc1.txt"],
             priority:"high",
             followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
             repeats:"",
             reminders:[],
             tags:[],
             tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
           },
           {
             id:1,
             taskname:"web design",
             doer:["ankur","megha"],
             startdate:"",
             taskStatusLive:true,
             enddate:"",
             description:"description for project 1",
             files:["file.docs","doc1.txt"],
             priority:"low",
             followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
             repeats:"",
             reminders:[],
             tags:[],
             tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }]
           }



      ]
         },

         //ends task
          {
            key:9,
            tasktags:[{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
            tasktagssuggestions:["mango", "pineapple", "orange", "pear"],
            color:false,
            name:"project 9",
            notepad:"abra ka dabra",
            text:"iphone",
            "messages":[{
                "type" : 0,
                "image": "https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
                "text": "project 9 Hello! Good Morning!,how are you ankur",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }, {
                "type": 1,
                "image": "https://static1.squarespace.com/static/53a7236ee4b0370cf58d8c89/5478ceefe4b0542adccf11df/5478ceeee4b0542adccf11c4/1417203462225/Will-headshot-round-small.jpg",
                "text": "project 9 Hello! Good Afternoon!",
                "date":"Wed Oct 11 2017 11:32:19 GMT+0530 (IST)"
            }],
            expandtask:null,
            membersofproject:[
                              {text: 'mkm',value: 'mkm'},
                              {text: 'bkm',value: 'bkm'},
                              {text: 'ckm',value: 'ckm'},

                            ],
            tasks:[
              {
                id:0,
                taskname:"go to school",
                doer:["ankur","megha"],
                startdate:"",
                taskStatusLive:true,
                enddate:"",
                description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"high",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "1Thailand" }, { id: 2, text: "1India" }]
             },
             {
               id:1,
               taskname:"web design",
               doer:["ankur","megha"],
               startdate:"",
               taskStatusLive:true,
               enddate:"",
               description:"description for project 1",
               files:["file.docs","doc1.txt"],
               priority:"low",
               followers:[{key:"jenny",text: 'Jenny ank Hess',value: 'Jenny Hess'}],
               repeats:"",
               reminders:[],
               tags:[],
               tasktags:[{ id: 1, text: "2Thailand" }, { id: 2, text: "2India" }]
             }



        ]
        }
      ]}


export function fetchWeather(city){

  //const url = `http://api.openweathermap.org/data/2.5/forecast?appid=a21891776b9486374eb67cad13e50d0c&q=${city},us`;
  //const request = axios.get(url);
  const req = {name:"ankur"}
  return {
    type:FETCH_WEATHER,
    payload:req
  }
}

export function fetchprojectlist(city){

  //const url = `http://api.openweathermap.org/data/2.5/forecast?appid=a21891776b9486374eb67cad13e50d0c&q=${city},us`;
  //const request = axios.get(url);



  return {
    type:'FETCH_PROJECT_LIST',
    payload:req
  }
}

export function addProjectName(name){

  return {
    type:'ADD_PROJECT_NAME',
    payload:name
  }


}

export function addSelectedRoom(name){
   console.log("inside action",name)
  return {
    type:'ADD_SELECTED_ROOM',
    payload:name
  }


}

export function addEditorText(text,roomname){

   var obj = {editortext:text,roomname:roomname}
  return {
    type:'ADD_EDITORTEXT',
    payload:obj
  }


}

//this function will bring tasks in the view, first render
export function addTasks(text,roomname){

   var obj = {editortext:text,roomname:roomname}
  return {
    type:'ADD_EDITORTEXT',
    payload:obj
  }


}



export function Tasks_add_Who_Will_Do_This_Task(projectname,taskid,tags){

   var obj = {projectname:projectname,taskid:taskid,whowilldotasktags:tags}
  return {
    type:'TASKS_ADD_WHO_WILL_DO_THIS_TASK',
    payload:obj
  }


}

export function add_expand_task_number(selectedroomname,taskid){

   var obj = {projectname:selectedroomname,taskidtoselectforexpanding:taskid}
  return {
    type:'ADD_EXPAND_TASK_NUMBER',
    payload:obj
  }


}

export function add_new_task(projectname,newtaskname){
   console.log("inside action add new task",projectname,newtaskname)
  var obj = {projectname:projectname,newtaskname:newtaskname}
  return {
    type:'ADD_NEW_TASK',
    payload:obj
  }


}

export function task_done_undone(projectname,taskid){
   console.log("inside action add new task",projectname,taskid)
  var obj = {projectname:projectname,taskiddoneundone:taskid}
  return {
    type:'TASK_DONE_UNDONE',
    payload:obj
  }


}

export function change_priority_tasks(projectname,taskid,priority){
   console.log("inside action add new task",projectname,taskid)
  var obj = {projectname:projectname,taskid:taskid,priority:priority}
  return {
    type:'CHANGE_PRIORITY_TASKS',
    payload:obj
  }


}

export function change_follower_Task(projectname,taskid,follower){

   var obj = {projectname:projectname,taskid:taskid,follower:follower};
   console.log("change follower task",obj)
  return {
    type:'CHANGE_FOLLOWER_TASK',
    payload:obj
  }


}

export function add_tags_task(projectname,taskid,tasktags){

   var obj = {projectname:projectname,taskid:taskid,tasktags:tasktags};
   console.log("tasktags ",obj)
  return {
    type:'ADD_TAGS_TASK',
    payload:obj
  }


}
