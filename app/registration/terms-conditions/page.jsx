
"use client";
import Icon from '/components/Icon';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import AgreeBox from './AgreeBox';


export default function Page() {
  const termsAndConditions = [
    {
      id: 0,
      description: 'Lorem ipsum dolor sit amet consectetur. Sit vitae semper nam amet integer. Vitae enim sit facilisis nunc. Nec hendrerit risus risus venenatis vitae eu et malesuada. Id egestas tortor at mollis fermentum netus.',
    },
    {
      id: 1,
      description: 'Fermentum ornare vulputate condimentum massa quis. Sit mi nisl hac orci dolor proin scelerisque lacus. Augue pellentesque sed ornare sit.',
    },
    {
      id: 2,
      description: 'Vitae enim sit facilisis nunc. Nec hendrerit risus risus venenatis vitae eu et malesuada. Id egestas tortor at mollis fermentum netus.',
    }
  ];

  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const Continue = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("You must agree to the terms and conditions before continuing.");
      return;
    }
    router.push("/registration/upload-photo");
  };
  const backToPrevious=(e)=>{
    e.preventDefault();
    router.push("/registration/start")
  }
  return (
    <div className='modal-background'>
      <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl absolute-center rounded-2xl'>
        <h3 className='registration-form-title mb-12'>Terms & Conditions</h3>

        <ul className='w-full max-w-xl numbered-items relative-x-center grid gap-y-3'>
          {termsAndConditions.map((item) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
        <form>
          {/* <Checkbox
            id="custom-checkbox"
            label="I agree with the terms and conditions"
            checked={isChecked}
            onChange={handleCheckboxChange}
          /> */}
          <AgreeBox 
             id="custom-checkbox"
            label="I agree with the terms and conditions"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <button
            className='btn btn-primary mt-8'
            onClick={Continue}
            disabled={!isChecked}
          >
            Continue
          </button>
        </form>

        <Icon name="arrow-left"
  onClick={backToPrevious}
   className="text-neutral-600 cursor-pointer absolute top-8 left-8" />      </div>
    </div>
  );
}