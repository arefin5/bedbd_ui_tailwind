

"use client"; // This ensures the component is treated as client-side

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from "/components/Header";
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

export default function RootLayout({ children }) {
  const user = useSelector((state) => state.auth.user); 
  const router = useRouter(); // Initialize router for client-side navigation
// console.log("host user from ")
  useEffect(() => {
    // Redirect to "/home" if user is null
    if (user === null) {
      router.push('/');
    }
  }, [user, router]);

  // Don't render anything if user is null (during redirection)
  if (user === null) return null;

  return (
    <>
      <Header />
      <div className="container ml-auto mr-auto relative">
        <Sidebar user={user} />
        <div className="absolute left-[314px] w-[calc(100%-314px)] h-screen">
          {children}
        </div>
      </div>
    </>
  );
}
