"use client";
import Icon from '/components/Icon';
import InputRadioButton from './InputRadioButton';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateFormData } from '@/redux/list/createListSlice';
import { submitList } from "@/redux/list/createListSlice";

export default function Page() {
  const [formValues, setFormValues] = useState({
    approvingMethod: 'instant',
    genderPreference: 'anyone',
  });
  
  const router = useRouter();
  const dispatch = useDispatch();
  const {error,formData} = useSelector((state) => state.form); 

  const handleInputChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log('Approving Method changed:', formValues.approvingMethod);
    console.log('Gender Preference changed:', formValues.genderPreference);
  }, [formValues.approvingMethod, formValues.genderPreference]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { approvingMethod, genderPreference } = formValues;
      console.log(genderPreference)
      const payload = {
        ...formData,
        aprovingmethod: approvingMethod,
        gender: genderPreference,
      };
      const resultAction = await  dispatch(submitList(payload));
      if (submitList.fulfilled.match(resultAction)) {
        console.log(payload)
        router.push('/add-listing/congratulation');
      } else {
        console.error("Error during user edit:", resultAction.payload);
      }

     
    } catch (error) {
      console.error(error);
    }
  };

  const back = (e) => {
    e.preventDefault();
    router.push('/add-listing/availability');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="absolute-center w-screen">
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-2">Approving</h2>
        <h3 className="text-sm font-normal text-neutral-500 text-center">
          From your profile dashboard, you will also be able to change all availability.
        </h3>

        <form className="w-full max-w-3xl ml-auto mr-auto mt-8 px-8" onSubmit={handleSubmit}>
          <div className="text-neutral-600 text-xl font-medium">Approving method</div>
          <div className="mt-6 ml-4" id="approving-method-section">
            <div className="flex gap-x-4">
              <InputRadioButton
                inputId="instant-approve"
                inputName="approvingMethod"
                parentId="approving-method-section"
                isChecked={formValues.approvingMethod === 'instant'}
                onChange={() => handleInputChange('approvingMethod', 'instant')}
              />
              <label htmlFor="instant-approve">Instant approve</label>
            </div>
            <div className="flex gap-x-4 mt-4">
              <InputRadioButton
                inputId="manual-approve"
                inputName="approvingMethod"
                parentId="approving-method-section"
                isChecked={formValues.approvingMethod === 'manual'}
                onChange={() => handleInputChange('approvingMethod', 'manual')}
              />
              <label htmlFor="manual-approve">Approve manually</label>
            </div>
          </div>

          <div className="text-neutral-600 text-xl font-medium mt-10">Gender Preference</div>
          <div className="mt-4 ml-4" id="gender-pref-section">
            <div className="flex gap-x-4">
              <InputRadioButton
                inputId="pref-male-only"
                inputName="genderPreference"
                parentId="gender-pref-section"
                isChecked={formValues.genderPreference === 'male'}
                onChange={() => handleInputChange('genderPreference', 'male')}
              />
              <label htmlFor="pref-male-only">Male</label>
            </div>
            <div className="flex gap-x-4 mt-4">
              <InputRadioButton
                inputId="pref-female-only"
                inputName="genderPreference"
                parentId="gender-pref-section"
                isChecked={formValues.genderPreference === 'female'}
                onChange={() => handleInputChange('genderPreference', 'female')}
              />
              <label htmlFor="pref-female-only">Female only</label>
            </div>
            <div className="flex gap-x-4 mt-4">
              <InputRadioButton
                inputId="pref-anyone"
                inputName="genderPreference"
                parentId="gender-pref-section"
                isChecked={formValues.genderPreference === 'anyone'}
                onChange={() => handleInputChange('genderPreference', 'anyone')}
              />
              <label htmlFor="pref-anyone">Anyone</label>
            </div>
          </div>

          <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
            <button className="btn btn-secondary max-w-36 relative" onClick={back}>
              <Icon name="chevron-left" className="icon absolute-y-center left-4" />
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
