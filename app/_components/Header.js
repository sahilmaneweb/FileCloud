import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <header className="bg-white">
        <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8 border-b">
            <div className="flex h-16 items-center justify-between">
            <div className=" cursor-pointer">
                <Image src="/logo.jpg" width={170} height={140} alt='logo' />
            </div>

            <div className="hidden md:block">
                <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-[16px]">
                    <li>
                    <a className="text-gray-500 transition hover:text-primary" href="#"> Home </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-primary" href="#"> About </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-primary" href="#"> History </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-primary" href="#"> Services </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-primary" href="#"> Projects </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-primary" href="#"> Blog </a>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <Link href="/upload" className='bg-primary text-white font-semibold rounded-md px-4 py-2 hover:shadow-md'>
                    Get Started
                </Link>

                <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
        </header>
    </div>
  )
}

export default Header