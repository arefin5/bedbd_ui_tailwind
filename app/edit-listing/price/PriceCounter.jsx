
// // "use client";
// // import { useEffect, useState } from "react";

// // export default function PriceCounter({
// //   data,
// //   price,
// //   setPrice,
// //   GroundPrice,
// //   setGroundPrice,
// //   setServiceFee,
// //   tax,
// //   setTax,
// // }) {
// //   const [priceInfo, setPriceInfo] = useState({
// //     price: parseFloat(data?.minPrice || 0),
// //     currency: data?.currency || "$",
// //     serviceFee: parseFloat(data?.serviceFee || 0),
// //   });

// //   const calculatePercentage = (total, percentage) => total * (percentage || 0);

// //   const handleInputChange = (e) => {
// //     const inputPrice = parseFloat(e.target.value);

// //     setPriceInfo((prev) => ({
// //       ...prev,
// //       price: isNaN(inputPrice) || inputPrice < 0
// //         ? data?.minPrice
// //         : inputPrice,
// //     }));
// //   };

// //   const handlePriceFormatting = (num) => (isNaN(num) ? "0.00" : num.toFixed(2));

// //   useEffect(() => {
// //     const calculatedTaxAmount = parseFloat(
// //       calculatePercentage(priceInfo.price, data?.taxRate).toFixed(2)
// //     );
// //     const calculatedServiceAmount = parseFloat(
// //       calculatePercentage(priceInfo.price, priceInfo.serviceFee).toFixed(2)
// //     );
// //     const totalEarned = parseFloat(
// //       (priceInfo.price + calculatedServiceAmount + calculatedTaxAmount).toFixed(
// //         2
// //       )
// //     );

// //     // Update state values
// //     setGroundPrice(parseFloat(priceInfo.price.toFixed(2)));
// //     setServiceFee(calculatedServiceAmount);
// //     setTax(calculatedTaxAmount);
// //     setPrice(totalEarned);
// //   }, [
// //     priceInfo.price, 
// //     data?.taxRate, 
// //     priceInfo.serviceFee, 
// //     setGroundPrice, 
// //     setServiceFee, 
// //     setTax, 
// //     setPrice
// //   ]);

// //   return (
// //     <>
// //       <div className="w-full py-14 bg-neutral-100 rounded-lg mt-8 mb-6">
// //         <div className="w-max mx-auto flex flex-col items-center gap-y-4">
// //           <label htmlFor="priceInput" className="text-xl font-medium">
// //             Enter Price
// //           </label>
// //           <input
// //             id="priceInput"
// //             className="px-8 py-2 w-72 rounded-lg text-2xl text-secondary-400 font-semibold text-center border border-neutral-300"
// //             type="number"
// //             value={GroundPrice}
// //             onChange={handleInputChange}
           
// //           />
// //         </div>
// //       </div>

// //       <div className="text-base text-neutral-500 font-medium">
// //         <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between">
// //           <h3>Base Price</h3>
// //           <h3 className="text-lg font-normal">{`${priceInfo.currency}${handlePriceFormatting(
// //             GroundPrice
// //           )}`}</h3>
// //         </div>
        
        
// //         <div className="relative py-2.5 px-20 flex justify-between">
// //           <h3>Total Earned</h3>
// //           <h3 className="text-lg font-bold">{`${priceInfo.currency}${handlePriceFormatting(
// //             GroundPrice
// //           )}`}</h3>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// 'use client'
// import { Minus, Plus } from "lucide-react"
// import { useState, useEffect } from "react"
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
// import { updateFormData } from "@/redux/list/createListSlice";

// export default function PriceCounter({ data, setHandleContinueCallback }) {
//   const [priceInfo, setPriceInfo] = useState({
//     price: parseFloat(data['minPrice']),
//     currency: data['currency'],
//     serviceFee: parseFloat(data['serviceFee']),
//   });

//   const dispatch = useDispatch();
//   const router = useRouter();

//   // Load price from localStorage on component mount
//   useEffect(() => {
//     const storedPrice = localStorage.getItem('price');
//     if (storedPrice && !isNaN(parseFloat(storedPrice))) {
//       setPriceInfo(prev => ({ ...prev, price: parseFloat(storedPrice) }));
//     }
//   }, []);

//   // Update localStorage whenever price changes
//   useEffect(() => {
//     localStorage.setItem('price', priceInfo.price);
//   }, [priceInfo.price]);

//   // useEffect(() => {
//   //   // Set the logic for the Continue button
//   //   setHandleContinueCallback(() => {
//   //     const payload = {
//   //       GroundPrice: priceInfo.price, // Adjust the key based on actual logic
//   //     };
//   //     dispatch(updateFormData(payload)); // Dispatch Redux action
//   //     console.log("Form Data Submitted:", payload);
//   //     router.push("/add-listing/availability"); // Navigate to another page
//   //   });
//   // }, [priceInfo.price, dispatch, router, setHandleContinueCallback]);

//   function increment(e) {
//     e.preventDefault();
//     setPriceInfo(value => ({ ...value, price: priceInfo.price + 1 }));
//   }

//   function decrement(e) {
//     e.preventDefault();
//     if (priceInfo.price > parseFloat(data['minPrice'])) {
//       setPriceInfo(value => ({ ...value, price: priceInfo.price - 1 }));
//     }
//   }

//   function calculatePercentage(total, percentage) {
//     if (typeof percentage !== 'number' || typeof total !== 'number') {
//       throw new Error('Both percentage and total must be numbers.');
//     }
//     if (percentage < 0) {
//       throw new Error('Percentage cannot be negative.');
//     }
//     if (total === 0) {
//       return 0;
//     }
//     return (percentage / 100) * total;
//   }
//   return (
//     <>
//     <div className='w-full py-14 bg-neutral-100 rounded-lg mt-8 mb-6'>
//         <div className="w-max mx-auto flex justify-center items-center gap-x-6 ">
//             <button className="bg-white p-2 rounded-full  " onClick={decrement}>
//                 <Minus className='h-8 w-8'/>
//             </button>

//             <input 
//                 className="px-8 py-2 w-72 rounded-lg text-8xl text-secondary-400 font-semibold text-center"
//                 type="text" 
//                 readOnly
//                 // defaultValue={priceInfo['currency']+''+priceInfo['price']}
//                 value={priceInfo['currency']+''+(priceInfo['price']).toString()}/>

//             <button className="bg-white p-2 rounded-full" onClick={increment}>
//                 <Plus className='h-8 w-8'/>
//             </button>
//         </div>
//     </div>

//     <div className="text-base text-neutral-500 font-medium ">
//         <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between ">
//             <h3>Base Price</h3>
//             <h3 className="text-lg font-normal">{priceInfo['currency']+''+priceInfo['price']}</h3>
//         </div>
//        {/* <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between ">
//             <h3>Service Fee</h3>
//             <h3 className="text-lg font-normal">{priceInfo['currency']+''+priceInfo['serviceFee']}</h3>
//         </div>
//         <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between ">
//             <h3>Taxes ({data['taxRate']})</h3>
//             <h3 className="text-lg font-normal">{priceInfo['currency']+''+calculatePercentage( priceInfo['price'], parseFloat(data['taxRate'].replace(/[^\d.-]/g, ''))).toFixed(2)}</h3>
//         </div>*/}
//         <div className=" py-2.5 px-20 flex justify-between  text-secondary-400">
//             <h3>You will earn </h3>
//             <h3 className="text-lg font-normal">
//               {priceInfo['currency']+''+priceInfo['price']}
//             </h3>
//            {/* <h3 className="text-lg font-normal">{
//                 priceInfo['currency']+''  +(
//                     priceInfo['price'] + 
//                     priceInfo['serviceFee'] +
//                     parseFloat(calculatePercentage( 
//                                         priceInfo['price'], 
//                                         parseFloat(data['taxRate'].replace(/[^\d.-]/g, ''))
//                                         ).toFixed(2))
//                     ).toFixed(2)}</h3>*/}
//         </div>
//     </div>
//     </>
    
        
    
//   )
// }


'use client'
import { Minus, Plus } from "lucide-react"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { updateFormData } from "@/redux/list/createListSlice";

export default function PriceCounter({ data, setHandleContinueCallback }) {
  const [priceInfo, setPriceInfo] = useState({
    price: parseFloat(data['minPrice']),
    currency: data['currency'],
    serviceFee: parseFloat(data['serviceFee']),
  });

  const dispatch = useDispatch();
  const router = useRouter();

  // Load price from localStorage on component mount
  useEffect(() => {
    const datas=localStorage.getItem('data')
    ;
    const storedPrice = datas.GroundPrice;

    if (storedPrice && !isNaN(parseFloat(storedPrice))) {
      setPriceInfo(prev => ({ ...prev, price: parseFloat(storedPrice) }));
    }
  }, []);

  // Update localStorage whenever price changes
  // useEffect(() => {
  //   const datas=localStorage.getItem(data);
  //   datas.GroundPrice=priceInfo.price
  //   localStorage.setItem('data', datas);
  // }, [priceInfo.price]);
useEffect(() => {
    const storedData = localStorage.getItem('data');
    let parsedData = storedData ? JSON.parse(storedData) : {};
    parsedData.GroundPrice = priceInfo.price;
    localStorage.setItem('data', JSON.stringify(parsedData));
}, [priceInfo.price]);
  // useEffect(() => {
  //   // Set the logic for the Continue button
  //   setHandleContinueCallback(() => {
  //     const payload = {
  //       GroundPrice: priceInfo.price, // Adjust the key based on actual logic
  //     };
  //     dispatch(updateFormData(payload)); // Dispatch Redux action
  //     console.log("Form Data Submitted:", payload);
  //     router.push("/add-listing/availability"); // Navigate to another page
  //   });
  // }, [priceInfo.price, dispatch, router, setHandleContinueCallback]);

  function increment(e) {
    e.preventDefault();
    setPriceInfo(value => ({ ...value, price: priceInfo.price + 1 }));
  }

  function decrement(e) {
    e.preventDefault();
    if (priceInfo.price > parseFloat(data['minPrice'])) {
      setPriceInfo(value => ({ ...value, price: priceInfo.price - 1 }));
    }
  }

  function calculatePercentage(total, percentage) {
    if (typeof percentage !== 'number' || typeof total !== 'number') {
      throw new Error('Both percentage and total must be numbers.');
    }
    if (percentage < 0) {
      throw new Error('Percentage cannot be negative.');
    }
    if (total === 0) {
      return 0;
    }
    return (percentage / 100) * total;
  }
  return (
    <>
    <div className='w-full py-14 bg-neutral-100 rounded-lg mt-8 mb-6'>
        <div className="w-max mx-auto flex justify-center items-center gap-x-6 ">
            <button className="bg-white p-2 rounded-full  " onClick={decrement}>
                <Minus className='h-8 w-8'/>
            </button>

            <input 
                className="px-8 py-2 w-72 rounded-lg text-8xl text-secondary-400 font-semibold text-center"
                type="text" 
                readOnly
                // defaultValue={priceInfo['currency']+''+priceInfo['price']}
                value={priceInfo['currency']+''+(priceInfo['price']).toString()}/>

            <button className="bg-white p-2 rounded-full" onClick={increment}>
                <Plus className='h-8 w-8'/>
            </button>
        </div>
    </div>

    <div className="text-base text-neutral-500 font-medium ">
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between ">
            <h3>Base Price</h3>
            <h3 className="text-lg font-normal">{priceInfo['currency']+''+priceInfo['price']}</h3>
        </div>
       {/* <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between ">
            <h3>Service Fee</h3>
            <h3 className="text-lg font-normal">{priceInfo['currency']+''+priceInfo['serviceFee']}</h3>
        </div>
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between ">
            <h3>Taxes ({data['taxRate']})</h3>
            <h3 className="text-lg font-normal">{priceInfo['currency']+''+calculatePercentage( priceInfo['price'], parseFloat(data['taxRate'].replace(/[^\d.-]/g, ''))).toFixed(2)}</h3>
        </div>*/}
        <div className=" py-2.5 px-20 flex justify-between  text-secondary-400">
            <h3>You will earn </h3>
            <h3 className="text-lg font-normal">
              {priceInfo['currency']+''+priceInfo['price']}
            </h3>
           {/* <h3 className="text-lg font-normal">{
                priceInfo['currency']+''  +(
                    priceInfo['price'] + 
                    priceInfo['serviceFee'] +
                    parseFloat(calculatePercentage( 
                                        priceInfo['price'], 
                                        parseFloat(data['taxRate'].replace(/[^\d.-]/g, ''))
                                        ).toFixed(2))
                    ).toFixed(2)}</h3>*/}
        </div>
    </div>
    </>
    
        
    
  )
}