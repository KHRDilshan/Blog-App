import React from 'react'
import "./login.css";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>

      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username'/>
        <input required type="emailt" placeholder='email'/>
        <input required type="password" placeholder='password'/>
        <button>Register</button>
        <p>This is an error</p>
        <span>Do you have and account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
