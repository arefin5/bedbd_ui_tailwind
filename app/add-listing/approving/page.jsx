import Icon from '/components/Icon'
import InputRadioButton from './InputRadioButton'



export default function page() {

    return (
        <div className=" min-h-screen py-20 ">
          <div className="absolute-center w-screen ">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-2">Approving</h2>

            <h3 className='text-sm font-normal text-neutral-500 text-center'>From your profile dashboard, you also will able to change all availability.</h3>

            <form className="w-full max-w-3xl ml-auto mr-auto mt-8 px-8 ">
                <div className='text-neutral-600 text-xl font-medium'>Approving method</div>
                <div className='mt-6 ml-4' id='aproving-method-section'>
                    <div className='flex gap-x-4'>
                        <InputRadioButton inputId='instance-approve' inputName='aproving-method' parentId='aproving-method-section'/>
                        <input className='hidden' type='radio' name='aproving-method' id='instance-approve' value='instance' />
                        <label htmlFor='instance-approve'>Instant approve</label>
                    </div>                    
                    <div className='flex gap-x-4 mt-4'>
                        <InputRadioButton inputId='manual-approve' inputName='aproving-method' parentId='aproving-method-section'/>
                        <input className='hidden' type='radio' name='aproving-method' id='manual-approve' value='manual-approve' />
                        <label htmlFor='manual-approve'>Approve manually</label>
                    </div>
                </div>

                <div className='text-neutral-600 text-xl font-medium mt-10'>Gender Preference</div>
                <div className='mt-4 ml-4' id='gender-pref-section'>
                    <div className='flex gap-x-4'>
                        <InputRadioButton inputId='pref-male-only' inputName='gender-pref' parentId='gender-pref-section'/>
                        <input className='hidden'  type='radio' name='gender-pref' id='pref-male-only' value='male'/>
                        <label htmlFor='pref-male-only'>Male</label>
                    </div>

                    <div className='flex gap-x-4 mt-4'>
                        <InputRadioButton inputId='pref-female-only' inputName='gender-pref' parentId='gender-pref-section'/>
                        <input className='hidden' type='radio' name='gender-pref' id='pref-female-only' value='female' />
                        <label htmlFor='pref-female-only'>Female only</label>
                    </div>

                    <div className='flex gap-x-4 mt-4'>
                        <InputRadioButton inputId='pref-anyone' inputName='gender-pref' parentId='gender-pref-section'/>
                        <input className='hidden' type='radio' name='gender-pref' id='pref-anyone' value='anyone'/>
                        <label htmlFor='pref-anyone'>Anyone</label>
                    </div>
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