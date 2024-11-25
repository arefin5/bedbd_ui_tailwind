
"use client"
import Icon from "/components/Icon";
import Image from "next/image";
import PropertyTypeItem from "./PropertyTypeItem";
import { updateFormData } from '@/redux/list/createListSlice';
import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
// 
import { useSelector } from 'react-redux';
function getListingTypes() {
  return [
    {
      "_id": "6631fe21250643f1c5632f7b",
      "typeName": "Shard Room",
      "icon": "icon_shared_room.svg",
      "iconType": "publicFolder"
    },
    {
      "_id": "6631fe60250643f1c5632f7d",
      "typeName": "Apartment",
      "icon": "icon_apartment.svg",
      "iconType": "publicFolder"
    },{
      "_id": "6631fe3c250643f1c5632f7c",
      "typeName": "House",
      "icon": "icon_house.svg",
      "iconType": "publicFolder"
    },
    {
      "_id": "6631fcb0250643f1c5632f77",
      "typeName": "Farmhouse",
      "icon": "icon_farmhouse.svg",
      "iconType": "publicFolder"
    },
    {
      "_id": "6631fd89250643f1c5632f79",
      "typeName": "Villa",
      "icon": "icon_villa.svg",
      "iconType": "publicFolder"
    },
    {
      "_id": "6631fe02250643f1c5632f7a",
      "typeName": "Condons",
      "icon": "icon_condos.svg",
      "iconType": "publicFolder"
    },
   
    
   
  ];
}


export default function Page() {

  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedType, setSelectedType] = useState(null);  // Track the selected property type
  const { user, isLoading, error, token } = useSelector((state) => state.auth);


  useEffect(() => {
    if(!user) return;
    if(!token) return;
      if(!user && !token && !user.isEmailVerified && !user.isPhoneVerified){
        alert("please verified your email and Phone ");

        return router.push("/host/profile")
      }
      // if(! user?.photoIdVerify && !user.photoIdVerify){
      //   alert("please Verify your Identity")
      //   router.push("/registration/start")
      // }
  }, [selectedType,user,token]);

  const handleContinue =async (e) => {
    e.preventDefault();
    if (selectedType===null) {
      alert('Please select a property type before continuing.');
      return;
    }
        const payload = {
        typeOfproperty: selectedType,
       };
   await  dispatch(updateFormData(payload)); 
       router.push('/add-listing/property-state');
  };

  const data = getListingTypes();
  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-14">Basic Information</h2>
        <h3 className="text-neutral-500 text-2xl text-center font-medium mb-16 max-w-4xl ml-auto mr-auto">List your property on bedbd.com and welcoming guests in a matter of moments!</h3>

        <div className="w-full max-w-4xl ml-auto mr-auto">
          <h4 className="font-medium text-xl text-neutral-600 mb-4">{`To begin, choose the type of property you'd like to list on bedbd.com.`}</h4>
          <form className="max-w-fit relative-x-center">
            <div className="grid sm:grid-cols-3 gap-8 max-w-fit" id='property_types'>
              {
                data.map(item => (
                  <PropertyTypeItem key={item._id} data={item} setSelectedType={setSelectedType} />
                ))
              }
            </div>
            <button className="btn btn-primary max-w-96 mt-12 relative-x-center" onClick={handleContinue}>Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}
