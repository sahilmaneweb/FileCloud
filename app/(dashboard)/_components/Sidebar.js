"use client"
import { Folder, FolderPlus, Shield } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

function Sidebar({setMobile}) {

  const [activeIndex, setActiveIndex] = useState(0);
  const MenuList = [
    {
      index : 0,
      name : "Upload",
      icon : FolderPlus,
      path : '/upload'
    },
    {
      index : 1,
      name : "Files",
      icon : Folder,
      path : "/files"
    },
    {
      index : 2,
      name : "Upgrade",
      icon : Shield,
      path : "/upgrade"
    }
  ]

  const handleClick = (index,path) => {
    setMobile(false);
    setActiveIndex(index);
  }

  return (
    <div className=''>
      <div className='border-b p-2 py-3 flex items-center justify-center'>
        <Image src="/logo.jpg" width={150} height={120} alt='logo' priority />
      </div>
      <div className='flex flex-col items-start'>
        {
          MenuList.map((item) => (
            <Link href={item.path} key={item.index} className='w-full'>
            <button type="button" key={item.index} className={` flex gap-2  w-full p-4 ${activeIndex == item.index ? "text-primary bg-blue-100 hover:bg-blue-200" : "hover:bg-slate-200 text-gray-500"}`} onClick={()=> {handleClick(item.index, item.pa)}}>
              <item.icon />
              <h2 className='font-semibold'>{item.name}</h2>
            </button>
            </Link>
          ))
        }
      </div>
    </div>
  )
}


export default Sidebar