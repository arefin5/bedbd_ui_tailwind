
// Imports
"use client"
import Icon from '/components/Icon'
import Rule from './Rule'
import getAllTimeSegments from './getAllTimeSegments'
import OptionIcon from './OptionIcon'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux'
import { Plus } from 'lucide-react'
import { updateFormData } from '@/redux/list/createListSlice';

function getHomeRules() {
    return [
        { "_id": "663a0b374ec144ec33e4f103", "title": "In House Smoking allowed", "description": "" },
        { "_id": "663a0b6b4ec144ec33e4f104", "title": "Parties/events allowed", "description": "" },
        { "_id": "663a0b8b4ec144ec33e4f105", "title": "Pet allowed", "description": "" }
    ];
}

export default function Page() {
    const data = getHomeRules();
    const timeSegments = getAllTimeSegments();
    const [homerule, setHomeRule] = useState({});
    const router = useRouter();
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form);
    const [homefeatures, setHomeFeatures] = useState(data);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newHomeFeatureTitle, setHomeNewFeatureTitle] = useState('');
    const [newHomeFeatureDesc, setHomeNewFeatureDesc] = useState('');
    const [checkInTime, setCheckInTime] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');

    useEffect(() => {
        console.log(homerule);
    }, [homerule, data]);

    const handleContinue = async (e) => {
        e.preventDefault();
        // Check if there are any selected home rules
        if (Object.keys(homerule).length === 0) {
            alert('Please select at least one home rule before continuing.');
            return;
        }
     
        try {
            const filteredHomeRules = Object.fromEntries(
                Object.entries(homerule).filter(([key, value]) => value.value)
            );
            if (!checkInTime || !checkOutTime) {
                alert('Please select both check-in and check-out times before continuing.');
                return; // Stop further execution
            }
        
            const payload = { 
                homerule: filteredHomeRules, // Send only checked rules
                checkInTime,
                checkOutTime
            };

            await dispatch(updateFormData(payload)); 
            router.push('/add-listing/upload-images'); 
        } catch (error) {
            console.error(error);
        }
    };

    const back = (e) => {
        e.preventDefault();
        router.push('/add-listing/amenities');
    };

    const handleAddMore = (e) => {
        e.preventDefault();
        setShowAddForm(true);
    };

    const handleSaveNewFeature = (e) => {
        e.preventDefault();
        if (newHomeFeatureTitle && newHomeFeatureDesc) {
            const newFeature = {
                _id: `${Date.now()}`, // Generate a simple unique ID
                title: newHomeFeatureTitle,
                description: newHomeFeatureDesc
            };
            setHomeFeatures([...homefeatures, newFeature]);
            setHomeNewFeatureTitle('');
            setHomeNewFeatureDesc('');
            setShowAddForm(false); // Hide the form after adding a feature
        }
    };

    return (
        <div className="min-h-screen py-20">
            <div>
                <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Home Rules</h2>
                <form className="w-full max-w-3xl ml-auto mr-auto mt-28 px-8 ">
                    <div>
                        <h3 className='text-neutral-600 text-xl mb-4 font-medium'>Home Rules</h3>
                        <div className='space-y-4'>
                            {data.map(item => (
                                <Rule key={item._id} data={item} setHomeRule={setHomeRule} homerule={homerule} />
                            ))}
                        </div>
                        {!showAddForm && (
                            <button
                                className='flex gap-x-2 mt-3 text-neutral-600 text-base font-medium'
                                onClick={handleAddMore}
                            >
                                <Plus className='icon' /> Add more option
                            </button>
                        )}

                        {/* Form for adding a new feature, hidden initially */}
                        {showAddForm && (
                            <div className='mt-6'>
                                <h3 className="text-neutral-500 font-medium text-xl mb-4">Feature Title</h3>
                                <input
                                    name='new_feature_title'
                                    type='text'
                                    className='form-input'
                                    placeholder='Enter new feature title'
                                    value={newHomeFeatureTitle}
                                    onChange={(e) => setHomeNewFeatureTitle(e.target.value)}
                                />
                                <h3 className="text-neutral-500 font-medium text-xl mt-4 mb-4">Feature Description</h3>
                                <textarea
                                    rows="2"
                                    name='new_feature_description'
                                    className='form-input'
                                    placeholder='Enter new feature description'
                                    value={newHomeFeatureDesc}
                                    onChange={(e) => setHomeNewFeatureDesc(e.target.value)}
                                />

                                {/* Button to save the new feature */}
                                <button
                                    className='btn btn-primary mt-4'
                                    onClick={handleSaveNewFeature}
                                >
                                    Save Feature
                                </button>
                            </div>
                        )}
                    </div>
                    
                    <div className='mt-10 flex gap-x-10 justify-between'>
                        

                        <div className='w-full max-w-80'>
                            <h3 className='text-neutral-600 text-xl mb-2 font-medium'>Check-out (GMT +6)</h3>
                            <div className='relative'>
                                <select 
                                    name='check-out-time'
                                    id='select_check_out'
                                    onChange={(e) => setCheckOutTime(e.target.value)}
                                    className="outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 font-semibold text-neutral-500 border border-neutral-400 rounded-md"
                                >
                                    {timeSegments.map(item => (
                                        <option key={item.hour + item.minute} 
                                            value={`${item['hour']}:${item['minute']} ${parseInt(item['hour']) < 12 ? 'AM' : 'PM'}`}>
                                            {`${item['hour']}:${item['minute']} ${item['meridiem']}`}
                                        </option>
                                    ))}
                                </select>
                                <Icon name='chevron-down' className="icon absolute-y-center right-4 -z-10" />
                            </div>
                        </div>
                        <div className='w-full max-w-80'>
                            <h3 className='text-neutral-600 text-xl mb-2 font-medium'>Check-in (GMT +6)</h3>
                            <div className='relative'>
                                <select
                                    name='check-in-time'
                                    id='select_check_in'
                                    className="outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 font-semibold text-neutral-500 border border-neutral-400 rounded-md"
                                    onChange={(e) => setCheckInTime(e.target.value)}
                                >
                                    {timeSegments.map(item => (
                                        <option key={item.hour + item.minute} 
                                            value={`${item['hour']}:${item['minute']} ${parseInt(item['hour']) < 12 ? 'AM' : 'PM'}`}>
                                            {`${item['hour']}:${item['minute']} ${item['meridiem']}`}
                                        </option>
                                    ))}
                                </select>
                                <Icon name='chevron-down' className="icon absolute-y-center right-4 -z-10" />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-x-8 mt-14">
                        <button className="btn btn-secondary max-w-36 relative" onClick={back}>
                            <Icon name='chevron-left' className="icon absolute-y-center left-4" /> 
                            Back
                        </button>
                        <button className="btn btn-primary" onClick={handleContinue}>
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
