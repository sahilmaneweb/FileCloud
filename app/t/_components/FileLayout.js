import { Zap } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

function FileLayout({file}) {
    const router = useRouter();
    const [password,setPassword] = useState("");

    const verifyPassword = () => {
        if(file.password === password){
            router.replace(`${file.fileUrl}?download`);
        } else {
            Swal.fire({
                title : "Incorrect Password",
                text : "Please enter the correct password to access the file.",
                icon : "error",
                showCloseButton: true,
                allowOutsideClick: false,
                confirmButtonColor: "red",
                confirmButtonText: "<h1>OK</h1>"
            });
        }
        setPassword("");
    }
  return (
    <div className='flex flex-col items-center justify-center gap-3 py-8 px-6 rounded-md bg-white min-width-[250px] shadow-md md:min-w-[500px]'>
        <h1 className='text-3xl text-center font-bold'>
            <span className='text-primary'>{file.userName}</span> shared a File with you
        </h1>
        <Image src={`/image.png`} width={100} height={100} />
        <div className='flex justify-center flex-wrap items-center gap-1'>
            <h1>{file.fileName}</h1> 
            <Zap size={20} color='yellow'/>
            <h1>{file.fileType}</h1>
            <Zap size={20} color='yellow'/>
            <h1>{file.fileSize} mb</h1>
        </div>
        {
          file.isActive ? (<div>
          {
          file.password ? (
            <>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className=' rounded-md min-w-[300px] text-center p-1 border border-slate-400 flex justify-center items-center' placeholder='Enter Password to Access' />
              <button type="button" className='bg-primary  text-white rounded-full disabled:bg-slate-300 shadow-sm p-2 min-w-[200px] font-semibold active:bg-blue-800' onClick={verifyPassword}> Verify Password</button>
            </>
          ) : (
            <button type="button" className='bg-primary  text-white rounded-full disabled:bg-slate-300 shadow-sm p-2 min-w-[200px] font-semibold active:bg-blue-800' onClick={() => {router.replace(`${file.fileUrl}?download`)}}> Access File</button>
          )
        }
        </div>) : (
          <div>
            <h1 className='text-red-500'>This file is currently hidden by owner.</h1>
            <p className='text-sm text-slate-500'>Please contact the owner for more information.</p>
          </div>
        )
        }
        

        <h1 className='text-sm text-slate-500'>*Terms and Conditions Apply</h1>
    </div>
  )
}

export default FileLayout