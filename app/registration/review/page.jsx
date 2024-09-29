import Icon from '/components/Icon'
import DropImage from '/components/DropImage'
import Dropdown from '/components/Dropdown'

export default function page() {

    return (
        <div className='modal-background'>
            <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl | absolute-center rounded-2xl'>
                <h3 className='registration-form-title ' >Review</h3>
                <h3 className='text-center text-base text-neutral-500 font-medium mt-2 mb-6'>Review you information</h3>
                <form className='w-96 relative-x-center rounded'>
                    <div className='flex flex-col gap-y-6'>
                        <input
                            className='form-input' 
                            type='text' name='id' placeholder='ID number'/>
                        <input
                            className='form-input' 
                            type='text' name='name' placeholder='Name'/>
                        <input
                            className='form-input' 
                            type='date' name='dob' placeholder='Date of Birth'/>
                        <input
                            className='form-input' 
                            type='text' name='address' placeholder='Address'/>
                    </div>                    
                    <button className='btn btn-primary mt-10'>Save & Continue</button>
                </form>                
                <Icon name='arrow-left' className='text-neutral-600 cursor-pointer absolute top-8 left-8'/>
            </div>
        </div>
        
      )
}
