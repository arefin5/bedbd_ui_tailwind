
"use client";

import Icon from '/components/Icon'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { userEdit } from '@/redux/features/auth/authSlice';

export default function Page() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, isLoading, error, token } = useSelector((state) => state.auth);
    
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        if( !user || !user.isEmailVerified || !user.isPhoneVerified && !token ){
            alert("please Verify your Email and Phone number ")
            return router.push("/user/profile")
        }
        if(  !user.isEmailVerified){
            alert("please Verify your Email and Phone number ")
            return router.push("/user/profile")
        }
        if(  !user.isPhoneVerified){
            alert("please Verify your Email and Phone number ")
            return router.push("/user/profile")
        }
        if( !token ){
            alert("please Verify your Email and Phone number ")
            return router.push("/user/profile")
        }
        if (user.fname) setfName(user.fname);
        if (user.lname) setlName(user.lname);  // Fixing the mistake here
        if (user.email) setEmail(user.email);
        if (user.phone) setPhone(user.phone);
        if (user.name) setName(user.name);  // Correcting this
        
    }, [user, token]);

    const handleNameChange = () => {
        if (!name) {
            setName(fname + ' ' + lname);
        }
    }
    const handleContinue=async(e)=>{
        e.preventDefault();
        const payload = {
            fname: fname || undefined,
            lname: lname || undefined,
            email: email || undefined,
            phone: phone || undefined,
            name:name
        };
        const resultAction = await dispatch(userEdit(payload));
        if (userEdit.fulfilled.match(resultAction)) {
        router.push("/registration/terms-conditions");
        } else {
        console.log("Error during phone login:", resultAction.payload);
        }
    }


    return (
        <div className='modal-background'>
            <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl | absolute-center rounded-2xl'>
                <h3 className='registration-form-title mb-12'>Get Started</h3>
                <form>
                    <input 
                        className='form-input'
                        name='name'
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={handleNameChange}  // Call the function to set name when the input loses focus
                    />

                    <input 
                        className='form-input mt-6'
                        name='phone'
                        type='text'
                        placeholder='Phone number'  
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}  
                    />
                    <input 
                        className='form-input mt-6'
                        name='email'
                        type='email'
                        placeholder='Enter your email (valid)' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}   
                    />
                    <button className='btn btn-primary mt-12' onClick={handleContinue}>Continue</button>
                </form>

                {/* <p className='mt-6 py-3.5 px-6 text-sm font-normal text-red-600'>
                    We need you to verify your phone to proceed. Click to verify.
                </p> */}
            </div>
        </div>
    )
}
