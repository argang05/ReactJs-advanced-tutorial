/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const TwoWayBinding = () => {
    //Two Way Binding using useState:
    //Before usage of two way binding, you cannot see what is typed in input field.
    const [username, setUsername] = useState("");
    return (
        <>
            {/* Two way binding example: */}
            <h1 className='text-3xl font-bold text-center mb-5'>TwoWayBinding Component:</h1>
            <div>
                <h1 className='mb-5 text-2xl'>Enter Your Username: </h1>
                <form>
                    {/* Changing the state of username as user fill the input field */}
                    <input
                        className="border-2 border-zinc-800 px-4 py-2 text-xl"
                        type='text' 
                        // Using Two way binding to display preview of the input text in input field:
                        value={username}
                        onChange={
                            // onChange listener will give us each letter user is typing in input 
                            //field
                            (e) => {
                                //setting the username as the value given by the user
                                // console.log(e.target.value)
                                setUsername(e.target.value);
                            }
                        }
                        />
                </form>
                <h1 className='mt-5 text-xl'>Your User Name: {username}</h1>
            </div>


        </>
    )
}

export default TwoWayBinding