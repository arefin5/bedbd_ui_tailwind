
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
    const [customeError,setError]=useState(false);

    const [loadings,setLoadings]=useState(false);
    const [message,setMessage]=useState("")
    const [errorMsg,setErrorMsg]=useState("")
    useEffect(() => {
        if( !user || !user.isEmailVerified || !user.isPhoneVerified && !token ){
            
            setErrorMsg("please Verify your Email and Phone number ")
            return router.push("/user/profile")
        }
        if(  !user.isEmailVerified){
            setErrorMsg("please Verify your Email and Phone number ")
            return router.push("/user/profile")
        }
        if(  !user.isPhoneVerified){
            setErrorMsg("please Verify your Email and Phone number ")
            return router.push("/user/profile")
        }
        if( !token ){
            setErrorMsg("please Verify your Email and Phone number ")
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
        const sanitizedPhone = handlePhoneChange(phone);
        
        if (!sanitizedPhone) {
          console.error("Invalid phone number");
          // alert("Please enter a valid phone number!"); // Notify the user
          setError(true);
          return;
        }
        const payload = {
            fname: fname || undefined,
            lname: lname || undefined,
            email: email || undefined,
            phone: sanitizedPhone || undefined,
            name:name
        };
       
        const resultAction = await dispatch(userEdit(payload));
        if (userEdit.fulfilled.match(resultAction)) {
            setMessage("profile Update Success")
            setError(false);
            
        router.push("/registration/terms-conditions");
        } else {
        console.log("Error during phone login:", resultAction.payload);
        }
    }
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

    return (
        <div className='modal-background'>
            <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl | absolute-center rounded-2xl'>
                <h3 className='registration-form-title mb-12'>Get Started</h3>
                {
                        errorMsg && <div className='error-message text-red-500'>
                        {errorMsg}
                        </div>
                    }
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
                    
                     {customeError && <div className='error-message text-red-500'>
                please provide valid Phone number
              </div>}
              
                    <input 
                        className='form-input mt-6'
                        name='email'
                        type='email'
                        placeholder='Enter your email (valid)' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}   
                    />
                     {error && <div className='error-message text-red-500'>{error}</div>}
                {message && <div className='success-message text-green'>{message}
          </div>}
                    <button className='btn btn-primary mt-12' onClick={handleContinue}>Continue</button>
                </form>

                {/* <p className='mt-6 py-3.5 px-6 text-sm font-normal text-red-600'>
                    We need you to verify your phone to proceed. Click to verify.
                </p> */}
            </div>
        </div>
    )
}
