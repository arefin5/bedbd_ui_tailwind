// 'use client'
// import { Menu, X } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { useState,useEffect } from "react"
// import { useSelector } from "react-redux"

// export default function Navbar() {
//     const [loggedIn, setLoggedIn] = useState(true)
//     const [open, setOpen] = useState(false)
//     const [subMenuOpen, setSubMenuOpen] = useState(false)
//     const { user,token } = useSelector((state) => state.auth);
//     console.log(user)
//     // useEffect(() => {
//     //     if (!user || user.role !== "host") {
//     //       return
//     //       }
//     //   }, [user, token])
//   return (
//     <div className="relative">
//     {
//         open
//             ? <X className="icon md:hidden" onClick={()=>setOpen(false)}/>
//             : <Menu className="icon md:hidden" onClick={()=>setOpen(true)}/>                    
//     }
//         <ul className={`absolute  right-0 bg-white shadow-md md:shadow-none rounded-md  md:flex md:flex-row-reverse md:items-center md:static md:gap-x-10 ${!open && 'hidden '}`}  >
//     {
//         loggedIn
//             ?   <>
//                     <li className="w-max min-w-full md:min-w-max py-4 px-10 md:p-0 " onClick={()=> setSubMenuOpen(val=> !val)}>
//                           {/* {user && user.profilePic?Image(
//                             <Image alt='User image' className=' ml-auto mr-auto border-primary-400 padding-0 min-w-12 min-h-12 rounded-full drop-shadow drop-shadow-md shadow-primary-400' 
//                             src={user.profilePic.url} 
//                             height={48} 
//                             width={48}/>
//                           ):(
//                             <Image alt='User image' className=' ml-auto mr-auto border-primary-400 padding-0 min-w-12 min-h-12 rounded-full drop-shadow drop-shadow-md shadow-primary-400' 
//                             src={'/dummy/sample-profile-photo.jpg'} 
//                             height={48} 
//                             width={48}/>
//                           )} */}
                        
//                     </li>
//                     <li className=" w-max min-w-full md:min-w-max py-4 px-6 md:p-0">
//                        <Link href="/add-listing">
//                        <button className="btn btn-secondary rounded-lg px-6 font-semibold">Add New Property </button>
//                        </Link>
//                     </li>
            
//                     <li className="w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
//                         Available Balance:&nbsp; 
//                         <span className="inline-block max-w-full text-center text-secondary-400 ">
//                         &nbsp;{`5264.00`}
//                         </span>
//                     </li>
//                 </>

//             :
//                 <li className="overflow-visible w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium hover:font-bold md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner md:hover:shadow-none">
//                 <span className="inline-block max-w-full text-center hover:scale-110 ">Log in</span>
//             </li>
//     }

        
        
//     {   
//     loggedIn  &&
//         <li>
//             <ul className={`md:grid md:absolute right-4 bg-white top-12 md:shadow-md md:rounded-md ${ !subMenuOpen && 'md:hidden' } `} >                    
                
//                 <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
//                     <span className="inline-block max-w-full text-center md:hover:scale-110 ">Message</span>
//                 </li>
//                 <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
//                     <span className="inline-block max-w-full text-center md:hover:scale-110 ">Profile</span>
//                 </li>
//                 <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
//                     <span className="inline-block max-w-full text-center md:hover:scale-110 ">Favorite List</span>
//                 </li> 
//                 <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
//                     <span className="inline-block max-w-full text-center md:hover:scale-110 ">Booking History</span>
//                 </li> 
//                 <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
//                     <span className="inline-block max-w-full text-center md:hover:scale-110 ">Switch to User</span>
//                 </li> 
//                 <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
//                     <span className="inline-block max-w-full text-center md:hover:scale-110 ">Support</span>
//                 </li> 
//                 <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
//                     <span className="inline-block max-w-full text-center md:hover:scale-110 ">Log Out</span>
//                 </li> 
//             </ul>                
//         </li>
//     }            
//         </ul>
//     </div>
//   )
// }

'use client';
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const loggedIn = !!user;

  useEffect(() => {
    
    // Logic to handle the user role (if necessary in the future)
  }, [user, token]);

  return (
    <div className="relative">
      {/* Hamburger menu for mobile */}
      {open ? (
        <X className="icon md:hidden" onClick={() => setOpen(false)} />
      ) : (
        <Menu className="icon md:hidden" onClick={() => setOpen(true)} />
      )}

      <ul
        className={`absolute right-0 bg-white shadow-md md:shadow-none rounded-md md:flex md:flex-row-reverse md:items-center md:static md:gap-x-10 ${
          !open && 'hidden'
        }`}
      >
        {loggedIn ? (
          <>
            <li className="w-max min-w-full md:min-w-max py-4 px-10 md:p-0" onClick={() => setSubMenuOpen((val) => !val)}>
              {/* Profile Picture */}
              {user && user.profilePic ? (
                <Image
                  alt="User image"
                  className="ml-auto mr-auto border-primary-400 min-w-12 min-h-12 rounded-full shadow-md"
                  src={user.profilePic.url}
                  height={48}
                  width={48}
                />
              ) : (
                <Image
                  alt="User image"
                  className="ml-auto mr-auto border-primary-400 min-w-12 min-h-12 rounded-full shadow-md"
                  src={'/dummy/sample-profile-photo.jpg'}
                  height={48}
                  width={48}
                />
              )}
            </li>
            <li className="w-max min-w-full md:min-w-max py-4 px-6 md:p-0">
              <Link href="/add-listing/property-type">
                <button className="btn btn-secondary rounded-lg px-6 font-semibold">Add New Property</button>
              </Link>
            </li>

            <li className="w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
              Available Balance:&nbsp;
              <span className="text-secondary-400">5264.00</span>
            </li>
          </>
        ) : (
          <li className="w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium hover:font-bold text-neutral-500 cursor-pointer hover:shadow">
            <span className="hover:scale-110">Log in</span>
          </li>
        )}

        {loggedIn && (
          <li>
            <ul className={`md:absolute right-4 bg-white top-12 md:shadow-md md:rounded-md ${!subMenuOpen && 'md:hidden'}`}>
              <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Message
              </li>
              <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Profile
              </li>
              <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Favorite List
              </li>
              <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Booking History
              </li>
              <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Switch to User
              </li>
              <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Support
              </li>
              <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Log Out
              </li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
}

