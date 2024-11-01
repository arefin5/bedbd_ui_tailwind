"use client"
import { useEffect, useState } from 'react'
import Icon from '/components/Icon'
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '@/redux/features/auth/authSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPass, setConPass] = useState("")
    const { user, loading, error, token } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const router=useRouter()
    useEffect(()=>{
         if(user){
               router.push("/signup/otp")
         }
    },[user]);
    const hadleRegister = async (e) => {
        try {
            e.preventDefault();
            if (password !== conPass) return;
            dispatch(signupUser({ email, password }));

        } catch (error) {
            // console.log(error)
        }
    }
    console.log(error)

    return (
        <div className='modal-background'>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

                <h3 className='signin-up-form-title'>Sign up</h3>
                <form className='w-full max-w-lg mb-5 grid gap-y-8 | relative-x-center' onSubmit={hadleRegister}>
                    <div className='relative'>
                        <input
                            className='form-input'
                            type='email' name='email'
                            placeholder='Email address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Icon name='rotate-ccw' className='icon absolute-y-center right-6' />
                    </div>

                    <input
                        className='form-input'
                        type='password' name='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className='relative'>
                        <input
                            className='form-input'
                            type='password'
                            name='confirm-password'
                            placeholder='Confirm password'
                            value={conPass}
                            onChange={(e) => setConPass(e.target.value)}
                        />
                        <Icon name='check' className='icon absolute-y-center right-6' />
                    </div>
                    <button className='btn btn-primary'>Continue</button>
                </form >
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {token && <p>Registration successful!</p>}
                <Link href={"/login/email"}>
                    <p className='text-sm font-normal text-center text-neutral-500'>Already have an account? <span className='text-primary-400 font-medium'>Login</span></p>


                </Link>

                <Icon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6' />
            </div>
        </div>

    )
}
