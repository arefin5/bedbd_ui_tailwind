"use client"
import Icon from '/components/Icon'
import { useDispatch, useSelector } from 'react-redux';

import SocialLogin from '../SocialLogin'
import { useState,useEffect } from 'react';
import { loginUserPhone } from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';

export default function Login() {
     const [phonee, setPhone] = useState("");
     const [countryCode, setCountryCode] = useState("+880");
     const dispatch = useDispatch();
     const { token, loading ,error,user} = useSelector((state) => state.auth); // Access auth state from Redux
     const router = useRouter();
        const handleLogin = async(e) => {
            try{
            e.preventDefault();
            //  let phone = `${countryCode} ${phonee}`;
             let phone = `${phonee}`;
              const resultAction = await dispatch(loginUserPhone({ phone }));
          if (loginUserPhone.fulfilled.match(resultAction)) {
            router.push("/login/phone/otp");
          } else {
            console.log("Error during phone login:", resultAction.payload);
          }

            }catch(error){
                console.log(error)
            }
           
        };

   useEffect(() => {
        if (token) {
            router.push('/'); 
        }
    }, [token, router,user]);
    const loginwithgoogle = ()=>{
        window.open("https://backend.bedbd.com/auth/google/callback","_self")
    }
    const getUser = async () => {
        try {
            const response = await axios.get("https://backend.bedbd.com/login/sucess", { withCredentials: true });
    
            console.log("response",response)
        } catch (error) {
        //   navigate("*")
        console.log("error",error)
        }
    }
    useEffect(() => {
      getUser()
    }, [])
    return (
        <div className='modal-background'>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

                <h3 className='signin-up-form-title'>Login</h3> 
                <form
                  className='w-full max-w-lg mb-5  | relative-x-center'
                  onSubmit={handleLogin}

                  >
                    <div className='flex gap-y-2.5 sm:gap-0 flex-col sm:flex-row  overflow-hidden | sm:border sm:border-neutral-200 rounded-30px '>
                        <div className='grid hover:bg-gray-50 flex-auto sm:w-2/5 sm:max-w-48 pl-7.5 pr-4 py-3.5   border border-neutral-200 sm:border-none rounded-30px'>
                            <label className='text-neutral-300 font-medium text-xs leading-none '>country</label>
                           


                             <select 
                                name='countryCode'
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="w-full bg-transparent text-sm text-left pl-0 outline-none font-semibold text-neutral-500 -ml-1"
                            >
                                <option value='+880'>BD (+880)</option>
                                <option value='+91'>IND (+91)</option>
                            </select>
                        </div>
                        <div className='flex-auto hover:bg-gray-50 pl-4 pr-7.5 py-3.5 grid relative | sm:custom-left-line-200 border border-neutral-200 sm:border-none rounded-30px'>
                            <label className='text-neutral-300 font-medium text-xs leading-none '>phone number</label>
                            <input 
                                name='phone'
                                placeholder='Enter Your Number'
                                type='tel'
                                value={phonee}
                                onChange={(e) => setPhone(e.target.value)}
                                className='w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500'/>
                        </div>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error.message || "Something went wrong"}</p>}
                     {loading && <p>Loading...</p>}
                    <h3 className='text-xs leading-none text-neutral-400 font-medium text-center mt-3 mb-5'>  We’ll call or text you to confirm your number. Standard message and data rates apply. </h3>
                    <div className='flex flex-col-reverse sm:flex-row gap-6 items-center'>
                        <button type='submit' className='btn btn-primary sm:max-w-48 cursor-pointer'>Sent OTP </button>
                       <Link href="/login/email">
                       <a className='flex-auto flex  gap-2.5 items-center text-neutral-500 cursor-pointer text-sm font-medium'>
                            <Icon name='mail' className='icon' size={24}/>
                            Continue with Email
                        </a>
                       </Link>
                    </div>
                </form >
         
                {/* <SocialLogin/> */}
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                     Sign In With Google
                 </button>
                <Icon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6'/>
            </div>
        </div>
        
      )
}
