import React from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Layout>
            <div className='relative' >
                <div>
                    <img src='assets/login.png' alt='login' className='object-cover w-full object-center h-[200px]' />
                </div>
                <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
                <h2 className='absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>Sign Up</h2>
            </div>

            <div className="container px-5 py-24 mx-auto flex">
                <div className="md:w-1/3 rounded-lg p-8 flex flex-col mx-auto mt-10 md:mt-0 shadow-md bg-red-500">
                    <h2 className="text-white text-2xl mb-1 font-medium title-font">Sign Up</h2>

                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-white">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-white">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="password" className="leading-7 text-sm text-white">Password</label>
                        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
                    <p className="text-xs text-white mt-3">Do you Have an Account?
                        <Link to='/login'>
                            <button className='cursor-pointer hover:text-blue-300'>Login</button>
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Signup