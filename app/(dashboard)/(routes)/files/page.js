"use client"
import Supabase from '../../../_lib/Supabase';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function page() {
  const { user } = useUser();
  const [files, setFiles] = useState([]);

  useEffect(() => {
  if (!user) return;
    const fetchFiles = async () => {
      const email = user.primaryEmailAddress?.emailAddress;

      const { data, error } = await Supabase
        .from("userfiles")
        .select("*")
        .eq("userEmail", email);

      if (error) {
        console.error("Error fetching files:", error);
      } else {
        setFiles(data);
        console.log("Files:", data);
      }
    };

    fetchFiles();
  }, [user]);

  return (
    <div className="container m-0">
      <h1 className="text-xl font-bold">
        My Files
      </h1>
      <div className='flex my-2 justify-between items-center px-2 py-1 text-[16px] text-gray-600 rounded-md border '>
        <div>
          Total Files
        </div>
        <div>
          {files.length}
        </div>
      </div>
    
      <section>
        <div className='flex justify-between items-center px-2 py-1 text-[16px] text-gray-600 border-b-2'>
          <div className='grow'>Filename</div>
          <div className='w-[150px] text-center'>type</div>
          <div className='w-[150px] text-center'>size</div>
          <div className='w-[50px] text-center'>preview</div>
        </div>
        {
          files.map((file)=>(
            <div className='flex justify-between items-center px-2 py-1 text-[16px] text-gray-600 border-b-2'>
              <div className='grow'>{file.fileName}</div>
              <div className='w-[150px] text-center'>{file.fileType}</div>
              <div className='w-[150px] text-center'>{file.fileSize}</div>
              <div className='w-[50px] text-center'>
                <Link href={`/filepreview/${file.fileId}`} className='text-blue-500 underline'>
                  view
                </Link>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default page