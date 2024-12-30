
"use client"
import  { useState ,memo} from 'react';

import Icon from "/components/Icon";
import axiosInstance from "@/redux/services/axiosInstance";
import Link from "next/link"

const MemoizedButton = memo(({ icName }) => (
  
    <button className="absolute-y-center -left-10">
      <Icon className="icon" name={icName} size={24} />
    </button>
  
))


export default function Page() {
  const [email, setEmail] = useState("");
  const [resident, setResident] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [residentError, setResidentError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const RequestData = async (e) => {
    e.preventDefault();
    setEmailError(false);
    setResidentError(false);
    setErrorMsg("");
    setMessage("");

    if (!email) {
      setEmailError(true);
      setErrorMsg("Please fill out the Email.");
      return;
    }
    if (!resident) {
      setResidentError(true);
      setErrorMsg("Please fill out the Resident field.");
      return;
    }

    try {
      const response = await axiosInstance.post("/request-data", {
        email,
        resident,
      });

      if (response.status === 200) {
        setMessage("Your request has been submitted successfully.");
      } else {
        setErrorMsg("An error occurred while submitting your request. Please try again.");
      }
    } catch (error) {
      setErrorMsg("An error occurred while submitting your request. Please try again.");
    }
  };
  return (
    <div className="w-full h-full pt-16 pl-20 pr-4">
      <div className="relative">
        <h3 className="text-primary-400 text-2xl font-semibold">Privacy & Sharing</h3>
        <Link href="/user/privacy-sharing/data">
        <button className="absolute-y-center -left-10">
        <MemoizedButton icName={"arrow-left"} />
        </button>
        </Link>
      </div>

      <div className="flex justify-between pt-12 w-full">
        <div className="max-w-sm">
          <h1 className="text-2xl text-neutral-500 font-semibold mb-4">
            Request your personal data
          </h1>
          <p className="text-neutral-600 text-sm font-normal mb-12">
            {`Before we get you a copy of your data, we'll just need you to answer a few questions.`}
          </p>

          
          <form onSubmit={RequestData} className="mt-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm`}
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{errorMsg}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Resident</label>
          <input
            type="text"
            value={resident}
            onChange={(e) => setResident(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border ${residentError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm`}
          />
          {residentError && <p className="text-red-500 text-xs mt-1">{errorMsg}</p>}
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-4"
        >
          Submit Request
        </button>

        {message && <p className="text-green-500 text-sm mt-4">{message}</p>}
        {errorMsg && !emailError && !residentError && <p className="text-red-500 text-sm mt-4">{errorMsg}</p>}
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
