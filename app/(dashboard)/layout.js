"use client"
import React, { useState } from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'

function layout({children}) {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <section>
        <div className={` bg-white ${mobile ? "block" : "hidden"}  md:block overflow-hidden w-56 z-30 fixed top-0 left-0 h-svh border-r`}>
          <Sidebar setMobile={setMobile} />
        </div>
        <div className='md:ml-56'>
          <Header setMobile={setMobile} />
          <main className='p-3 px-4 md:px-16'>
            {children}
          </main>
        </div>
      </section>
    </>
  )
}

export default layout