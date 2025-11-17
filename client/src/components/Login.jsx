import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='profileContainer flex flex-col gap-2 flex-1 p-5 pb-80'>
        <h2 className='font-bold text-2xl'>Login Page Coming Soon...</h2>
        <Link to="/register">Go To Register Page</Link>
    </div>
  )
}

export default Login