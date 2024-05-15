/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { MyContext } from '../Helper/Context'

const ContextAPI2 = () => {
    //Accessing the username variable using useContext:
    const username = useContext(MyContext);
  return (
    <div className='w-56 h-32 rounded-3xl text-center bg-red-400 p-10 m-20'>
          <h1 className='text-2xl font-bold text-white'>{username}</h1>
    </div>
  )
}

export default ContextAPI2