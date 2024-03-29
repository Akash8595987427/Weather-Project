import React from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoPartlySunny } from "react-icons/io5";

const WeatherInfo = () => {

    const day = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

 

  return (

    <div className='container w-[100%] h-auto  flex flex-col items-center '>
      <h1 className='w-[85%] flex justify-start items-start text-2xl font-semibold'>Daily</h1>

        {
            day.map((elem, id)=>{
                return(
                  <>
                    <div key={id} className="weather_info w-[86%] flex bg-white my-2 py-3 px-6 rounded-lg">
                            <div className="left w-full flex gap-8">
                              <p className='text-3xl font-bold text-yellow-400'> {id>3?<MdOutlineWbSunny />:<IoPartlySunny />}</p>
                                <h1 className='font-semibold'>{elem}</h1>
                            </div>
                            <div className="right w-full flex justify-end text-end gap-8 ">
                                <p className='font-semibold'>clear sky</p>
                                <p>32&deg;C</p>
                            </div>
                    </div>
                  

                    </>
                )
            })
        }


    </div>
  )
}

export default WeatherInfo
