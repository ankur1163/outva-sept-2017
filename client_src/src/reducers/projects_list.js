
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

    var projectname = yourVariable.projectname;
    var priority = yourVariable.priority

    taskid = yourVariable.taskid;
    for(var i =0;i<copystate.chatrooms.length;i++){

        if(copystate.chatrooms[i].name===projectname ){

          for(var j =0;j<copystate.chatrooms[i].tasks.length;j++){
            if(copystate.chatrooms[i].tasks[j].id===taskid){
              copystate.chatrooms[i].tasks[j].priority=priority;
            }
            else{

            }
          }


        }
        else{


        }
    }


  }
  //taskidtoselectforexpanding

  if(yourVariable !== null && typeof yourVariable == 'object'&& yourVariable.hasOwnProperty("taskidtoselectforexpanding")){
    //{projectname:selectedroomname,taskidtoselectforexpanding:taskid}

    var roomname = yourVariable.projectname;
    var taskidtoselectforexpanding=yourVariable.taskidtoselectforexpanding

    if(copystate.chatrooms){

      for(var i =0;i<copystate.chatrooms.length;i++){

          if(copystate.chatrooms[i].name===roomname ){

            if(copystate.chatrooms[i].expandtask===taskidtoselectforexpanding){
              copystate.chatrooms[i].expandtask = null;
            }
            else{
              copystate.chatrooms[i].expandtask = taskidtoselectforexpanding;
            }


          }
          else{


          }
      }

    }
  }

  if(yourVariable !== null && typeof yourVariable == 'object'&& yourVariable.hasOwnProperty("whowilldotasktags")){


    roomname = yourVariable.projectname;
    whoWillDoTags = yourVariable.tags;
    taskid = yourVariable.taskid;

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


    var projectname = yourVariable.projectname;
    var follower = yourVariable.follower;
    var taskid = yourVariable.taskid;

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

    var roomname = yourVariable.projectname;
    var addnewtask=yourVariable.newtaskname;



      for(var i =0;i<copystate.chatrooms.length;i++){

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


  }


  //task done undone

  if(yourVariable !== null && typeof yourVariable == 'object'&& yourVariable.hasOwnProperty("taskiddoneundone")){


    roomname = yourVariable.projectname;

    taskid = yourVariable.taskiddoneundone;


      for(var i =0;i<copystate.chatrooms.length;i++){

          if(copystate.chatrooms[i].name===roomname){

             for(var j =0;j< copystate.chatrooms[i].tasks.length;j++){

                  if(copystate.chatrooms[i].tasks[j].id===taskid){

                    copystate.chatrooms[i].tasks[j].taskStatusLive=!copystate.chatrooms[i].tasks[j].taskStatusLive
                  }
             }
          }
      }


  }


//add task tags

if(yourVariable !== null && typeof yourVariable == 'object'&& actiontype==='ADD_TAGS_TASK'){


  roomname = yourVariable.projectname;

  taskid = yourVariable.taskid;
  var tasktag =yourVariable.tasktags;



    for(var i =0;i<copystate.chatrooms.length;i++){

        if(copystate.chatrooms[i].name===roomname){

          if(copystate.chatrooms[i].tasktagssuggestions.indexOf(tasktag)===-1){
             copystate.chatrooms[i].tasktagssuggestions.push(tasktag)

          }


           for(var j =0;j< copystate.chatrooms[i].tasks.length;j++){

                if(copystate.chatrooms[i].tasks[j].id===taskid){

                  var tagfound;
                      for(var g =0;g<copystate.chatrooms[i].tasks[j].tasktags.length;g++){
                        if(copystate.chatrooms[i].tasks[j].tasktags[g].text===tasktag){
                          tagfound=true;
                        }
                        else{
                          tagfound = false
                        }

                      }
                      if(!tagfound){
                        var count;
                         if(copystate.chatrooms[i].tasks[j].tasktags.length!==0){
                           count = copystate.chatrooms[i].tasks[j].tasktags[copystate.chatrooms[i].tasks[j].tasktags.length-1].id;
                           copystate.chatrooms[i].tasks[j].tasktags.push({
                              id: count + 1,
                              text: tasktag
                          });
                         }

                       else{
                         count =0;
                         copystate.chatrooms[i].tasks[j].tasktags.push({
                            id: count,
                            text: tasktag
                        });
                       }

                      }



                }
           }
        }
    }


}

//delete the tags in task
if(yourVariable !== null && typeof yourVariable == 'object'&& actiontype==='DELETE_TAGS_TASK'){


  roomname = yourVariable.projectname;

  taskid = yourVariable.taskid;
  var tasktagid =yourVariable.tasktags;



    for(var i =0;i<copystate.chatrooms.length;i++){

        if(copystate.chatrooms[i].name===roomname){




           for(var j =0;j< copystate.chatrooms[i].tasks.length;j++){

                if(copystate.chatrooms[i].tasks[j].id===taskid){


                   for(var k=0;k<copystate.chatrooms[i].tasks[j].tasktags.length;k++){
                      if(copystate.chatrooms[i].tasks[j].tasktags[k].id===tasktagid){



                        copystate.chatrooms[i].tasks[j].tasktags.splice(k,1)

                      }
                   }
                   var id =0;

                   for(var k=0;k<copystate.chatrooms[i].tasks[j].tasktags.length;k++){
                      copystate.chatrooms[i].tasks[j].tasktags[k].id=id;
                      id++
                   }



                }
           }
        }
    }


}
  var tg = action.payload;
  var newobject

  if(yourVariable !== null && typeof yourVariable == 'object'&& actiontype==='MESSAGE_ARRIVED'){
    console.log("from server ",tg)

    newobject = state;

    var newmessage = {
      "type":0,
      "image":"https://i2.wp.com/charlottelifeandhome.com/wp-content/uploads/2015/06/Headshot-round.png",
      "text":tg.text,
      "date":tg.date
    }
    newobject.chatrooms[1].messages.push(newmessage)



  }

  if(yourVariable !== null && typeof yourVariable == 'object'&& actiontype==='FETCH_PROJECT_LIST'){
    console.log("from server ",tg)
    console.log("tg.data",tg.data)
  }
  switch(action.type){
    case 'SAVE_DATA':
        return tg.data[0]
    case 'MESSAGE_ARRIVED':
         return newobject
    case 'FETCH_PROJECT_LIST':
       return tg.data[0]
       case 'ADD_PROJECT_NAME':
     return {
        ...state, // make a copy of the current state
        chatrooms: [ // make state.chatrooms a new array, that:
          ...state.chatrooms, // has a copy of state.chatrooms
            sampleroom// and add the new item at the end
        ]
     }
     case 'ADD_SELECTED_ROOM':

       return {
         ...state,
            selectedroom:action.payload
       }

       case 'ADD_EDITORTEXT':
       return copystate

       case 'TASKS_ADD_WHO_WILL_DO_THIS_TASK':

         return copystate

      case 'CREATE_NEW_USER_DATA':
         return copystate
      case 'ADD_EXPAND_TASK_NUMBER':
         return copystate

         case 'ADD_NEW_TASK':
            return copystate
         case 'TASK_DONE_UNDONE':
            return copystate

         case 'CHANGE_PRIORITY_TASKS':
             return copystate
         case 'DELETE_TAGS_TASK':
               return copystate
         default:
      return state;
  }
}
