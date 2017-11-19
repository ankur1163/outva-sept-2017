import axios from 'axios';
const API_KEY = 'a21891776b9486374eb67cad13e50d0c';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const req = {selectedroom:"",setcolor:false,hours:2,searchterm:"",
selectedroom:null,
dropdownvalue:1,
dropdownvaluetwo:1,

chatrooms:[{key:1,
            color:false,
            name:"private-messages",notepad:"first one",
            chatmessages:[{username:"ankur",message:"private messages"},{username:"ankur",message:"kya hal hai"}]},
{key:2,color:false,name:"project2",notepad:"this is great",
chatmessages:[{username:"ankur",message:"project 2"},{username:"ankur",message:"good project 2"}]},
{key:3,color:false,name:"project3",notepad:"awesome is awesome",
chatmessages:[{username:"ankur",message:"project 3"},{username:"ankur",message:"project 3 3 3 "}]},
{key:4,color:false,name:"project 4",notepad:"hulk hulk",
chatmessages:[{username:"ankur",message:"whatsup"},{username:"ankur",message:"kya hal hai"}]},
{key:5,color:false,name:"project 5",notepad:"going to new york",
chatmessages:[{username:"ankur",message:"whatsup"},{username:"ankur",message:"kya hal hai"}]},
{key:6,color:false,name:"project 6",notepad:"coming back to london",
chatmessages:[{username:"ankur",message:"whatsup"},{username:"ankur",message:"kya hal hai"}]},
  {key:7,color:false,name:"project 7",notepad:"the charger is lit",
chatmessages:[{username:"ankur",message:"whatsup"},{username:"ankur",message:"kya hal hai"}]},
{key:8,color:false,name:"project 8",notepad:"running in the ground",
chatmessages:[{username:"ankur",message:"whatsup"},{username:"ankur",message:"kya hal hai"}]},
{key:9,color:false,name:"project 9",notepad:"abra ka dabra",
chatmessages:[{username:"ankur",message:"whatsup"},{username:"ankur",message:"kya hal hai"}]}]}


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

  return {
    type:'ADD_PROJECT_NAME',
    payload:name
  }


}

export function addSelectedRoom(name){
   console.log("addselected room ")
  return {
    type:'ADD_SELECTED_ROOM',
    payload:name
  }


}
