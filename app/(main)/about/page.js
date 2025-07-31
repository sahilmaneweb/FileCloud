'use client';

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Page() {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-10 text-center">
        About <span className="text-primary">Owner</span>
      </h2>

      {/* Responsive layout */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-3">
        {/* Left - Image + Name + Socials */}
        <div className="flex flex-col items-center md:w-5/12 text-center md:text-left">
          <Image
            src="/owner-profile.jpg"
            alt="Owner"
            width={160} // desktop size
            height={160}
            className="rounded-full object-cover md:w-56 md:h-56 w-48 h-48"
          />
          <h3 className="mt-4 text-xl font-semibold">Sahil Mane</h3>
            
          <div className="flex gap-4 mt-3 text-primary text-xl">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sahil-mane-b113032ba" },
              { icon: <FaGithub />, link: "https://github.com/sahilmaneweb" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/sahil_mane_1304" },
            ].map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-primary hover:bg-primary hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Message */}
        <div className="md:w-7/12 text-justify text-gray-700 text-lg leading-relaxed">
          <p>
            Understanding how to share files and manage them effectively over the
            internet has always been a challenge for many. <br /> To make this process
            simple, I created <strong>FileCloud</strong> — a portal where you can
            easily upload, share, and organize your files from anywhere. Whether you
            want to protect your files, generate a short link, or share them with
            others, this platform allows you to do all of these operations securely
            and conveniently in one place.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
