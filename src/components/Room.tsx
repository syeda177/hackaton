import Image from 'next/image'
import React from 'react'

const Room = () => {
  return (
    <div className="w-full h-auto mt-4">
      {/* Title Image */}
      <div>
        <Image 
          src='/images/title.png' 
          alt='' 
          width={500} 
          height={100} 
          className='mt-24 ml-4 sm:ml-10 md:ml-20 lg:ml-[100px]'
        />
      </div>

      {/* Second Image */}
      <div>
        <Image 
          src='/images/image.png' 
          alt='' 
          width={300} 
          height={100} 
          className='-mt-12 sm:-mt-24 md:-mt-36 lg:-mt-52 ml-4 sm:ml-20 md:ml-[300px] lg:ml-[600px]'
        />
      </div>

      {/* Third Image */}
      <div>
        <Image 
          src='/images/Rectangle 25.png' 
          alt='' 
          width={300} 
          height={100} 
          className='ml-4 sm:ml-20 md:ml-[200px] lg:ml-[1000px] -mt-[300px] sm:-mt-[350px] md:-mt-[400px]'
        />
      </div>
    </div>
  )
}

export default Room
