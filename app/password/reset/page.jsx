import Icon from '/components/Icon'

export default function page() {
    return (
        <div className='modal-background'>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white w-screen max-w-screen-md | absolute-center rounded-10px'>

                <h3 className='signin-up-form-title'>Sign up</h3> 
                <form  className='w-full max-w-lg mb-5 grid gap-y-8 | relative-x-center'>
                    <div className='relative'>
                        <input
                            className='form-input' 
                            type='password' name='password' placeholder='New Password'/>
                        <Icon name='rotate-ccw' className='icon absolute-y-center right-6' />
                    </div>
                    <div className='relative'>
                        <input
                            className='form-input' 
                            type='password' name='confirm-password' placeholder='Confirm password'/>
                        <Icon name='check' className='icon absolute-y-center right-6' />
                    </div>
                    <button className='btn btn-primary'>Continue</button>
                </form >


                <Icon name='x' className='text-neutral-600 cursor-pointer absolute top-6 right-6'/>
            </div>
        </div>
        
      )
}
