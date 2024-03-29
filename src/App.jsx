import React, { useEffect, useState } from "react";
import "./App.css"
import Input from "./Components/Input";
import WeatherDisplay from "./Components/WeatherDisplay";
import WeatherInfo from "./Components/WeatherInfo";


const App=()=>{

  const [country, setCountry] = useState("");
  const [info , setInfo] = useState({
    countryName : "Belgrade",
    state : "RS",
    cloud : "broken clouds",
    temp : 22,
    feels_like : 22,
    wind : 2.06,
    humidity : 78,
    pressure : 1015
  })


  const getData=(values)=>{
    setCountry(values);
    console.log(country);
    console.log(info);
    getApi();

  }


  const getApi =async()=>{
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&lat=44.34&lon=10.99&appid=0ba748cd6822aa8cf0d88a9c1ba5b664`);
    const data = await url.json();
    console.log(data);
    setInfo({...info, countryName : data.sys.country, state : data.name, cloud : data.weather[0].description , temp : data.main.temp, feels_like : data.main.feels_like, wind : data.wind.speed, humidity : data.main.humidity , pressure : data.main.pressure });
    console.log(info);
    
}



  return(

   

    <>
    <div className="container bg-slate-300">
        <Input getData = {getData}/>
        <WeatherDisplay countryName = {info.countryName} state = {info.state} cloud = {info.cloud} temp = {info.temp} feels_like = {info.feels_like} wind = {info.wind} humidity = {info.humidity} pressure = {info.pressure}/>
        <WeatherInfo/>

        {/* {
          useEffect(()=>{
            getApi();
            getData();
          },[])
        } */}
    </div>


    </>
  )
}

export default App;