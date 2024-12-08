import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { MdSend } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

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
      <button aria-label="Cart"><Link href='/cart'>
        <IoMdCart className="w-6 h-6 text-black" />
        </Link> </button>
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



  <div>
  <div className="bg-pink-100 w-full mt-20 px-4 py-10">
    <div className="flex flex-wrap justify-center gap-8 lg:gap-14">
      <div>
        <Image
          src="/images/F1.png"
          alt=""
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src="/images/F2.png"
          alt=""
          width={250}
          height={250}
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src="/images/F3.png"
          alt=""
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src="/images/F4.png"
          alt=""
          width={200}
          height={200}
          className="object-contain"
        />
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
