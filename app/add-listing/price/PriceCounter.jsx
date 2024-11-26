
"use client";
import { useState, useEffect } from "react";

export default function PriceCounter({ data, price, setPrice, GroundPrice, setGroundPrice, setServiceFee, tax, setTax }) {
  const [priceInfo, setPriceInfo] = useState({
    price: parseFloat(data.minPrice),
    currency: data.currency,
    serviceFee: parseFloat(data.serviceFee),
  });

  // Function to calculate percentage (tax)
  function calculatePercentage(total, percentage) {
    return total * percentage;
  }

  // Update the state when the price or other dependencies change
  useEffect(() => {
    const taxAmount = calculatePercentage(priceInfo.price, data.taxRate);
     const serviceAmoutn=calculatePercentage(priceInfo.price, data.serviceFee);
     const totalEarned = priceInfo.price +  serviceAmoutn+ taxAmount;

    setGroundPrice(priceInfo.price);
    setServiceFee(serviceAmoutn);
    setTax(taxAmount);
    setPrice(totalEarned);
  }, [priceInfo.price, data.taxRate, priceInfo.serviceFee, setGroundPrice, setServiceFee, setTax, setPrice]);

  // Handle input change
  const handleInputChange = (e) => {
    const inputPrice = parseFloat(e.target.value) || data.minPrice;
    setPriceInfo((prev) => ({
      ...prev,
      price: inputPrice >= data.minPrice ? inputPrice : data.minPrice,
    }));
  };

  return (
    <>
      <div className="w-full py-14 bg-neutral-100 rounded-lg mt-8 mb-6">
        <div className="w-max mx-auto flex flex-col items-center gap-y-4">
          <label htmlFor="priceInput" className="text-xl font-medium">
            Enter Price
          </label>
          <input
            id="priceInput"
            className="px-8 py-2 w-72 rounded-lg text-2xl text-secondary-400 font-semibold text-center border border-neutral-300"
            type="number"
            value={priceInfo.price}
            onChange={handleInputChange}
            min={data.minPrice}
          />
        </div>
      </div>

      <div className="text-base text-neutral-500 font-medium">
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between">
          <h3>Ground Price</h3>
          <h3 className="text-lg font-normal">{`${priceInfo.currency}${GroundPrice}`}</h3>
        </div>
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between">
          <h3>Platform fee</h3>
          <h3 className="text-lg font-normal">{`${priceInfo.currency}${taxAmount}`}</h3>
        </div>
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between">
          <h3>Taxes ({(data.taxRate * 100).toFixed(2)}%)</h3>
          <h3 className="text-lg font-normal">{`${priceInfo.currency}${tax.toFixed(2)}`}</h3>
        </div>
        <div className="relative py-2.5 px-20 flex justify-between">
          <h3>Total Earned</h3>
          <h3 className="text-lg font-bold">{`${priceInfo.currency}${price.toFixed(2)}`}</h3>
        </div>
      </div>
    </>
  );
}
