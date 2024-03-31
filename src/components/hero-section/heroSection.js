import React from 'react'

const heroSection = () => {
  return (
    <>
        <div className='relative'>
            <div>
            <img src='assets/hero-banner.png' alt='hero' className='object-cover object-center'/>
            </div>

            <div className='absolute top-[30%] left-[50%]'>
                <h1 className='text-5xl font-bold text-[red]'>Discover Your Next Adventure</h1>
                <p className='text-center text-2xl mt-5 font-semibold'>
                    Shop our Latest Arrival & Unleash Your Style
                </p>
            </div>
        </div>
    </>
  )
}

export default heroSection