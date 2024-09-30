import Icon from '/components/Icon'

export default function page() {
    return (
        <div className='modal-background'>
            <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl | absolute-center rounded-2xl'>
                <h3 className='registration-form-title mb-12' >Get Start</h3>
                <form>
                    <input 
                        className='form-input'
                        name='name'
                        type='text'
                        placeholder='Name'    
                    />

                    <input 
                        className='form-input mt-6'
                        name='phone'
                        type='text'
                        placeholder='Phone number'    
                    />
                    <input 
                        className='form-input mt-6'
                        name='email'
                        type='email'
                        placeholder='Enter your email(valid)'    
                    />

                    <button className='btn btn-primary mt-12'>Continue</button>
                    
                </form>

                <p className='mt-6 py-3.5 px-6 text-sm font-normal text-red-600'>We need you to verify your phone to proceed. Click to verify.</p>



            </div>
        </div>
        
      )
}
