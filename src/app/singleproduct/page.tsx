"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdSend } from "react-icons/md";
import Link from 'next/link'

const HeroSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>("L");
  const [selectedColor, setSelectedColor] = useState<string | null>("purple");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

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
        <div className="relative"></div> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          /{" "}
          <a href="/shop" className="hover:underline">
            Shop
          </a>{" "}
          / Asgaard Sofa
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/soofa.png"
                alt="Asgaard Sofa"
                width={450}
                height={250}
                className="rounded-lg w-full max-w-lg mx-auto"
              />
            </div>
            <div className="flex gap-2 justify-center md:justify-start">
              {["/images/soofa.png", "/images/-soofa.png", "/images/soofa.png"].map((src, index) => (
                <Image
                  key={index}
                  src='/images/soofa.png'
                  alt={`Sofa Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="rounded-lg border cursor-pointer hover:border-black"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mb-2">Asgaard Sofa</h1>
            <p className="text-gray-600 text-xl mb-4">Rs. 250,000.00</p>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">5 Customer Reviews</p>
            </div>

            <p className="text-gray-700 mb-6">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced audio
              which boasts a clear midrange and extended highs for a sound.
            </p>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Size</h3>
              <div className="flex gap-2">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? "border-black bg-gray-200"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Color</h3>
              <div className="flex gap-4">
                {[
                  { color: "purple", bg: "bg-purple-500" },
                  { color: "gold", bg: "bg-yellow-500" },
                  { color: "black", bg: "bg-black" },
                ].map(({ color, bg }) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full ${bg} ${
                      selectedColor === color
                        ? "ring-2 ring-black"
                        : "ring-1 ring-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-1"
                >
                  -
                </button>
                <p className="px-4">{quantity}</p>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-1"
                >
                  +
                </button>
              </div>
              <button className="px-6 py-2 bg-black text-white rounded-md w-full sm:w-auto">
                Add to Cart
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-md w-full sm:w-auto">
                + Compare
              </button>
            </div>

            <div className="text-xl text-gray-500 mt-4">
              <p>SKU: SS001</p>
              <p className="mt-3">Category : Sofas</p>
              <p className="mt-3">Tags: Sofa, Chair, Home, Shop</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-72 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium">Asgaard Sofa</h3>
                <p className="text-sm text-gray-500">1 x Rs. 250,000.00</p>
              </div>
              <Image
                src="/images/soofa.png"
                alt="Asgaard Sofa"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </li>
            <li className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium">Casaliving Wood</h3>
                <p className="text-sm text-gray-500">1 x Rs. 270,000.00</p>
              </div>
              <Image
                src="/images/soofa.png"
                alt="Casaliving Wood"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </li>
          </ul>
          <p className="mt-4 text-lg font-semibold">Subtotal: Rs. 520,000.00</p>
          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Checkout
            </button>
            <button className="px-4 py-2 border rounded-md">
              View Cart
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full shadow-lg z-30"
      >
        {isSidebarOpen ? "Close" : "Cart"}
      </button>
    </div>
    </div>
  );
};






const DescriptionComponent = () => {
  return (
    <div className="px-4 py-8 lg:px-20">
      {/* Tabs Section */}
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center border-b pb-4 mb-8">
        <div className="flex gap-4 text-center lg:text-left">
          {/* <button className="text-lg font-semibold text-black border-b-4 border-black pb-2"> */}
          <button className="text-lg font-semibold text-black   ">
            Description
          </button>
          <button className="text-lg font-semibold text-gray-500 hover:text-black">
            Additional Information
          </button>
          <button className="text-lg font-semibold text-gray-500 hover:text-black">
            Reviews [5]
          </button>
        </div>
      </div>

      <div className="text-gray-700 text-sm lg:text-base leading-6 mb-8">
        <p className="mb-4">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <Image
            src="/images/sofa1.png"
            alt="Sofa Description 1"
            width={500}
            height={500}
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/sofa1.png"
            alt="Sofa Description 2"
            width={500}
            height={500}
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};



const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/images/images.png", 
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image:  "/images/images2.png", 
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
      image:  "/images/images3.png", 
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      tag: "New",
      image:  "/images/images4.png", 
    },
  ];

  return (
    <div className="px-4 py-8 lg:px-20">
      <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg p-4 relative hover:shadow-lg transition"
          >
            {/* Discount/Tag */}
            {product.discount && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
            )}
            {product.tag && (
              <span className="absolute top-4 left-4 bg-teal-500 text-white text-xs px-2 py-1 rounded">
                {product.tag}
              </span>
            )}

            <div className="w-full h-48 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <p className="text-black font-bold mt-2">{product.price}</p>
              {product.oldPrice && (
                <p className="text-gray-400 line-through text-sm">
                  {product.oldPrice}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition">
          Show More
        </button>
      </div>
      
    <div className="bg-white text-black px-6 py-10 lg:px-20 mt-10">
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
  );
};

export default function SingleProduct() {
  return (
    <div>
      <HeroSection />
      <DescriptionComponent />
      <RelatedProducts />
    </div>
  );
}