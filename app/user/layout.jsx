
// import Header from "/components/Header";
// import Sidebar from './Sidebar';

// import { useSelector } from 'react-redux';

// // export const metadata = {
// //   title: 'Bedbd.com',
// //   description: 'Find your sweet place',
// // };

// export default function RootLayout({ children }) {
//   const user = useSelector((state) => state.auth.user); 
//     // Corrected comparison for null
//   if (user === null) return null; // Don't render anything if user is null
  
//   return (
//     <>
//       <Header />
//       <div className="container ml-auto mr-auto relative">
//         <Sidebar user={user} />
//         <div className="absolute left-[314px] w-[calc(100%-314px)] h-screen">
//           {children}
//         </div>
//       </div>
//     </>
//   );
// }
// "use client";
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';  // Import useRouter from Next.js
// import Header from "/components/Header";
// import Sidebar from './Sidebar';
// import { useSelector } from 'react-redux';
// // import Header from "/components/Header";

// export default function RootLayout({ children }) {
//   const user = useSelector((state) => state.auth.user); 
//   const router = useRouter(); // Initialize router

//   useEffect(() => {
//     // If user is null, redirect to "/home"
//     if (user === null) {
//       router.push('/home');
//     }
//   }, [user, router]);

//   // Don't render anything if user is null (during redirection)
//   if (user === null) return null;

//   return (
//     <>
//       <Header />
//       <div className="container ml-auto mr-auto relative">
//         <Sidebar user={user} />
//         <div className="absolute left-[314px] w-[calc(100%-314px)] h-screen">
//           {children}
//         </div>
//       </div>
//     </>
//   );
// }


"use client"; // This ensures the component is treated as client-side

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from "/components/Header";
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

export default function RootLayout({ children }) {
  const user = useSelector((state) => state.auth.user); 
  const router = useRouter(); // Initialize router for client-side navigation

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
