import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Header = () => {
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
      <Link href='/compare'>
      <button aria-label="Wishlist">
        <FaRegHeart className="w-6 h-6 text-black" />
      </button></Link>
      <Link href={"/cart"}><button aria-label="Cart">
        <IoMdCart className="w-6 h-6 text-black" />
      </button></Link>
    </div>
  </div>

  <div className="relative w-full h-[716.83px] mt-[75px]">
  {/* Background Image */}
  <Image
    src="/images/desk.png"
    alt="Desk Background"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0"
  />

  {/* Nested Image */}
  <div
  className="absolute top-[200px] left-3/4 ml-40 transform -translate-x-1/2 w-[350px] h-[300px] sm:w-[400px] sm:h-[350px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[443px]"
>
  <Image
    src="/images/Group 88.png"
    alt="Overlay Image"
    width={500}
    height={443}
    className="object-contain"
  />
</div>

</div>
  </div>
  )
}

export default Header

