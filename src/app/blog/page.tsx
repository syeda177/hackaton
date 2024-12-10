import React from 'react'
import { IoMdContact } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { MdSend } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
const page = () => {
  return (
    <div>
   {/* Header Section */}
   <div className="flex items-center justify-between w-full h-[80px] sm:h-[100px] bg-white px-4 sm:px-6 lg:px-8">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Image src="/images/Frame 168.png" alt="Logo" width={185} height={41} />
      </div>
    
      {/* Navigation Section */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10 text-black">
        <ul className="flex items-center space-x-4 lg:space-x-8 text-sm lg:text-base">
          <li className="font-poppins">
            <Link href="/">Home</Link>
          </li>
          <li className="font-poppins">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="font-poppins">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="font-poppins">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    
      {/* Mobile Menu (Hamburger) */}
      <div className="flex md:hidden">
        <button
          aria-label="Open Menu"
          className="text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    
      {/* Icons Section */}
      <div className="hidden md:flex items-center gap-4">
        <button aria-label="User Profile">
          <IoMdContact className="w-6 h-6 text-black" />
        </button>
        <button aria-label="Search">
          <IoSearchOutline className="w-6 h-6 text-black" />
        </button>
        <Link href="/compare">
          <button aria-label="Wishlist">
            <FaRegHeart className="w-6 h-6 text-black" />
          </button>
        </Link>
        <Link href="/cart">
          <button aria-label="Cart">
            <AiOutlineShoppingCart className="w-6 h-6 text-black" />
          </button>
        </Link>
      </div>
    </div>

{/* Banner Section */}
<div className="relative">
  <Image
    src="/images/Rectangle 1.png"
    alt="Shop Open Now"
    width={600}
    height={400}
    className="w-full h-auto object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center">
  <div className="flex flex-col items-center">

<h1 className="text-3xl font-bold text-black">Blog</h1>


<nav className="text-sm text-gray-600 mt-2">
  <a href="/" className="hover:underline">
    Home
  </a>{" "}
  &gt;{" "}
  <a href="/comparison" className="hover:underline">
    Comparison
  </a>
</nav>
</div>
  </div>
</div>
<div className='ml-2'>
  <div className="flex justify-center">
    <input 
      type='text' 
      placeholder='Search' 
      className='border border-gray-300 mt-7 h-[60px] w-full sm:w-[300px] md:w-[400px] lg:w-[500px] rounded-lg'
    />
  </div>
</div>


  {/* Category and Counts Section */}
  <div className=" flex w-full sm:w-[50%] md:w-[50%] lg:w-[40%] p-4 mt-12 sm:mt-0">
    <div className="ml-5 sm:ml-10 md:ml-16 lg:ml-20">
      <h1 className="text-2xl font-bold mt-9">Categories</h1>
      <p className='mt-4 text-gray-400'>Crafts</p>
      <p className='mt-4 text-gray-400'>Design</p>
      <p className='mt-4 text-gray-400'>Interior</p>
      <p className='mt-4 text-gray-400'>Wood</p>

      <div className="mt-6">
        <p className='mt-4 text-gray-400'>2</p>
        <p className='mt-4 text-gray-400'>3</p>
        <p className='mt-4 text-gray-400'>1</p>
        <p className='mt-4 text-gray-400'>7</p>
      </div>
    </div>
  </div>
  
<div className="flex flex-wrap mt-12">
  {/* Image Section */}
  <div className="w-full sm:w-[50%] md:w-[50%] lg:w-[60%] p-4">
    <div className="ml-5 sm:ml-10 md:ml-16 lg:ml-20">
      <Image 
        src={"/images/r1.png"} 
        alt="Design Image" 
        width={600} 
        height={500} 
        className="w-full h-auto object-cover rounded-md"
      />
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
        Going all-in with millennial design
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2 leading-relaxed max-w-prose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className='cursor-pointer hover:underline ml-24 mt-5'>READ MORE</div>
    </div>
  </div>
</div>

<div className="mt-12 flex flex-wrap">
  {/* Image 2 Section */}
  <div className="w-full sm:w-[50%] md:w-[50%] lg:w-[60%] p-4">
    <div className="ml-5 sm:ml-10 md:ml-16 lg:ml-20">
      <Image 
        src={"/images/r2.png"} 
        alt="Design Image" 
        width={600} 
        height={500} 
        className="w-full h-auto object-cover rounded-md"
      />
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
        Exploring new ways of decorating
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2 leading-relaxed max-w-[45ch]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className='cursor-pointer hover:underline ml-24 mt-5'>READ MORE</div>
    </div>
  </div>

  {/* Image 3 Section */}
  <div className="w-full sm:w-[50%] md:w-[50%] lg:w-[60%] p-4">
    <div className="ml-5 sm:ml-10 md:ml-16 lg:ml-20">
      <Image 
        src={"/images/r3.png"} 
        alt="Design Image" 
        width={600} 
        height={500} 
        className="w-full h-auto object-cover rounded-md"
      />
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
        Handmade pieces that took time to make
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2 leading-relaxed max-w-[45ch]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className='cursor-pointer hover:underline ml-24 mt-5'>READ MORE</div>
    </div>
  </div>
</div>

{/* Features Section */}
<div className="bg-pink-100 mt-4 py-8">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "High Quality",
          description: "Crafted from top materials",
          icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          ),
        },
        {
          title: "Warranty Protection",
          description: "Over 2 years",
          icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          ),
        },
        {
          title: "Free Shipping",
          description: "Order over $150",
          icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          ),
        },
        {
          title: "24 / 7 Support",
          description: "Dedicated support",
          icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          ),
        },
      ].map((feature, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="bg-neutral-200 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {feature.icon}
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-neutral-800 text-sm sm:text-base lg:text-lg">
              {feature.title}
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm lg:text-base">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Footer Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 max-w-screen-xl mx-auto mt-12">
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
            <button className="flex-shrink-0 px-3">
              <MdSend className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}
export default page
