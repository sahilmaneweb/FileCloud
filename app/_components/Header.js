'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X, Menu } from 'lucide-react';

function Header() {
  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Owner', href: '/about' },
    { name: 'Platform', href: '/platform' },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenSidebar(false);
      }
    }

    if (openSidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openSidebar]);

  return (
    <>
      <header className="bg-white shadow-sm z-50 relative">
        <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8 border-b">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="cursor-pointer">
              <Image src="/logo.jpg" width={170} height={140} alt="logo" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-[16px]">
                  {navLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className={`transition font-medium ${
                          pathname === link.href
                            ? 'text-primary'
                            : 'text-gray-500 hover:text-primary'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-4">
              <Link
                href="/rules"
                className="bg-primary text-white font-semibold rounded-md px-4 py-2 hover:shadow-md"
              >
                Get Started
              </Link>

              {/* Hamburger Menu */}
              <div className="block md:hidden">
                <button
                  onClick={() => setOpenSidebar(true)}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      {openSidebar && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          {/* Sidebar Panel */}
          <div
            ref={sidebarRef}
            className="w-64 h-full bg-white shadow-md p-6 flex flex-col gap-4 transition-transform duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-primary">Menu</h2>
              <button onClick={() => setOpenSidebar(false)}>
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`block py-2 px-3 rounded-md text-[16px] font-medium ${
                  pathname === link.href
                    ? 'bg-blue-100 text-primary'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setOpenSidebar(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
