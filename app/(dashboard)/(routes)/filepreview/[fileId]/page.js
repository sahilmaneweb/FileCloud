"use client"
import Supabase from '../../../../_lib/Supabase';
import Swal from 'sweetalert2';
import { useParams } from 'next/navigation';
import  {React, useEffect, useState } from 'react'
import FileImage from '../_components/FileImage';
import FileDetail from '../_components/FileDetail';
import { SquareArrowLeft } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';


function page() {
  const {fileId} = useParams();
  const [file,setFile] = useState(false);
  useEffect(()=>{
    async function fetchProduct(){
      const {data,error} = await Supabase.from('userfiles').select().eq('fileId',fileId);
      if(data && data.length > 0){
        console.log(data[0]);
        setFile(data[0]);
      }else if(error){
        Swal.fire({
          title : "No such file exists",
          icon : "error",
          allowOutsideClick: false,
          showCloseButton: true
        })
      }
    }
    
    fetchProduct();
  },[fileId]);

  const updatePassword = async(password) => {
    const {data,error} = await Supabase.from('userfiles').update({'password': password}).eq('fileId',fileId).select();
    if(error){
      console.error("Error updating password:",error);
      return;
    }else if(data){
      console.log("Password updated");
      console.log(data);
      if(password === null || password === ""){
        toast.success("Password removed successfully");
    }else{
        toast.success("Password updated successfully");
      }
    }
  };

  return (
    <div>
      {file ? (
        <>
          <Link href="/files">
            <button type="button" className='flex gap-1 border rounded-md shadow-sm p-2 mb-2 items-center font-semibold'>
              <SquareArrowLeft />
              <h1>Go to Files</h1>
            </button>
          </Link>
          <div className="flex flex-col gap-3 md:flex-row items-start">
            <FileImage file={file} supabase={Supabase} />
            <FileDetail file={file} update={updatePassword} />
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default page