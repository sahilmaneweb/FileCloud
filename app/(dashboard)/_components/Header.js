import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header({setMobile}) {
  return (
    <div className='py-3 md:py-4 border-b flex flex-row-reverse justify-between px-2'>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton  />
      </SignedIn>
      <div className='md:hidden'>
        <Image src="/logo.jpg" width={150} height={120} alt='logo' priority />
      </div>
      <button type="button" className='md:hidden'>
        <MenuIcon onClick={()=>setMobile(true)} />
      </button>
    </div>
  )
}

export default Header