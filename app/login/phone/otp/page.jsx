// "use client"

// import { useState,useEffect } from 'react';

// import { verifyOtp } from '@/redux/features/auth/authSlice';
// import { useRouter } from 'next/navigation';
// import { useDispatch, useSelector } from 'react-redux';

// export default function page() {
//     const [otp1,setOtp1]=useState("");
//     const [otp2,setOtp2]=useState("");
//     const [otp3,setOtp3]=useState("");
//     const [otp4,setOtp4]=useState("");
//     const [otp5,setOtp5]=useState("");
//     const [otp6,setOtp6]=useState("");
//     const dispatch=useDispatch();
//         const router = useRouter();
//         const { token, loading, error } = useSelector((state) => state.auth); // Access auth state from Redux
//     const handleLoginPhone=async(e)=>{
//         try{
//                e.preventDefault();
//                 const phone = localStorage.getItem("userPhone");
//                 // console.log(phone);
//                const otp=`${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
//                // console.log(otp);
//                dispatch(verifyOtp({ phone, otp }));

              
//         }
//         catch(error){
//             console.log(error)
//         }
//     }
//      useEffect(() => {
//         if (token) {
//             router.push('/user/profile'); 
//         }
//     }, [token, router]);

//     const resendOtp = (e) => {
//         e.preventDefault();
//         const phone = localStorage.getItem("userPhone");
//         console.log(phone)
//         axiosInstance.post("/generate-otp-phone", { phone });
//     };

//     return (
//         <div className='modal-background'>
//             <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white max-w-lg | absolute-center rounded-10px'>

//                 <div className="flex flex-col items-center gap-y-7 max-w-lg">
//                     <h3 className='text-sm leading-6 font-medium text-neutral-600  '>
//                         Enter 6-digit verification code
//                     </h3>

//                     <div className="flex gap-3">
//                         <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
//                             type="text" 
//                             name="otp-0" 
//                             maxLength="1" 
//                             inputmode="numeric" 
//                             pattern="[0-9]*" 
//                            value={otp1}
                          
//                             onChange={(e) => setOtp1(e.target.value)}
//                         />
//                         <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
//                             type="text" 
//                             name="otp-1" 
//                             maxLength="1" 
//                             inputmode="numeric" 
//                             pattern="[0-9]*" 
//                             value={otp2}
//                             onChange={(e) => setOtp2(e.target.value)}
//                         />
//                         <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
//                             type="text" 
//                             name="otp-2" 
//                             maxLength="1" 
//                             inputmode="numeric" 
//                             pattern="[0-9]*" 
//                                                         value={otp3}
//                             onChange={(e) => setOtp3(e.target.value)}
//                         />
//                         <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
//                             type="text" 
//                             name="otp-3" 
//                             maxLength="1" 
//                                                         value={otp4}
//                             onChange={(e) => setOtp4(e.target.value)}
//                         />
//                         <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
//                             type="text" 
//                             name="otp-4" 
//                             maxLength="1" 
//                             inputmode="numeric" 
//                                                        value={otp5}
//                             onChange={(e) => setOtp5(e.target.value)}
//                         />
//                         <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
//                             type="text" 
//                             name="otp-5" 
//                             maxLength="1" 
//                             inputmode="numeric" 
//                             pattern="[0-9]*"
//                                                         value={otp6}
//                             onChange={(e) => setOtp6(e.target.value)} 
//                         />
//                     </div>

//                     <button className=" btn max-w-48 btn-primary" onClick={handleLoginPhone}>Submit</button>

//                     <div className="text-sm font-normal text-center">
//                         {`Didn't receive your code? `}<span className="text-primary-400 font-medium"
//                         onClick={resendOtp}
//                         >resent</span>
//                         <div  className="border border-primary-400 w-8 h-8 mt-2 rounded-full m-auto py-2 text-center text-xs font-medium">
//                             1:59
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </div>
        
//       )
// }

"use client"

import { useState, useEffect, useRef } from 'react';
import { verifyOtp } from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '@/redux/services/axiosInstance';

export default function Page() {
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");
    const [otp5, setOtp5] = useState("");
    const [otp6, setOtp6] = useState("");

    const otpRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

    const dispatch = useDispatch();
    const router = useRouter();
    const { token, loading, error } = useSelector((state) => state.auth);

    const handleLoginPhone = async (e) => {
        e.preventDefault();
        const phone = localStorage.getItem("userPhone");
        const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
        dispatch(verifyOtp({ phone, otp }));
    };

    useEffect(() => {
        if (token) {
            router.push('/user/profile'); 
        }
    }, [token, router]);

    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        if (/^\d$/.test(value)) {
            if (index === 0) setOtp1(value);
            if (index === 1) setOtp2(value);
            if (index === 2) setOtp3(value);
            if (index === 3) setOtp4(value);
            if (index === 4) setOtp5(value);
            if (index === 5) setOtp6(value);

            // Focus next input if current input is filled
            if (index < 5) otpRefs[index + 1].current.focus();
        }
    };
    const resendOtp = (e) => {
        e.preventDefault();
        const phone = localStorage.getItem("userPhone");
        console.log(phone)
        axiosInstance.post("/generate-otp-phone", { phone });
    };
    return (
        <div className='modal-background'>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white max-w-lg | absolute-center rounded-10px'>
                <div className="flex flex-col items-center gap-y-7 max-w-lg">
                    <h3 className='text-sm leading-6 font-medium text-neutral-600'>
                        Enter 6-digit verification code
                    </h3>

                    <div className="flex gap-3">
                        {[otp1, otp2, otp3, otp4, otp5, otp6].map((otp, index) => (
                            <input
                                key={index}
                                ref={otpRefs[index]}
                                className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded"
                                type="text"
                                maxLength="1"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={otp}
                                onChange={(e) => handleOtpChange(e, index)}
                            />
                        ))}
                    </div>

                    <button className="btn max-w-48 btn-primary" onClick={handleLoginPhone}>Submit</button>

                    <div className="text-sm font-normal text-center">
                        {`Didn't receive your code? `}<span className="text-primary-400 font-medium"
                        onClick={resendOtp}
                        >resend</span>
                        <div className="border border-primary-400 w-8 h-8 mt-2 rounded-full m-auto py-2 text-center text-xs font-medium">
                            1:59
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
