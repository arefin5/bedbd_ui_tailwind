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
import Feature from "./Feature"

function getHomeRules() {
    return [
        { "_id": "663a0b374ec144ec33e4f103", "title": "In House Smoking allowed" },
        { "_id": "663a0b6b4ec144ec33e4f104", "title": "Parties/events allowed" },
        { "_id": "663a0b8b4ec144ec33e4f105", "title": "Pet allowed" }
    ];
}

export default function Page() {
    const timeSegments = getAllTimeSegments();
    const router = useRouter();
    const dispatch = useDispatch();
    const [checkInTime, setCheckInTime] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');

    const initialData = getHomeRules();
    const [homeTitle, setHomeTitle] = useState(initialData);

    const [checkedItems, setCheckedItems] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [isAdding, setIsAdding] = useState(false); // New state for toggling input visibility

    // Load data from localStorage on component mount
    useEffect(() => {
        const storedHomeTitle = localStorage.getItem('homeTitle');
        const storedCheckedItems = localStorage.getItem('checkedItems');
        const storedCheckInTime = localStorage.getItem('checkInTime');
        const storedCheckOutTime = localStorage.getItem('checkOutTime');
        
        if (storedHomeTitle) {
            setHomeTitle(JSON.parse(storedHomeTitle));
        }
        if (storedCheckedItems) {
            setCheckedItems(JSON.parse(storedCheckedItems));
        }
        if (storedCheckInTime) {
            setCheckInTime(storedCheckInTime);
        }
        if (storedCheckOutTime) {
            setCheckOutTime(storedCheckOutTime);
        }
    }, []);

    // Update localStorage whenever homeTitle, checkedItems, checkInTime, or checkOutTime change
    useEffect(() => {
        localStorage.setItem('homeTitle', JSON.stringify(homeTitle));
    }, [homeTitle]);

    useEffect(() => {
        localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
    }, [checkedItems]);

    useEffect(() => {
        if (checkInTime) {
            localStorage.setItem('checkInTime', checkInTime);
        }
    }, [checkInTime]);

    useEffect(() => {
        if (checkOutTime) {
            localStorage.setItem('checkOutTime', checkOutTime);
        }
    }, [checkOutTime]);

    function toggleCheck(id) {
        setCheckedItems((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            }
            return [...prev, id];
        });
    }

    function startAddingOption() {
        setIsAdding(true);
    }

    function saveNewOption() {
        if (!newTitle.trim()) {
            alert('Please fill in the title.');
            return;
        }
        const newOption = {
            _id: Math.random().toString(36).substr(2, 9), // Unique ID
            title: newTitle
        };
        setHomeTitle((prev) => [...prev, newOption]);
        setNewTitle('');
        setIsAdding(false); // Hide inputs after saving
    }

    const handleContinue = async (e) => {
        e.preventDefault();
        try {
            if (!checkInTime || !checkOutTime) {
                alert('Please select both check-in and check-out times before continuing.');
                return; // Stop further execution
            }
            const selectedItems = homeTitle.filter(item => checkedItems.includes(item._id));
            const payload = {
                homeRule: selectedItems, // Store full details of selected items
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

    return (
        <div className="min-h-screen py-20">
            <div>
                <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Home Rules</h2>
                <form className="w-full max-w-3xl ml-auto mr-auto mt-28 px-8 ">
                    <div className="space-y-4" id="property_booking_types">
                        {homeTitle.map((item) => (
                            <Feature
                                key={item._id}
                                data={item}
                                isChecked={checkedItems.includes(item._id)}
                                toggleCheck={toggleCheck}
                            />
                        ))}
                    </div>
                    {!isAdding && (
                        <button
                            type="button"
                            onClick={startAddingOption}
                            className="flex gap-x-2 mt-3 text-neutral-600 text-base font-medium"
                        >
                            <Plus className="icon" />
                            Add more option
                        </button>
                    )}
                    {isAdding && (
                        <div className="mt-6">
                            <input
                                type="text"
                                value={newTitle}
                                placeholder="Home Rules.."
                                onChange={(e) => setNewTitle(e.target.value)}
                                className="form-input"
                            />
                            <button
                                type="button"
                                onClick={saveNewOption}
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                        </div>
                    )}

                    <div className='mt-10 flex gap-x-10 justify-between'>
                        <div className='w-full max-w-80'>
                            <h3 className='text-neutral-600 text-xl mb-2 font-medium'>Check-out (GMT +6)</h3>
                            <div className='relative'>
                                <select 
                                    name='check-out-time'
                                    id='select_check_out'
                                    value={checkOutTime}
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
                                    value={checkInTime}
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
