// // // "use client"
// // // import Icon from '/components/Icon'
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { clearError, signupUser } from '@/redux/features/auth/authSlice';
// // // import Link from 'next/link';
// // // import { useRouter } from 'next/navigation';
// // // import { useState, useEffect, useCallback, memo } from 'react';
// // // const MemoizedIcon = memo(({ name, className }) => {
// // //     switch (name) {
// // //         case 'eye':
// // //             return <Icon name="eye" className={className} />;
// // //         case 'eye-off':
// // //             return <Icon name="eye-off" className={className} />;
// // //         default:
// // //             return null;
// // //     }
// // // });

// // // const ShowHideButton = memo(({ showPassword, togglePasswordVisibility }) => (
// // //     <button
// // //         type="button"
// // //         className="absolute inset-y-0 right-4 flex items-center text-neutral-500"
// // //         onClick={togglePasswordVisibility}
// // //     >
// // //         <MemoizedIcon name={showPassword ? 'eye-off' : 'eye'} className="h-5 w-5 transition-transform duration-200" />
// // //     </button>
// // // ));
// // // export default function page() {
// // //     const [email, setEmail] = useState("");
// // //     const [password, setPassword] = useState("");
// // //     const [conPass, setConPass] = useState("")
// // //     const { user, loading, error, token } = useSelector((state) => state.auth);
// // //     const [showPassword, setShowPassword] = useState(false);

// // //     // const togglePasswordVisibility = () => {
// // //     //     setShowPassword((prev) => !prev);
// // //     // };
// // //     const togglePasswordVisibility = useCallback(() => {
// // //         setShowPassword(prevShowPassword => !prevShowPassword);
// // //     }, []);
// // //     const dispatch = useDispatch();
// // //     const router=useRouter()
// // //     useEffect(()=>{
// // //         dispatch(clearError())
// // //          if(user){
// // //                router.push("/signup/otp")
// // //          }
// // //     },[user,error]);
// // //     const hadleRegister = async (e) => {
// // //         try {
// // //             e.preventDefault();
// // //             if (password !== conPass) return;
// // //             dispatch(signupUser({ email, password }));

// // //         } catch (error) {
// // //             // console.log(error)
// // //         }
// // //     }
// // //     console.log(error)
// // // const closeModel=(e)=>{
// // //     e.preventDefault();
// // //     router.push("/");

// // // }
// // //     return (
// // //         <div className='modal-background'>
// // //             <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md |
// // //              absolute-center rounded-10px'>

// // //                 <h3 className='signin-up-form-title'>Sign up</h3>
// // //                 <form className='w-full max-w-lg mb-5 grid gap-y-8 | relative-x-center' onSubmit={hadleRegister}>
// // //                     <div className='relative'>
// // //                         <input
// // //                             className='form-input'
// // //                             type='email' name='email'
// // //                             placeholder='Email address'
// // //                             value={email}
// // //                             onChange={(e) => setEmail(e.target.value)}
// // //                         />
// // //                         <Icon name='rotate-ccw' className='icon absolute-y-center right-6' />
// // //                     </div>

// // //                     {/* <input
// // //                         className='form-input'
// // //                         type={showPassword ? 'text' : 'password'}
// // //                         // type='password'
// // //                          name='password'
// // //                         placeholder='Enter password'
// // //                         value={password}
// // //                         onChange={(e) => setPassword(e.target.value)}
// // //                     /> */}
// // //                     <div className="relative">
// // //             <input
// // //                 className="form-input"
// // //                 type={showPassword ? 'text' : 'password'}
// // //                 name="password"
// // //                 placeholder="Enter password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //             />
// // //             {/* <button
// // //                 type="button"
// // //                 className="absolute-y-center right-6 text-neutral-500"
// // //                 onClick={togglePasswordVisibility}
// // //             >
// // //                 <Icon name={showPassword ? 'eye-off' : 'eye'} className="icon" />
// // //             </button> */}
// // //             <ShowHideButton
// // //                     showPassword={showPassword}
// // //                     togglePasswordVisibility={togglePasswordVisibility}
// // //                 />
// // //         </div>
// // //                     <div className='relative'>
// // //                         <input
// // //                             className='form-input'
// // //                             type='password'
// // //                             name='confirm-password'
// // //                             placeholder='Confirm password'
// // //                             value={conPass}
// // //                             onChange={(e) => setConPass(e.target.value)}
// // //                         />
// // //                         {password&& conPass===password?(
// // //                             <Icon name='check' className='icon absolute-y-center right-6' />
// // //                         ):(
// // //                             <Icon name='x' className='icon absolute-y-center right-6' />

// // //                         )}
                      
// // //                     </div>
// // //                     <button className='btn btn-primary'>Continue</button>
// // //                 </form >
// // //                 {loading && <p>Loading...</p>}
// // //                 {error && <p style={{ color: 'red' }}>{error}</p>}
// // //                 {token && <p>Registration successful!</p>}
// // //                 <Link href={"/login/email"}>
// // //                     <p className='text-sm font-normal text-center text-neutral-500'>Already have an account? <span className='text-primary-400 font-medium'>Login</span></p>


// // //                 </Link>

// // //                 <Icon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6' 
// // //                     onClick={closeModel}
// // //                 />
// // //             </div>
// // //         </div>

// // //     )
// // // }
// // "use client"
// // import Icon from '/components/Icon'
// // import { useDispatch, useSelector } from 'react-redux';
// // import { clearError, signupUser } from '@/redux/features/auth/authSlice';
// // import Link from 'next/link';
// // import { useRouter } from 'next/navigation';
// // import { useState, useEffect, useCallback, memo } from 'react';

// // const MemoizedIcon = memo(({ name, className }) => {
// //     switch (name) {
// //         case 'eye':
// //             return <Icon name="eye" className={className} />;
// //         case 'eye-off':
// //             return <Icon name="eye-off" className={className} />;
// //         case 'check':
// //             return <Icon name="check" className={className} />;
// //         case 'x':
// //             return <Icon name="x" className={className} />;
// //         default:
// //             return null;
// //     }
// // });

// // const ShowHideButton = memo(({ showPassword, togglePasswordVisibility }) => (
// //     <button
// //         type="button"
// //         className="absolute inset-y-0 right-4 flex items-center text-neutral-500"
// //         onClick={togglePasswordVisibility}
// //     >
// //         <MemoizedIcon name={showPassword ? 'eye-off' : 'eye'} className="h-5 w-5 transition-transform duration-200" />
// //     </button>
// // ));

// // const Page = memo(() => {
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [conPass, setConPass] = useState("");
// //     const { user, loading, error, token } = useSelector((state) => state.auth);
// //     const [showPassword, setShowPassword] = useState(false);

// //     const togglePasswordVisibility = useCallback(() => {
// //         setShowPassword(prevShowPassword => !prevShowPassword);
// //     }, []);

// //     const dispatch = useDispatch();
// //     const router = useRouter();

// //     useEffect(() => {
// //         dispatch(clearError());
// //         if (user) {
// //             router.push("/signup/otp");
// //         }
// //     }, [user, error]);

// //     const handleRegister = async (e) => {
// //         e.preventDefault();
// //         if (password !== conPass) return;
// //         dispatch(signupUser({ email, password }));
// //     };

// //     const closeModel = (e) => {
// //         e.preventDefault();
// //         router.push("/");
// //     };

// //     return (
// //         <div className='modal-background'>
// //             <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>
// //                 <h3 className='signin-up-form-title'>Sign up</h3>
// //                 <form className='w-full max-w-lg mb-5 grid gap-y-8 | relative-x-center' onSubmit={handleRegister}>
// //                     <div className='relative'>
// //                         <input
// //                             className='form-input'
// //                             type='email'
// //                             name='email'
// //                             placeholder='Email address'
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)}
// //                         />
// //                         <MemoizedIcon name='rotate-ccw' className='icon absolute-y-center right-6' />
// //                     </div>
// //                     <div className="relative">
// //                         <input
// //                             className="form-input"
// //                             type={showPassword ? 'text' : 'password'}
// //                             name="password"
// //                             placeholder="Enter password"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                         />
// //                         <ShowHideButton
// //                             showPassword={showPassword}
// //                             togglePasswordVisibility={togglePasswordVisibility}
// //                         />
// //                     </div>
// //                     <div className='relative'>
// //                         <input
// //                             className='form-input'
// //                             type='password'
// //                             name='confirm-password'
// //                             placeholder='Confirm password'
// //                             value={conPass}
// //                             onChange={(e) => setConPass(e.target.value)}
// //                         />
// //                         {password && conPass === password ? (
// //                             <MemoizedIcon name='check' className='icon absolute-y-center right-6' />
// //                         ) : (
// //                             <MemoizedIcon name='x' className='icon absolute-y-center right-6' />
// //                         )}
// //                     </div>
// //                     <button className='btn btn-primary'>Continue</button>
// //                 </form>
// //                 {loading && <p>Loading...</p>}
// //                 {error && <p style={{ color: 'red' }}>{error}</p>}
// //                 {token && <p>Registration successful!</p>}
// //                 <Link href={"/login/email"}>
// //                     <p className='text-sm font-normal text-center text-neutral-500'>Already have an account? <span className='text-primary-400 font-medium'>Login</span></p>
// //                 </Link>
// //                 <MemoizedIcon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6' onClick={closeModel} />
// //             </div>
// //         </div>
// //     );
// // });

// // export default Page;
// "use client"
// import Icon from '/components/Icon'
// import { useDispatch, useSelector } from 'react-redux';
// import { clearError, signupUser } from '@/redux/features/auth/authSlice';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useState, useEffect, useCallback, memo } from 'react';

// const MemoizedIcon = memo(({ name, className, onClick }) => {
//     switch (name) {
//         case 'eye':
//             return <Icon name="eye" className={className} onClick={onClick} />;
//         case 'eye-off':
//             return <Icon name="eye-off" className={className} onClick={onClick} />;
//         case 'check':
//             return <Icon name="check" className={className} onClick={onClick} />;
//         case 'x':
//             return <Icon name="x" className={className} onClick={onClick} />;
//         default:
//             return null;
//     }
// });

// const ShowHideButton = memo(({ showPassword, togglePasswordVisibility }) => (
//     <button
//         type="button"
//         className="absolute inset-y-0 right-4 flex items-center text-neutral-500"
//         onClick={togglePasswordVisibility}
//     >
//         <MemoizedIcon name={showPassword ? 'eye-off' : 'eye'} className="h-5 w-5 transition-transform duration-200" />
//     </button>
// ));

// const Page = memo(() => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [conPass, setConPass] = useState("");
//     const { user, loading, error, token } = useSelector((state) => state.auth);
//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = useCallback(() => {
//         setShowPassword(prevShowPassword => !prevShowPassword);
//     }, []);

//     const dispatch = useDispatch();
//     const router = useRouter();

//     useEffect(() => {
//         dispatch(clearError());
//         if (user) {
//             router.push("/signup/otp");
//         }
//     }, [user, error, dispatch, router]);

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         if (password !== conPass) return;
//         dispatch(signupUser({ email, password }));
//     };

//     const closeModel = useCallback((e) => {
//         e.preventDefault();
//         router.push("/");
//     }, [router]);
//     const stopPropagation = (e) => {
//         e.stopPropagation();
//     };
//     return (
//         <div className='modal-background' onClick={closeModel}>
//             <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px '
//  onClick={stopPropagation}
//             >
//                 <h3 className='signin-up-form-title'>Sign up</h3>
//                 <form className='w-full max-w-lg mb-5 grid gap-y-8 | relative-x-center' onSubmit={handleRegister}>
//                     <div className='relative'>
//                         <input
//                             className='form-input'
//                             type='email'
//                             name='email'
//                             placeholder='Email address'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <MemoizedIcon name='rotate-ccw' className='icon absolute-y-center right-6' />
//                     </div>
//                     <div className="relative">
//                         <input
//                             className="form-input"
//                             type={showPassword ? 'text' : 'password'}
//                             name="password"
//                             placeholder="Enter password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <ShowHideButton
//                             showPassword={showPassword}
//                             togglePasswordVisibility={togglePasswordVisibility}
//                         />
//                     </div>
//                     <div className='relative'>
//                         <input
//                             className='form-input'
//                             type='password'
//                             name='confirm-password'
//                             placeholder='Confirm password'
//                             value={conPass}
//                             onChange={(e) => setConPass(e.target.value)}
//                         />
//                         {password && conPass === password ? (
//                             <MemoizedIcon name='check' className='icon absolute-y-center right-6' />
//                         ) : (
//                             <MemoizedIcon name='x' className='icon absolute-y-center right-6' />
//                         )}
//                     </div>
//                     <button className='btn btn-primary'>Continue</button>
//                 </form>
//                 {loading && <p>Loading...</p>}
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 {token && <p>Registration successful!</p>}
//                 <Link href={"/login/email"}>
//                     <p className='text-sm font-normal text-center text-neutral-500'>Already have an account? <span className='text-primary-400 font-medium'>Login</span></p>
//                 </Link>
//                 <MemoizedIcon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6' onClick={closeModel} />
//             </div>
//         </div>
//     );
// });

// export default Page;

// "use client";
// import { useState, useEffect, useCallback ,memo} from 'react';
// import { signupUser, clearError } from '@/redux/features/auth/authSlice';
// import Icon from '/components/Icon'
// import { useDispatch, useSelector } from 'react-redux';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// const MemoizedIcon = memo(({ name, className }) => {
//     switch (name) {
//         case 'rotate-ccw':
//             return <Icon name="rotate-ccw" className={className} />;
//         default:
//             return null;
//     }
// });

// const Page = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [conPass, setConPass] = useState("");
//     const { user, loading, error, token } = useSelector((state) => state.auth);
//     const [showPassword, setShowPassword] = useState(false);

//     const dispatch = useDispatch();
//     const router = useRouter();

//     useEffect(() => {
//         dispatch(clearError());
//         if (user) {
//             router.push("/signup/otp");
//         }
//     }, [user, error, dispatch, router]);

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         if (password !== conPass) return;
//         dispatch(signupUser({ email, password }));
//     };

//     const closeModel = useCallback((e) => {
//         e.preventDefault();
//         router.push("/");
//     }, [router]);

    // const stopPropagation = (e) => {
    //     e.stopPropagation();
    // };

//     return (
//         <div className='modal-background' onClick={closeModel}>
//             <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px' onClick={stopPropagation}>
//                 <h3 className='signin-up-form-title'>Sign up</h3>
//                 <form className='w-full max-w-lg mb-5 grid gap-y-8 | relative-x-center' onSubmit={handleRegister}>
//                     <div className='relative'>
//                         <input
//                             className='form-input'
//                             type='email'
//                             name='email'
//                             placeholder='Email address'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <MemoizedIcon name='rotate-ccw' className='icon absolute-y-center right-6' />
//                     </div>
//                     <div className="relative">
//                         <input
//                             className="form-input"
//                             type={showPassword ? 'text' : 'password'}
//                             name="password"
//                             placeholder="Enter password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <div className='relative'>
//                         <input
//                             className='form-input'
//                             type='password'
//                             name='confirm-password'
//                             placeholder='Confirm password'
//                             value={conPass}
//                             onChange={(e) => setConPass(e.target.value)}
//                         />
//                         {password && conPass === password ? (
//                             <MemoizedIcon name='check' className='icon absolute-y-center right-6' />
//                         ) : (
//                             <MemoizedIcon name='x' className='icon absolute-y-center right-6' />
//                         )}
//                     </div>
//                     <button className='btn btn-primary'>Continue</button>
//                 </form>
//                 {loading && <p>Loading...</p>}
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 {token && <p>Registration successful!</p>}
//                 <Link href={"/login/email"}>
//                     <p className='text-sm font-normal text-center text-neutral-500'>Already have an account? <span className='text-primary-400 font-medium'>Login</span></p>
//                 </Link>
//                 <MemoizedIcon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6' onClick={closeModel} />
//             </div>
//         </div>
//     );
// };

// export default Page;


"use client"
import { useDispatch, useSelector } from 'react-redux';
import { clearError, signupUser } from '@/redux/features/auth/authSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useCallback, memo } from 'react';
import Icon from '@/components/Icon'

const MemoizedIcon = memo(({ name, className, onClick }) => {
    switch (name) {
        case 'eye':
            return <Icon name="eye" className={className} onClick={onClick} />;
        case 'eye-off':
            return <Icon name="eye-off" className={className} onClick={onClick} />;
        case 'check':
            return <Icon name="check" className={className} onClick={onClick} />;
        case 'x':
            return <Icon name="x" className={className} onClick={onClick} />;
        default:
            return null;
    }
});

const ShowHideButton = memo(({ showPassword, togglePasswordVisibility }) => (
    <button
        type="button"
        className="absolute inset-y-0 right-4 flex items-center text-neutral-500"
        onClick={togglePasswordVisibility}
    >
        <MemoizedIcon name={showPassword ? 'eye-off' : 'eye'} className="h-5 w-5 transition-transform duration-200" />
    </button>
));

const Page = memo(() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPass, setConPass] = useState("");
    const { user, loading, error, token } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = useCallback(() => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    }, []);

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(clearError());
        if (user) {
            router.push("/signup/otp");
        }
    }, [user, error, dispatch, router]);

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== conPass) return;
        dispatch(signupUser({ email, password }));
    };

    const closeModel = useCallback((e) => {
        e.preventDefault();
        router.push("/");
    }, [router]);
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <div className='modal-background' onClick={closeModel}>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px '
 onClick={stopPropagation}
            >
                <h3 className='signin-up-form-title'>Sign up</h3>
                <form className='w-full max-w-lg mb-5 grid gap-y-8 | relative-x-center' onSubmit={handleRegister}>
                    <div className='relative'>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Email address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <MemoizedIcon name='rotate-ccw' className='icon absolute-y-center right-6' />
                    </div>
                    <div className="relative">
                        <input
                            className="form-input"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <ShowHideButton
                            showPassword={showPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                        />
                    </div>
                    <div className='relative'>
                        <input
                            className='form-input'
                            type='password'
                            name='confirm-password'
                            placeholder='Confirm password'
                            value={conPass}
                            onChange={(e) => setConPass(e.target.value)}
                        />
                        {password && conPass === password ? (
                            <MemoizedIcon name='check' className='icon absolute-y-center right-6' />
                        ) : (
                            <MemoizedIcon name='x' className='icon absolute-y-center right-6' />
                        )}
                    </div>
                    <button className='btn btn-primary'>Continue</button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {token && <p>Registration successful!</p>}
                <Link href={"/login/email"}>
                    <p className='text-sm font-normal text-center text-neutral-500'>Already have an account? <span className='text-primary-400 font-medium'>Login</span></p>
                </Link>
                <MemoizedIcon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6' onClick={closeModel} />
            </div>
        </div>
    );
});

export default Page;