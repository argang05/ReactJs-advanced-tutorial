/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCalling = () => {
    //Creating a function to fetch data from api using axios:
    //Using async and await as api calling is an async task:
    const [userDataArray, setUserDataArray] = useState([]);

    const getUserData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        //in the response section the actual usable data is associated with key "data" which
        //returns an array of objects:
        setUserDataArray(response.data)
    }
    //UseEffect Hook is used to run a function or a piece of code based on certain situation:
    //In this case, it is used to run getUserData() automatically without clicking the button:
    // useEffect(() => {
    //     getUserData()
    // }, []);
    
    return (
        <>
            <h1 className='text-3xl text-center font-bold'>API Calling Component:</h1>
            <div className='w-76 h-full mt-5 rounded-3xl bg-green-400 text-center p-10'>
                <button onClick={getUserData} className='px-4 py-2 rounded bg-blue-500 text-white text-lg font-bold'>
                    Get Data
                </button>
                <div className='w-full h-3/4 bg-white mt-5'>
                    {/* Using map function to map through all objects of userDataArray and 
                    displaying the name key value of each object: */}
                    <ul className='text-nowrap'>
                        <li className='text-xl font-bold'>Name : Username</li>
                        {
                            userDataArray.map((userData) => {
                                return <li>{userData.name} : {userData.username}</li>
                            })
                        }
                    </ul>
                </div>
           </div> 
      </>
    
  )
}

export default ApiCalling