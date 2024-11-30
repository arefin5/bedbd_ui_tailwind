"use client"
import Icon from '/components/Icon';
import Navigation from './Navigation';
import { usePathname } from 'next/navigation';

// export const metadata = {
//   title: 'Bedbd.com',
//   description: 'Find your sweet place',
// };

export default function Layout({ children }) {
  const pathname = usePathname()
  const noNavbarRoutes = ["/user/privacy-sharing/personal-data", "/user/privacy-sharing/delete-account"]; // Add routes here
  const showNavbar= !noNavbarRoutes.includes(pathname);
  return (
    <div className='w-full h-full pt-16 pl-20 pr-4'>
      <div className='relative'>
        <h3 className='text-primary-400 text-2xl font-semibold'>Privacy & Sharing</h3>
        <button className='absolute-y-center -left-10'>
          <Icon className='icon' name='arrow-left' size={24} />
        </button>
      </div>

      { 
        showNavbar 
          && 
            <Navigation />
      }

      <div className='flex justify-between pt-12 w-full'>
        {children}
        {

        }
        <div className='max-w-80 py-12 px-4 rounded-lg border border-neutral-300 h-max'>
          <h3 className='text-neutral-500 text-xl font-semibold'>Committed to privacy</h3>
          <p className='text-sm font-normal mt-4'>
            bedbd is committed to keeping your data protected. See details in our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}



// export default function Layout({ children }) {
//   return (
//     <div className='w-full h-full pt-16 pl-20 pr-4'>
//       <div className='relative'>
//         <h3 className='text-primary-400 text-2xl font-semibold'>Privacy & Sharing</h3>
//         <button className='absolute-y-center -left-10'>
//           <Icon className='icon' name='arrow-left' size={24} />
//         </button>
//       </div>
//       <Navigation />

//       <div className='flex justify-between pt-12 w-full'>
//         {children}

//         <div className='max-w-80 py-12 px-4 rounded-lg border border-neutral-300 h-max'>
//           <h3 className='text-neutral-500 text-xl font-semibold'>Committed to privacy</h3>
//           <p className='text-sm font-normal mt-4'>
//             bedbd is committed to keeping your data protected. See details in our Privacy Policy.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }