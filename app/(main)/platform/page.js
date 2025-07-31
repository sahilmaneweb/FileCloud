import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Let&apos;s Understand <span className="text-primary">Our Platform</span>
      </h1>

      {/* Intro */}
      <p className="text-gray-600 text-lg mb-8 text-justify">
        FileCloud is designed to make file sharing and file management over the internet
        simple, fast, and secure. Whether you are storing important documents, sharing
        work files, or simply organizing your data, our platform provides everything you
        need in one place. It ensures your files are safe, easy to share, and accessible
        from anywhere.
      </p>

      {/* Key Features */}
      <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li><strong>Secure File Storage:</strong> All your files are stored safely in the cloud.</li>
        <li><strong>Customizable Permissions:</strong> You decide who can access or edit your files.</li>
        <li><strong>Short URL Generation:</strong> Share files quickly with simple, shortened links.</li>
        <li><strong>Email Sharing:</strong> Send files directly to someone’s email from the platform.</li>
        <li><strong>Password Protection:</strong> Add an extra security layer for sensitive files.</li>
      </ul>

      {/* Getting Started */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Getting Started</h2>
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        
        {/* Upload Section */}
        <div>
          <strong className="block text-xl mb-1">1. Upload Section</strong>
          <p>
            Begin by navigating to the <strong>Upload</strong> section. Here, you can select and
            upload your files. Currently, only <strong>image files</strong> are supported for
            submission. Please note that if your file is large, uploading may take a little
            time depending on your internet speed. <strong>Do not close</strong> your browser
            during the upload — simply wait until the process is complete.
          </p>
        </div>

        {/* Files Section */}
        <div>
          <strong className="block text-xl mb-1">2. Files Section</strong>
          <p>
            Once uploaded, your files will appear in the <strong>Files</strong> section. 
            This is your personal library where all your submitted files are listed in an
            organized manner. You can browse through your files and click on any to view
            its dedicated preview page for more options.
          </p>
        </div>

        {/* File Preview Section */}
        <div>
          <strong className="block text-xl mb-1">3. File Preview Page</strong>
          <p>
            On the file preview page, you can manage and control your uploaded file in
            detail. Here’s what you can do:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Copy Short URL:</strong> Quickly copy and share the generated short link for easy access.</li>
            <li><strong>Enable/Disable Password Protection:</strong> Decide whether your file requires a password for access.</li>
            <li><strong>Send via Email:</strong> Directly send the file to a recipient’s email address.</li>
            <li><strong>Toggle Visibility:</strong> Choose whether your file can be viewed publicly through its short link.</li>
            <li><strong>Delete File:</strong> Remove the file from the platform if you no longer need it.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <Link href="/rules">
          <button className="bg-primary text-white text-lg px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Let&apos;s Start Uploading Files
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
