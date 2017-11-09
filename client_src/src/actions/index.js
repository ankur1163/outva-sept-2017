import axios from 'axios';
const API_KEY = 'a21891776b9486374eb67cad13e50d0c';
export const FETCH_WEATHER = 'FETCH_WEATHER';

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
