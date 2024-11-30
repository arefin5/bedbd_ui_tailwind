import Icon from '/components/Icon'
import InputCheckBox from './InputCheckBox'


export default function page() {

    return (
        <div className=" min-h-screen py-20 ">
          <div className="absolute-center w-screen ">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-2">That’s all</h2>

            <h3 className='text-2xl font-normal text-neutral-500 text-center max-w-md ml-auto mr-auto '>You’ve done everything you need to before your first guest stays.</h3>

            <form className="w-full max-w-3xl ml-auto mr-auto mt-8 px-8 select-none">
                <div className='flex gap-x-4 '>
                    <InputCheckBox inputId='valid-doc-confirmation'/>
                    <input className='hidden' type='checkbox' name='valid-doc-confirmation' id='valid-doc-confirmation' />
                    <label className='text-neutral-500 text-sm font-normal cursor-pointer' htmlFor='valid-doc-confirmation'>I confirm that this is a legitimate accommodation business with all necessary licenses and permits, which can be shown upon first request. Bedbd.com reserves the right to verify and investigate any details provided in this registration.</label>
                </div>
                
                <div className='flex gap-x-4 mt-5 '>
                    <InputCheckBox inputId='accept-terms-conditions'/>
                    <input className='hidden' type='checkbox' name='terms-conditions' id='accept-terms-conditions' />
                    <label className='text-neutral-500 text-sm font-normal cursor-pointer' htmlFor='accept-terms-conditions'>I have read, accepted, and agreed to the terms and conditions.</label>
                </div>

              <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
                <button className="btn btn-secondary max-w-36 relative">
                  <Icon name='chevron-left' className="icon absolute-y-center left-4 "/> 
                  Back</button>
                <button className="btn btn-primary">
                  Continue
                </button>
              </div>
              </form>
          </div>
        </div>        
      )
}