import axios from 'axios';
const API_KEY = 'a21891776b9486374eb67cad13e50d0c';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const req = {setcolor:false,hours:2,searchterm:"",
dropdownvalue:1,
dropdownvaluetwo:1,
rooms:["private-messages","project2",
"project3","project4","project5",
"project6","project7","project8","project9"],
chatrooms:[{key:1,color:false,name:"private-messages"},
{key:2,color:false,name:"project2"},
{key:3,color:false,name:"project3"},
{key:4,color:false,name:"project 4"},
{key:5,color:false,name:"project 5"},
{key:6,color:false,name:"project 6"},
  {key:7,color:false,name:"project 7"},
{key:8,color:false,name:"project 8"},
{key:9,color:false,name:"project 9"}]
,projectchat:[{projectname:"private-messages",
chatmessages:[{username:"ankur",message:"whatsup"},{username:"ankur",message:"kya hal hai"}]},
{projectname:"project2",
chatmessages:[{username:"ankur",message:"whatsup"},{username:"ankur",message:"kya hal hai"}]} ]}

export function fetchWeather(city){
  console.log("city ",city)
  //const url = `http://api.openweathermap.org/data/2.5/forecast?appid=a21891776b9486374eb67cad13e50d0c&q=${city},us`;
  //const request = axios.get(url);
  const req = {name:"ankur"}
  return {
    type:FETCH_WEATHER,
    payload:req
  }
}

export function fetchprojectlist(city){
  console.log("entered project list ")
  //const url = `http://api.openweathermap.org/data/2.5/forecast?appid=a21891776b9486374eb67cad13e50d0c&q=${city},us`;
  //const request = axios.get(url);

console.log("req ",req)

  return {
    type:'FETCH_PROJECT_LIST',
    payload:req
  }
}

export function addProjectName(name){
  var jr = req;

  jr.rooms.push(name);
  console.log("last item ",jr.chatrooms)
  var lastkey = jr.chatrooms[jr.chatrooms.length-1];
  console.log("lastkey object ",lastkey)
  lastkey = lastkey.key;
  console.log("number before add ",lastkey)
  lastkey=lastkey+1;
  console.log("lastkey is ",lastkey)
  jr.chatrooms.push({key:lastkey,color:false,name:name})
  console.log("req.rooms",req.rooms)
  return {
    type:'ADD_PROJECT_NAME',
    payload:jr
  }


}
