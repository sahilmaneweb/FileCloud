"use client"
 import { useUser} from '@clerk/nextjs'
import React from 'react'
import UploadForm from '../../_components/UploadForm'
import Supabase from '../../../_lib/Supabase'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { setActiveIndex } from '../../_components/Sidebar'

function page() {
    const {user} = useUser();
    const base = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter();

  const getUrl = (filePath) => {
    const {data} = Supabase.storage.from('uploadfiles').getPublicUrl(filePath);
    console.log("public url : ",data.publicUrl);
    return data.publicUrl;
  }

  const uploadFile = async(file, setFile, setPending) => {
    try {
      setPending(true);
      let {data} = await Supabase.storage.from('uploadfiles').upload("public/"+file?.name,file);
      let fileId;
      fileId = Date.now();
      let res = await Supabase.from('userfiles').insert({
        fileId,
        userEmail : user.primaryEmailAddress.emailAddress,
        userName : user.fullName,
        password : "",
        fileName: file?.name,
        fileType:file?.type,
        fileSize:((file?.size/(1024*1024)).toFixed(3)),
        fileUrl: getUrl(data.path),
        shortUrl : `${base}${fileId}`
      }).select();
      if(res.data){
        
        Swal.fire({
          title: "File Uploaded Successfully",
          text : `${file.name} uploaded succesfully`,
          icon : 'success', 
          showCloseButton : true,
          allowOutsideClick : false,
          confirmButtonColor : "#316ff2",
          confirmButtonText: "<h1>Yes</h1>"
        });
        router.push(`filepreview/${fileId}`);
        setActiveIndex(1);
      }else if(res.error){
        Swal.fire({
          title : res.error.message,
          icon : "error",
          text : res.error.details,
          showCloseButton : true,
          allowOutsideClick : false,
          confirmButtonColor : "red",
          confirmButtonText: "<h1>OK</h1>"
        });
      }
      setPending(false);
      setFile(false);
    } catch (error) {
      console.log("Error occured while file upload");
      console.error(error);
      setPending(false);
    }
  }
  return (
    <div className="container">
      <h1 className='text-[30px] text-center font-bold leading-normal'><span className='text-primary'>Upload,</span> and <span className='text-primary'>Share</span> files now...</h1>
      <UploadForm uploadFile={uploadFile}/>
    </div>
  )
}

export default page