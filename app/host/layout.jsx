
"use client";
import Header from './Header';
import Sidebar from './Sidebar';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function RootLayout({ children }) {
  const user = useSelector((state) => state.auth.user);
  const token=useSelector((state)=>state.auth.token)
  const router = useRouter(); // Initialize router for client-side navigation

  // useEffect(() => {
  //   if (!user || user.role !== "host" && !token ) {
  //     router.push('/');
  //   }
  // }, [user, router,token]);

  // if (!user || user.role !== "host") return null;

  return (
    <>
      <Header user={user}/>
      <div className="container ml-auto mr-auto flex z-10">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
