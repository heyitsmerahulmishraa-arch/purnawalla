import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='profileContainer flex flex-col gap-2 flex-1 p-5 pb-80'>
        <div className="formcontainer loginContainer">
          <h2 className='text-center text-3xl font-medium'>Login Page</h2>
          <form action="">
            <div className="container flex flex-col gap-2 py-2">
              <label className="capitalize">Email</label>
              <input type="email" placeholder="Enter your email" className="py-3 px-3 border border-(--border-color) rounded"/>
            </div>
            <div className="container flex flex-col gap-2 py-2">
              <label className="capitalize">Password</label>
              <input type="password" placeholder="Enter your password" className="py-3 px-3 border border-(--border-color) rounded"/>
            </div>
            <div className="flex gap-4 mt-4">
              <button type="submit" className="py-3 px-5 bg-(--primary-color) hover:bg-(--primary-color-dark) text-white rounded">Login</button> 
            <Link to={"/register"} className="py-3 px-5 bg-(--primary-color) hover:bg-(--primary-color-dark) text-white rounded">Register</Link></div> 
          </form>
        </div>
    </div>
  )
}

export default Login