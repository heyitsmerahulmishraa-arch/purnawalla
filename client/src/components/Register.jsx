import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


const Register = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    try {
      await axios.post("http://localhost:3000/api/auth/signup",{name: name.value, email: email.value, password: password.value})
      alert("Registration Successful")
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error);
    }
  }

  return (
    <div className='profileContainer flex flex-col gap-2 flex-1 p-5 pb-80'>
        <div className="formcontainer registerContainer">
          <h2 className='text-center text-3xl font-medium'>Register Page</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
            <div className="container flex flex-col gap-2 py-2">
              <label className="capitalize">Username</label>
              <input type="text" placeholder="Enter your username" name='name' className="py-3 px-3 border border-(--border-color) rounded"/>
            </div>
            <div className="container flex flex-col gap-2 py-2">
              <label className="capitalize">Email</label>
              <input type="email" placeholder="Enter your email" name='email' className="py-3 px-3 border border-(--border-color) rounded"/>
            </div>
            <div className="container flex flex-col gap-2 py-2">
              <label className="capitalize">Password</label>
              <input type="password" placeholder="Enter your password" name='password' className="py-3 px-3 border border-(--border-color) rounded"/>
            </div>
            <div className="flex gap-4 mt-4">
              <button type="submit" className="py-3 px-5 bg-(--primary-color) hover:bg-(--primary-color-dark) text-white rounded">Register</button> 
            <Link to={"/login"} className="py-3 px-5 bg-(--primary-color) hover:bg-(--primary-color-dark) text-white rounded">Login</Link></div> 
          </form>
        </div>
    </div>
  )
}

export default Register