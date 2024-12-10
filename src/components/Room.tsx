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

      <div className="w-full h-auto mt-4">

  {/* Second and Third Images */}
  <div className="flex flex-wrap justify-center gap-4 lg:gap-14 mt-8">
    {/* Second Image */}
    <div className="w-full sm:w-auto flex justify-center">
      <Image 
        src="/images/image.png" 
        alt="" 
        width={300} 
        height={100} 
        className="object-contain"
      />
    </div>

    {/* Third Image */}
    <div className="w-full sm:w-auto flex justify-center">
      <Image 
        src="/images/Rectangle 25.png" 
        alt="" 
        width={300} 
        height={100} 
        className="object-contain"
      />
    </div>
  </div>
</div>

    </div>
  )
}

export default Room
