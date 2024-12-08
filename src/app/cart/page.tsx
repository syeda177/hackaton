import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdSend } from "react-icons/md"; 

const cart = () => {
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
    <div className="flex items-center space-x-4">
      <button aria-label="User Profile">
        <IoMdContact className="w-6 h-6 text-black" />
      </button>
      <button aria-label="Search">
        <FaSearch className="w-6 h-6 text-black" />
      </button>
      <button aria-label="Wishlist">
        <FaRegHeart className="w-6 h-6 text-black" />
      </button>
      <Link href='/cart'>
      <button aria-label="Cart">
        <IoMdCart className="w-6 h-6 text-black" />
      </button></Link>
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
    <span className="text-black text-3xl font-semibold cursor-pointer">Cart</span>
  </div>
</div>

<div className="flex flex-wrap gap-8 px-4 py-8 justify-center">
  {/* Product Cart Section */}
  <div className="flex flex-col w-full lg:w-2/3 bg-pink-200 rounded-lg shadow-lg">
    {/* Header Row */}
    <div className="flex justify-between px-6 py-4  bg-white rounded-t-lg text-lg font-bold">
      <div>Product</div>
      <div>Price</div>
      <div>Quantity</div>
      <div>Subtotal</div>
    </div>

    {/* Example Product Rows */}
    <div className="flex justify-between px-6 py-4 border-b  bg-white">
      <div>Product A</div>
      <div>$50</div>
      <div>2</div>
      <div>$100</div>
    </div>
    <div className="flex justify-between px-6 py-4 border-b bg-white">
      <div>Product B</div>
      <div>$80</div>
      <div>1</div>
      <div>$80</div>
    </div>
    <div className="flex justify-between px-6 py-4 border-b bg-white">
      <div>Product C</div>
      <div>$150</div>
      <div>1</div>
      <div>$150</div>
    </div>

    {/* Footer Row */}
    <div className="flex justify-between px-6 py-4 bg-white rounded-b-lg font-bold">
      <div>Total Items</div>
      <div>3</div>
      <div></div>
      <div>$330</div>
    </div>
  </div>

  {/* Cart Totals Section */}
  <div className="w-full lg:w-1/3 bg-pink-200 rounded-lg shadow-lg">
    <h1 className="text-center text-2xl font-bold mt-6">Cart Totals</h1>
    <div className="flex justify-between px-8 py-4 mt-10 text-lg font-bold">
      <div>Subtotal:</div>
      <div className="text-yellow-500">$980.65</div>
    </div>
    <div className="flex justify-between px-8 py-4 text-lg font-bold">
      <div>Totals:</div>
      <div className="text-yellow-500">$9821.65</div>
    </div>
  
    <button className="w-3/4 mx-auto my-8 py-3 ml-14 text-center bg-pink-400 text-white rounded-lg font-bold hover:bg-pink-500">
    <Link href='/checkout'> Proceed to Checkout</Link>
      </button>
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

export default cart
