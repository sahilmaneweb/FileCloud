"use client"
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { Clipboard } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function FileDetail({file, update}) {
  const {user} = useUser();
  const [password,setPassword] = useState("");
  const [enablePassword,setEnablePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  useEffect(()=>{ 
    function fetchPassword(){
      setEnablePassword(!!file.password);
      setPassword(file.password);
    }
    fetchPassword();
  },[file]);

  const handleEnable = (e) => {
    setEnablePassword(e.target.checked);
    if(!e.target.checked){
      setPassword("");
      update(null);
    }
  }
  const handleUpdate = () => { 
    update(password);
   }

   const sendEmail = async() => {

    const {data, error} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/send`, {senderName : user.fullName,
      receiverEmail : email,
      fileName: file.fileName,
      fileSize: file.fileSize,
      fileUrl: file.shortUrl,
      fileType: file.fileType});

    if(data){
      console.log("Email sent");
      setEmail("");
      toast.success("Email sent successfully");
   }else if(error){
    console.log(error);
    toast.error("Error sending email");
   }
  }

  const copyClipboard = () => {
    navigator.clipboard.writeText(file.shortUrl);
    toast.success("Short URL copied to clipboard");
  }

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  return (
    <div className='w-full md:max-w-[500px] '>

      {/* short url */}
      <div className='border rounded-md shadow-sm p-2'>
        <label className='text-lg font-semibold'>Short URL:</label>
        <div className='flex w-full gap-2 items-center'>
        <input type="url" value={file.shortUrl} disabled className='grow p-1 rounded-sm border border-slate-400 disabled:bg-slate-100 disabled:text-gray-600' />
        <span onClick={copyClipboard} className='cursor-pointer block p-1 border rounded-md bg-slate-100'>
          <Clipboard color='gray' />
        </span>
        </div>
      </div>

      {/* set password */}
      <div className='mt-4 border rounded-md shadow-sm p-2'>
        <label className='text-lg font-semibold my-3 flex items-center gap-2'>
          <input type='checkbox' checked={enablePassword} onChange={(e)=>handleEnable(e)} className='size-5' />
          Enable Password
        </label>
        {enablePassword && <div className='flex items-center gap-2'>
          <input type={showPassword ? "text" : "password"} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' className='grow p-2 rounded-md border border-slate-400' />
          <button type="button" onClick={handleUpdate} disabled={password.length < 8} className='bg-primary disabled:bg-gray-600 rounded-md p-1 hover:bg-blue-800 px-7 font-semibold text-white text-lg'>Set</button>
          </div>}
      </div>

          {/* Send email */}
          <div className='mt-4 border rounded-md shadow-sm p-2'>
            <label className='text-lg font-semibold'>Send Email:</label>
            <div className='flex gap-2 items-center'>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' className='grow p-2 rounded-md border border-slate-400' />
              <button type="button"  className='bg-primary rounded-md p-1 hover:bg-blue-800 px-5 disabled:bg-gray-600 font-semibold text-white text-lg' disabled={!isValidEmail(email)} onClick={sendEmail}>Send</button>
            </div>
          </div>
    </div>
  )
}

export default FileDetail