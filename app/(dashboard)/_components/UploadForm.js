import React, { useState } from 'react'
import FileField from './FileField';

function UploadForm({uploadFile}) {
  const [file, setFile] = useState(false);
  const [pending, setPending] = useState(false);
  
  const removeFile =()=> {
    setFile(false)
  };
  return (
    <div>
      <div className="flex items-center mt-2 justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50  hover:bg-blue-100 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-16 h-16  text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-[20px] text-gray-500 select-none text-center"><span className="font-bold text-primary">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 select-none">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" accept='image/*' className="hidden" onChange={(e)=>setFile(e.target.files[0])} />
            </label>
        </div>
        {
          file && <FileField file={file} lock={pending} remove={removeFile} />
        }
        {
          pending?( 
            <>
              <ProgreeBar/>
              <h2 className='flex justify-center items-center font-bold'>File is being upload do not close page ...</h2>
            </>
          ):(<button type="button" disabled={!file} onClick={()=>uploadFile(file,setFile,setPending)} className={`bg-blue-600 hover:bg-blue-800 my-3 mx-auto block disabled:bg-gray-600 text-white text-[20px] px-10 py-2 rounded-lg`}>
            Upload
          </button>)
        }
    </div>
  )
}

const ProgreeBar = () =>{
  
  return (
    <div className="flex justify-center items-center">
  <div className="size-[90px]">
    <svg
      width="80"
      height="80"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        margin: 'auto',
        fill: '#316ff2',
      }}
    >
      <rect
        x="1"
        y="6"
        width="2.8"
        height="12"
        style={{
          animation: 'spinner 0.9s linear infinite',
          animationDelay: '-0.5s',
        }}
      />
      <rect
        x="5.8"
        y="6"
        width="2.8"
        height="12"
        style={{
          animation: 'spinner 0.9s linear infinite',
          animationDelay: '-0.7s',
        }}
      />
      <rect
        x="10.6"
        y="6"
        width="2.8"
        height="12"
        style={{
          animation: 'spinner 0.9s linear infinite',
          animationDelay: '-0.9s',
        }}
      />
      <rect
        x="15.4"
        y="6"
        width="2.8"
        height="12"
        style={{
          animation: 'spinner 0.9s linear infinite',
          animationDelay: '-0.7s',
        }}
      />
      <rect
        x="20.2"
        y="6"
        width="2.8"
        height="12"
        style={{
          animation: 'spinner 0.9s linear infinite',
          animationDelay: '-0.5s',
        }}
      />
      <style jsx>{`
        @keyframes spinner {
          0%,
          66.66% {
            animation-timing-function: cubic-bezier(0.14, 0.73, 0.34, 1);
            y: 6px;
            height: 12px;
          }
          33.33% {
            animation-timing-function: cubic-bezier(0.65, 0.26, 0.82, 0.45);
            y: 1px;
            height: 22px;
          }
        }
      `}</style>
    </svg>
  </div>
</div>
  )
}

export default UploadForm