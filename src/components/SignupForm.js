import React from 'react';
import axios from 'axios';

function SignupForm() {

  async function signUp(e) {
    e.preventDefault();
    if (e.target.confirmPassword.value !== e.target.passwordsu.value) {
      alert(`Password doesn't match`)
    } else {
      const url = `${process.env.REACT_APP_SERVER}/signup`;
      const user = {
        username: e.target.usernamesu.value,
        email: e.target.email.value,
        password: e.target.confirmPassword.value
      };
      const addedUser = await axios.post(url, user);
      console.log(addedUser.data);
    }
  }

  return (
    <form onSubmit={signUp}>
      <fieldset className='fs'>
        <legend>Sign Up</legend>
        <input type='text' className='formField' placeholder='Username' id='usernamesu' required></input>
        <input type='text' className='formField' placeholder='E-mail' id='email' required></input>
        <input type='password' className='formField' placeholder='Password' id='passwordsu' required></input>
        <input type='password' className='formField' placeholder='Confirm Password' id='confirmPassword' required autoComplete='off'></input>
        <input type='submit' className='formSubmit' value='signUp' ></input>
      </fieldset>
    </form>
  )
}

export default SignupForm