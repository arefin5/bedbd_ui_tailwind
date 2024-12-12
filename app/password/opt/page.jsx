
// "use client";

// import { useState, useEffect, useRef } from 'react';
// import { verifyOtpEmail } from '@/redux/features/auth/authSlice';
// import { useRouter } from 'next/navigation';
// import { useDispatch, useSelector } from 'react-redux';
// import axiosInstance from '@/redux/services/axiosInstance';

// export default function Page() {
//     const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//     const inputRefs = useRef([]);
//     const dispatch = useDispatch();
//     const router = useRouter();
//     const { token, loading, error } = useSelector((state) => state.auth);
//     const [message,setMessage]=useState(false);
//     const [email,setEmail]=useState("");
//     useEffect(() => {
//         if (typeof window !== "undefined" && window.location.search) {
//           const params = new URLSearchParams(window.location.search);
//           setEmail(params.get('email') || "");
//         }
//       }, []);
//     const handleOtpChange = (e, index) => {
//         const value = e.target.value;
//         if (/^\d?$/.test(value)) {
//             const newOtp = [...otp];
//             newOtp[index] = value;
//             setOtp(newOtp);

//             // Focus next input
//             if (value && index < 5) {
//                 inputRefs.current[index + 1].focus();
//             }
//         }
//     };

//     const handleLoginPhone = async (e) => {
//         e.preventDefault();
//         if(!otp){
//             alert("please provide otp")
//         }
//         // setMessage(true)
//         const otpCode = otp.join("");
//         dispatch(verifyOtpEmail({ email, otp: otpCode }));
//         setOtp("");
//         setMessage(false

//         );
//     };
//     // useEffect(() => {
//     //     const phone = localStorage.getItem("useemail");

//     //     if (phone) {
//     //         const timeoutId = setTimeout(() => {
//     //             localStorage.removeItem("useemail");
//     //             console.log("userPhone removed from localStorage");
//     //         }, 10 * 60 * 6000); // 10 minutes in milliseconds

//     //         return () => clearTimeout(timeoutId); // Clear timeout on unmount
//     //     }
//     // }, []);
    // useEffect(() => {
    //     if (token) {
    //         router.push('/password/reset');
    //     }
    // }, [router, token]);

    // const resendOtp = (e) => {
    //     // setMessage(true)
    //     e.preventDefault();
    //     // alert("sent email successfull")
        
    //     axiosInstance.post("/generate-otp", { email });
    //     setMessage(true);
    // };

//     return (
//         <div className="modal-background">
//             <div className="pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white max-w-lg | absolute-center rounded-10px">
//                 <div className="flex flex-col items-center gap-y-7 max-w-lg">
//                     <h3 className="text-sm leading-6 font-medium text-neutral-600">
//                         Enter 6-digit verification code
//                     </h3>
//                     {error && <div className='error-message text-red-500'>{error}</div>}
//           {message && <div className='success-message text-green'>"resent  otp on your email"
//           </div>}
//                     <div className="flex gap-3">
//                         {otp.map((value, index) => (
//                             <input
//                                 key={index}
//                                 ref={(el) => (inputRefs.current[index] = el)}
//                                 className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded"
//                                 type="text"
//                                 maxLength="1"
//                                 inputMode="numeric"
//                                 pattern="[0-9]*"
//                                 value={value}
//                                 onChange={(e) => handleOtpChange(e, index)}
//                             />
//                         ))}
//                     </div>

//                     <button className="btn max-w-48 btn-primary" onClick={handleLoginPhone} disabled={!otp}>Submit</button>
//                     {loading && <p>Loading...</p>}
//                     {error && <p style={{ color: 'red' }}>{error}</p>}

//                     {/* <div className="text-sm font-normal text-center">
//                         {`Didn't receive your code? `}
//                         <span className="text-primary-400 font-medium" onClick={resendOtp}>
//                             Resend
//                         </span>
//                         <div className="border border-primary-400 w-8 h-8 mt-2 rounded-full m-auto py-2 text-center text-xs font-medium">
//                             1:59
//                         </div>
//                     </div> */}
//                     <div className="text-sm font-normal text-center">
//                         {`Didn't receive your code? `}<span className="text-primary-400 font-medium cursor-pointer"
//                         onClick={resendOtp}
//                         >resend</span>
//                         {message && <p>otp resent</p>}
//                         {/* <div className="border border-primary-400 w-8 h-8 mt-2 rounded-full m-auto py-2 text-center text-xs font-medium">
//                             1:59
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



"use client";

import { useState, useEffect, useRef } from "react";
import { clearError, verifyOtpEmail } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "@/redux/services/axiosInstance";

export default function Page() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const otpRefs = useRef([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const { token, error } = useSelector((state) => state.auth);
  const [message, setMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
 const [extraerror,setExtraError]=useState(false)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search) {
      const params = new URLSearchParams(window.location.search);
      setEmail(params.get("email") || "");
    }
  }, []);
  useEffect(() => {
    if (token) {
        router.push('/password/reset');
    }
}, [router, token]);
  const handleLoginPhone = async(e) => {
    e.preventDefault();
    setSuccessMessage(false);
    setMessage(false)
    const otpCode = otp.join("");
     const resultAction = await dispatch(verifyOtpEmail({ email, otp: otpCode }));
            if (verifyOtpEmail.fulfilled.match(resultAction)) {
              dispatch(clearError())
              setSuccessMessage(true);
              setMessage(false);
              setOtp(["", "", "", "", "", ""]);
              otpRefs.current[0].focus();
              router.push("/registration/end");
              dispatch(clearError())
              // console.log("success");
            } else {
              console.error("Error during user edit:", resultAction.payload);
            }
  //  const  dispatch(verifyOtp({ phone, otp: otpCode }));
    // setSuccessMessage(true);
    // setMessage(false);
    setOtp(["", "", "", "", "", ""]);
    otpRefs.current[0].focus();
  };

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token, router]);

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) {
          otpRefs.current[index - 1].focus();
        }
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const resendOtp = async (e) => {
    e.preventDefault();
    dispatch(clearError())
    try {
    const response=  await  axiosInstance.post("/generate-otp", { email });
      if(response.status===500 || response.status===404){
        setExtraError(true);
        
      }
      else{
        setMessage(true);
        dispatch(clearError());
      }
      setMessage(true);
      dispatch(clearError());

    } catch (err) {
      console.error("Error resending OTP:", err);
      
    }
  };

  return (
    <div className="modal-background">
      <div className="pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white max-w-lg | absolute-center rounded-10px">
        <div className="flex flex-col items-center gap-y-7 max-w-lg">
          <h3 className="text-sm leading-6 font-medium text-neutral-600">
            Enter 6-digit verification code
          </h3>
          {error && <div className="error-message text-red-500">{error}</div>}
          {message && <div className="success-message text-green">Resent OTP to your phone</div>}
          {successMessage && (
            <div className="success-message text-green">OTP verified successfully</div>
          )}
         {extraerror && <div className="error-message text-red-500">server Not found Please Try latter </div>}
          <div className="flex gap-3">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(el) => (otpRefs.current[index] = el)}
                className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded"
                type="text"
                maxLength="1"
                inputMode="numeric"
                pattern="[0-9]*"
                value={value}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                autoFocus={index === 0}
              />
            ))}
          </div>

          <button className="btn max-w-48 btn-primary" onClick={handleLoginPhone}>
            Submit
          </button>

          <div className="text-sm font-normal text-center">
            {`Didn't receive your code? `}
            <span
              className="text-primary-400 font-medium cursor-pointer"
              onClick={resendOtp}
            >
              Resend
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
