
"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/redux/services/axiosInstance';

export default function Page() {
  const [formData, setFormData] = useState({
    packageName: '',
    startLocation: '',
    endLocation: '',
    totalDays: '',
    totalNights: '',
  });

const [message,setMsg]=useState("");
const [error,setError]=useState("");
const router=useRouter();
const [id,setId]=useState("")
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { packageName, startLocation, endLocation, totalDays, totalNights } = formData;

    if (!packageName || !startLocation || !endLocation || !totalDays || !totalNights) {
      setError('All fields are required!');
      setMsg("")
      return;
    }
     setError('');
    try {
        console.log(formData)
        const response= await axiosInstance.post('/create-package', formData);
        console.log(response);
         if(response.status===201){
          if(response.data._id){
             setId(response.data._id);
             setMsg('Package created successfully!');
             router.push(`/add-experience/package-setup/_id=${response.data._id}`);
             // router.push("/add-experience/package-setup/_id=")
             return;
          }
          setError('server has response issue ');
         }
       setError('server has response issue ');
    } catch (err) {
      console.error('Error creating package:', err);
    }
  };

  return (
    <div className="w-full h-full min-h-screen">
      <div className="w-full max-w-[648px] px-6 pt-14 pb-20 absolute-x-center">
        <h3 className="text-primary-400 text-[34px] text-center font-medium mb-12">
          Basic Info
        </h3>
        {error && <div className="text-center error-message text-red-500">
          {error}   
        </div>}
        
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 relative">
            <label
              className="text-neutral-600 text-[22px] font-medium w-full"
              htmlFor="package-name"
            >
              Package Name
            </label>
            <input
              className="placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600"
              id="package-name"
              name="packageName"
              placeholder="3 Days in Cox’s Bazar"
              value={formData.packageName}
              onChange={handleInputChange}
            />
            <span className="text-neutral-400 text-sm font-normal absolute top-[110px] pl-2.5">
              Choose a catchy title in 40 characters
            </span>
          </div>
          <div className="mt-[74px]">
            <label className="text-neutral-600 text-base font-medium w-full mt-4">
              Destination & Duration
            </label>
            <div className="grid gap-6 mt-4 text-neutral-500 text-base">
              <div className="relative z-0">
                <select
                  className="w-full z-10 py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600"
                  id="start-location"
                  name="startLocation"
                  value={formData.startLocation}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Start Location
                  </option>
                  <option value="dk">Dhaka</option>
                  <option value="ctg">Chittagong</option>
                  <option value="rj">Rajshahi</option>
                  <option value="cm">Cumilla</option>
                  <option value="kh">Khulna</option>
                </select>
                <ChevronDown className="icon absolute-y-center right-6 z-0" size={24} />
              </div>

              <div className="relative z-0">
                <select
                  className="w-full z-10 py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600"
                  id="end-location"
                  name="endLocation"
                  value={formData.endLocation}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Destination
                  </option>
                  <option value="dk">Dhaka</option>
                  <option value="ctg">Chittagong</option>
                  <option value="rj">Rajshahi</option>
                  <option value="cm">Cumilla</option>
                  <option value="kh">Khulna</option>
                </select>
                <ChevronDown className="icon absolute-y-center right-6 z-0" size={24} />
              </div>

              <div className="flex gap-10">
                <div className="relative z-0 w-full">
                  <select
                    className="w-full py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600"
                    id="total-days"
                    name="totalDays"
                    value={formData.totalDays}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Total Days
                    </option>
                    {[1, 2, 3, 4, 5].map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="icon absolute-y-center right-6 z-0" size={24} />
                </div>

                <div className="relative z-0 w-full">
                  <select
                    className="w-full py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600"
                    id="total-nights"
                    name="totalNights"
                    value={formData.totalNights}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Total Nights
                    </option>
                    {[1, 2, 3, 4, 5].map((night) => (
                      <option key={night} value={night}>
                        {night}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="icon absolute-y-center right-6 z-0" size={24} />
                </div>
              </div>
            </div>
            <div className="flex gap-8 mt-12">
              <button
                type="button"
                className="btn btn-secondary flex gap-4 max-w-[140px] items-center justify-center"
              >
                <ChevronLeft size={24} />
                Back
              </button>

              <button type="submit" className="btn btn-primary">
                Continue
              </button>
            </div>
            {message && <div className='text-center success-message text-green'>
          {message}  
          </div>}
          </div>
        </form>
      </div>
    </div>
  );
}
