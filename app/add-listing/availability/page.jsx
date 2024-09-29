import Icon from '/components/Icon'
import InputCheckBox from './InputCheckBox'

export default function page() {
    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-2">Set Price</h2>

            <h3 className='text-sm font-normal text-neutral-500 text-center'>From your profile dashboard, you also will able to change all availability.</h3>

            <form className="w-full max-w-xl ml-auto mr-auto mt-6 px-8 ">
                <div>
                    <div className='text-neutral-600 text-xl font-medium'>From when guests can start check in?</div>
                    <div className='mt-6 ml-4' id='check-in-possibility-section'>
                        <div className='flex gap-x-4'>
                            <InputCheckBox inputId='asap' inputName='when-check-in' parentId='check-in-possibility-section'/>
                            <input className='hidden' type='radio' name='when-check-in' id='asap' value='asap' />
                            <label htmlFor='asap'>As soon as possible</label>
                        </div>                    
                        <div className='flex gap-x-4 mt-4'>
                            <InputCheckBox inputId='specific' inputName='when-check-in' parentId='check-in-possibility-section'/>
                            <input className='hidden' type='radio' name='when-check-in' id='specific' value='specific' />
                            <label htmlFor='specific'>On a specific date</label>
                        </div>
                    </div>
                    <input className='form-input mt-6' type='text' name='specific-date' placeholder='Set Date'/>
                </div>
                
                    

                <div>
                    <div className='text-neutral-600 text-xl font-medium mt-10'>Want to allow 30+ night stays?</div>
                    <div className='mt-4 ml-4' id='allow-month-extend'>
                        <div className='flex gap-x-4'>
                            <InputCheckBox inputId='allow-extend' inputName='month-extend' parentId='allow-month-extend'/>
                            <input className='hidden'  type='radio' name='month-extend' id='allow-extend' value={true} />
                            <label htmlFor='allow-extend'>Yes</label>
                        </div>

                        <div className='flex gap-x-4 mt-4'>
                            <InputCheckBox inputId='not-allow-extend' inputName='month-extend' parentId='allow-month-extend'/>
                            <input className='hidden' type='radio' name='month-extend' id='not-allow-extend' value={false} />
                            <label htmlFor='not-allow-extend'>No</label>
                        </div>
                    </div>
                    <input className='form-input mt-6' type='number' name='allow-night' placeholder='Set Maximum night'/>
                </div>



                <div>
                    <div className='text-neutral-600 text-xl font-medium mt-10'>Want to stop getting booked after a time frame?</div>

                    <div className='ml-4' id='allow-booking-extend'>
                        <div className='flex gap-x-4 mt-4'>
                            <InputCheckBox inputId='allow-booking' inputName='booking-extend' parentId='allow-booking-extend'/>
                            <input className='hidden' type='radio' name='booking-extend' id='allow-booking' value={true} />
                            <label htmlFor='allow-booking'>Yes</label>
                        </div>

                        <div className='flex gap-x-4 mt-4'>
                            <InputCheckBox inputId='not-allow-booking' inputName='booking-extend' parentId='allow-booking-extend'/>
                            <input className='hidden' type='radio' name='booking-extend' id='not-allow-booking' value={false} />
                            <label htmlFor='not-allow-booking'>No</label>
                        </div>
                    </div>
                    
                    <input className='form-input mt-6' type='number' name='allow-night' placeholder='Set date'/>
                </div>

                


                
                <div className='text-sm  font-normal text-neutral-600 w-fit  ml-auto mr-auto text-left max-w-md mt-3.5'>
                    Check your nearest property price to make more competitive. It will increase your changes of getting more booking
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



