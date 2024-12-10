
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdContact } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import { IoRadioButtonOnSharp } from "react-icons/io5";
import { IoIosRadioButtonOff } from "react-icons/io";

const checkout = () => {
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

<h1 className="text-3xl font-bold text-black">CheckOut</h1>


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


      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-10 py-9 px-4 sm:px-6 lg:px-12">
        {/* Billing Details */}
        <div className="flex-1">
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-6">BILLING DETAILS</h1>
          <div className="space-y-6 mt-6 max-w-full">
            <div className="flex flex-wrap gap-4">
              {/* Name Field */}
              <div className="w-full sm:w-1/2">
                <label className="font-bold text-sm mb-2 block">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
              {/* Last Name Field */}
              <div className="w-full sm:w-1/2">
                <label className="font-bold text-sm mb-2 block">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
            </div>
            {/* Company Name */}
            <div>
              <label className="font-bold text-sm mb-2 block">Company Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
            {/* Address */}
            <div>
              <label className="font-bold text-sm mb-2 block">Street Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
            {/* Town */}
            <div>
              <label className="font-bold text-sm mb-2 block">Town</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
            {/* Other Fields */}
            <div>
              <label className="font-bold text-sm mb-2 block">Province</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
            <div>
              <label className="font-bold text-sm mb-2 block">Postal Code</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex-1">
          <h2 className="text-lg sm:text-2xl font-bold">Order Summary</h2>
          <div className="flex justify-between items-center mt-6">
            <div>
              <h3 className="font-semibold">Product</h3>
              <p className="text-gray-500">Asgaard Sofa</p>
              <p className="text-gray-500">Subtotal</p>
            </div>
            <div>
              <h3 className="font-semibold">Price</h3>
              <p>Rs. 250,000</p>
              <p>Rs. 250,000</p>
            </div>
          </div>
          <div className="text-yellow-400 mt-6 text-lg">
            Total: Rs. 250,000
          </div>
          {/* Payment Options */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2">
              <IoRadioButtonOnSharp />
              <p>Direct Bank Transfer</p>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <IoIosRadioButtonOff />
              <p>Cash on Delivery</p>
            </div>
          </div>
          <button className="w-full mt-6 bg-gray-200 hover:bg-gray-600 rounded-md py-2 text-lg">
            Place Order
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-pink-100 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {/* Features */}
          {[
            {
              title: "High Quality",
              description: "Crafted from top materials",
            },
            {
              title: "Warranty Protection",
              description: "Over 2 years",
            },
            {
              title: "Free Shipping",
              description: "Order over $150",
            },
            {
              title: "24/7 Support",
              description: "Dedicated support",
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
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
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
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