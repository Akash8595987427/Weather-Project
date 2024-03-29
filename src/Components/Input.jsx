import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Input=(props)=>{

    // const [country, setCountry] = useState("belgrade");
    const [values, setValues] = useState("");
  
      const handleSearch=()=>{
        // console.log(values);
        props.getData(values);

  }

    return(
        <>
        <div className="container w-full h-[15vh]  flex justify-center items-center">
            <input onChange={()=>{setValues(event.target.value)}} value={values}  className="w-[80%] px-4 py-2 border-2 border-black rounded-l-xl text font-thin" autoComplete="on" type="text" placeholder="Enter the cities, states or country name in it"/>
           
            <button onClick={handleSearch} className="bg-black p-2 border-2 border-black text-white rounded-r-xl">Search</button>
        </div>


        </>
    )
}

export default Input;