import React, { useContext, useState } from 'react';
import axios from 'axios';
import base64 from 'base-64';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexs/AuthProvider';
import cookies from "react-cookies";


function SigninForm() {

  const { isLogged, setIsLogged } = useContext(AuthContext)

  async function login(e) {
    e.preventDefault();
    const username = e.target.usernameli.value;
    const password = e.target.passwordli.value;
    const url = `${process.env.REACT_APP_SERVER}/signin`
    const encoded = base64.encode(`${username}:${password}`);
    const basicAuth = { headers: { authorization: `Basic ${encoded}` } };
    const axiosRespose = await axios.post(url, {}, basicAuth);
    const token = axiosRespose.data.token;
    if (token) {
      cookies.save(`token`, token);
      cookies.save(`username`, axiosRespose.data.user.username);
      cookies.save(`_id`, axiosRespose.data.user._id);
      setIsLogged(true);
    } else {
      alert('Login faild Enter correct Username or Password');
    }
  }


  return (
    (isLogged) ? <Navigate to='/' /> :
      <form onSubmit={login}>
        <fieldset className='fs'>
          <legend>Login</legend>
          <input type='text' className='formField' placeholder='Username' id='usernameli' required></input>
          <input type='password' className='formField' placeholder='Password' id='passwordli' required autoComplete='off'></input>
          <input type='submit' className='formSubmit' value='login' autoComplete='off' ></input>
        </fieldset>
      </form>
  )
}

export default SigninForm