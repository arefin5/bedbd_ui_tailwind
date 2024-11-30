
"use client";
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';

export default function RootLayout({ children }) {
  // const user = useSelector((state) => state.auth.user);
  // const token=useSelector((state)=>state.auth.token)
  // const router = useRouter(); // Initialize router for client-side navigation


  return (
    <>
    {/* Admin Header */}
      <Header />

      <div className="container ml-auto mr-auto flex z-10">
        {/* Admin Sidebar */}
        <Sidebar />
        {children}
      </div>
    </>
  );
}
