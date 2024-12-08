import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { MdSend } from "react-icons/md";

const page = () => {
  return (
    <div>
        <div className="flex items-center justify-between w-full h-[100px] bg-white px-4 md:px-8">
    {/* Logo Section */}
    <div className="flex-shrink-0">
      <Image src="/images/Frame 168.png" alt="Logo" width={185} height={41} />
    </div>
  
    {/* Navigation Section */}
    <div className="hidden md:flex items-center gap-10 text-black">
      <ul className="flex items-center space-x-6 gap-10 text-3xl">
        <li className="font-poppins text-sm sm:text-base">
          <Link href="/">Home</Link>
        </li>
        <li className="font-poppins text-sm sm:text-base">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="font-poppins text-sm sm:text-base">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="font-poppins text-sm sm:text-base">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  
    {/* Icons Section */}
    <div className="flex items-center gap-4 space-x-4">
      <button aria-label="User Profile">
        <IoMdContact className="w-6 h-6 text-black" />
      </button>
      <button aria-label="Search">
        <FaSearch className="w-6 h-6 text-black" />
      </button>
      <button aria-label="Wishlist">
        <FaRegHeart className="w-6 h-6 text-black" />
      </button>
      <button aria-label="Cart">
        <IoMdCart className="w-6 h-6 text-black" />
      </button>
    </div>
  </div>

  <div className="relative">
  <Image 
  src='/images/Rectangle 1.png' 
  alt='' 
  width={600}  // Set a base width (optional for setting aspect ratio)
  height={400} // Set a base height (optional for setting aspect ratio)
  className="w-full h-auto"
/>

  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-black text-3xl font-semibold">Shop Open Now</span>
  </div>
</div>


      
      {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="image-wrapper">
         <button className='hover:shadow-lg'><Link href='/singleproduct'> <Image 
            src="/images/Featured Products1.png" 
            alt="Featured Product 1" 
            width={150} 
            height={150} 
            className="object-contain"
          /></Link></button>
        </div>
        <div className="image-wrapper">
         <button className='hover:shadow-lg'> <Image 
            src="/images/Featured Products2.png" 
            alt="Featured Product 2" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button className='hover:shadow-lg'> <Image 
            src="/images/Featured Products3.png" 
            alt="Featured Product 3" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button className='hover:shadow-lg'> <Image 
            src="/images/Featured Products4.png" 
            alt="Featured Product 4" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
      </div>

      
      {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="image-wrapper">
          <button className='hover:shadow-lg'><Image 
            src="/images/Featured Products1.png" 
            alt="Featured Product 1" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
          <button className='hover:shadow-lg'><Image 
            src="/images/Featured Products2.png" 
            alt="Featured Product 2" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
          <button className='hover:shadow-lg'><Image 
            src="/images/Featured Products3.png" 
            alt="Featured Product 3" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button className='hover:shadow-lg'> <Image 
            src="/images/Featured Products4.png" 
            alt="Featured Product 4" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
      </div>

      {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="image-wrapper">
         <button className='hover:shadow-lg'> <Image 
            src="/images/Featured Products1.png" 
            alt="Featured Product 1" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button className='hover:shadow-lg'> <Image 
            src="/images/Featured Products2.png" 
            alt="Featured Product 2" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button className='hover:shadow-lg'> <Image 
            src="/images/Featured Products3.png" 
            alt="Featured Product 3" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button className='hover:shadow-lg'> <Image 
            src="/images/Featured Products4.png" 
            alt="Featured Product 4" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
      </div>

      
      {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="image-wrapper">
          <button className='hover:shadow-lg'><Image 
            src="/images/Featured Products1.png" 
            alt="Featured Product 1" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
          <button className='hover:shadow-lg'><Image 
            src="/images/Featured Products2.png" 
            alt="Featured Product 2" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
          <button className='hover:shadow-lg'><Image 
            src="/images/Featured Products3.png" 
            alt="Featured Product 3" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button> <Image 
            src="/images/Featured Products4.png" 
            alt="Featured Product 4" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
      </div>

      {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="image-wrapper">
         <button> <Image 
            src="/images/Featured Products1.png" 
            alt="Featured Product 1" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button> <Image 
            src="/images/Featured Products2.png" 
            alt="Featured Product 2" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button> <Image 
            src="/images/Featured Products3.png" 
            alt="Featured Product 3" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button> <Image 
            src="/images/Featured Products4.png" 
            alt="Featured Product 4" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
      </div>

      
      {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="image-wrapper">
          <button><Image 
            src="/images/Featured Products1.png" 
            alt="Featured Product 1" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
          <button><Image 
            src="/images/Featured Products2.png" 
            alt="Featured Product 2" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
          <button><Image 
            src="/images/Featured Products3.png" 
            alt="Featured Product 3" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
        <div className="image-wrapper">
         <button> <Image 
            src="/images/Featured Products4.png" 
            alt="Featured Product 4" 
            width={150} 
            height={150} 
            className="object-contain"
          /></button>
        </div>
      </div>

<div>
    <Image src='/images/Frame 161.png' alt='' width={1440} height={270}></Image>
</div>

<div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10 lg:gap-16 max-w-screen-xl mx-auto">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Funiro.</h1>
          <p className="text-gray-400">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-400 text-xl font-medium">Links</h2>
          <ul className="text-lg space-y-3">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-400 text-xl font-medium">Help</h2>
          <ul className="text-lg space-y-3">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-gray-400 text-xl font-medium">Newsletter</h2>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-white text-black outline-none px-2"
            />
            <MdSend className="w-6 h-6 text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default page