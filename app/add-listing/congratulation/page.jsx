"use client"
import Icon from "/components/Icon"
import CopyButton from './CopyButton'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { submitList } from "@/redux/list/createListSlice";
import { useRouter } from 'next/navigation';


export default function Page() {
    const dispatch = useDispatch();
    const router=useRouter();
    // Access Redux state
    const { isLoading, error, lists } = useSelector((state) => state.form); // Adjust the state path if needed
  
    // Trigger submitList when the page is rendered
    useEffect(() => {
      dispatch(submitList());
    }, [dispatch]);
  // host/
    // Conditional rendering based on loading, error, and success
    if (isLoading) {
      return (
        <div className="min-h-screen py-20">
          <div className="absolute-center w-screen">
            <h2 className="text-secondary-400 text-4xl text-center">Loading...</h2>
          </div>
        </div>
      );
    }
  // 
    if (error) {
      return (
        <div className="min-h-screen py-20">
          <div className="absolute-center w-screen">
            <h2 className="text-red-500 text-4xl text-center">Error: {error}</h2>
          </div>
        </div>
      );
    }
    const back = (e) => {
      e.preventDefault();
      router.push('/host');
  };
    // Show success content when the list is successfully submitted
    return (
      <div className="min-h-screen py-20">
        <div className="absolute-center w-screen">
          <h2 className="text-secondary-400 text-5xl text-center font-semibold mb-2">Congratulations</h2>
          <h3 className='text-2xl font-normal text-neutral-500 text-center max-w-md ml-auto mr-auto'>
            Your property has been listed successfully.
          </h3>
  
          <form className="w-full max-w-3xl ml-auto mr-auto mt-8 px-8 select-none">
            <h3>You can share it now.</h3>
            <div className="relative">
              <input
                className='form-input' 
                type="text"
                id='property-url-input'
                value={`https://www.bedbd.com/listing/${lists?._id}`}
               
                readOnly
              />
              <CopyButton inputId='property-url-input' />
            </div>
  
            <div className="flex gap-x-8 mt-14 max-w-xl ml-auto mr-auto">
              <button className="btn btn-secondary relative"
              onClick={back}>
                <Icon name='home' className="icon absolute-y-center left-8" />
                Back to Home
              </button>
              <button className="btn btn-primary">
                Show Property
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }