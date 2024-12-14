// import { useState } from "react";
// import Icon from "/components/Icon"
// import axiosInstance from "@/redux/services/axiosInstance";

// export default function page() {
//       const [email, setEmail] = useState("");
//     const RequestData=(e)=>{
//       e.preventDefault();
//       console.log(email)
//       console.log(resident)
//      const response= axiosInstance.post("/request-data",{
//         email,
//         resident
//       })
//       if(res.data.ok){
//         setMessage("your request sent")
//       }else{
//         setErrorMsg("bad request ")
//       }
      
//     }
//   return (
//     <div className='w-full h-full pt-16 pl-20 pr-4 '>
//     <div className='relative'>
//         <h3 className='text-primary-400 text-2xl font-semibold'>Privacy & Sharing</h3>
//         <button className='absolute-y-center -left-10'>
//             <Icon className='icon' name='arrow-left' size={24} />
//         </button>
//     </div>

        
//     <div className='flex justify-between pt-12 w-full'>
//       <div className="max-w-sm">
//         <h1 className="text-2xl text-neutral-500 font-semibold mb-4">Request your personal data</h1>
//         <p className="text-neutral-600 text-sm font-normal mb-12">
//           {`Before we get you a copy of your data, we'll just need you to answer a few questions.`}
//         </p>
        
//         <form>
//             {/* Residence Field */}
//             <div className="mb-6">
//               <label className="block text-neutral-700 text-lg font-semibold mb-2">
//                 Where do you reside
//               </label>
//               <select className="w-full border border-neutral-300 p-3 rounded-md">
//                 <option>Select</option>
//                 <option>United States</option>
//                 <option>Canada</option>
//                 <option>United Kingdom</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             {/* Email Field */}
//             <div className="mb-6">
//               <label className="block text-neutral-700 text-lg font-semibold mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 className="w-full border border-neutral-300 p-3 rounded-md"
//                 placeholder="Your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-primary-400 text-white py-3 rounded-md text-base font-medium" onClick={RequestData}
//             >
//               Submit
//             </button>
//             </form>
//       </div>

//       <div className='max-w-80 py-12 px-4 rounded-lg border border-neutral-300 h-max'>
//           <h3 className='text-neutral-500 text-xl font-semibold'>Committed to privacy</h3>
//           <p className='text-sm font-normal mt-4 '>bedbd is committed to keeping your data protected. See details in our Privacy Policy.</p>
//       </div>
//     </div>
    
// </div>  
//   )
// }
"use client"
import { useState } from "react";
import Icon from "/components/Icon";
import axiosInstance from "@/redux/services/axiosInstance";

export default function Page() {
  const [email, setEmail] = useState("");
  const [resident, setResident] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const RequestData = async (e) => {
    e.preventDefault();
    if (!email || !resident) {
      setErrorMsg("Please fill out all fields.");
      return;
    }

    try {
      const response = await axiosInstance.post("/request-data", {
        email,
        resident,
      });

      if (response.status===200) {
        setMessage("Your request has been sent.");
        setErrorMsg("");
      } else {
        setErrorMsg("Bad request.");
        setMessage("");
      }
    } catch (error) {
      setErrorMsg("An error occurred. Please try again.");
      setMessage("");
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full pt-16 pl-20 pr-4">
      <div className="relative">
        <h3 className="text-primary-400 text-2xl font-semibold">Privacy & Sharing</h3>
        <button className="absolute-y-center -left-10">
          <Icon className="icon" name="arrow-left" size={24} />
        </button>
      </div>

      <div className="flex justify-between pt-12 w-full">
        <div className="max-w-sm">
          <h1 className="text-2xl text-neutral-500 font-semibold mb-4">
            Request your personal data
          </h1>
          <p className="text-neutral-600 text-sm font-normal mb-12">
            {`Before we get you a copy of your data, we'll just need you to answer a few questions.`}
          </p>

          <form onSubmit={RequestData}>
            {/* Residence Field */}
            <div className="mb-6">
              <label className="block text-neutral-700 text-lg font-semibold mb-2">
                Where do you reside
              </label>
              <select
                className="w-full border border-neutral-300 p-3 rounded-md"
                value={resident}
                onChange={(e) => setResident(e.target.value)}
              >
                <option value="">Select</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-neutral-700 text-lg font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-neutral-300 p-3 rounded-md"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-400 text-white py-3 rounded-md text-base font-medium"
            >
              Submit
            </button>
          </form>

          {/* Response Messages */}
          {message && <p className="text-green-500 mt-4">{message}</p>}
          {errorMsg && <p className="text-red-500 mt-4">{errorMsg}</p>}
        </div>

        <div className="max-w-80 py-12 px-4 rounded-lg border border-neutral-300 h-max">
          <h3 className="text-neutral-500 text-xl font-semibold">
            Committed to privacy
          </h3>
          <p className="text-sm font-normal mt-4">
            bedbd is committed to keeping your data protected. See details in our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
