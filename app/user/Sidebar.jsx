"use client"
import Icon from "/components/Icon"

export default function Sidebar({user}) {
   console.log("user",user)
  // const user = useSelector((state) => state.auth.user); 
 
  return (
    <div className=' h-[712px] w-[314px] absolute left-0 '>
      <div className='bg-secondary-50 h-full rounded-b-lg px-4 pt-28  drop-shadow-sm shadow-sm'>
        <h1 className="text-3xl font-semibold text-neutral-800 text-center mb-12">
             {user.name || "Please set your name"}
        </h1>
        <h1 className="text-neutral-500 text-2xl font-semibold mb-6">Verified information</h1>
        <p className="text-neutral-500 font-medium text-base mb-4">
        Mobile Number
        <span className="">
         <Icon name='badge-check' className="icon inline" /> </span></p>
        <p className="text-neutral-500 font-medium text-base mb-12">

        {user.email || "Please set your email"}
          <span className="text-green-600 hover:cursor-pointer">
            {user.email ? " verify now" : " verify"}
          </span>
        </p>

        <h1 className="text-neutral-500 text-2xl font-semibold mb-6">Verify your identity</h1>
        <p className="text-neutral-500 text-base font-normal mb-12">Before you book or Host on bedbd, you’ll need to complete this step.</p>

        <button className="btn btn-secondary rounded-full">Get Verified</button>
      </div>
    </div>
  )
}
