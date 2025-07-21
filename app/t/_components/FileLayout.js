import { Zap } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function FileLayout({file}) {
    const [password,setPassword] = useState("");
  return (
    <div className='flex flex-col items-center justify-center gap-3 py-8 px-6 rounded-md bg-white min-width-[250px] shadow-md md:min-w-[500px]'>
        <h1 className='text-3xl text-center font-bold'>
            <span className='text-primary'>Gameplay</span> shared a File with you
        </h1>
        <Image src={`/image.png`} width={100} height={100} />
        <div className='flex justify-center flex-wrap items-center gap-1'>
            <h1>{file.fileName}</h1> 
            <Zap size={20} color='yellow'/>
            <h1>{file.fileType}</h1>
            <Zap size={20} color='yellow'/>
            <h1>{file.fileSize} mb</h1>
        </div>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className=' rounded-md min-w-[300px] text-center p-1 border border-slate-400 flex justify-center items-center' placeholder='Enter Password to Access' />

        <button type="button" className='bg-primary  text-white rounded-full disabled:bg-slate-300 shadow-sm p-2 min-w-[200px] font-semibold active:bg-blue-800'> Access File</button>

        <h1 className='text-sm text-slate-500'>*Terms and Conditions Apply</h1>
    </div>
  )
}

export default FileLayout