"use client"
import Supabase from '../../_lib/Supabase';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import FileLayout from '../_components/FileLayout';

function page() {
    const {fileId} = useParams();
    const [file,setFile] = useState(false);
    useEffect(() => { 
        async function fetchProduct() {
            const {data,error} = await Supabase.from('userfiles').select().eq('fileId',fileId);
            if(data && data.length > 0){
                console.log(data[0]);
                setFile(data[0]);
            } else if(error){
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
        <Image src={`/logo.jpg`} width={200} height={150} className='mix-blend-multiply' />
        <FileLayout file={file} />
    </div>
  )
}

export default page