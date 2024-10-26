
"use client";
import Header from './Header';
import Sidebar from './Sidebar';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function RootLayout({ children }) {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter(); // Initialize router for client-side navigation

  useEffect(() => {
    if (!user || user.role !== "host") {
      router.push('/');
    }
  }, [user, router]);

  // Don't render anything until the user check is done
  if (!user || user.role !== "host") return null;

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
