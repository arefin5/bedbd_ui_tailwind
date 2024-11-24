// "use client"
// import Icon from "/components/Icon"
// import CopyButton from './CopyButton'
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { submitList } from "@/redux/list/createListSlice";
// import { useRouter } from 'next/navigation';
// import Link from "next/link";


// export default function Page() {
//     const dispatch = useDispatch();
//     const router=useRouter();
//     // Access Redux state
//     const { isLoading, error, lists } = useSelector((state) => state.form); // Adjust the state path if needed
  
//     // Trigger submitList when the page is rendered
//     useEffect(() => {
//       dispatch(submitList());
//     }, [dispatch]);
//   // host/
//     // Conditional rendering based on loading, error, and success
//     if (isLoading) {
//       return (
//         <div className="min-h-screen py-20">
//           <div className="absolute-center w-screen">
//             <h2 className="text-secondary-400 text-4xl text-center">Loading...</h2>
//           </div>
//         </div>
//       );
//     }
//   // 
//     if (error) {
//       return (
//         <div className="min-h-screen py-20">
//           <div className="absolute-center w-screen">
//             <h2 className="text-red-500 text-4xl text-center">Error: {error}</h2>
//           </div>
//         </div>
//       );
//     }
//     // const goProperty = (e) => {
//     //   e.preventDefault();
//     //   console.log(lists)
//     //   router.push(`/listing/{lists?._id}`);
//     // };
//     const goProperty = (e) => {
//       e.preventDefault();
//       console.log("start");
      
//       if (lists && lists._id) {
//         router.push(`/listing/${lists._id}`);
//       } else {
//         console.error("Invalid list ID");
//       }
//     };
//     // /listing/674365360761af36d551d255  listing/674365360761af36d551d255
//     const back = (e) => {
//       e.preventDefault();
//       router.push('/host');
//   };
//     // Show success content when the list is successfully submitted
//     return (
//       <div className="min-h-screen py-20">
//         <div className="absolute-center w-screen">
//           <h2 className="text-secondary-400 text-5xl text-center font-semibold mb-2">Congratulations</h2>
//           <h3 className='text-2xl font-normal text-neutral-500 text-center max-w-md ml-auto mr-auto'>
//             Your property has been listed successfully.
//           </h3>
  
//           <form className="w-full max-w-3xl ml-auto mr-auto mt-8 px-8 select-none">
//             <h3>You can share it now.</h3>
//             <div className="relative">
//               <input
//                 className='form-input' 
//                 type="text"
//                 id='property-url-input'
//                 value={`www.bedbd.com/listing/${lists?._id}`}
               
//                 readOnly
//               />
//               <CopyButton inputId='property-url-input' />
//             </div>
  
//             <div className="flex gap-x-8 mt-14 max-w-xl ml-auto mr-auto">
//               <button className="btn btn-secondary relative"
//               onClick={back}>
//                 <Icon name='home' className="icon absolute-y-center left-8" />
//                 Back to Home
//               </button>
             
//               <button className="btn btn-primary"  onClick={goProperty}
//               disabled={!lists}>
//                 Show Property 
//               </button>
           
              
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }


"use client";
import Icon from "/components/Icon";
import CopyButton from "./CopyButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { submitList } from "@/redux/list/createListSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();


  const [isSubmitted, setIsSubmitted] = useState(false);

  // Access Redux state

 

  // Access Redux state
  const { isLoading, error, lists } = useSelector((state) => state.form);
  useEffect(() => {
    if (!isSubmitted) {
      dispatch(submitList());
      setIsSubmitted(true); // Ensure it only triggers once
    }
  }, [dispatch, isSubmitted]);
  // Trigger submitList only once if lists is not already populated
  // useEffect(() => {
  //   if (!lists) {
  //     dispatch(submitList());
  //   }
  // }, [dispatch, lists]);

  // Conditional rendering based on loading, error, and success
  if (isLoading) {
    return (
      <div className="min-h-screen py-20">
        <div className="absolute-center w-screen">
          <h2 className="text-secondary-400 text-4xl text-center">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20">
        <div className="absolute-center w-screen">
          <h2 className="text-red-500 text-4xl text-center">Error: {error}</h2>
        </div>
      </div>
    );
  }

  const goProperty = (e) => {
    e.preventDefault();
    if (lists && lists._id) {
      router.push(`/listing/${lists._id}`);
    } else {
      console.error("Invalid list ID");
    }
  };

  const back = (e) => {
    e.preventDefault();
    router.push("/host");
  };

  // Success content
  return (
    <div className="min-h-screen py-20">
      <div className="absolute-center w-screen">
        <h2 className="text-secondary-400 text-5xl text-center font-semibold mb-2">
          Congratulations
        </h2>
        <h3 className="text-2xl font-normal text-neutral-500 text-center max-w-md ml-auto mr-auto">
          Your property has been listed successfully.
        </h3>

        <form className="w-full max-w-3xl ml-auto mr-auto mt-8 px-8 select-none">
          <h3>You can share it now.</h3>
          <div className="relative">
            <input
              className="form-input"
              type="text"
              id="property-url-input"
              value={`www.bedbd.com/listing/${lists?._id}`}
              readOnly
            />
            <CopyButton inputId="property-url-input" />
          </div>

          <div className="flex gap-x-8 mt-14 max-w-xl ml-auto mr-auto">
            <button className="btn btn-secondary relative" onClick={back}>
              <Icon name="home" className="icon absolute-y-center left-8" />
              Back to Home
            </button>

            {/* <button
              className="btn btn-primary"
              onClick={goProperty}
              disabled={!lists}
            >
            
              Show Property
            </button> */}
            <Link href={`/listing/${lists?._id}`}>
  <a>Show Property</a>
</Link>
            {/* <a href={`listing/${lists?._id}`}>Show Property</a> */}
          </div>
        </form>
      </div>
    </div>
  );
}
