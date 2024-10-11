// "use client";
// import Header from './Header';
// import Sidebar from './Sidebar';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';

// // export const metadata = {
// //   title: 'Bedbd.com',
// //   description: 'Find your sweet place',
// // };
//     const user = useSelector((state) => state.auth.user);
//     const router = useRouter(); // Initialize router for client-side navigation
//     console.log("host user from ")
//     useEffect(() => {
//       // Redirect to "/home" if user is null
//       if (user.role !== "user") {
//         router.push('/');
//       }
//     }, [user, router]);

// // Don't render anything if user is null (during redirection)
// // if (user === null) return null;
// export default function RootLayout({ children }) {
//   return (
//     <>
//       <Header />
//       <div className="container ml-auto mr-auto flex z-10">
//         <Sidebar />
//         {children}
//       </div>
//     </>
//   );
// };
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
    // If the user is not logged in or doesn't have the "user" role, redirect to "/"
    if (!user || user.role !== "user") {
      router.push('/');
    }
  }, [user, router]);

  // Don't render anything until the user check is done
  if (!user || user.role !== "user") return null;

  return (
    <>
      <Header />
      <div className="container ml-auto mr-auto flex z-10">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
