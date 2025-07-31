import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function Header({ setMobile }) {
  return (
    <div className="py-3 md:py-4 border-b flex flex-row-reverse justify-between px-2 items-center">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      {/* Logo on mobile */}
      <div className="md:hidden">
        <Image
          src="/logo.jpg"
          width={120}
          height={100}
          alt="logo"
          priority
        />
      </div>

      {/* Menu Button for Mobile */}
      <button
        type="button"
        className="md:hidden p-2"
        onClick={() => setMobile(true)}
      >
        <MenuIcon />
      </button>
    </div>
  );
}

export default Header;
