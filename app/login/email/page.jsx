// "use client"
// import { loginUser } from '@/redux/features/auth/authSlice';
// import SocialLogin from '../SocialLogin'
// import { Phone, X } from 'lucide-react';
// import { useState ,useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation'; 
// import Link from 'next/link';
// import Google from '@/components/Google';


// export default function EmailLogin() {
   
//   const dispatch = useDispatch();
//   const { loading, error ,token,user} = useSelector((state) => state.auth);
//   const [email, setEmail] = useState('');
//   const [password, setPass] = useState('');
//      const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ email, password }));
//   };
//    useEffect(() => {
//         if (token) {
//             router.push('/'); 
//         }
//     }, [token, router,user]);

//     return (
//         <div className='modal-background'>
//             <div className='pt-20 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

//                 <h3 className='signin-up-form-title'>Login</h3>
//                 {error && <div className='error-message text-red-500'>{error}</div>}
//                 <form className='w-full max-w-lg mb-5  | relative-x-center' onSubmit={handleLogin}>

//                     <div className='flex flex-col sm:flex-row gap-6'>
//                         <div className='grid sm:w-1/2 pl-7.5 pr-4 py-3.5 overflow-hidden border border-neutral-200 rounded-30px marker-class' >
//                             <label className='text-neutral-300 font-medium text-xs leading-none '>Email</label>
//                             <input className='focus:outline-none focus:border-none w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500' type='text' placeholder='Enter Your Email'
//                                 name='email'
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>

//                         <div className='grid sm:w-1/2 pl-7.5 pr-4 py-3.5 overflow-hidden border border-neutral-200 rounded-30px marker-class' >
//                             <label className='text-neutral-300 font-medium text-xs leading-none '>Password</label>
//                             <input className='w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500' type='password' placeholder='Enter Your password'
//                                 name='password'
//                                 value={password}
//                                 onChange={(e) => setPass(e.target.value)}

//                             />
//                         </div>
//                     </div>

//                     <div className='text-xs leading-none text-neutral-400 font-medium  mt-3 mb-5 flex flex-wrap gap-2 sm:justify-between'>
//                        <Link href="/signup">
//                        <h3>{`Don’t have an account?`}<span className='text-primary-400'>Create new account.</span></h3>
//                        </Link>
//                        <Link href="/password/recover">
//                        <h3 className='text-primary-400'>
//                        {` Forget Password? `}</h3>
//                        </Link>
//                     </div>
//                     <div className='flex flex-col-reverse sm:flex-row gap-6 items-center'>
//                         <button 
//                          className='btn btn-primary sm:max-w-48 cursor-pointer'
                        
//                          >
//                          {loading ? 'Logging in...' : 'Continue'}
//                          </button>
//                       <Link href="/login/phone">
//                       <a className='flex-auto flex  gap-2.5 items-center text-neutral-500 cursor-pointer text-sm font-medium'>
//                             <Phone className='icon' size={24} />
//                             Continue with Phone Number
//                         </a>
//                       </Link>

//                     </div>
//                 </form >

//                 {/* <SocialLogin /> */}
//                 <div className='w-full max-w-lg mt-5 | relative-x-center '>
//         <div className='w-full relative  custom-bg-line-300 '>
//             <h3 className='text-neutral-300 bg-white text-xs font-semibold px-4 ml-8 w-fit '>Or Continue With</h3>
//         </div>
//         <div className='flex flex-wrap justify-center gap-4 mt-7' >
//             <Google/>
//             {/* <Facebook/> */}
            
//         </div>
//     </div>
//                 <X className='text-neutral-600 cursor-pointer absolute top-6 right-6' />
//             </div>
//         </div>

//     )
// // }
// "use client"

// import Google from '@/components/Google';


// export default function EmailLogin() {
   
  


//     return (
//         <div className='modal-background'>
//             <div className='pt-20 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

             

              
//                 <div className='w-full max-w-lg mt-5 | relative-x-center '>
//         <div className='w-full relative  custom-bg-line-300 '>
//             <h3 className='text-neutral-300 bg-white text-xs font-semibold px-4 ml-8 w-fit '> Continue With</h3>
//         </div>
//         <div className='flex flex-wrap justify-center gap-4 mt-7' >
//             <Google/>
          
            
//         </div>
//     </div>
//                 <X className='text-neutral-600 cursor-pointer absolute top-6 right-6' />
//             </div>
//         </div>

//     )
// }
// "use client"
// import React, { useEffect, useState } from 'react';
// import Google from '@/components/Google';
// export default function EmailLogin() {
//     const [user, setUser] = useState(null);

    
    // const loginwithgoogle = ()=>{
    //     window.open("http://localhost:5001/auth/google/callback","_self")
    // }
    // const getUser = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:5001/login/sucess", { withCredentials: true });
    
    //         console.log("response",response)
    //     } catch (error) {
    //     //   navigate("*")
    //     console.log("error",error)
    //     }
    // }
    // useEffect(() => {
    //   getUser()
    // }, [])
//     return (
//         <div className='modal-background'>
//             <div className='pt-20 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>
//                 <div className='w-full max-w-lg mt-5 | relative-x-center '>
//                     <div className='w-full relative custom-bg-line-300'>
//                         <h3 className='text-neutral-300 bg-white text-xs font-semibold px-4 ml-8 w-fit '> Continue With</h3>
//                     </div>
//                     <div className='flex flex-wrap justify-center gap-4 mt-7'>
//                     <button className='login-with-google-btn' onClick={loginwithgoogle}>
//                     Sign In With Google
//                 </button>
//                     </div>
//                 </div>
//                 {/* <X className='text-neutral-600 cursor-pointer absolute top-6 right-6' /> */}
//             </div>
//         </div>
//     );
// }

"use client"
import { loginUser } from '@/redux/features/auth/authSlice';
import SocialLogin from '../SocialLogin'
import { Phone, X } from 'lucide-react';
import { useState ,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';


export default function EmailLogin() {
   
  const dispatch = useDispatch();
  const { loading, error ,token,user} = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
     const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
   useEffect(() => {
        if (token) {
            router.push('/'); 
        }
    }, [token, router,user]);
    const loginwithgoogle = ()=>{
        window.open("http://backend.bedbd.com/auth/google/callback","_self")
    }
    const getUser = async () => {
        try {
            const response = await axios.get("http://backend.bedbd.com/login/sucess", { withCredentials: true });
    
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
            <div className='pt-20 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

                <h3 className='signin-up-form-title'>Login</h3>
                {error && <div className='error-message text-red-500'>{error}</div>}
                <form className='w-full max-w-lg mb-5  | relative-x-center' onSubmit={handleLogin}>

                    <div className='flex flex-col sm:flex-row gap-6'>
                        <div className='grid sm:w-1/2 pl-7.5 pr-4 py-3.5 overflow-hidden border border-neutral-200 rounded-30px marker-class' >
                            <label className='text-neutral-300 font-medium text-xs leading-none '>Email</label>
                            <input className='focus:outline-none focus:border-none w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500' type='text' placeholder='Enter Your Email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='grid sm:w-1/2 pl-7.5 pr-4 py-3.5 overflow-hidden border border-neutral-200 rounded-30px marker-class' >
                            <label className='text-neutral-300 font-medium text-xs leading-none '>Password</label>
                            <input className='w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500' type='password' placeholder='Enter Your password'
                                name='password'
                                value={password}
                                onChange={(e) => setPass(e.target.value)}

                            />
                        </div>
                    </div>

                    <div className='text-xs leading-none text-neutral-400 font-medium  mt-3 mb-5 flex flex-wrap gap-2 sm:justify-between'>
                       <Link href="/signup">
                       <h3>{`Don’t have an account?`}<span className='text-primary-400'>Create new account.</span></h3>
                       </Link>
                       <Link href="/password/recover">
                       <h3 className='text-primary-400'>
                       {` Forget Password? `}</h3>
                       </Link>
                    </div>
                    <div className='flex flex-col-reverse sm:flex-row gap-6 items-center'>
                        <button 
                         className='btn btn-primary sm:max-w-48 cursor-pointer'
                        
                         >
                         {loading ? 'Logging in...' : 'Continue'}
                         </button>
                      <Link href="/login/phone">
                      <a className='flex-auto flex  gap-2.5 items-center text-neutral-500 cursor-pointer text-sm font-medium'>
                            <Phone className='icon' size={24} />
                            Continue with Phone Number
                        </a>
                      </Link>

                    </div>
                </form >
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    Sign In With Google
                </button>
                {/* <SocialLogin />

                <X className='text-neutral-600 cursor-pointer absolute top-6 right-6' /> */}
            </div>
        </div>

    )
}