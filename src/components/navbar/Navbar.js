import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <header className='bg-white border-b border-gray-200'>
                <div className='container mx-auto flex justify-between p-5 items-center'>
                    {/* LOGO */}
                    <div>
                        <Link to='/'>
                            <h3 className='font-bold text-2xl'>
                                Shop<span className='text-red-500'>Ez</span>
                            </h3>
                        </Link>
                    </div>

                    {/* NAVIGATION */}
                    <ul className='flex items-center text-lg justify-center font-semibold'>
                        <Link to='/'>
                            <li className='mr-5 hover:text-gray-900 cursor-pointer'>Home</li>
                        </Link>
                        <li className='mr-5 hover:text-gray-900 cursor-pointer'>All Products</li>
                        <li className='mr-5 hover:text-gray-900 cursor-pointer'>Mens</li>
                        <li className='mr-5 hover:text-gray-900 cursor-pointer'>Kids</li>
                    </ul>

                    {/* LOGIN BUTTON */}
                    <div className='flex justify-center items-center gap-3'>
                        <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold mt-4 md:mt-0'>
                            Login
                        </button>
                        <Link to='/cart'>
                            <button>
                                <FaShoppingCart />
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar