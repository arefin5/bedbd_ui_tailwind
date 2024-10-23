
"use client";
import Icon from '/components/Icon';
import InputRadioButton from './InputRadioButton';
import { useCallback, useState } from 'react';
import { updateFormData } from '@/redux/list/createListSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { checkIn, allowExtend, bookingExtend, specificDate, allowNight, stopBooking } = formValues;
            const payload = { checkIn, allowExtend, bookingExtend, specificDate, allowNight, stopBooking };
            await dispatch(updateFormData(payload));
            console.log(payload)
            console.log('Navigating to /add-listing/approving');
            // router.push('/add-listing/approving');
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const back = (e) => {
        e.preventDefault();
        console.log('Navigating to /add-listing/price');
        router.push('/add-listing/price');
    };

    return (
        <div className="min-h-screen py-20">
            <div>
                <h2 className="text-primary-400 text-4xl text-center font-medium mb-2">Set Price</h2>
                <h3 className='text-sm font-normal text-neutral-500 text-center'>
                    From your profile dashboard, you also will be able to change all availability.
                </h3>

                <form className="w-full max-w-xl ml-auto mr-auto mt-6 px-8" onSubmit={handleSubmit}>
                    {/* Check-in section */}
                    <div>
                        <div className='text-neutral-600 text-xl font-medium'>From when guests can start check-in?</div>
                        <div className='mt-6 ml-4' id='check-in-possibility-section'>
                            <div className='flex gap-x-4'>
                                <InputRadioButton
                                    inputId='asap'
                                    inputName='checkIn'
                                    value='asap'
                                    isChecked={formValues.checkIn === 'asap'}
                                    onChange={() => handleInputChange('checkIn', 'asap')}
                                />
                                <label htmlFor='asap'>As soon as possible</label>
                            </div>
                            <div className='flex gap-x-4 mt-4'>
                                <InputRadioButton
                                    inputId='specific'
                                    inputName='checkIn'
                                    value='specific'
                                    isChecked={formValues.checkIn === 'specific'}
                                    onChange={() => handleInputChange('checkIn', 'specific')}
                                />
                                <label htmlFor='specific'>On a specific date</label>
                            </div>
                        </div>
                        {formValues.checkIn !== 'asap' && (
                            <input
                                className='form-input mt-6'
                                type='text'
                                name='specific'
                                placeholder='Set Date'
                                onChange={(e) => handleInputChange('checkIn', e.target.value)}
                            />
                        )}
                        
                    </div>

                    {/* Allow 30+ night stays */}
                    <div>
                        <div className='text-neutral-600 text-xl font-medium mt-10'>Want to allow 30+ night stays?</div>
                        <div className='mt-4 ml-4' id='allow-month-extend'>
                            <div className='flex gap-x-4'>
                                <InputRadioButton
                                    inputId='allow-extend-yes'
                                    inputName='allowExtend'
                                    value='yes'
                                    isChecked={formValues.allowExtend === 'yes'}
                                    onChange={() => handleInputChange('allowExtend', 'yes')}
                                />
                                <label htmlFor='allow-extend-yes'>Yes</label>
                            </div>
                            <div className='flex gap-x-4 mt-4'>
                                <InputRadioButton
                                    inputId='allow-extend-no'
                                    inputName='allowExtend'
                                    value='no'
                                    isChecked={formValues.allowExtend === 'no'}
                                    onChange={() => handleInputChange('allowExtend', 'no')}
                                />
                                <label htmlFor='allow-extend-no'>No</label>
                            </div>
                        </div>
                        <input
                            className='form-input mt-6'
                            type='number'
                            name='allow-night'
                            placeholder='Set Maximum night'
                            onChange={(e) => handleInputChange('allowExtend', e.target.value)}
                        />
                    </div>

                    {/* Stop booking after a timeframe */}
                    <div>
                        <div className='text-neutral-600 text-xl font-medium mt-10'>Want to stop getting booked after a time frame?</div>
                        <div className='ml-4' id='allow-booking-extend'>
                            <div className='flex gap-x-4 mt-4'>
                                <InputRadioButton
                                    inputId='allow-booking-yes'
                                    inputName='bookingExtend'
                                    value='yes'
                                    isChecked={formValues.bookingExtend === 'yes'}
                                    onChange={() => handleInputChange('bookingExtend', 'yes')}
                                />
                                <label htmlFor='allow-booking-yes'>Yes</label>
                            </div>
                            <div className='flex gap-x-4 mt-4'>
                                <InputRadioButton
                                    inputId='allow-booking-no'
                                    inputName='bookingExtend'
                                    value='no'
                                    isChecked={formValues.bookingExtend === 'no'}
                                    onChange={() => handleInputChange('bookingExtend', 'no')}
                                />
                                <label htmlFor='allow-booking-no'>No</label>
                            </div>
                        </div>
                        <input
                            className='form-input mt-6'
                            type='number'
                            name='allow-night'
                            placeholder='Set date'
                            onChange={(e) => handleInputChange('bookingExtend', e.target.value)}
                        />
                    </div>

                    {/* Footer and actions */}
                    <div className='text-sm font-normal text-neutral-600 w-fit ml-auto mr-auto text-left max-w-md mt-3.5'>
                        Check your nearest property price to make more competitive. It will increase your chances of getting more bookings.
                    </div>

                    <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
                        <button className="btn btn-secondary max-w-36 relative" onClick={back}>
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
