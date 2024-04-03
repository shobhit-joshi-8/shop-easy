import React from 'react'

const heroSection = () => {
  return (
    <>
        <div className='relative'>
            <div>
            <img src='assets/hero-banner.png' alt='hero' className='object-cover object-center'/>
            </div>

            <div className='absolute top-[30%]  w-full text-end right-5'>
                <h1 className='text-1xl font-bold text-red-500 sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl'>Discover Your Next Adventure</h1>
                <p className='text-[10px] lg:text-2xl mt-2 lg:mt-5 font-semibold  '>
                    Shop our Latest Arrival & Unleash Your Style
                </p>
            </div>
        </div>
    </>
  )
}

export default heroSection