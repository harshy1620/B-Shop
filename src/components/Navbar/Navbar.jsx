import React, { useState } from "react";

import { FaCartShopping, FaHeart } from "react-icons/fa6";
import DarkMode from "./DarkMode";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const favorites = useSelector((state) => state.book.favorites);
  const cartItems = useSelector((state) => state.book.cartItems);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              B-SHOP
            </Link>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Favorite-button section */}
            <button className="relative p-3">
              <Link to="/wishlist">
                <FaHeart className="text-xl text-gray-600 dark:text-gray-400" />
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  {favorites.length || 0}
                </div>
              </Link>
            </button>

            {/* Order-button section */}
            <button className="relative p-3">
              <Link to="/cart">
                <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  {cartItems.length || 0}
                </div>
              </Link>
            </button>
            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center
