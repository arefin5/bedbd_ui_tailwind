"use client"
import { Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";

export default function PriceCounter({ data, price, setPrice, GroundPrice, setGroundPrice, setServiceFee, tax, setTax }) {
  const [priceInfo, setPriceInfo] = useState({
    price: parseFloat(data.minPrice),
    currency: data.currency,
    serviceFee: parseFloat(data.serviceFee),
  });

  // Function to calculate percentage (tax)
  function calculatePercentage(total, percentage) {
    return total * percentage; // Simplified calculation
  }

  // Update the state when the price changes
  useEffect(() => {
    const taxAmount = calculatePercentage(priceInfo.price, data.taxRate);
    const totalEarned = priceInfo.price + priceInfo.serviceFee + taxAmount;

    // Update parent component states with valid numbers
    setGroundPrice(priceInfo.price); 
    setServiceFee(priceInfo.serviceFee);
    setTax(taxAmount);
    setPrice(totalEarned); // Ensure price is a number
  }, [priceInfo.price, data.taxRate, priceInfo.serviceFee]);

  // Increment function
  function increment(e) {
    e.preventDefault();
    setPriceInfo((prev) => ({
      ...prev,
      price: prev.price + 1,
    }));
  }

  // Decrement function
  function decrement(e) {
    e.preventDefault();
    if (priceInfo.price > data.minPrice) {
      setPriceInfo((prev) => ({
        ...prev,
        price: prev.price - 1,
      }));
    }
  }

  return (
    <>
      <div className='w-full py-14 bg-neutral-100 rounded-lg mt-8 mb-6'>
        <div className="w-max mx-auto flex justify-center items-center gap-x-6 ">
          <button className="bg-white p-2 rounded-full" onClick={decrement}>
            <Minus className='h-8 w-8'/>
          </button>
          <input
            className="px-8 py-2 w-72 rounded-lg text-8xl text-secondary-400 font-semibold text-center"
            type="text"
            readOnly
            value={`${priceInfo.currency}${priceInfo.price.toFixed(2)}`}
          />
          <button className="bg-white p-2 rounded-full" onClick={increment}>
            <Plus className='h-8 w-8'/>
          </button>
        </div>
      </div>

      <div className="text-base text-neutral-500 font-medium ">
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between">
          <h3>Ground Price</h3>
          <h3 className="text-lg font-normal">{`${priceInfo.currency}${GroundPrice.toFixed(2)}`}</h3> 
        </div>
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between">
          <h3>Service Fee</h3>
          <h3 className="text-lg font-normal">{`${priceInfo.currency}${priceInfo.serviceFee.toFixed(2)}`}</h3> 
        </div>
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between">
          <h3>Taxes ({data.taxRate * 100}%)</h3>
          <h3 className="text-lg font-normal">{`${priceInfo.currency}${tax.toFixed(2)}`}</h3> 
        </div>
        <div className="py-2.5 px-20 flex justify-between text-secondary-400">
          <h3>You will earn</h3>
          <h3 className="text-lg font-normal">
            {`${priceInfo.currency}${(price ).toFixed(2)}`} {/* Earning calculation */}
          </h3>
        </div>
      </div>
    </>
  );
}
