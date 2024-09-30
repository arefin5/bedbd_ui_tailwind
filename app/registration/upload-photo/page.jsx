import Icon from '/components/Icon'
import DropImage from '/components/DropImage'

export default function page() {

    return (
        <div className='modal-background'>
            <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl | absolute-center rounded-2xl'>
                <h3 className='registration-form-title mb-12' >Upload photo</h3>
                <form className='w-96 relative-x-center rounded'>
                    <div className='w-full h-80'>
                        <DropImage/>
                    </div>
                    <button className='btn btn-primary mt-10'>Continue</button>
                </form>                
                <Icon name='arrow-left' className='text-neutral-600 cursor-pointer absolute top-8 left-8'/>
            </div>
        </div>
        
      )
}
