/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = () => {
  const notify = () => {
      //Creating a toast message:
      toast.success('🦄 Login Successful!!!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
  }
  return (
      <div className='flex flex-col items-center justify-center mt-10'>
          {/* On Clicking the button a toast message will appear */}
          <h1 className='text-3xl font-bold text-center'>Toast Message Component:</h1>
          <button
              className='m-10 px-8 py-4 rounded-lg bg-blue-500 text-lg text-white font-bold'
              //On Clicking login button run the notify()  
              onClick={notify}
          >
              Login
          </button>
          {/* Creating a toast container to contain the toast message */}
          <ToastContainer/>
    </div>
  )
}

export default ToastMessage