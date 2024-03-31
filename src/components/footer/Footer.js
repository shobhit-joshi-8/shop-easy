import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <footer className='bg-black text-white'>
        <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
          <div className='w-64 md:mx-0 text-center md:text-left'>
            <h3 className='font-bold text-2xl'>
              Shop<span className='text-red-500'>Ez</span>
            </h3>
          </div>

          <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>

            {/* MENU */}
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
                MENU
              </h2>
              <ul className='list-none mb-10'>
                <li>Features</li>
                <li className='mt-1'>Info Center</li>
                <li className='mt-1'>News Blog</li>
                <li className='mt-1'>Login</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium tracking-widest text-lg mb-3'>Company</h2>
              <ul className='list-none mb-10'>
                <li>About Us</li>
                <li className='mt-1'>Privacy Policy</li>
                <li className='mt-1'>Terms & Conditions</li>
                <li className='mt-1'>Login</li>
              </ul>
            </div>


            {/* CONTACT */}
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium tracking-widest text-lg mb-3'>Contact</h2>
              <ul className='list-none mb-10'>
                <li>Contact Sales</li>
                <li className='mt-1'>+1236547966</li>
                <li className='mt-1'>News Blog</li>
                <li className='mt-1'>+254669763</li>
              </ul>
            </div>

            {/* TECH SUPPORT */}
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium tracking-widest text-lg mb-3'>Tech Support</h2>
              <ul className='list-none mb-10'>
                <li>Contact Support</li>
                <li className='mt-1'>Info Center</li>
                <li className='mt-1'>Activate</li>
              </ul>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className='bg-red-500 text-white'>
          <div className='conatiner mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-sm text-center sm:text-left'>© 2024 Shop-Ez ---<span>@copyright</span></p>
            <p className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
              <span className='mr-2'><FaFacebook size={30} /></span>
              <span className='mr-2'>
                <FaInstagram size={30} />
              </span>
              <span>
                <FaSquareTwitter size={30} />
              </span>

            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer