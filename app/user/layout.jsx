"use client"
import Header from "/components/Header";
import Sidebar from './Sidebar';

import { useSelector, useDispatch } from 'react-redux';

// export const metadata = {
//   title: 'Bedbd.com',
//   description: 'Find your sweet place',
// };

export default function RootLayout({ children }) {
  const user = useSelector((state) => state.auth.user); 
    // Corrected comparison for null
  if (user === null) return null; // Don't render anything if user is null
  
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