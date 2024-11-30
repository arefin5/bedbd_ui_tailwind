"use client"; // This ensures the component is treated as client-side
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from "/components/Header";
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const {user,token}  = useSelector((state) => state.auth); 
  const pathname = usePathname();
  const noSidebarRoutes = ["/user/booking-history"]; // Add routes here
  const showSidebar = !noSidebarRoutes.includes(pathname);


  const router = useRouter(); // Initialize router for client-side navigation
// console.log("host user from ")

  useEffect(() => {
    // Redirect to "/home" if user is null
    if (user === null && token===null) {
      router.push('/');
    }
  }, [user, router,token]);

  useEffect(() => {
    // Redirect to "/home" if user is null
    if ( user?.role==="host") {
      router.push('/host/profile');
    }
  }, [user, router,token]);

  // Don't render anything if user is null (during redirection)
  if (user === null) return null;

  return (
    <>
      <Header />
      <div className="container ml-auto mr-auto relative">
        { showSidebar 
          ? <>
              <Sidebar user={user} />
                <div className="absolute left-[314px] w-[calc(100%-314px)] h-screen">
                  {children}
                </div>
            </>
          : children
        }
      </div>
    </>
  );
}
