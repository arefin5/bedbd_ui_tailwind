"use client"
import axiosInstance from '@/redux/services/axiosInstance'
import Icon from '/components/Icon'
import { useState,useEffect } from 'react'
import { forgetpass } from '@/redux/features/auth/authSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { useRouter } from 'next/navigation'; 
import Link from "next/link"

export default function page() {
    const [email,setEmail]=useState("");
    const { useemail, loading, error } = useSelector((state) => state.auth);
    const router = useRouter();

// password/recover
const dispatch = useDispatch();
    const forgetPass=(e)=>{
    e.preventDefault();
    dispatch(forgetpass({ email }));
  };

  useEffect(() => {
        if (useemail) {
            router.push('/password/opt'); 
        }
    }, [useemail, router]);

    return (
        <div className='modal-background'>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

                <h3 className='signin-up-form-title'>Recover password</h3> 

                <form  className='w-full max-w-lg mb-5 grid gap-y-8 flex flex-col gap-y-7 | relative-x-center' onSubmit={forgetPass}>
                    <p className='text-sm font-medium text-neutral-400 max-w-md'>Please input your email address. A link will be sent to reset your password.</p>
                    <div className='relative'>
                        <input
                            className='form-input' 
                            type='email' name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             placeholder='Email address'/>
                        <Icon name='rotate-ccw' className='icon absolute-y-center right-6' />
                    </div>
                    <button className='btn btn-primary'>Continue</button>
                        {error && <p className="error-message">{error}</p>}
                </form >
<Link href="/login">


                <p className='text-sm font-normal text-center text-neutral-500'>Already have an account? <span className='text-primary-400 font-medium'>Login</span></p>
</Link>
                <Icon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6'/>
            </div>
        </div>
        
      )
}
