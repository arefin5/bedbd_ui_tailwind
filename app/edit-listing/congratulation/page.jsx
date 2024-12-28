

"use client";
import Icon from "/components/Icon";
import CopyButton from "./CopyButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  // const id=useSelector((state) => state.editForm.editlist?._id);

  const { isLoading, error, updateLists } = useSelector((state) => state.editForm);
  // useEffect(() => {
    
  // }, [lists]);
  useEffect(() => {
    // Keep only 'user' and 'token' in localStorage
    Object.keys(localStorage).forEach((key) => {
      if (key !== "user" && key !== "token") {
        localStorage.removeItem(key);
      }
    });
  }, [updateLists]);
  const goProperty = (e) => {
    e.preventDefault();
    // if (updateLists && updateLists._id) {
    //   router.push(`/listing/${updateLists._id}`);
    // } else {
    //   console.error("Invalid list ID");
    // }
    if (updateLists?._id) {
      window.location.href = `/listing/${updateLists._id}?param=value`;
    } else {
      console.error("Invalid or missing updateLists._id");
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
          Your property has been Updated  successfully.
        </h3>

        <form className="w-full max-w-3xl ml-auto mr-auto mt-8 px-8 select-none">
          <h3>You can share it now.</h3>
          <div className="relative">
            <input
              className="form-input"
              type="text"
              id="property-url-input"
              value={`www.bedbd.com/listing/${updateLists?._id}`}
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
