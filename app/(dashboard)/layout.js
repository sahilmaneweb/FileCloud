"use client";
import React, { useState } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

function Layout({ children }) {
  const [mobile, setMobile] = useState(false);

  return (
    <section>
      {/* Overlay for mobile */}
      {mobile && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobile(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-white fixed top-0 left-0 h-screen w-56 border-r z-50 transform transition-transform duration-300 
        ${mobile ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}
      >
        <Sidebar setMobile={setMobile} />
      </div>

      {/* Main content */}
      <div className="md:ml-56">
        <Header setMobile={setMobile} />
        <main className="p-3 px-4 md:px-16">{children}</main>
      </div>
    </section>
  );
}

export default Layout;
