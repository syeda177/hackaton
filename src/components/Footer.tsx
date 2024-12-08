import React from "react";
import { MdSend } from "react-icons/md";

const Footer = () => {
  return (
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
  );
};

export default Footer;
