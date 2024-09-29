"use client"
import SocialLogin from '../SocialLogin'
import { Phone, X } from 'lucide-react';
import { useState } from 'react';



export default function EmailLogin() {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        error: '',
        loading: false
    });

    // // Update form state dynamically
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormState((prevState) => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };


    // // Function to handle form submission
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setFormState((prevState) => ({ ...prevState, loading: true, error: '' }));

    //     // Prepare the login payload
    //     const loginData = {
    //         email: formState.email,
    //         password: formState.password
    //     };

    //     try {
    //         // Send POST request to your server's auth API
    //         const response = await fetch('http://localhost:5000/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(loginData),
    //         });

    //         // Handle response from the server
    //         const data = await response.json();

    //         if (response.ok) {
    //             // Login success: handle token storage or redirect
    //             console.log('Login successful:', data);
    //             // Store token in localStorage or cookie if needed
    //             localStorage.setItem('token', data.token); // Example
    //             // Redirect to dashboard or other secure page
    //             window.location.href = '/dashboard'; // Example
    //         } else {
    //             // Login failed: show error message
    //             setFormState((prevState) => ({
    //                 ...prevState,
    //                 error: data.message || 'Login failed',
    //                 loading: false
    //             }));
    //         }
    //     } catch (error) {
    //         console.error('Login error:', error);
    //         setFormState((prevState) => ({
    //             ...prevState,
    //             error: 'An error occurred during login.',
    //             loading: false
    //         }));
    //     }
    // };


    return (
        <div className='modal-background'>
            <div className='pt-20 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

                <h3 className='signin-up-form-title'>Login</h3> 
                {formState.error && <div className='error-message text-red-500'>{formState.error}</div>}
                <form  className='w-full max-w-lg mb-5  | relative-x-center'>

                    <div className='flex flex-col sm:flex-row gap-6'>
                        <div className='grid sm:w-1/2 pl-7.5 pr-4 py-3.5 overflow-hidden border border-neutral-200 rounded-30px marker-class' >
                            <label className='text-neutral-300 font-medium text-xs leading-none '>Email</label>
                            <input className='focus:outline-none focus:border-none w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500' type='text' placeholder='Enter Your Email'
                                    name='email'
                                    value={formState.email}
                                    />
                        </div>

                        <div className='grid sm:w-1/2 pl-7.5 pr-4 py-3.5 overflow-hidden border border-neutral-200 rounded-30px marker-class' >
                            <label className='text-neutral-300 font-medium text-xs leading-none '>Password</label>
                            <input className='w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500' type='password' placeholder='Enter Your password' 
                                    name='password'
                                    value={formState.password}
                                     />
                        </div>
                    </div>
                    
                    <div className='text-xs leading-none text-neutral-400 font-medium  mt-3 mb-5 flex flex-wrap gap-2 sm:justify-between'>
                        <h3>{`Don’t have an account?`}<span className='text-primary-400'>Create new account.</span></h3>
                        <h3 className='text-primary-400'>
                            {` Forget Password? `}</h3>
                    </div>
                    <div className='flex flex-col-reverse sm:flex-row gap-6 items-center'>
                        <button type='submit' className='btn btn-primary sm:max-w-48 cursor-pointer'>{formState.loading ? 'Logging in...' : 'Continue'}</button>
                        <a className='flex-auto flex  gap-2.5 items-center text-neutral-500 cursor-pointer text-sm font-medium'>
                            <Phone  className='icon' size={24}/>
                            Continue with Phone Number
                        </a>

                    </div>
                </form >

                <SocialLogin/>

                <X className='text-neutral-600 cursor-pointer absolute top-6 right-6'/>
            </div>
        </div>
        
      )
}
