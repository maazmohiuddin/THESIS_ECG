import React from 'react'
import Container from '../Container'
import BaseImage from '../BaseImage'
import Link from 'next/link'

export default function Header() {
  return (
    <Container>
      <div className='flex justify-center -mt-10'>
        <header className="w-3/4 flex mt-10 justify-between items-center px-6 py-4 bg-[rgba(20,20,20,0.71)] border border-[#454545] rounded-[20px] mx-auto">
          <div>
            <Link href="/">
              <BaseImage
                src="/images/logo.png"
                height={150}
                width={150}
                alt='logo'
                style={{ objectFit: 'cover' }}
                className='object-cover'
              />
            </Link>
          </div>
          <nav className="flex items-center space-x-6">
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
        </header>
      </div>
    </Container>
  )
}
