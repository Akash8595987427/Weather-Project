import React from "react";



const WeatherDisplay=(props)=>{
    
    return(
        <>
        <div className="container w-full h-[60vh]  flex justify-center items-start">
            <div className="weather_box w-[38vw] h-[80%]  flex flex-col justify-between items-start p-6 bg-black text-white rounded-lg">
                <div className="box_row1 w-full flex justify-between">
                    <div className="left_info">
                        <h1 className="text-2xl">{props.countryName} , {props.state} </h1>
                        <h3> {props.cloud} </h3>
                    </div>
                    <div className="right_info">Cloud</div>
                </div>
                <div className="box_row2 w-full flex justify-evenly gap-4">
                    <div className="column1 text-7xl text-center font-semibold">{props.temp}&deg;C</div>
                    <div className="column2">
                        <h1>Details</h1>
                        <h1>Feels like</h1>
                        <h1>Wind</h1>
                        <h1>Humidity</h1>
                        <h1>Pressure</h1>
                    </div>
                    <div className="column3"> 
                    <br />
                    <h1>{props.feels_like}&deg;C</h1>
                    <h1>{props.wind} m/s</h1>
                    <h1>{props.humidity} %</h1>
                    <h1>{props.pressure} hPa</h1>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default WeatherDisplay;