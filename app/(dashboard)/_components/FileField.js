import {  Image, X } from 'lucide-react'
import React from 'react'

function FileField({file, remove, lock}) {
  return (
    <div className='my-2 max-w-[500px] mx-auto bg-blue-100 p-3 flex justify-between items-start rounded-sm shadow-md'>
        <div className='text-primary border-r border-primary pr-2'>
            <Image size={40} />
        </div>
        <div className='grow px-2 text-[12px] leading-normal'>
            <h1>{file?.name}</h1>
            <h2 className='text-sm text-gray-700'>{file?.type} | {(file?.size/(1024*1024)).toFixed(3)} MB</h2>
        </div>
        <div className={`cursor-pointer ${lock ? "hidden" : "block"}`} onClick={remove}>
            <X size={30} color='red' />
        </div>
    </div>
  )
}

export default FileField