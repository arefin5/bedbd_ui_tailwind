
"use client"
import { clearError, loginUser } from '@/redux/features/auth/authSlice';
import SocialLogin from '../SocialLogin'
import {  Phone, X } from 'lucide-react';
import { useState, useEffect, useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

import Icon from '/components/Icon'
// const MemoizedIcon = memo(({ name, className }) => (
//     <MemoizedIcon name={showPassword ? 'eye-off' : 'eye'} className="h-5 w-5" />
//     // <Icon name={name} className={className} />
// ));
// const ShowHideButton = memo(({ showPassword, togglePasswordVisibility }) => (
//     <button
//         type="button"
//         className="absolute inset-y-0 right-4 flex items-center text-neutral-500"
//         onClick={togglePasswordVisibility}
//     >
//         <Icon name={showPassword ? 'eye-off' : 'eye'} className="h-5 w-5" />
//     </button>
// ));
const MemoizedIcon = memo(({ name, className }) => (
    <Icon name={name} className={className} />
));

const ShowHideButton = memo(({ showPassword, togglePasswordVisibility }) => (
    <button
        type="button"
        className="absolute inset-y-0 right-4 flex items-center text-neutral-500"
        onClick={togglePasswordVisibility}
    >
        <MemoizedIcon name={showPassword ? 'eye-off' : 'eye'}
         className="h-5 w-5" />
    </button>
));
export default function EmailLogin() {

    const dispatch = useDispatch();
    const { loading, error, token, user } = useSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    // const togglePasswordVisibility = () => {
    //     setShowPassword((prev) => !prev);
    // };
    // const togglePasswordVisibility = useCallback(() => {
    //     setShowPassword(prevShowPassword => !prevShowPassword);
    // }, []);
    const togglePasswordVisibility = useCallback(() => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
        setEmail("");
        setPass("")
    };

    useEffect(() => {
        if (token) {
            router.push('/');
        }
        dispatch(clearError())        
    }, [token, router, user]);
    const loginwithgoogle = () => {
        window.open("https://backend.bedbd.com/auth/google/callback", "_self");
        // window.open("http://localhost:5001/auth/google/callback","_self")
    }
    const getUser = async () => {
        try {
            const response = await axios.get("https://backend.bedbd.com/login/sucess", { withCredentials: true });

            console.log("response", response)
        } catch (error) {
            //   navigate("*")
            console.log("error", error)
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    const closeModel = (e) => {
        e.preventDefault();
        router.push("/");

    }
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
                        
                        {/* <div className='grid sm:w-1/2 pl-7.5 pr-4 py-3.5 overflow-hidden border border-neutral-200 rounded-30px marker-class' >
                          
                           <label className='text-neutral-300 font-medium text-xs leading-none '>Password</label>
                           <div>
                           <input className='w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500' 
                            placeholder='Enter Your password'
                            type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={password}
                                onChange={(e) => setPass(e.target.value)}
                                
                            />
                            <button
                                type="button"
                                className="absolute-y-center right-6 text-neutral-500"
                                onClick={togglePasswordVisibility}
                            >
                                <Icon  name={showPassword ? 'eye-off' : 'eye'} className="icon" />
                            </button>
                           </div>
                           </div> */}

{/* show hiddn */}

{/*  */}

        <div className="grid sm:w-1/2 px-4 py-3.5 overflow-hidden border border-neutral-200 rounded-[30px]">
            {/* <label className="text-neutral-300 font-medium text-xs leading-none mb-2">
                Password :
            </label>
            <div className="relative">
                <input
                    className="w-full bg-transparent text-sm font-semibold placeholder-neutral-500 text-neutral-500 border-none focus:outline-none pr-12"
                    placeholder="Enter Your password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-4 flex items-center text-neutral-500"
                    onClick={togglePasswordVisibility}
                >
                    <Icon name={showPassword ? 'eye-off' : 'eye'} className="h-5 w-5" />
                </button>
            </div> */}
            <label className="text-neutral-300 font-medium text-xs leading-none mb-2">
                Password :
            </label>
            <div className="relative">
                <input
                    className="w-full bg-transparent text-sm font-semibold placeholder-neutral-500 text-neutral-500 border-none focus:outline-none pr-12"
                    placeholder="Enter Your password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                />
                 <ShowHideButton
                    showPassword={showPassword}
                    togglePasswordVisibility={togglePasswordVisibility}
                />
                <ShowHideButton
                    showPassword={showPassword}
                    togglePasswordVisibility={togglePasswordVisibility}
                />
            </div>
        </div> 
{/*  */}
{/* <div>
                        </div> */}
                     
                      
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
                            <div className='flex-auto flex  gap-2.5 items-center text-neutral-500 cursor-pointer text-sm font-medium'>
                                <Phone className='icon' size={24} />
                                Continue with Phone Number
                            </div>
                        </Link>

                    </div>
                </form >
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    Sign In With Google
                </button>
                {/* <SocialLogin />

                <X className='text-neutral-600 cursor-pointer absolute top-6 right-6' /> */}
                <X className='text-neutral-600 cursor-pointer absolute top-6 right-6' onClick={closeModel} />
            </div>
        </div>

    )
}