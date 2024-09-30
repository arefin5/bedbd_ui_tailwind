'use client'
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(true)
    const [open, setOpen] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState(false)

  return (
    <div className="relative">
    {
        open
            ? <X className="icon md:hidden" onClick={()=>setOpen(false)}/>
            : <Menu className="icon md:hidden" onClick={()=>setOpen(true)}/>                    
    }
        <ul className={`absolute  right-0 bg-white shadow-md md:shadow-none rounded-md  md:flex md:flex-row-reverse md:items-center md:static md:gap-x-10 ${!open && 'hidden '}`}  >
    {
        loggedIn
            ?   <>
                    <li className="w-max min-w-full md:min-w-max py-4 px-10 md:p-0 " onClick={()=> setSubMenuOpen(val=> !val)}>
                        <Image alt='User image' className=' ml-auto mr-auto border-primary-400 padding-0 min-w-12 min-h-12 rounded-full drop-shadow drop-shadow-md shadow-primary-400' 
                            src={'/dummy/sample-profile-photo.jpg'} 
                            height={48} 
                            width={48}/>
                    </li>
                    <li className=" w-max min-w-full md:min-w-max py-4 px-6 md:p-0">
                        <button className="btn btn-secondary rounded-lg px-6 font-semibold">Add New Property </button>
                    </li>
            
                    <li className="w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                        Available Balance:&nbsp; 
                        <span className="inline-block max-w-full text-center text-secondary-400 ">
                        &nbsp;{`5264.00`}
                        </span>
                    </li>
                </>

            :
                <li className="overflow-visible w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium hover:font-bold md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner md:hover:shadow-none">
                <span className="inline-block max-w-full text-center hover:scale-110 ">Log in</span>
            </li>
    }

        
        
    {   
    loggedIn  &&
        <li>
            <ul className={`md:grid md:absolute right-4 bg-white top-12 md:shadow-md md:rounded-md ${ !subMenuOpen && 'md:hidden' } `} >                    
                
                <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                    <span className="inline-block max-w-full text-center md:hover:scale-110 ">Message</span>
                </li>
                <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                    <span className="inline-block max-w-full text-center md:hover:scale-110 ">Profile</span>
                </li>
                <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                    <span className="inline-block max-w-full text-center md:hover:scale-110 ">Favorite List</span>
                </li> 
                <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                    <span className="inline-block max-w-full text-center md:hover:scale-110 ">Booking History</span>
                </li> 
                <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                    <span className="inline-block max-w-full text-center md:hover:scale-110 ">Switch to User</span>
                </li> 
                <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                    <span className="inline-block max-w-full text-center md:hover:scale-110 ">Support</span>
                </li> 
                <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                    <span className="inline-block max-w-full text-center md:hover:scale-110 ">Log Out</span>
                </li> 
            </ul>                
        </li>
    }            
        </ul>
    </div>
  )
}
