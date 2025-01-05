
"use client"
import Icon from '/components/Icon'
import PriceCounter from './PriceCounter'
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { updateFormData } from "@/redux/list/createListSlice";
import { useEffect, useState } from "react";

function getIfo() {
    return {
        "_id": "663a0b374ec144ec33e4f103",
        "currency": "$",
        "minPrice": "12",
        "taxRate": "15%",
        "serviceFee":"2"
      }
  }

 
export default function page() {
    const data = getIfo();
    const router=useRouter();
    const dispatch=useDispatch();

const handleContinue=async(e)=>{
    e.preventDefault();
        const storedPriceInfo = localStorage.getItem("price");
         // console.log(storedPriceInfo)
const payload = {
        GroundPrice: storedPriceInfo, // Adjust the key based on actual logic
      };
      dispatch(updateFormData(payload)); // Dispatch Redux action
      console.log("Form Data Submitted:", payload);
      router.push("/add-listing/availability"); 
}
const back = (e) => {
    e.preventDefault();
    router.push("/add-listing/upload-images");
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
