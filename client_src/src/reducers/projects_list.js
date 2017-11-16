

export default function (state=[],action){
  console.log("action is ",action)
  console.log("project list reducer")
  console.log("action.payload ",action.payload)
  var tg = action.payload;
  switch(action.type){
    case 'FETCH_PROJECT_LIST':
       return tg;
    case 'ADD_PROJECT_NAME':
         return tg
  }
  return state;
}
