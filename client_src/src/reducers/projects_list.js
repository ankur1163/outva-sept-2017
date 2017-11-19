
import immutable from 'object-path-immutable';

export default function (state=[],action){
  console.log("state ",state)


  console.log("action.payload ",action.payload)

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

       return {
         ...state,
            selectedroom:action.payload
       }
         default:
      return state;
  }
}
