"use client"
import Supabase from '../../_lib/Supabase';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import FileLayout from '../_components/FileLayout';

function page() {
    const {fileId} = useParams();
    const [file,setFile] = useState(false);
    useEffect(() => { 
        async function fetchProduct() {
            const {data} = await Supabase.from('userfiles').select().eq('fileId',fileId);
            if(data && data.length > 0){
                console.log(data[0]);
                setFile(data[0]);
            } else{
                Swal.fire({
                    title : "No such file exists",
                    icon : "error",
                    allowOutsideClick: false,
                    showCloseButton: true
                })
            }
        }
        fetchProduct();
    }, []);
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center gap-3 h-screen px-4'>
        {
            file ? (
                <><FileLayout file={file} /></>
            ) : (
                <div className='flex flex-col items-center justify-center gap-3'>
                    <Image src={`/image.png`} width={100} height={100} alt='file image'/>
                    <h1 className='text-2xl font-semibold'>Loading...</h1>
                </div>
            )
        }
    </div>
  )
}

export default page