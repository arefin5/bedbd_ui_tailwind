"use client"
import Icon from '/components/Icon'
import { useDispatch, useSelector } from 'react-redux';

import SocialLogin from '../SocialLogin'
import { useState,useEffect ,useCallback} from 'react';
import { loginUserPhone ,clearError} from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';
import googleIcon from '/public/icons/google.png';
import facebookIcon from '/public/icons/facebook.png';
import Image from "next/image";
import FacebookLogin from '@/components/FacebookLogin';

export default function Login() {
     const [phonee, setPhone] = useState("");
     const [countryCode, setCountryCode] = useState("+880");
     const dispatch = useDispatch();
     const { token, loading ,error,user} = useSelector((state) => state.auth); // Access auth state from Redux
     const [customeError,setError]=useState(false)
     const [message,setMessage]=useState(false);
     const [openFb, seTopenFb] = useState(false);
     const router = useRouter();
        const handleLogin = async(e) => {
            try{
            e.preventDefault();
            dispatch(clearError())
            setError(false)
            //  let phone = `${countryCode} ${phonee}`;
             let phone = `${phonee}`;
             const sanitizedPhone = handlePhoneChange(phone);
        
             if (!sanitizedPhone) {
              //  console.error("Invalid phone number");
               // alert("Please enter a valid phone number!"); // Notify the user
               setError(true);
               
               return;
             }
             console.log(sanitizedPhone)
             
              const resultAction = await dispatch(loginUserPhone({ phone:sanitizedPhone }));
          if (loginUserPhone.fulfilled.match(resultAction)) {
            setMessage(false)
            router.push(`/login/phone/otp?phone=${encodeURIComponent(sanitizedPhone)}`);
            // router.push("/login/phone/otp");
            
          } else {
            console.log("Error during phone login:", resultAction.payload);
            dispatch(clearError())

          }

            }catch(error){
                console.log(error)
            }
           
        };
        const handlePhoneChange = (phone) => {
            let input = phone.trim(); // Trim whitespace
          
            // Remove "+88" or "88" from the beginning
            if (input.startsWith("+88")) {
              input = input.slice(3);
            } else if (input.startsWith("88")) {
              input = input.slice(2);
            }
          
            // Check if the phone number is valid (starts with "01" and has 11 digits)
            const phoneRegex = /^01\d{9}$/;
            if (phoneRegex.test(input)) {
              return input; // Return the sanitized phone number
            } else {
              setError(true)
             
              return ""; // Return empty if invalid
            }
          };
   useEffect(() => {
        if (token) {
            router.push('/'); 
            
        }
        dispatch(clearError())
        
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
    }, []);
      const closeModel = useCallback((e) => {
        e.preventDefault();
        router.push("/");
    }, [router]);
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    const openSing = (e) => {
      e.preventDefault();
      seTopenFb(true);


  }
    return (
        <div className='modal-background' onClick={closeModel}>
            <div onClick={stopPropagation} 
            className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

                <h3 className='signin-up-form-title'>Login</h3> 
                <form
                  className='w-full max-w-lg mb-5  | relative-x-center'
                  onSubmit={handleLogin}

                  >
                   {error && <div className='error-message text-red-500'>{error}</div>}
          {message && <div className='success-message text-green'>"sent otp on your phone"
          </div>}
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
                        {customeError && <div className='error-message text-red-500'>
                please provide valid Phone number
              </div>}
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
                <div className='w-full max-w-lg mt-5 | relative-x-center '>
                    <div className='w-full relative  custom-bg-line-300 '>
                        <h3 className='text-neutral-300 bg-white text-xs font-semibold px-4 ml-8 w-fit '>Or Continue With</h3>
                    </div>
                    <div className='flex flex-wrap  gap-4 mt-7' >
                        <div className="bg-primary-100 rounded-30px gap-3 py-4 px-8 text-neutral-400 text-sm font-semibold w-40">
                            <button
                                onClick={loginwithgoogle}
                                disabled={loading}
                            >
                                <Image src={googleIcon} height={24} width={24} alt="Google Icon" />

                            </button>
                        </div>
                        {/*  */}
                        <div className="bg-primary-100 rounded-30px gap-3 py-4 px-8 text-neutral-400 text-sm font-semibold w-40">
                            <button
                                onClick={openSing}
                            >
                                <Image src={facebookIcon} height={24} width={24} />
                            </button>
                            {openFb && <FacebookLogin />}
                        </div>
                        {/*  */}
                        <div className=' rounded-30px gap-3 py-4 px-8 text-neutral-400 text-sm font-semibold w-40'>
                        </div>
                        {/*  */}
                    </div>


                </div>
                 {/*  */}
                <Icon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6' onClick={closeModel} />
            </div>
        </div>
        
      )
}
