"use client";
import { Folder, FolderPlus, Settings2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar({ setMobile }) {
  const pathName = usePathname();

  const MenuList = [
    { name: "Rules", icon: Settings2, path: "/rules" },
    { name: "Upload", icon: FolderPlus, path: "/upload" },
    { name: "Files", icon: Folder, path: "/files" },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Logo & Close button for mobile */}
      <div className="border-b p-4 flex items-center justify-between">
        <Image src="/logo.jpg" width={130} height={100} alt="logo" priority />
        <button
          onClick={() => setMobile(false)}
          className="md:hidden text-gray-600 hover:text-red-500"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col items-start flex-1">
        {MenuList.map((item, index) => {
          const isActive = pathName === item.path;
          return (
            <Link href={item.path} key={index} className="w-full">
              <button
                type="button"
                className={`flex gap-2 w-full p-4 text-left ${
                  isActive
                    ? "text-primary bg-blue-100 hover:bg-blue-200"
                    : "hover:bg-slate-200 text-gray-500"
                }`}
                onClick={() => setMobile(false)}
              >
                <item.icon />
                <h2 className="font-semibold">{item.name}</h2>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
