import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="mt-6 px-4">
      {/* Title Section */}
      <div className="text-center font-bold text-3xl sm:text-4xl md:text-5xl">
        Browse The Range
      </div>

      {/* Subtitle Section */}
      <div className="text-center text-lg sm:text-xl mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {/* TEA TABLE */}
        <div className="image-wrapper max-w-xs sm:max-w-sm md:max-w-md">
          <Image
            src="/images/Mask Group.png"
            alt="Tea Table"
            width={350}
            height={300}
            className="object-contain"
          />
          <div className="text-2xl sm:text-3xl text-center mt-5">TEA TABLE</div>
        </div>

        {/* SOFA */}
        <div className="image-wrapper max-w-xs sm:max-w-sm md:max-w-md">
          <Image
            src="/images/Image-living room.png"
            alt="Sofa"
            width={350}
            height={300}
            className="object-contain"
          />
          <div className="text-2xl sm:text-3xl text-center mt-5">SOFA</div>
        </div>

        {/* TABLE */}
        <div className="image-wrapper max-w-xs sm:max-w-sm md:max-w-md">
          <Image
            src="/images/Mask Group1.png"
            alt="Table"
            width={350}
            height={300}
            className="object-contain"
          />
          <div className="text-2xl sm:text-3xl text-center mt-5">TABLE</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
