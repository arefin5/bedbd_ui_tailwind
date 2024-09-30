import Icon from '/components/Icon'
import DropImage from '/components/DropImage'
import Dropdown from '/components/Dropdown'

export default function page() {

    return (
        <div className='modal-background'>
            <div className='py-64 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl | absolute-center rounded-2xl'>
                <h3 className='registration-form-title ' >That’s all</h3>
                <div className='max-w-96 relative-x-center'>
                    <h3 className='text-center text-base text-neutral-500 font-medium mt-2 mb-6'>Your bedbd account is ready to use. Now you can start listing your property.</h3>
                    <button className='btn btn-primary '>back to home</button>
                </div>
            </div>
        </div>
        
      )
}

