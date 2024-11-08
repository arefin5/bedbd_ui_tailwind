"use client"

import { useState,useEffect } from 'react';

import { verifyOtpEmail } from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '@/redux/services/axiosInstance';


export default function page() {
    const [otp1,setOtp1]=useState("");
    const [otp2,setOtp2]=useState("");
    const [otp3,setOtp3]=useState("");
    const [otp4,setOtp4]=useState("");
    const [otp5,setOtp5]=useState("");
    const [otp6,setOtp6]=useState("");
    const dispatch=useDispatch();
        const router = useRouter();
        const { token, loading, error } = useSelector((state) => state.auth); // Access auth state from Redux
    const handleLoginPhone=async(e)=>{
        try{
               e.preventDefault();
                const email = localStorage.getItem("useemail").replace(/"/g, '');
                console.log(email);
                // console.log(phone);
               const otp=`${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
               // console.log(otp);
               dispatch(verifyOtpEmail({ email, otp }));

              
        }
        catch(error){
            console.log(error)
        }
    }
     useEffect(() => {
        const storedEmail = localStorage.getItem('email'); // Get the email from localStorage
    if (storedEmail) {
        // Remove quotes if they exist, and set the email state
        setEmail(storedEmail.replace(/^"|"$/g, '')); 
    }

        if (token) {
            router.push('/password/reset'); 
        }
    }, [token, router]);

    const resendOtp=(e)=>{
        e.preventDefault();
        axiosInstance.post("/generate-otp",{
            email
        });
    }
    return (
        <div className='modal-background'>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white max-w-lg | absolute-center rounded-10px'>

                <div className="flex flex-col items-center gap-y-7 max-w-lg">
                    <h3 className='text-sm leading-6 font-medium text-neutral-600  '>
                        Enter 6-digit verification code
                    </h3>

                    <div className="flex gap-3">
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-0" 
                            maxLength="1" 
                            inputmode="numeric" 
                            pattern="[0-9]*" 
                           value={otp1}
                          
                            onChange={(e) => setOtp1(e.target.value)}
                        />
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-1" 
                            maxLength="1" 
                            inputmode="numeric" 
                            pattern="[0-9]*" 
                            value={otp2}
                            onChange={(e) => setOtp2(e.target.value)}
                        />
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-2" 
                            maxLength="1" 
                            inputmode="numeric" 
                            pattern="[0-9]*" 
                                                        value={otp3}
                            onChange={(e) => setOtp3(e.target.value)}
                        />
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-3" 
                            maxLength="1" 
                                                        value={otp4}
                            onChange={(e) => setOtp4(e.target.value)}
                        />
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-4" 
                            maxLength="1" 
                            inputmode="numeric" 
                                                       value={otp5}
                            onChange={(e) => setOtp5(e.target.value)}
                        />
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-5" 
                            maxLength="1" 
                            inputmode="numeric" 
                            pattern="[0-9]*"
                                                        value={otp6}
                            onChange={(e) => setOtp6(e.target.value)} 
                        />
                    </div>

                    <button className=" btn max-w-48 btn-primary" onClick={handleLoginPhone}>Submit</button>
                    {loading && <p>Loading...</p>}
                      {error && <p style={{ color: 'red' }}>{error}</p>}
               
                    <div className="text-sm font-normal text-center">
                        {`Didn't receive your code? `}<span className="text-primary-400 font-medium" 
                        onClick={resendOtp}
                        >resent</span>
                        <div  className="border border-primary-400 w-8 h-8 mt-2 rounded-full m-auto py-2 text-center text-xs font-medium">
                            1:59
                        </div>

                    </div>

                </div>

            </div>
        </div>
        
      )
}
