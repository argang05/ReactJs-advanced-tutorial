/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
//Creating and exporting a context, a container to store the necessary data to be used by multiple components:
export const MyContext = createContext()
const Context = ({children}) => {
    //Making the username available to all components
    const username = "abcd123@xyz";
  return (
      <div>
          {/* Providing the context */}
          <MyContext.Provider value={username}>
              {children}
          </MyContext.Provider>
    </div>
  )
}

export default Context