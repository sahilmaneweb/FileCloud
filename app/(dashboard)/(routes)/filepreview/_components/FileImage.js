import { useRouter } from 'next/navigation';
import { useState } from 'react'

function FileImage({file, supabase}) {
  const [isVisible, setVisible] = useState(file?.isActive);
  const router = useRouter();

  const toggleVisibility = async () => {
    const {data, error} = await supabase.from('userfiles').update({isActive: !isVisible}).eq('fileId', file.fileId).select();
    if (error) {
      console.error("Error updating visibility:", error);
      return;
    }
    setVisible(!isVisible);
    console.log("Visibility updated:", data);
  }

  const deleteImage = async()=> {
    try {
      await supabase.storage.from('uploadfiles').remove([file.filePath]);
      await supabase.from('userfiles').delete().eq('fileId', file.fileId);
      console.log("File deleted successfully");
      Swal.fire({
        title: "File Deleted Successfully",
        text: `${file.fileName} has been deleted`,
        icon: 'success',
        showCloseButton: true,
        allowOutsideClick: false,
        confirmButtonColor: "#316ff2",
        confirmButtonText: "<h1>Yes</h1>"
      });
      router.push('/files');
    } catch (error) {
      console.error("Error deleting file:", error);
      Swal.fire({
        title: "Error deleting file",
        text: error.message,
        icon: "error",
        allowOutsideClick: false,
        showCloseButton: true
      });
    }
  }
  
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
      <div className='flex gap-2 justify-center items-center'>
        <button type="button" className='bg-primary text-white rounded-md p-2 text-lg' onClick={toggleVisibility}>{isVisible ? "Visible" : "Hidden"}</button>
        <button type="button" className='bg-primary text-white rounded-md p-2 text-lg' onClick={deleteImage}>Delete</button>
      </div>
    </div>
  )
}

export default FileImage