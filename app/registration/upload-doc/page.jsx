import Icon from '/components/Icon'
import DropImage from '/components/DropImage'

export default function page() {

    return (
        <div className='modal-background'>
            <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl | absolute-center rounded-2xl'>
                <h3 className='registration-form-title mb-12' >Upload Document</h3>
                <form className='w-96 relative-x-center rounded'>
                    <select name='doc-type' className="outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 mb-8 font-semibold text-neutral-500 border border-neutral-400 rounded-md ">
                        <option className='py-3.5' value=''>Select document type</option>
                        <option className='py-3.5'  value='dl'>Driving Licence</option>
                        <option className='py-3.5'  value='nid'>National Identity Card</option>
                        <option className='py-3.5'  value='passport'>Passport</option>
                    </select>
                    <div className='w-full h-60'>
                        <DropImage/>
                    </div>
                    <button className='btn btn-primary mt-10'>Save & Continue</button>
                </form>                
                <Icon name='arrow-left' className='text-neutral-600 cursor-pointer absolute top-8 left-8'/>
            </div>
        </div>
        
      )
}
