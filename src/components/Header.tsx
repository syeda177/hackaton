import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdContact } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
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
<div className="relative w-full h-[716.83px] mt-[10px]">
  {/* Background Image */}
  <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[700px]">
    <Image
      src="/images/desk.png"
      alt="Desk Background"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0"
      priority // Optimizes loading for important images
    />
  </div>

  {/* Nested Image with Pink Background */}
  <div
    className="absolute bg-pink-100 rounded-lg shadow-lg p-4 
      top-[150px] right-[5%] transform translate-x-1/4 
      w-[250px] h-[200px] 
      sm:w-[300px] sm:h-[250px] 
      md:w-[350px] md:h-[300px] 
      lg:w-[400px] lg:h-[350px] 
      xl:w-[450px] xl:h-[400px] 
      flex items-center justify-center"
  >
    <Image
      src="/images/Group 88.png"
      alt="Overlay Image"
      width={400}
      height={350}
      className="object-contain"
    />
  </div>
</div>

  </div>
  )
}

export default Header

