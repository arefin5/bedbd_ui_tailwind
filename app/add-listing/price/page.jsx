"use client"
import Icon from '/components/Icon'
import PriceCounter from './PriceCounter'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateFormData } from '@/redux/list/createListSlice';


function getIfo() {
  return {
    "_id": "663a0b374ec144ec33e4f103",
    "currency": "$",
    "minPrice": "12",
    "taxRate": "15%",
    "serviceFee": "2"
  }
}

export default function page() {
  const data = getIfo()

  const [price, setPrice] = useState(data.minPrice);
  // const formData = useSelector((state) => state.form);
  // console.log('Current Redux state:', formData); 
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // console.log(price);
  }, [price]);
  const handleSubmitImage = async (e) => {
    e.preventDefault();

    try {
     
     

      const payload = {
        price: price,
      };
      // if(payload.image==="") return
      await dispatch(updateFormData(payload)); // Wait until the action is dispatched and processed

      // console.log('Current Redux state:', formData); 
      router.push('/add-listing/availability'); // Navigate to the next pag
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  const back = (e) => {
    e.preventDefault();
    router.push('/add-listing/upload-images');
  };
  return (
    <div className=" min-h-screen py-20">
      <div className="">
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Set Price</h2>
        <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8 ">
          <h3 className='text-xl font-medium'>How much do you want to charge per night?</h3>
          <p className='text-sm font-normal'>No worries! You can change it anytime you want.</p>


          <PriceCounter data={data} setPrice={setPrice}
            price={price}
          />


          <div className='text-sm  font-normal text-neutral-600 w-fit  ml-auto mr-auto text-left max-w-md mt-3.5'>
            Check your nearest property price to make more competitive. It will increase your changes of getting more booking
          </div>


          <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
            <button className="btn btn-secondary max-w-36 relative"
              onClick={back}>
              <Icon name='chevron-left' className="icon absolute-y-center left-4 " />
              Back</button>
            <button className="btn btn-primary" onClick={handleSubmitImage}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}



