import React, { useContext, useEffect } from 'react'
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import '../App.css';

function Login() {
  
  return (
    <div className='n1'>
      <div className='form-left'>
        <h1>Welcome posts board</h1>
     
      </div>
      <div className='form-right'>
        <SigninForm />
        <SignupForm />
      </div>
    </div >
  )
}

export default Login