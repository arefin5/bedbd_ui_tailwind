import Icon from '/components/Icon'

import SocialLogin from '../SocialLogin'






export default function Login() {
    return (
        <div className='modal-background'>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

                <h3 className='signin-up-form-title'>Login</h3> 
                <form  className='w-full max-w-lg mb-5  | relative-x-center'>
                    <div className='flex gap-y-2.5 sm:gap-0 flex-col sm:flex-row  overflow-hidden | sm:border sm:border-neutral-200 rounded-30px '>
                        <div className='grid hover:bg-gray-50 flex-auto sm:w-2/5 sm:max-w-48 pl-7.5 pr-4 py-3.5   border border-neutral-200 sm:border-none rounded-30px'>
                            <label className='text-neutral-300 font-medium text-xs leading-none '>country</label>
                            <select name='countryCode' className=" w-full bg-transparent text-sm text-left pl-0 outline-none font-semibold text-neutral-500 -ml-1">
                                {/* <option value=''>Country Code</option> */}
                                <option value='+880'>BD (+880)</option>
                                <option value='+91'>IND (+91)</option>
                            </select>
                        </div>
                        <div className='flex-auto hover:bg-gray-50 pl-4 pr-7.5 py-3.5 grid relative | sm:custom-left-line-200 border border-neutral-200 sm:border-none rounded-30px'>
                            <label className='text-neutral-300 font-medium text-xs leading-none '>phone number</label>
                            <input type='number' name='phone' placeholder='Enter Your Number' className='w-full bg-transparent text-sm text-left pl-0 font-semibold placeholder-semibold placeholder-neutral-500 text-neutral-500'/>
                        </div>
                    </div>
                    <h3 className='text-xs leading-none text-neutral-400 font-medium text-center mt-3 mb-5'>  We’ll call or text you to confirm your number. Standard message and data rates apply. </h3>
                    <div className='flex flex-col-reverse sm:flex-row gap-6 items-center'>
                        <button type='submit' className='btn btn-primary sm:max-w-48 cursor-pointer'>Sent OTP</button>
                        <a className='flex-auto flex  gap-2.5 items-center text-neutral-500 cursor-pointer text-sm font-medium'>
                            <Icon name='mail' className='icon' size={24}/>
                            Continue with Email
                        </a>
                    </div>
                </form >

                <SocialLogin/>
                <Icon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6'/>
            </div>
        </div>
        
      )
}
