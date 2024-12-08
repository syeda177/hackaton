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
<div className="flex items-center  gap-4 space-x-4">
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
<span className="text-black text-3xl font-semibold">blog</span>
</div>
</div>



<div className="ml-5 sm:ml-10 md:ml-16 lg:ml-20 mt-6 max-w-screen-lg mx-auto px-4">
  <Image 
    src={"/images/r1.png"} 
    alt="Design Image" 
    width={600} 
    height={500} 
    className="width:30% h-auto object-cover rounded-md"
  />
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
    Going all-in with millennial design
  </h1>
  <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 leading-relaxed max-w-prose">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. 
  Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. 
  Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
  Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
</p>

</div>
<div className='cursor-pointer underline-offset-0 ml-24 mt-5'>READ MORE</div>


<div className="ml-5 mt-12 sm:ml-10 md:ml-16 lg:ml-20 max-w-screen-lg mx-auto px-4">
  <Image 
    src={"/images/r2.png"} 
    alt="Design Image" 
    width={600} 
    height={500} 
    className="width:30% h-auto object-cover rounded-md"
  />
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
  Exploring new ways of decorating
  </h1>
  <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 leading-relaxed max-w-[45ch]">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. 
  Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. 
  Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
  Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
</p>
</div>
<div className='cursor-pointer underline-offset-0 ml-24 mt-5'>READ MORE</div>
<div className="ml-5 mt-12 sm:ml-10 md:ml-16 lg:ml-20 max-w-screen-lg mx-auto px-4">
  <Image 
    src={"/images/r3.png"} 
    alt="Design Image" 
    width={600} 
    height={500} 
    className="width:30% h-auto object-cover rounded-md"
  />
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
  Handmade pieces that took time to make
  </h1>
  <div>
  <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 leading-relaxed max-w-[45ch]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. 
    Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. 
    Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
    Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
  </p>
</div>
 </div>

<div className='cursor-pointer underline-offset-0 ml-24 mt-5'>READ MORE</div>

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
