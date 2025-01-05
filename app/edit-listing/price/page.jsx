
// "use client";
// import PriceCounter from "./PriceCounter";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import { updateFormData } from "@/redux/list/editListSlice";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Page() {
//   const [data, setData] = useState(null); // Initialize with null for conditional rendering
//   const [price, setPrice] = useState(0);
//   const [groundPrice, setGroundPrice] = useState(0);
//   const [serviceFee, setServiceFee] = useState(0);
//   const [tax, setTax] = useState(0);

//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [existPrice, setExistPrice] = useState(0);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const datas = JSON.parse(localStorage.getItem("data")) || {};
//       setExistPrice(datas.GroundPrice);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         setGroundPrice(existPrice);
//         const response = await axios.get("https://backend.bedbd.com/api/service-rate");
//         setData((prevData) => ({
//           ...response.data,
//           minPrice: existPrice || 0, // Fallback to minPrice if existPrice is undefined
//         }));
//       } catch (error) {
//         console.error("Error fetching service rates:", error);
//       }
//     };
//     fetchService();
//   }, [existPrice]);

//   const handleSubmitImage = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = { price, serviceFee, tax, GroundPrice: groundPrice };
//       await dispatch(updateFormData(payload));
//       if (typeof window !== "undefined") {
//         const update = JSON.parse(localStorage.getItem("data")) || {};
//         update.GroundPrice = groundPrice;
//         localStorage.setItem("data", JSON.stringify(update));
//         router.push("/edit-listing/availability");
//       }
     
//     } catch (error) {
//       console.error("Error submitting form data:", error);
//     }
//   };

//   const back = (e) => {
//     e.preventDefault();
//     router.push("/edit-listing/upload-images");
//   };

//   return (
//     <div className="min-h-screen py-20">
//       <div>
//         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">
//           Set Price
//         </h2>
//         <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8" onSubmit={(e) => e.preventDefault()}>
//           <h3 className="text-xl font-medium">How much do you want to charge per night?</h3>
//           <p className="text-sm font-normal">No worries! You can change it anytime you want.</p>

//           {!data ? (
//             <p>Loading...</p>
//           ) : (
//             <PriceCounter
//               data={data}
//               price={price}
//               setPrice={setPrice}
//               GroundPrice={groundPrice}
//               setGroundPrice={setGroundPrice}
//               setServiceFee={setServiceFee}
//               tax={tax}
//               setTax={setTax}
//             />
//           )}

//           <div className="text-sm font-normal text-neutral-600 w-fit ml-auto mr-auto text-left max-w-md mt-3.5">
//             Check your nearest property price to make it more competitive. It will increase your chances of getting more bookings.
//           </div>

//           <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
//             <button className="btn btn-secondary max-w-36 relative" onClick={back} aria-label="Go back to the previous step">
//               Back
//             </button>
//             <button className="btn btn-primary" onClick={handleSubmitImage} aria-label="Continue to the next step">
//               Continue
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client"
import Icon from '/components/Icon'
import PriceCounter from './PriceCounter'
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { updateFormData } from "@/redux/list/editListSlice";
import { useEffect, useState } from "react";

function getIfo() {
    return {
        "_id": "663a0b374ec144ec33e4f103",
        "currency": "$",
        "minPrice": "0",
        "taxRate": "15%",
        "serviceFee":"2"
      }
  }

 
export default function page() {
    const data = getIfo();
    const router=useRouter();
    const dispatch=useDispatch();
 // const getStoredPrice = () => {
 //    const storedData = localStorage.getItem("price"); // Retrieve from localStorage
 //    if (storedData) {
 //      try {
 //        const parsedData = JSON.parse(storedData); // Parse it as JSON
 //        return parsedData?.GroundPrice || data.minPrice; // Default to `minPrice` if `basePrice` is undefined
 //      } catch (error) {
 //        console.error("Error parsing stored price data:", error);
 //        return data.minPrice; // Fallback to `minPrice` in case of error
 //      }
 //    }
 //    return data.minPrice; // Default to `minPrice` if nothing is stored
 //  };
const getStoredPrice = () => {
    const storedData = localStorage.getItem("price");
    if (storedData) {
        try {
            const parsedData = JSON.parse(storedData);
            return parseFloat(parsedData?.GroundPrice) || parseFloat(data.minPrice);
        } catch (error) {
            console.error("Error parsing stored price data:", error);
            return parseFloat(data.minPrice);
        }
    }
    return parseFloat(data.minPrice);
};
// const handleContinue=async(e)=>{
//     e.preventDefault();
//         const datas=localStorage.getItem("data");
//                 const storedPriceInfo = datas.GroundPrice;


//          console.log(storedPriceInfo)
//     const payload = {
//         GroundPrice: storedPriceInfo, // Adjust the key based on actual logic
//       };
//       dispatch(updateFormData(payload)); // Dispatch Redux action
//       console.log("Form Data Submitted:", payload);
//       router.push("/edit-listing/availability"); 
// }
  const handleContinue = async (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem("data");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    const storedPriceInfo = parsedData.GroundPrice || data.minPrice;

    const payload = {
        GroundPrice: storedPriceInfo, // Adjust based on logic
    };
    dispatch(updateFormData(payload)); // Dispatch Redux action
    console.log("Form Data Submitted:", payload);
    router.push("/edit-listing/availability");
};

const back = (e) => {
    e.preventDefault();
    router.push("/edit-listing/upload-images");
  };
    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Set Price</h2>
            <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8 ">
                <h3 className='text-xl font-medium'>How much do you want to charge per night?</h3>
                <p className='text-sm font-normal'>No worries! You can change it anytime you want.</p>

                
                        <PriceCounter data={data}/>

                
                <div className='text-sm  font-normal text-neutral-600 w-fit  ml-auto mr-auto text-left max-w-md mt-3.5'>
                    Check your nearest property price to make more competitive. It will increase your changes of getting more booking
                </div>
                    

              <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
                <button className="btn btn-secondary max-w-36 relative">
                  <Icon name='chevron-left' className="icon absolute-y-center left-4 " onClick={back}/> 
                  Back</button>
                <button className="btn btn-primary"
                 onClick={handleContinue}>
                  Continue
                </button>
              </div>
              </form>
          </div>
        </div>        
      )
}
