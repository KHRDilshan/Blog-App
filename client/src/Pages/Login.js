import React from 'react'
import "./login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth'>

      <h1 id='lgn'>Login</h1>
      <form>
        <input type="text" placeholder='username'/>
        <input type="text" placeholder='password'/>
        <button className='lbtn'>Login</button>
        <p className='er'>This is an error</p>
        <span>Don't you have and account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login
