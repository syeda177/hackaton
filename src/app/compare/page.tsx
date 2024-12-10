
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdContact } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdSend } from "react-icons/md";


const HeroSection = () => {
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

<h1 className="text-3xl font-bold text-black">Product Comparison</h1>


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
    </div>
  );
};

const ProductSection = () => {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              Go to Product page for more Products
            </h2>
            <a
              href="/products"
              className="text-base font-medium text-gray-500 hover:text-gray-700 underline"
            >
              View More
            </a>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/images/soofa.png"
                alt="Asgaard Sofa"
                width={400}
                height={400}
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-lg font-medium text-gray-900 mt-4">
                Asgaard Sofa
              </h3>
              <p className="text-gray-600 mt-1">Rs. 250,000.00</p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">(204 Reviews)</span>
              </div>
            </div>
  
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/images/Group 157.png"
                alt="Outdoor Sofa Set"
                width={400}
                height={400}
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-lg font-medium text-gray-900 mt-4">
                Outdoor Sofa Set
              </h3>
              <p className="text-gray-600 mt-1">Rs. 224,000.00</p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-500">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">(145 Reviews)</span>
              </div>
            </div>
          </div>
  
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              Add A Product
            </h3>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors">
              Choose a Product
            </button>
          </div>
        </div>
      </div>
    );
  };


  const ProductComparison: React.FC = () => {
    return (
      <div className="w-full max-w-6xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-2xl font-bold mb-6">Product Comparison</h2> */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
              {/* <th className="border-b-2 border-gray-200 px-4 py-3 text-left sm:text-center lg:text-left"></th> */}
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left">General</th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
              </tr>
            
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Sales Package</td>
                <td className="border-b border-gray-200 px-4 py-3">1 sectional sofa</td>
                <td className="border-b border-gray-200 px-4 py-3">1 Three Seater, 2 Single Seater</td>
              </tr>

              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Model Number</td>
                <td className="border-b border-gray-200 px-4 py-3">TFCBLIGRBL6SRHS</td>
                <td className="border-b border-gray-200 px-4 py-3">DTUBLIGRBL568</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Secondary Material</td>
                <td className="border-b border-gray-200 px-4 py-3">Solid Wood</td>
                <td className="border-b border-gray-200 px-4 py-3">Solid Wood</td>
              </tr>

              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Configuration</td>
                <td className="border-b border-gray-200 px-4 py-3">L-shaped</td>
                <td className="border-b border-gray-200 px-4 py-3">L-shaped</td>
              </tr>

              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Upholstery Material</td>
                <td className="border-b border-gray-200 px-4 py-3">Fabric + Cotton</td>
                <td className="border-b border-gray-200 px-4 py-3">Fabric + Cotton</td>
              </tr>

              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Upholstery Color</td>
                <td className="border-b border-gray-200 px-4 py-3">Bright Grey & Lion</td>
                <td className="border-b border-gray-200 px-4 py-3">Bright Grey & Lion</td>
              </tr>

              <tr>
              {/* <th className="border-b-2 border-gray-200 px-4 py-3 text-left sm:text-center lg:text-left"></th> */}
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left">Product</th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
              </tr>
            
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Filling Material</td>
                <td className="border-b border-gray-200 px-4 py-3">Foam</td>
                <td className="border-b border-gray-200 px-4 py-3">Matte</td>
              </tr>

              
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Finish Type</td>
                <td className="border-b border-gray-200 px-4 py-3">Bright Grey & Lion</td>
                <td className="border-b border-gray-200 px-4 py-3">Bright Grey & Lion</td>
              </tr>

              
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Adjustable Headrest</td>
                <td className="border-b border-gray-200 px-4 py-3">no</td>
                <td className="border-b border-gray-200 px-4 py-3">yes</td>
              </tr>

              
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Origin of Manufacture</td>
                <td className="border-b border-gray-200 px-4 py-3">India</td>
                <td className="border-b border-gray-200 px-4 py-3">India</td>
              </tr>

              <tr>
              {/* <th className="border-b-2 border-gray-200 px-4 py-3 text-left sm:text-center lg:text-left"></th> */}
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left">Dimensions</th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
              </tr>
            
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Width</td>
                <td className="border-b border-gray-200 px-4 py-3">265.32 cm</td>
                <td className="border-b border-gray-200 px-4 py-3">265.32 cm</td>
              </tr>


              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Height</td>
                <td className="border-b border-gray-200 px-4 py-3">299.32 cm</td>
                <td className="border-b border-gray-200 px-4 py-3">265.32 cm</td>
              </tr>

              
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Height</td>
                <td className="border-b border-gray-200 px-4 py-3">165.32 cm</td>
                <td className="border-b border-gray-200 px-4 py-3">254.32 cm</td>
              </tr>

              
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Weight</td>
                <td className="border-b border-gray-200 px-4 py-3">265kg</td>
                <td className="border-b border-gray-200 px-4 py-3">265kg</td>
              </tr>

              <tr>
              {/* <th className="border-b-2 border-gray-200 px-4 py-3 text-left sm:text-center lg:text-left"></th> */}
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left">Warenty</th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
              </tr>
            
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Warranty Summary</td>
                <td className="border-b border-gray-200 px-4 py-3">1 Year Manufacturing Warrantyn</td>
                <td className="border-b border-gray-200 px-4 py-3">1 Year Manufacturing Warranty</td>
              </tr>
              
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Warranty Service 
                Type</td>
                <td className="border-b border-gray-200 px-4 py-3">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</td>
                <td className="border-b border-gray-200 px-4 py-3">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</td>
              </tr>
              
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Covered in Warranty</td>
                <td className="border-b border-gray-200 px-4 py-3">Warranty Against Manufacturing Defect</td>
                <td className="border-b border-gray-200 px-4 py-3">1 Year Manufacturing Warranty</td>
              </tr>
              
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Domestic Warranty</td>
                <td className="border-b border-gray-200 px-4 py-3">1 Year</td>
                <td className="border-b border-gray-200 px-4 py-3">3 month</td>
              </tr>
              

              {/* <tr> */}
            
              </thead>
            <tbody>
           </tbody>
          </table>
        </div>
      </div>
    );
  };

  const FeatureSection: React.FC = () => {
    return (
      <div>
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
    );
  };

export default function ComparisonPage(){
    return (
        <div>
            <HeroSection />
            <ProductSection />
            <ProductComparison />
            <FeatureSection />
        </div>
    )
}