import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdSend } from "react-icons/md";


const checkout = () => {
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
<div>

<div className="px-4 py-">
  <h1 className="text-3xl font-bold mb-6">BILLING DETAILS</h1>

  {/* Form Container */}
  <div className="space-y-6 max-w-3xl mx-auto lg:mx-0">
    
    {/* Name Field */}
    <div>
      <label className="font-bold text-lg mb-2 block">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
    </div>

    {/* Last Name Field */}
    <div>
      <label className="font-bold text-lg mb-2 block">Last Name</label>
      <input
        type="text"
        placeholder="Enter your last name"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
    </div>

    {/* Company Name Field */}
    <div>
      <label className="font-bold text-lg mb-2 block">Company Name</label>
      <input
        type="text"
        placeholder="Enter your company name"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
    </div>

    {/* Street Address Field */}
    <div>
      <label className="font-bold text-lg mb-2 block">Street Address</label>
      <input
        type="text"
        placeholder="Enter your street address"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
    </div>

    {/* Town Field */}
    <div>
      <label className="font-bold text-lg mb-2 block">Town</label>
      <input
        type="text"
        placeholder="Enter your town"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
    </div>

    {/* Province Field */}
    <div>
      <label className="font-bold text-lg mb-2 block">Province</label>
      <input
        type="text"
        placeholder="Enter your province"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
    </div>

    {/* Postal Code Field */}
    <div>
      <label className="font-bold text-lg mb-2 block">Postal Code</label>
      <input
        type="text"
        placeholder="Enter your postal code"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
    </div>

    {/* Phone Number Field */}
    <div>
      <label className="font-bold text-lg mb-2 block">Phone Number</label>
      <input
        type="text"
        placeholder="Enter your phone number"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
    </div>

    {/* Email Address Field */}
    <div>
      <label className="font-bold text-lg mb-2 block">Email Address</label>
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
    </div>
    
  </div>
</div>
</div>






















  <div className="bg-white text-black px-6 py-10 lg:px-20">
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

    </div>
  )
}

export default checkout