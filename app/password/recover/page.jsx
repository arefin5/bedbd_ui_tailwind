import Icon from '/components/Icon'

export default function page() {
    return (
        <div className='modal-background'>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

                <h3 className='signin-up-form-title'>Recover password</h3> 


                <form  className='w-full max-w-lg mb-5 grid gap-y-8 flex flex-col gap-y-7 | relative-x-center'>
                    <p className='text-sm font-medium text-neutral-400 max-w-md'>Please input your email address. A link will be sent to reset your password.</p>

                    <div className='relative'>
                        <input
                            className='form-input' 
                            type='email' name='email' placeholder='Email address'/>
                        <Icon name='rotate-ccw' className='icon absolute-y-center right-6' />
                    </div>
                    <button className='btn btn-primary'>Continue</button>
                </form >

                <p className='text-sm font-normal text-center text-neutral-500'>Already have an account? <span className='text-primary-400 font-medium'>Login</span></p>

                <Icon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6'/>
            </div>
        </div>
        
      )
}
