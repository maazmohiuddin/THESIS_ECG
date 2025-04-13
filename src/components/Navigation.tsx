"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleDrawer}
        className="md:hidden p-2 rounded-lg hover:bg-[#F5F5F5]"
      >
        <svg
          className="w-6 h-6 text-[#333333]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-[#666666] hover:text-[#333333]">
          Home
        </Link>
        <Link href="#" className="text-[#666666] hover:text-[#333333]">
          Products
        </Link>
        <Link href="#" className="text-[#666666] hover:text-[#333333]">
          Use Case
        </Link>
        <Link href="#" className="text-[#666666] hover:text-[#333333]">
          About Us
        </Link>
        <Link
          href="/login"
          className="bg-[#FF4B4B] text-white px-6 py-2 rounded-lg hover:bg-[#FF3333] transition-colors"
        >
          Login
        </Link>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold text-[#333333]">
              Cardio<span className="text-[#FF4B4B]">Ranker</span>
            </div>
            <button
              onClick={toggleDrawer}
              className="p-2 rounded-lg hover:bg-[#F5F5F5]"
            >
              <svg
                className="w-6 h-6 text-[#333333]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-[#666666] hover:text-[#333333] py-2"
              onClick={toggleDrawer}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-[#666666] hover:text-[#333333] py-2"
              onClick={toggleDrawer}
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-[#666666] hover:text-[#333333] py-2"
              onClick={toggleDrawer}
            >
              Use Case
            </Link>
            <Link
              href="#"
              className="text-[#666666] hover:text-[#333333] py-2"
              onClick={toggleDrawer}
            >
              About Us
            </Link>
            <Link
              href="/login"
              className="bg-[#FF4B4B] text-white px-6 py-2 rounded-lg hover:bg-[#FF3333] transition-colors text-center"
              onClick={toggleDrawer}
            >
              Login
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
} 