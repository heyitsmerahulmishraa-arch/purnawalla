import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping, FaUserGroup } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-[var(--primary-color)] text-white">
        <div className="container headerContainer flex items-center justify-between px-4 py-4">
            <Link to={"/"} className='w-[120px]'>
                <img src="image2.svg" alt="brand logo" />
            </Link>
            <ul className='flex gap-7 font-medium'>
                <li>
                    <Link to={"/"} className='hover:text-neutral-500'>Home</Link>
                </li>
                <li>
                    <Link to={"/products"} className='hover:text-neutral-500'>Products</Link>
                </li>
                <li>
                    <Link to={"/category"} className='hover:text-neutral-500'>Category</Link>
                </li>
                <li>
                    <Link to={"/contact"} className='hover:text-neutral-500'>Contact Us</Link>
                </li>
            </ul>
            <div className="headersButton flex items-center gap-6">
                <Link to={"/profile"} className='text-[32px]'><FaUserGroup/></Link>
                <Link to={"/cart"} className='text-[32px] relative'>
                    <FaCartShopping/>
                    <div className='w-3 h-3 rounded-full border absolute top-0 right-0 bg-[var(--secondary-color)]'></div>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header