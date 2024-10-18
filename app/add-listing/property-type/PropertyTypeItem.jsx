// 'use client'
// import Image from "next/image"
// import {  updateFormData, optionalSubmit } from '@/redux/list/createListSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { useRouter } from "next/navigation";
// export default function PropertyTypeItem({data}) {
//   const dispatch=useDispatch();
//   const router = useRouter();  // Initialize useRouter
//   const handleClick = (e) => {
//     e.preventDefault();
//     document.getElementById(data['_id']).click();
//     const activeClasses = ['shadow', 'border-secondary-400', 'shadow-secondary-400']
//     const inActiveClass = ['border-neutral-300' ]
//     const propertyTypes  = document.getElementById('property_types')
//     const propertyTypesArray = Array.from(propertyTypes.children);

//     propertyTypesArray.map(element => {
      
//       const elementItems = Array.from(element.children)
//       const hasClasses = activeClasses.every(cls => element.classList.contains(cls));
     
//       elementItems.map(item=>{
//         if(item.tagName.toLocaleLowerCase() === 'input'){
//           if(data['_id'] == item.id ){
//             if(!hasClasses){
//               activeClasses.map(cls => element.classList.add(cls));
//               inActiveClass.map(cls => element.classList.remove(cls));
//             }
//           }else if(hasClasses){
//             activeClasses.map(cls => element.classList.remove(cls));
//             inActiveClass.map(cls => element.classList.add(cls));
//           }
//         }
//       })

//     });
//     // console.log(data.typeName);
//     // const payload = {
//     //   typeOfproperty:data.typeName|| undefined
//     // }
//     // dispatch(updateFormData(payload));
//     console.log(data.typeName);
//     const payload = {
//       typeOfproperty: data.typeName || undefined,
//     };

//     // Dispatch the action and navigate on success
//     // dispatch(updateFormData(payload)).then(() => {
//     //   router.push('/list/next-2');  // Redirect to the next step
//     // });

//     dispatch(updateFormData(payload)).then(() => {
//   router.push('/list/next-2');  // Redirect to the next step
// });


//   };




//   return (
//     <div className={`w-60 h-40 rounded-lg border border-neutral-300 cursor-pointer p-6 select-none `} onClick={handleClick}>
//       <div className="object-contain relative h-16 w-auto ">
//           <Image className="icon" src={`/icons/${data['icon']}`} alt='property type icon' fill/>
//       </div>
//       <input className="hidden"  type="radio" id={data['_id']} name="property_type" value={data['_id']}></input>
//       <h4 className='text-2xl text-neutral-500 text-center font-normal mt-4'>{data['typeName']}</h4>
//     </div>
//   )
// }
'use client';
import Image from "next/image";
import { updateFormData } from '@/redux/list/createListSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function PropertyTypeItem({ data, setSelectedType }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    
    // Set the selected type in the parent component
    setSelectedType(data.typeName|| null);
    
    const activeClasses = ['shadow', 'border-secondary-400', 'shadow-secondary-400'];
    const inActiveClass = ['border-neutral-300'];
    const propertyTypes = document.getElementById('property_types');
    const propertyTypesArray = Array.from(propertyTypes.children);

    propertyTypesArray.forEach(element => {
      const elementItems = Array.from(element.children);
      const hasClasses = activeClasses.every(cls => element.classList.contains(cls));

      elementItems.forEach(item => {
        if (item.tagName.toLowerCase() === 'input') {
          if (data['_id'] === item.id) {
            if (!hasClasses) {
              activeClasses.forEach(cls => element.classList.add(cls));
              inActiveClass.forEach(cls => element.classList.remove(cls));
            }
          } else if (hasClasses) {
            activeClasses.forEach(cls => element.classList.remove(cls));
            inActiveClass.forEach(cls => element.classList.add(cls));
          }
        }
      });
    });
  };

  return (
    <div className={`w-60 h-40 rounded-lg border border-neutral-300 cursor-pointer p-6 select-none`}
     onClick={handleClick}>
      <div className="object-contain relative h-16 w-auto">
        <Image className="icon" src={`/icons/${data['icon']}`} alt='property type icon' fill />
      </div>
      <input className="hidden" type="radio" id={data['_id']} name="property_type" value={data['_id']} />
      <h4 className='text-2xl text-neutral-500 text-center font-normal mt-4'>{data['typeName']}</h4>
    </div>
  );
}
