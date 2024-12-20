// "use client"
// import { useEffect, useState,memo,useCallback } from 'react'
// import { forgetpass } from '@/redux/features/auth/authSlice';
// import { useDispatch ,useSelector} from 'react-redux';
// import { useRouter } from 'next/navigation'; 
// import { resetPasseord } from '@/redux/features/auth/authSlice';

// import Icon from '/components/Icon'
// import axiosInstance from '@/redux/services/axiosInstance';
// const MemoizedIcon = memo(({ name, className }) => {
//     switch (name) {
//         case 'eye':
//             return <Icon name="eye" className={className} />;
//         case 'eye-off':
//             return <Icon name="eye-off" className={className} />;
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
// export default function page() {
//     const [password,setPassword]=useState("");
//     const [conPass,setConPass]=useState("")
//     const { user, loading, error,token } = useSelector((state) => state.auth);
//     const router=useRouter()
//     const dispatch = useDispatch();
//     const [email,setEmail]=useState("")
//     const [showPassword, setShowPassword] = useState(false);
    
// // const togglePasswordVisibility = () => {
// //     setShowPassword((prev) => !prev);
// // };
// const togglePasswordVisibility = useCallback(() => {
//     setShowPassword(prevShowPassword => !prevShowPassword);
// }, []);
//     const hadleReset=async(e)=>{
//         alert("sent otp again ")
//         try{
//             e.preventDefault();
//             // console.log("ture")
//             if(password!==conPass)return 
//             if (password !== conPass) return;
//       await  dispatch(resetPasseord({  password }));
//       router.push("/")
//         }catch(error){
//             console.log(error)
//         }
//     }
//     const closeModel=(e)=>{
//     e.preventDefault();
//     router.push("/");

// }
//     return (
//         <div className='modal-background'>
//             <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

//                 <h3 className='signin-up-form-title'>Password Reset</h3> 
//                 <form  className='w-full max-w-lg mb-5 grid gap-y-8 | relative-x-center' onSubmit={hadleReset}>
//                     <div className="relative">
//             <input
//                 className="form-input"
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             {/* <button
//                 type="button"
//                 className="absolute-y-center right-6 text-neutral-500"
//                 onClick={togglePasswordVisibility}
//             >
//                 <Icon name={showPassword ? 'eye-off' : 'eye'} className="icon" />
//             </button> */}
//             <ShowHideButton
//                     showPassword={showPassword}
//                     togglePasswordVisibility={togglePasswordVisibility}
//                 />
//         </div>
//                     <div className='relative'>
//                         <input
//                             className='form-input'
//                             type='password'
//                             name='confirm-password'
//                             placeholder='Confirm password'
//                             value={conPass}
//                             onChange={(e) => setConPass(e.target.value)}
//                         />
//                         {password&& conPass===password?(
//                             <Icon name='check' className='icon absolute-y-center right-6' />
//                         ):(
//                             <Icon name='x' className='icon absolute-y-center right-6' />

//                         )}
                      
//                     </div>
//                     <button className='btn btn-primary'>Continue</button>
                   
//                 </form >
//                 {loading && <p>Loading...</p>}
//                 {error && <p style={{ color: 'red' }}>{error}</p>}


//                 <Icon onClick={closeModel} name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6'/>
//             </div>
//         </div>
        
//       )
// }
"use client"
import { useEffect, useState, memo, useCallback } from 'react'
import { forgetpass, resetPasseord } from '@/redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Icon from '/components/Icon'

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
    const [password, setPassword] = useState("");
    const [conPass, setConPass] = useState("");
    const { user, loading, error, token } = useSelector((state) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = useCallback(() => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    }, []);

    const handleReset = async (e) => {
        e.preventDefault();
        if (password !== conPass) return;
        await dispatch(resetPasseord({ password }));
        router.push("/");
    };

    const closeModel = useCallback((e) => {
        e.preventDefault();
        router.push("/");
    }, [router]);

    return (
        <div className='modal-background'>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>
                <h3 className='signin-up-form-title'>Password Reset</h3>
                <form className='w-full max-w-lg mb-5 grid gap-y-8 | relative-x-center' onSubmit={handleReset}>
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
                <MemoizedIcon onClick={closeModel} name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6' />
            </div>
        </div>
    );
});

export default Page;