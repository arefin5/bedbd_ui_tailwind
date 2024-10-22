
"use client"
import Icon from '/components/Icon';
import InputCheckBox from './InputCheckBox';
import { useState } from 'react';
import { updateFormData } from '@/redux/list/createListSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export default function Page() {
    const [formValues, setFormValues] = useState({
        checkIn: '',
        allowExtend: '',
        bookingExtend: '',
        specificDate: '',
        allowNight: '',
        stopBooking: ''
    });
    const router = useRouter();
    const dispatch = useDispatch();
    const handleInputChange = (name, value) => {
        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (name, value) => {
        // For checkboxes, toggle the value
        setFormValues((prev) => ({
            ...prev,
            [name]: value ? 'true' : 'false'
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = { 
            checkIn:checkIn,
            allowExtend:allowExtend,
            bookingExtend: bookingExtend,
            specificDate: specificDate,
            allowNight: allowNight,
            stopBooking: stopBooking
  };try {
    await dispatch(updateFormData(payload));
    // console.log('Current Redux state:', formData); 
    router.push('/add-listing/approving');
  } catch (error) {
    
  }
       
    };
    const back=(e)=>{
        e.preventDefault();
        router.push('/add-listing/price');
      }
    return (
        <div className="min-h-screen py-20">
            <div>
                <h2 className="text-primary-400 text-4xl text-center font-medium mb-2">Set Price</h2>
                <h3 className='text-sm font-normal text-neutral-500 text-center'>From your profile dashboard, you also will be able to change all availability.</h3>

                <form className="w-full max-w-xl ml-auto mr-auto mt-6 px-8" onSubmit={handleSubmit}>
                    <div>
                        <div className='text-neutral-600 text-xl font-medium'>From when guests can start check-in?</div>
                        <div className='mt-6 ml-4' id='check-in-possibility-section'>
                            <div className='flex gap-x-4'>
                                <InputCheckBox
                                    inputId='asap'
                                    inputName='when-check-in'
                                    parentId='check-in-possibility-section'
                                    onChange={(value) => handleInputChange('checkIn', value ? 'asap' : '')}
                                />
                                <label htmlFor='asap'>As soon as possible</label>
                            </div>
                            <div className='flex gap-x-4 mt-4'>
                                <InputCheckBox
                                    inputId='specific'
                                    inputName='when-check-in'
                                    parentId='check-in-possibility-section'
                                    onChange={(value) => handleInputChange('checkIn', value ? 'specific' : '')}
                                />
                                <label htmlFor='specific'>On a specific date</label>
                            </div>
                        </div>
                        <input
                            className='form-input mt-6'
                            type='text'
                            name='specific-date'
                            placeholder='Set Date'
                            onChange={(e) => handleInputChange('specificDate', e.target.value)}
                        />
                    </div>

                    <div>
                        <div className='text-neutral-600 text-xl font-medium mt-10'>Want to allow 30+ night stays?</div>
                        <div className='mt-4 ml-4' id='allow-month-extend'>
                            <div className='flex gap-x-4'>
                                <InputCheckBox
                                    inputId='allow-extend'
                                    inputName='month-extend'
                                    parentId='allow-month-extend'
                                    onChange={(value) => handleCheckboxChange('allowExtend', value)}
                                />
                                <label htmlFor='allow-extend'>Yes</label>
                            </div>
                            <div className='flex gap-x-4 mt-4'>
                                <InputCheckBox
                                    inputId='not-allow-extend'
                                    inputName='month-extend'
                                    parentId='allow-month-extend'
                                    onChange={(value) => handleCheckboxChange('allowExtend', !value)}
                                />
                                <label htmlFor='not-allow-extend'>No</label>
                            </div>
                        </div>
                        <input
                            className='form-input mt-6'
                            type='number'
                            name='allow-night'
                            placeholder='Set Maximum night'
                            onChange={(e) => handleInputChange('allowNight', e.target.value)}
                        />
                    </div>

                    <div>
                        <div className='text-neutral-600 text-xl font-medium mt-10'>Want to stop getting booked after a time frame?</div>
                        <div className='ml-4' id='allow-booking-extend'>
                            <div className='flex gap-x-4 mt-4'>
                                <InputCheckBox
                                    inputId='allow-booking'
                                    inputName='booking-extend'
                                    parentId='allow-booking-extend'
                                    onChange={(value) => handleCheckboxChange('bookingExtend', value)}
                                />
                                <label htmlFor='allow-booking'>Yes</label>
                            </div>
                            <div className='flex gap-x-4 mt-4'>
                                <InputCheckBox
                                    inputId='not-allow-booking'
                                    inputName='booking-extend'
                                    parentId='allow-booking-extend'
                                    onChange={(value) => handleCheckboxChange('bookingExtend', !value)}
                                />
                                <label htmlFor='not-allow-booking'>No</label>
                            </div>
                        </div>
                        <input
                            className='form-input mt-6'
                            type='number'
                            name='allow-night'
                            placeholder='Set date'
                            onChange={(e) => handleInputChange('stopBooking', e.target.value)}
                        />
                    </div>

                    <div className='text-sm font-normal text-neutral-600 w-fit ml-auto mr-auto text-left max-w-md mt-3.5'>
                        Check your nearest property price to make more competitive. It will increase your chances of getting more bookings.
                    </div>

                    <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
                        <button className="btn btn-secondary max-w-36 relative" type="button"
                        onClick={back}>
                            <Icon name='chevron-left' className="icon absolute-y-center left-4 "/>
                            Back
                        </button>
                        <button className="btn btn-primary" type="submit">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
