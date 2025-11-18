import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login",{email: email.value, password: password.value});
      console.log("Login Successful:", response.data);
      alert("Login Successful");
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
    }
  }

  return (
    <div className='profileContainer flex flex-col gap-2 flex-1 p-5 pb-80'>
        <div className="formcontainer loginContainer">
          <h2 className='text-center text-3xl font-medium'>Login Page</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
            <div className="container flex flex-col gap-2 py-2">
              <label className="capitalize">Email</label>
              <input type="email" placeholder="Enter your email" name='email' className="py-3 px-3 border border-(--border-color) rounded"/>
            </div>
            <div className="container flex flex-col gap-2 py-2">
              <label className="capitalize">Password</label>
              <input type="password" placeholder="Enter your password" name='password' className="py-3 px-3 border border-(--border-color) rounded"/>
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