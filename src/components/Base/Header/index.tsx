'use client'
import React, { useState } from 'react';
import Container from '../Container';
import BaseImage from '../BaseImage';
import Link from 'next/link';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Container>
      <div className="flex justify-center -mt-10 absolute w-full top-10 left-0">
        <header className="w-3/4 flex mt-10 justify-between items-center px-6 py-4 bg-[rgba(20,20,20,0.71)] border border-[#454545] rounded-[20px] mx-auto relative">
          {/* Logo */}
          <div>
            <Link href="/">
              <BaseImage
                src="/images/logo.png"
                height={150}
                width={150}
                alt="logo"
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:underline text-white">
              Products
            </a>
            <a href="#" className="hover:underline text-white">
              Use Case
            </a>
            <a href="#" className="hover:underline text-white">
              About Us
            </a>
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300">
              Login
            </button>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={toggleDrawer}
            className="md:hidden text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Drawer Menu */}
          {isDrawerOpen && (
            <div className="absolute top-full left-0 w-full bg-[rgba(20,20,20,0.9)] text-white p-6 rounded-b-[20px] md:hidden">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="hover:underline">
                  Products
                </a>
                <a href="#" className="hover:underline">
                  Use Case
                </a>
                <a href="#" className="hover:underline">
                  About Us
                </a>
                <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300">
                  Login
                </button>
              </nav>
            </div>
          )}
        </header>
      </div>
    </Container>
  );
}
