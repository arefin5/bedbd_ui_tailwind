
// // // "use client"

// // // import { useState, useEffect, useRef } from 'react';
// // // import { verifyOtp } from '@/redux/features/auth/authSlice';
// // // import { useRouter } from 'next/navigation';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import axiosInstance from '@/redux/services/axiosInstance';

// // // export default function Page() {
// // //     const [otp1, setOtp1] = useState("");
// // //     const [otp2, setOtp2] = useState("");
// // //     const [otp3, setOtp3] = useState("");
// // //     const [otp4, setOtp4] = useState("");
// // //     const [otp5, setOtp5] = useState("");
// // //     const [otp6, setOtp6] = useState("");
// // //     const [phone,setPhone]=useState("")
// // //     const otpRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

// // //     const dispatch = useDispatch();
// // //     const router = useRouter();
// // //     const { token, loading, error } = useSelector((state) => state.auth);
// // //     const [message,setMessage]=useState(false);
// // //     const [successMessage,setSuccessMessage]=useState(false)


// // //     useEffect(() => {
// // //         if (typeof window !== "undefined" && window.location.search) {
// // //           const params = new URLSearchParams(window.location.search);
// // //           setPhone(params.get('phone') || "");
// // //         }
// // //       }, []);
// // //     const handleLoginPhone = async (e) => {
// // //         e.preventDefault();
// // //         // const phone = localStorage.getItem("userPhone");
// // //         const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
// // //         dispatch(verifyOtp({ phone, otp }));
// // //         setSuccessMessage(true)
// // //         setMessage(false);
// // //         setOtp1("");
// // //         setOtp2("");
// // //         setOtp3("")
// // //         setOtp4("");
// // //         setOtp5("");
// // //         setOtp6(" ")
// // //     };

// // //     useEffect(() => {
// // //         if (token) {
// // //             router.push('/user/profile'); 
// // //         }
// // //     }, [token, router]);

// // // //   useEffect(() => {
// // // //         const phone = localStorage.getItem("userPhone");
          
// // // //         if (phone) {
// // // //             const timeoutId = setTimeout(() => {
// // // //                 localStorage.removeItem("userPhone");
// // // //                 console.log("userPhone removed from localStorage");
// // // //             }, 10 * 60 * 6000); // 10 minutes in milliseconds

// // // //             return () => clearTimeout(timeoutId); // Clear timeout on unmount
// // // //         }
// // // //     }, []);
// // //     const handleOtpChange = (e, index) => {
// // //         const { value } = e.target;
// // //         if (/^\d$/.test(value)) {
// // //             if (index === 0) setOtp1(value);
// // //             if (index === 1) setOtp2(value);
// // //             if (index === 2) setOtp3(value);
// // //             if (index === 3) setOtp4(value);
// // //             if (index === 4) setOtp5(value);
// // //             if (index === 5) setOtp6(value);

// // //             // Focus next input if current input is filled
// // //             if (index < 5) otpRefs[index + 1].current.focus();
// // //         }
// // //     };
// // //     const resendOtp = (e) => {

// // //         e.preventDefault();
        
// // //         axiosInstance.post("/generate-otp-phone", { phone });
// // //         setMessage(true);

// // //     };
// // //     return (
// // //         <div className='modal-background'>
// // //             <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white max-w-lg | absolute-center rounded-10px'>
// // //                 <div className="flex flex-col items-center gap-y-7 max-w-lg">
// // //                     <h3 className='text-sm leading-6 font-medium text-neutral-600'>
// // //                         Enter 6-digit verification code
// // //                     </h3>
// // //                     {error && <div className='error-message text-red-500'>{error}</div>}
// // //           {message && <div className='success-message text-green'>"resent otp on your phone"
// // //           </div>}
// // //           {successMessage && <div className='success-message text-green'>"resent otp on your phone"
// // //             </div>}
          
// // //                     <div className="flex gap-3">
// // //                         {[otp1, otp2, otp3, otp4, otp5, otp6].map((otp, index) => (
// // //                             <input
// // //                                 key={index}
// // //                                 ref={otpRefs[index]}
// // //                                 className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded"
// // //                                 type="text"
// // //                                 maxLength="1"
// // //                                 inputMode="numeric"
// // //                                 pattern="[0-9]*"
// // //                                 value={otp}
// // //                                 onChange={(e) => handleOtpChange(e, index)}
// // //                             />
// // //                         ))}
// // //                     </div>

// // //                     <button className="btn max-w-48 btn-primary" onClick={handleLoginPhone}>Submit</button>

// // //                     <div className="text-sm font-normal text-center">
// // //                         {`Didn't receive your code? `}<span className="text-primary-400 font-medium cursor-pointer"
// // //                         onClick={resendOtp}
// // //                         >resend</span>
// // //                         {/* <div className="border border-primary-400 w-8 h-8 mt-2 rounded-full m-auto py-2 text-center text-xs font-medium">
// // //                             1:59
// // //                         </div> */}
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     )
// // // }



                            
// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import { clearError, verifyOtp } from "@/redux/features/auth/authSlice";
// // import { useRouter } from "next/navigation";
// // import { useDispatch, useSelector } from "react-redux";
// // import axiosInstance from "@/redux/services/axiosInstance";

// // export default function Page() {
// //   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
// //   const [phone, setPhone] = useState("");
// //   const otpRefs = Array(6)
// //     .fill(null)
// //     .map(() => useRef());

// //   const dispatch = useDispatch();
// //   const router = useRouter();
// //   const { token, error } = useSelector((state) => state.auth);
// //   const [message, setMessage] = useState(false);
// //   const [successMessage, setSuccessMessage] = useState(false);

// //   useEffect(() => {
// //     if (typeof window !== "undefined" && window.location.search) {
// //       const params = new URLSearchParams(window.location.search);
// //       setPhone(params.get("phone") || "");
// //     }
// //   }, []);

// //   const handleLoginPhone = (e) => {
// //     e.preventDefault();
// //     const otpCode = otp.join("");
// //     dispatch(verifyOtp({ phone, otp: otpCode }));
// //     setSuccessMessage(true);
// //     setMessage(false);
// //     setOtp(["", "", "", "", "", ""]);
// //     otpRefs[0].current.focus();
// //   };

// //   useEffect(() => {
// //     if (token) {
// //       router.push("/user/profile");
// //     }
// //   }, [token, router]);

// //   const handleOtpChange = (e, index) => {
// //     const { value, key } = e.target;

// //     if (/^\d$/.test(value)) {
// //       // Update the OTP state
// //       const newOtp = [...otp];
// //       newOtp[index] = value;
// //       setOtp(newOtp);

// //       // Focus next input if current input is filled
// //       if (index < 5) otpRefs[index + 1].current.focus();
// //     } else if (key === "Backspace") {
// //       // Handle backspace to move focus to previous input
// //       if (otp[index] === "") {
// //         if (index > 0) otpRefs[index - 1].current.focus();
// //       }
// //       const newOtp = [...otp];
// //       newOtp[index] = "";
// //       setOtp(newOtp);
// //     }
// //   };

// //   const resendOtp = (e) => {
// //     e.preventDefault();
// //     axiosInstance.post("/generate-otp-phone", { phone });
// //     setMessage(true);
// //     dispatch(clearError());
// //   };

// //   return (
// //     <div className="modal-background">
// //       <div className="pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white max-w-lg | absolute-center rounded-10px">
// //         <div className="flex flex-col items-center gap-y-7 max-w-lg">
// //           <h3 className="text-sm leading-6 font-medium text-neutral-600">
// //             Enter 6-digit verification code
// //           </h3>
// //           {error && <div className="error-message text-red-500">{error}</div>}
// //           {message && <div className="success-message text-green">Resent OTP to your phone</div>}
// //           {successMessage && (
// //             <div className="success-message text-green">OTP verified successfully</div>
// //           )}

// //           <div className="flex gap-3">
// //             {otp.map((value, index) => (
// //               <input
// //                 key={index}
// //                 ref={otpRefs[index]}
// //                 className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded"
// //                 type="text"
// //                 maxLength="1"
// //                 inputMode="numeric"
// //                 pattern="[0-9]*"
// //                 value={value}
// //                 onKeyDown={(e) => handleOtpChange(e, index)}
// //                 onChange={() => {}} // Suppress default behavior
// //               />
// //             ))}
// //           </div>

// //           <button className="btn max-w-48 btn-primary" onClick={handleLoginPhone}>
// //             Submit
// //           </button>

// //           <div className="text-sm font-normal text-center">
// //             {`Didn't receive your code? `}
// //             <span
// //               className="text-primary-400 font-medium cursor-pointer"
// //               onClick={resendOtp}
// //             >
// //               Resend
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import { useState, useEffect, useRef } from "react";
// import { clearError, verifyOtp } from "@/redux/features/auth/authSlice";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import axiosInstance from "@/redux/services/axiosInstance";

// export default function Page() {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [phone, setPhone] = useState("");
//   const otpRefs = Array(6)
//     .fill(null)
//     .map(() => useRef());

//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { token, error } = useSelector((state) => state.auth);
//   const [message, setMessage] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined" && window.location.search) {
//       const params = new URLSearchParams(window.location.search);
//       setPhone(params.get("phone") || "");
//     }
//   }, []);

//   const handleLoginPhone = (e) => {
//     e.preventDefault();
//     const otpCode = otp.join("");
//     dispatch(verifyOtp({ phone, otp: otpCode }));
//     setSuccessMessage(true);
//     setMessage(false);
//     setOtp(["", "", "", "", "", ""]);
//     otpRefs[0].current.focus();
//   };

//   useEffect(() => {
//     if (token) {
//       router.push("/user/profile");
//     }
//   }, [token, router]);

//   const handleOtpChange = (e, index) => {
//     const { value } = e.target;

//     if (/^\d$/.test(value)) {
//       // Update the OTP state
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Focus next input if current input is filled
//       if (index < 5) otpRefs[index + 1].current.focus();
//     } else if (e.key === "Backspace") {
//       // Handle backspace to move focus to previous input
//       const newOtp = [...otp];
//       newOtp[index] = "";
//       setOtp(newOtp);

//       if (index > 0) otpRefs[index - 1].current.focus();
//     }
//   };

//   const resendOtp = (e) => {
//     e.preventDefault();
//     axiosInstance.post("/generate-otp-phone", { phone });
//     setMessage(true);
//     dispatch(clearError());
//   };

//   return (
//     <div className="modal-background">
//       <div className="pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white max-w-lg | absolute-center rounded-10px">
//         <div className="flex flex-col items-center gap-y-7 max-w-lg">
//           <h3 className="text-sm leading-6 font-medium text-neutral-600">
//             Enter 6-digit verification code
//           </h3>
//           {error && <div className="error-message text-red-500">{error}</div>}
//           {message && <div className="success-message text-green">Resent OTP to your phone</div>}
//           {successMessage && (
//             <div className="success-message text-green">OTP verified successfully</div>
//           )}

//           <div className="flex gap-3">
//             {otp.map((value, index) => (
//               <input
//                 key={index}
//                 ref={otpRefs[index]}
//                 className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded"
//                 type="text"
//                 maxLength="1"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 value={value}
//                 onKeyDown={(e) => handleOtpChange(e, index)} // Handles Backspace
//                 onChange={(e) => handleOtpChange(e, index)} // Handles typing digits
//               />
//             ))}
//           </div>

//           <button className="btn max-w-48 btn-primary" onClick={handleLoginPhone}>
//             Submit
//           </button>

//           <div className="text-sm font-normal text-center">
//             {`Didn't receive your code? `}
//             <span
//               className="text-primary-400 font-medium cursor-pointer"
//               onClick={resendOtp}
//             >
//               Resend
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
import { clearError, verifyOtp } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "@/redux/services/axiosInstance";

export default function Page() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [phone, setPhone] = useState("");
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
      setPhone(params.get("phone") || "");
    }
  }, []);

  const handleLoginPhone = async(e) => {
    e.preventDefault();
    setMessage(false);
    setSuccessMessage(false)
    const otpCode = otp.join("");
     const resultAction = await dispatch(verifyOtp({ phone, otp: otpCode }));
            if (verifyOtp.fulfilled.match(resultAction)) {
              dispatch(clearError())
              setSuccessMessage(true);
              setMessage(false);
              setOtp(["", "", "", "", "", ""]);
              otpRefs.current[0].focus();
              router.push("/");
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
      router.push("/user/profile");
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
    const response=  await axiosInstance.post("/generate-otp-phone", { phone });
      if(response.status===500 || response.status===404){
        setExtraError(true);
        
      }else{
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
