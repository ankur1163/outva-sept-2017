
import immutable from 'object-path-immutable';

export default function (state={},action){




  const yourVariable = action.payload;
  const actiontype = action.type;
  var editortext;
  var roomname;
  var whoWillDoTags;
  var taskid;
  var sampleroom;
  var copystate =Object.assign({}, state);
  if(action.type==='ADD_PROJECT_NAME'){
    var randomnumber =  Math.floor(100000 + Math.random() * 900000);
    sampleroom = {
      key:randomnumber,
      color:false,
      name:action.payload,
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
       followers:["ankur","megha","uma"],
       repeats:"",
       reminders:[],
       tags:[],
       tasktags:[]
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
       followers:["tom","martha","cindy"],
       repeats:"",
       reminders:[],
       tags:[],
       tasktags:[]
     }



 ]
   }
  }
  else{

  }



  if(yourVariable !== null && typeof yourVariable == 'object'&& yourVariable.hasOwnProperty("editortext")){
    editortext = yourVariable.editortext ;
    roomname = yourVariable.roomname;

    if(copystate.chatrooms){
      for(var i =0;i<copystate.chatrooms.length;i++){
          if(copystate.chatrooms[i].name===roomname){
             copystate.chatrooms[i].text=editortext
          }
      }

    }
  }

  //change priority task


  if(yourVariable !== null && typeof yourVariable == 'object'&& actiontype==='CHANGE_PRIORITY_TASKS'){
    console.log("entered inside change priority ")
    var projectname = yourVariable.projectname;
    var priority = yourVariable.priority

    taskid = yourVariable.taskid;
    for(var i =0;i<copystate.chatrooms.length;i++){
      console.log("in for loop")
        if(copystate.chatrooms[i].name===projectname ){

          for(var j =0;j<copystate.chatrooms[i].tasks.length;j++){
            if(copystate.chatrooms[i].tasks[j].id===taskid){
              copystate.chatrooms[i].tasks[j].priority=priority;
            }
            else{
              console.log("do nothing")
            }
          }


        }
        else{
          console.log("no no ")

        }
    }


  }
  //taskidtoselectforexpanding

  if(yourVariable !== null && typeof yourVariable == 'object'&& yourVariable.hasOwnProperty("taskidtoselectforexpanding")){
    //{projectname:selectedroomname,taskidtoselectforexpanding:taskid}
    console.log("entered expand task reducer")
    var roomname = yourVariable.projectname;
    var taskidtoselectforexpanding=yourVariable.taskidtoselectforexpanding

    if(copystate.chatrooms){
      console.log("expand task id reducer")
      for(var i =0;i<copystate.chatrooms.length;i++){
        console.log("in for loop")
          if(copystate.chatrooms[i].name===roomname ){

            if(copystate.chatrooms[i].expandtask===taskidtoselectforexpanding){
              copystate.chatrooms[i].expandtask = null;
            }
            else{
              copystate.chatrooms[i].expandtask = taskidtoselectforexpanding;
            }


          }
          else{
            console.log("no no ")

          }
      }

    }
  }

  if(yourVariable !== null && typeof yourVariable == 'object'&& yourVariable.hasOwnProperty("whowilldotasktags")){
    console.log("tags entered ")

    roomname = yourVariable.projectname;
    whoWillDoTags = yourVariable.tags;
    taskid = yourVariable.taskid;
    console.log("projectname ",roomname,"tags",whoWillDoTags,"taskid",taskid)
    if(copystate.chatrooms){
      for(var i =0;i<copystate.chatrooms.length;i++){
          if(copystate.chatrooms[i].name===roomname){
             for(var j =0;j< copystate.chatrooms[j].tasks.length;j++){
                  if(copystate.chatrooms[i].tasks[j].id===taskid){
                    copystate.chatrooms[i].tasks[j].doer=whoWillDoTags
                  }
             }
          }
      }

    }
  }

  //change followers for tasks

  if(yourVariable !== null && typeof yourVariable == 'object'&& actiontype==='CHANGE_FOLLOWER_TASK'){
    console.log("reducer change follower")

    var projectname = yourVariable.projectname;
    var follower = yourVariable.follower;
    var taskid = yourVariable.taskid;
    console.log("projectname ",projectname,"followers",follower,"taskid",taskid)
    if(copystate.chatrooms){
      for(var i =0;i<copystate.chatrooms.length;i++){
          if(copystate.chatrooms[i].name===roomname){
             for(var j =0;j< copystate.chatrooms[j].tasks.length;j++){
                  if(copystate.chatrooms[i].tasks[j].id===taskid){
                    copystate.chatrooms[i].tasks[j].followers=follower
                  }
             }
          }
      }

    }
  }

  //add new task

  if(yourVariable !== null && typeof yourVariable == 'object'&& yourVariable.hasOwnProperty("newtaskname")&& typeof yourVariable.newtaskname !== 'undefined'){
    //{projectname:selectedroomname,taskidtoselectforexpanding:taskid}
    console.log("add new task")
    var roomname = yourVariable.projectname;
    var addnewtask=yourVariable.newtaskname;
    console.log("addnewtask inside it ",addnewtask)


      for(var i =0;i<copystate.chatrooms.length;i++){
        console.log("inside for ")
        var num = Math.floor(Math.random() * 1000000000);
          if(copystate.chatrooms[i].name===roomname){
            var obj = {
              id:num,
              taskname:addnewtask,
              doer:["ankur","megha"],
              startdate:"",
              taskStatusLive:true,
              enddate:"",
              description:"description for project 1",
             files:["file.docs","doc1.txt"],
             priority:"high",
             followers:["ankur","megha","uma"],
             repeats:"",
             reminders:[],
             tags:[],
             tasktags:[]
           }
             copystate.chatrooms[i].tasks.push(obj);

          }
      }

     console.log("copystate",copystate)
  }


  //task done undone

  if(yourVariable !== null && typeof yourVariable == 'object'&& yourVariable.hasOwnProperty("taskiddoneundone")){
    console.log("task done undone ")

    roomname = yourVariable.projectname;

    taskid = yourVariable.taskiddoneundone;
    console.log("projectname ",roomname,"taskid",taskid)

      for(var i =0;i<copystate.chatrooms.length;i++){

          if(copystate.chatrooms[i].name===roomname){
            console.log("second ")
             for(var j =0;j< copystate.chatrooms[i].tasks.length;j++){
                 console.log("copystate.chatrooms[i].tasks[j].id",copystate.chatrooms[i].tasks[j].id,"taskid",taskid)
                  if(copystate.chatrooms[i].tasks[j].id===taskid){
                    console.log("matched")
                    copystate.chatrooms[i].tasks[j].taskStatusLive=!copystate.chatrooms[i].tasks[j].taskStatusLive
                  }
             }
          }
      }


  }


//add task tags

if(yourVariable !== null && typeof yourVariable == 'object'&& actiontype==='ADD_TAGS_TASK'){
  console.log("tadd task tags entered ")

  roomname = yourVariable.projectname;

  taskid = yourVariable.taskid;
  var tasktag =yourVariable.tasktags;
  console.log("roomname ",roomname,"taskid ",taskid,"tasktag ",tasktag)


    for(var i =0;i<copystate.chatrooms.length;i++){

        if(copystate.chatrooms[i].name===roomname){
          console.log("second ")
          if(copystate.chatrooms[i].tasktagssuggestions.indexOf(tasktag)===-1){
             copystate.chatrooms[i].tasktagssuggestions.push(tasktag)

          }


           for(var j =0;j< copystate.chatrooms[i].tasks.length;j++){
               console.log("copystate.chatrooms[i].tasks[j].id",copystate.chatrooms[i].tasks[j].id,"taskid",taskid)
                if(copystate.chatrooms[i].tasks[j].id===taskid){
                  console.log("matched")


                  copystate.chatrooms[i].tasks[j].tasktags.push({
                     id: copystate.chatrooms[i].tasks[j].tasktags.length + 1,
                     text: tasktag
                 });
                }
           }
        }
    }


}

  var tg = action.payload;
  switch(action.type){
    case 'FETCH_PROJECT_LIST':
       return tg
       case 'ADD_PROJECT_NAME':
     return {
        ...state, // make a copy of the current state
        chatrooms: [ // make state.chatrooms a new array, that:
          ...state.chatrooms, // has a copy of state.chatrooms
            sampleroom// and add the new item at the end
        ]
     }
     case 'ADD_SELECTED_ROOM':
        console.log("this is great",action)
       return {
         ...state,
            selectedroom:action.payload
       }

       case 'ADD_EDITORTEXT':
       return copystate

       case 'TASKS_ADD_WHO_WILL_DO_THIS_TASK':

         return copystate
      case 'ADD_EXPAND_TASK_NUMBER':
         return copystate

         case 'ADD_NEW_TASK':
            return copystate
         case 'TASK_DONE_UNDONE':
            return copystate

         case 'CHANGE_PRIORITY_TASKS':
             return copystate

         default:
      return state;
  }
}
