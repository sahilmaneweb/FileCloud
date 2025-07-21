import { Slash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FileImage({file}) {
  return (
    <div className='flex flex-col gap-3 items-center h-max justify-start border rounded-md shadow-sm p-4 w-full md:w-[400px]'>
      <div className='w-10/12 object-center h-36 object-cover border rounded-md shadow-sm overflow-hidden'>
        <img src={file.fileUrl} className='w-full h-full' />
      </div>
      <h1 className='text-2xl font-semibold'>
        {file.fileName}
      </h1>
      <h2 className='flex text-slate-500 gap-2 items-center'>
        <p>{file.fileType}</p>
        <div className="w-[2px] h-6 bg-gray-300" />
        <p>{file.fileSize} mb</p>
      </h2>
    </div>
  )
}

export default FileImage