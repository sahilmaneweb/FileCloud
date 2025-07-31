import React from 'react';
import Link from 'next/link';

function page() {
  return (
    <div className='max-w-3xl mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold text-primary mb-4'>How our Platform works ...</h1>
      <p className='text-gray-500 mb-6'>
        FileCloud is a platform that allows users to upload, share, and manage files securely. Users can create an account, upload files, set permissions, and share links with others.
      </p>

      <h2 className='text-xl font-semibold mt-4 mb-2'>Key Features:</h2>
      <ul className='list-disc pl-5 text-gray-600 space-y-1'>
        <li>Secure file storage and sharing</li>
        <li>Customizable file permissions</li>
        <li>Short URL generation for easy sharing</li>
        <li>Email notifications for file sharing</li>
        <li>Password protection for sensitive files</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6 mb-2'>Getting Started:</h2>

      <div className='space-y-4 text-gray-600'>
        <div>
          <strong>1. Upload Section:</strong>
          <p>
            Start by uploading your image file in the Upload section. Currently, the platform only supports image-type submissions. Uploading large files may take some time depending on your internet connection. Please do not close the window and be patient during the upload process.
          </p>
        </div>

        <div>
          <strong>2. Files Section:</strong>
          <p>
            After uploading, all your submitted files are listed in the Files section. You can view the files and access their dedicated preview pages.
          </p>
        </div>

        <div>
          <strong>3. File Preview Page:</strong>
          <p>
            On the preview page, you will see complete details about your uploaded file. You can:
          </p>
          <ul className='list-disc pl-5 mt-1'>
            <li>Copy the generated short URL to share easily</li>
            <li>Enable or disable password protection for the file</li>
            <li>Enter an email address to send the file directly via email</li>
            <li>Toggle visibility of the document through the short URL</li>
            <li>Delete the file if no longer needed</li>
          </ul>
        </div>
      </div>
    <p className="text-primary font-semibold mt-6 text-left">– Sahil Mane</p>
      <div className='mt-6'>
        <Link href="/upload">
          <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition'>
            Let&apos;s start uploading files
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
