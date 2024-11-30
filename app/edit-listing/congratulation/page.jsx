


"use client";
import Icon from "/components/Icon";
import CopyButton from "./CopyButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();


  const { isLoading, error, lists } = useSelector((state) => state.form);
  useEffect(() => {
    
  }, [lists]);
 
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
            <button className="btn btn-secondary relative" onClick={goProperty}>
              <Icon name="home" className="icon absolute-y-center left-8" />
              Show Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
