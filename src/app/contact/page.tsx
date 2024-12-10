'use client'

import React from 'react'
import { IoMdContact } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { MdSend } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
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

<h1 className="text-3xl font-bold text-black">Contact</h1>


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

<div className="px-4 py-8">
  {/* Title Section */}
  <div>
    <h2 className="text-4xl font-bold text-center mt-8">Get In Touch With Us</h2>
    <p className="text-gray-400 text-sm text-center mt-5 max-w-3xl mx-auto">
      For more information about our products & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
    </p>
  </div>

  {/* Main Content */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 max-w-screen-lg mx-auto">
    {/* Left Column (Contact Details) */}
    <div className="space-y-10">
      {/* Address */}
      <div className="flex items-start gap-4">
        <FaLocationDot className="text-pink-500 text-3xl" />
        <div>
          <h3 className="text-2xl font-bold">Address</h3>
          <p className="mt-2">236 5th SE Avenue, New York NY10000, United States</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <FaPhoneAlt className="text-pink-500 text-3xl" />
        <div>
          <h3 className="text-2xl font-bold">Phone</h3>
          <p className="mt-2">
            Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>

      {/* Working Time */}
      <div className="flex items-start gap-4">
        <FaClock className="text-pink-500 text-3xl" />
        <div>
          <h3 className="text-2xl font-bold">Working Time</h3>
          <p className="mt-2">
            Monday-Friday: 9:00 - 22:00 <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>

    {/* Right Column (Contact Form) */}
    <div className="space-y-6">
      {/* Name Field */}
      <div>
        <label className="font-bold text-lg mb-2 block">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="font-bold text-lg mb-2 block">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label className="font-bold text-lg mb-2 block">Subject</label>
        <input
          type="text"
          placeholder="Enter your subject"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />
      </div>

      {/* Message Field */}
      <div>
        <label className="font-bold text-lg mb-2 block">Message</label>
        <textarea
          placeholder="Enter your message"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button className="bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-400">
          Send Message
        </button>
      </div>
    </div>
  </div>
</div>



      <div className="bg-pink-100 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-neutral-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800">High Quality</h3>
              <p className="text-neutral-500">Crafted from top materials</p>
            </div>
          </div>
  
          <div className="flex items-center space-x-4">
            <div className="bg-neutral-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800">Warranty Protection</h3>
              <p className="text-neutral-500">Over 2 years</p>
            </div>
          </div>
  
          <div className="flex items-center space-x-4">
            <div className="bg-neutral-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800">Free Shipping</h3>
              <p className="text-neutral-500">Order over $150</p>
            </div>
          </div>
  
          <div className="flex items-center space-x-4">
            <div className="bg-neutral-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800">24 / 7 Support</h3>
              <p className="text-neutral-500">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>




<div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10 lg:gap-16 max-w-screen-xl mx-auto mt-12">
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
