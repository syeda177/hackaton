import Image from 'next/image'
import React from 'react'

export const Product = () => {
  return (
    <div className="px-6 py-10">
      {/* Title */}
      <div className="text-center text-3xl font-bold mb-8">Our Products</div>
      
      {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="image-wrapper">
          <Image 
            src="/images/Featured Products1.png" 
            alt="Featured Product 1" 
            width={150} 
            height={150} 
            className="object-contain"
          />
        </div>
        <div className="image-wrapper">
          <Image 
            src="/images/Featured Products2.png" 
            alt="Featured Product 2" 
            width={150} 
            height={150} 
            className="object-contain"
          />
        </div>
        <div className="image-wrapper">
          <Image 
            src="/images/Featured Products3.png" 
            alt="Featured Product 3" 
            width={150} 
            height={150} 
            className="object-contain"
          />
        </div>
        <div className="image-wrapper">
          <Image 
            src="/images/Featured Products4.png" 
            alt="Featured Product 4" 
            width={150} 
            height={150} 
            className="object-contain"
          />
        </div>
      </div>
        <div className='mt-8'>
            
            {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="image-wrapper">
          <Image 
            src="/images/im1.png" 
            alt="Featured Product 1" 
            width={150} 
            height={150} 
            className="object-contain"
          />
        </div>
        <div className="image-wrapper">
          <Image 
            src="/images/im2.png" 
            alt="Featured Product 2" 
            width={150} 
            height={150} 
            className="object-contain"
          />
        </div>
        <div className="image-wrapper">
          <Image 
            src="/images/im3.png" 
            alt="Featured Product 3" 
            width={150} 
            height={150} 
            className="object-contain"
          />
        </div>
        <div className="image-wrapper">
          <Image 
            src="/images/im4.png" 
            alt="Featured Product 4" 
            width={150} 
            height={150} 
            className="object-contain"
          />
        </div>
      </div>
      
        </div>
    </div>
  )
}

