"use client"
import Icon from '/components/Icon'
import Rule from './Rule'
import getAllTimeSegments from './getAllTimeSegments'
import OptionIcon from './OptionIcon'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useDispatch ,useSelector} from 'react-redux'
import { Plus } from 'lucide-react'
import { updateFormData } from '@/redux/list/createListSlice';

function getHomeRules() {
    return [{
        "_id": "663a0b374ec144ec33e4f103",
        "title": "In House Smoking allow",
        "description": ""
      },
      {
        "_id": "663a0b6b4ec144ec33e4f104",
        "title": "Parties/events allowed ",
        "description": ""
      },
      {
        "_id":  "663a0b8b4ec144ec33e4f105",
        "title": "Pet allowed",
        "description": ""
      }]
  }

 
export default function page() {
    const data = getHomeRules()
    const timeSegments = getAllTimeSegments();
    const [homerule,setHomeRule]=useState({
        smoking: false,
        pet: false,
        partiesorevent: false,
    });
    const router = useRouter();
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form);
    const [homefeatures, setHomeFeatures] = useState(data);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newHomeFeatchureTitle,setHomeNewFeatureTitle]= useState('');
    const [newHomeFeatchureDes,setHomeNewFeatureDes]= useState('');
    const [checkInTime, setCheckInTime] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');
    useEffect(()=>{
       console.log(homerule);
    },[homerule,data]);

  
    const handleContinue = async (e) => {
      e.preventDefault();
      if (!homerule) {
        alert('Please select a booking type before continuing.');
        return;
      }
    try{
      const payload = { 
                 homerule,
                checkInTime,
                checkOutTime
       };
      
      // Using async/await to ensure the state update is processed
      await dispatch(updateFormData(payload)); // Wait until the action is dispatched and processed
      
      console.log('Current Redux state:', formData); 
      router.push('/add-listing/upload-images'); // Navigate to the next pag
    }catch(error){

    }
  
     
    };
    const back=(e)=>{
      e.preventDefault();
      router.push('/add-listing/amenities');
    }
    const handleAddMore = () => {
        setShowAddForm(true);
    };
  
    const handleSaveNewFeature = (e) => {
        e.preventDefault();
        if (newHomeFeatchureTitle && newHomeFeatchureDes) {
            const newFeature = {
                _id: `${Date.now()}`,  // Generate a simple unique ID
                title: newHomeFeatchureTitle,
                description: newHomeFeatchureDes
            };
            setHomeFeatures([...homefeatures, newFeature]);
            setHomeNewFeatureTitle('');
            setHomeNewFeatureDes('');
            setShowAddForm(false);  // Hide the form after adding a feature
        }
    };
    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Home Rules</h2>            
            <form className="w-full max-w-3xl ml-auto mr-auto mt-28 px-8 ">
                <div>
                    <h3 className='text-netutral-600 text-xl mb-4 font-medium'>Home Rules</h3>
                    <div className='space-y-4'>
                        { data.map(item => <Rule data={item}
                            setHomeRule={setHomeRule}
                            homerule={homerule}
                        />) }                    
                    
                    </div>
                    {!showAddForm && (
                      <button
                          className='flex gap-x-2 mt-3 text-neutral-600 text-base font-medium'
                          onClick={handleAddMore}
                      >
                          <Plus className='icon' />  Add more option
                         
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
                              value={newHomeFeatchureTitle}
                              onChange={(e) => setHomeNewFeatureTitle(e.target.value)}
                          />
                          <h3 className="text-neutral-500 font-medium text-xl mt-4 mb-4">Feature Description</h3>
                          <textarea
                              rows="2"
                              name='new_feature_description'
                              className='form-input'
                              placeholder='Enter new feature description'
                              value={newHomeFeatchureDes}
                              onChange={(e) => setHomeNewFeatureDes(e.target.value)}
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
                        <h3 className='text-netutral-600 text-xl mb-2 font-medium'>Check-in (gmt +6)</h3>
                        <div className='relative'>
                            <select
                             name='check-in-time'
                              id='select_check_in'
                               className="outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 font-semibold text-neutral-500 border border-neutral-400 rounded-md "
                               onChange={(e) => setCheckInTime(e.target.value)}
                               >
                                {
                                    timeSegments.map(item=>(
                                        <option 
                                            value={`${item['hour']}:${item['minute']} ${parseInt(item['hour'])<12 ? 'AM' : 'PM'}`}>
                                                {`${item['hour']}:${item['minute']} ${item['meridiem']}`}
                                        </option>))
                                } 
                            </select>
                            <Icon name='chevron-down'  className="icon absolute-y-center right-4 -z-10"/>
                        </div>
                    </div>

                    <div className='w-full max-w-80'>
                        <h3 className='text-netutral-600 text-xl mb-2 font-medium'>Check-out (gmt +6)</h3>
                        <div className='relative'>
                            <select 
                            name='check-out-time'
                             id='select_check_out'
                             onChange={(e) => setCheckOutTime(e.target.value)}
                              className="outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 font-semibold text-neutral-500 border border-neutral-400 rounded-md ">
                                {
                                    timeSegments.map(item=>(
                                        <option 
                                            value={`${item['hour']}:${item['minute']} ${parseInt(item['hour'])<12 ? 'AM' : 'PM'}`}>
                                                {`${item['hour']}:${item['minute']} ${item['meridiem']}`}
                                        </option>))
                                } 
                            </select>
                            <Icon name='chevron-down'  className="icon absolute-y-center right-4 -z-10"/>
                        </div>
                    </div>
                </div>

              <div className="flex gap-x-8 mt-14">
                <button className="btn btn-secondary max-w-36 relative"
                onClick={back}>
                  <Icon name='chevron-left' className="icon absolute-y-center left-4 "/> 
                  Back</button>
                <button className="btn btn-primary"
                onClick={handleContinue}>
                  Continue
                </button>
              </div>
              </form>
          </div>
        </div>        
      )
}



