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
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "@/redux/services/axiosInstance"

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const router=useRouter();
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if(user){
      setLoggedIn(true);
    }else{
      setLoggedIn(false)
    }
  }, [user, token]);
const SwitchtoUser=(e)=>{
  router.push("/user/profile");

}
const [isLoading, setIsLoading] = useState(false);

const changeRuleAsUser = async () => {
  setIsLoading(true); // Show loading indicator
  try {
    const response = await axiosInstance.put("/change-role-user");
    if (response.data) {
      const updatedUser = response.data.user; // Assuming updated user data is returned
      localStorage.setItem("user", JSON.stringify(updatedUser)); // Update local storage
      setIsLoading(false); // Stop loading indicator
      window.location.href = "/"; // Redirect to homepage
    }
  } catch (error) {
    console.error("Error updating role:", error);
    setIsLoading(false); // Stop loading indicator even on error
  }
};
//  const changeRuleAsUser = async (e) => {
//         // e.preventDefault();

//         if (user && user.role === "user") {
//             router.push("/user/profile");
//         } else {
//             try {
//                 const response = await axiosInstance.put("/change-role-user");

//                 if (response.data) {
//                     const updatedUser = response.data.user; // Assuming `response.data.user` contains the updated user info
//                     localStorage.setItem("user", JSON.stringify(updatedUser)); // Store the updated user in localStorage

//                     // // Optionally, update local `user` state if needed
//                     // setUser(updatedUser);
//                     window.location.href = "/host/profile";
//                     // router.push("/host/profile")
//                 }
//             } catch (error) {
//                 console.error("Error updating role:", error);
//             }
//         }
//     };


const LogOut = async (e) => {
  e.preventDefault();
  localStorage.clear();
  setLoggedIn(false);
  window.location.href = "/";
  }
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
              
              <li
  onClick={changeRuleAsUser}
  className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold"
>
  {isLoading ? (
    <span>Loading...</span> // Replace with a spinner if needed
  ) : (
    "Become a User"
  )}
</li>
              <Link href="/host/profile">
              <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Profile
              </li>
              </Link>
              {/* <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Favorite List
              </li> */}
             <Link href="/host/properties">
             <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
              properties
              </li>
             </Link>
             
              {/* <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Switch to User
              </li> */}
              <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Support
              </li>
              <li
              onClick={LogOut}
               className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:font-bold">
                Log Out
              </li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
}

