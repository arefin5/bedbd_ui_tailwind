
"use client";
import Link from 'next/link'; // Ensure you import Link if you intend to use it
import Icon from "/components/Icon";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from 'react'
import { userEdit, verifyOtpEmail, verifyOtp } from '@/redux/features/auth/authSlice';
import axiosInstance from '@/redux/services/axiosInstance';
import axios from 'axios';

export default function Sidebar({ user }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hanlarotp, setOptSubmite] = useState(false);
 const [hanlarotpPhone, sethanlarotpPhone] = useState(false);
 const [verrification,setVerification]=useState(false)
 const [otp, setOtp] = useState("");
 const dispatch = useDispatch();
 const {  isLoading, error, token } = useSelector((state) => state.auth);
 
  useEffect(() => {
    if (user.email) setEmail(user.email);
    if (user.phone) setPhone(user.phone);
    if(user?.varificationId){
      setVerification(true)
    }
}, [user, token,hanlarotp, hanlarotpPhone,otp]);
 

const otpGenerateEmail = async (e) => {
  e.preventDefault();
  try {
    const response = await axiosInstance.post("/generate-otp", { email });
    console.log(response);

    if (response.status === 200) {
      setOptSubmite(true);
      alert("OTP sent successfully!");
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};
const VerifyedEmail = async(e) => {
  e.preventDefault();
  const resultAction = await  dispatch(verifyOtpEmail({ email, otp }));
  if (verifyOtpEmail.fulfilled.match(resultAction)) {
    setOptSubmite(false);
  }

  setOptSubmite(false);
};

// phone 
const otpGeneratePhone = async (e) => {
  e.preventDefault();
  try {
    const response = await axiosInstance.post("/generate-otp-phone", { phone });
    console.log(response);
    if (response.status === 200) {
      sethanlarotpPhone(true)
      alert("OTP sent successfully!");
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};
const VerifyedPhone = async(e) => {
  e.preventDefault();
  const resultAction = await dispatch(verifyOtp({ phone, otp }));
  if (verifyOtp.fulfilled.match(resultAction)) {
    sethanlarotpPhone(false);
  }
  sethanlarotpPhone(false);
};
  return (
    <div className="h-[712px] w-[314px] absolute left-0">
      <div className="bg-secondary-50 h-full rounded-b-lg px-4 pt-28 drop-shadow-sm shadow-sm">
        <h1 className="text-3xl font-semibold text-neutral-800 text-center mb-12">
          {user.fname && user.lname ?
          <>
           { user?.fname  + user?.lname}
          </>  :
           "Please set your name"}
        </h1>
        <h1 className="text-neutral-500 text-2xl font-semibold mb-6">
          Verified information
        </h1>
        <p className="text-neutral-500 font-medium text-base mb-4">
          Mobile Number:{" "}
          {user?.phone ? (
            <>
              {user.phone}
              <span className="ml-2">
                {user.isPhoneVerified ? (
                  <Icon name="badge-check" className="icon inline" />
                ) : (
                  <button onClick={otpGeneratePhone}>Verify now</button>
                )}
              </span>
            </>
          ) : (
            <Link className="text-primary-500" href="/user/personal-info">
              {/* <a className="text-primary-500"> */}
                Add Your Phone
              {/* </a> */}
            </Link>
          )}
        </p>

        {hanlarotpPhone && (
              <>
                <input
                  className="w-full border border-neutral-300 py-3 px-4 rounded-md"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button onClick={VerifyedPhone} className="btn btn-primary mt-2">
                  Submit OTP
                </button>
              </>
            )}
        <p className="text-neutral-500 font-medium text-base mb-4">
         Email :{" "}
          {user?.email ? (
            <>
              {user.email}
              <span className="ml-2">
                {user.isEmailVerified ? (
                  <Icon name="badge-check" className="icon inline" />
                ) : (
                  <p onClick={otpGenerateEmail}>Please Verified Your Email Number </p>
                )}
              </span>
            </>
          ) : (
            <Link className="text-primary-500" href="/user/personal-info">
              {/* <a className="text-primary-500"> */}
                Add Your Email
                {/* </a> */}
            </Link>
          )}
        </p>
        {hanlarotp && (
              <>
                <input
                  className="w-full border border-neutral-300 py-3 px-4 rounded-md"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button onClick={VerifyedEmail} className="btn btn-primary mt-2">
                  Submit OTP
                </button>
              </>
            )}
            {/* verification Status*/}
            {verrification  ?(<>
              your identity is Verified  <Icon name="badge-check" className="icon inline" />
            </>):(<>
              <Link className="text-neutral-500 text-2xl font-semibold mb-6" href="/registration/start">
       {/* <h1 className="text-neutral-500 text-2xl font-semibold mb-6"> */}
          Verify your identity
        {/* </h1> */}
       </Link>
        <p className="text-neutral-500 text-base font-normal mb-12">
          Before you book or host on bedbd, you’ll need to complete this step.
        </p>
        <Link href="/registration/start">
        <button className="btn btn-secondary rounded-full">Get Verified</button>

       </Link>
            </>)}
      
      </div>
    </div>
  );
}
