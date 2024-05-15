/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import {MyContext} from '../Helper/Context'

const ContextAPI = () => {
    //Accessing the username variable using useContext:
    const username = useContext(MyContext);
  return (
    <>
    <h1 className='text-3xl font-bold text-center mt-10'>ContextAPI Component:</h1>
    <div className='w-56 h-32 rounded-3xl text-center bg-green-400 p-10 mt-20'>
          <h1 className='text-2xl font-bold text-white'>{username}</h1>
      </div>
    </>
  )
}

export default ContextAPI