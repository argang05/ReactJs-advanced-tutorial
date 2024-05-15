/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Children, useState } from 'react'
import TwoWayBinding from './TwoWayBinding'
import ApiCalling from './ApiCalling'
import ContextAPI from './ContextAPI'
import MyContext  from '../Helper/Context'
import Context from '../Helper/Context'
import ContextAPI2 from './ContextAPI2'
import ToastMessage from './ToastMessage'

const App = () => {
  return (
    <>
      <div className="w-full h-screen p-10">
        
        <TwoWayBinding />

        <ApiCalling />

        {/* All About MyContext */}
        {/* Creating MyContext Element to place all components which can access the variable username */}
        <MyContext>
          {/* Inside This, Place all the components where you want to provide the context/username variable */}
          {/* Uncomment the below code to see effect of Context API */}

          <ContextAPI />
          <ContextAPI2 />

        </MyContext>

        <ToastMessage/>




      </div>

    </>
  )
}

export default App