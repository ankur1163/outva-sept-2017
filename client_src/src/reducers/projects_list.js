
import immutable from 'object-path-immutable';

export default function (state={},action){




  const yourVariable = action.payload;
  var editortext;
  var roomname;
  var whoWillDoTags;
  var taskid;

  var copystate =Object.assign({}, state);



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

  //taskidtoselectforexpanding

  if(yourVariable !== null && typeof yourVariable == 'object'&& yourVariable.hasOwnProperty("taskidtoselectforexpanding")){
    //{projectname:selectedroomname,taskidtoselectforexpanding:taskid}

    var roomname = yourVariable.projectname;
    var taskidtoselectforexpanding=yourVariable.taskidtoselectforexpanding

    if(copystate.chatrooms){
      for(var i =0;i<copystate.chatrooms.length;i++){
          if(copystate.chatrooms[i].name===roomname){
             copystate.chatrooms[i].expandtask=taskidtoselectforexpanding
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


  var tg = action.payload;
  switch(action.type){
    case 'FETCH_PROJECT_LIST':
       return tg
       case 'ADD_PROJECT_NAME':
     return {
        ...state, // make a copy of the current state
        chatrooms: [ // make state.chatrooms a new array, that:
          ...state.chatrooms, // has a copy of state.chatrooms
           {key: state.chatrooms.length+1, color: false, name: action.payload} // and add the new item at the end
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

         default:
      return state;
  }
}
