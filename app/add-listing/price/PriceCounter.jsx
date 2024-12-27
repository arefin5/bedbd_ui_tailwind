"use client";

import { useEffect, useState } from "react";

export default function PriceCounter({
  data,
  price,
  setPrice,
  GroundPrice,
  setGroundPrice,
  setServiceFee,
  tax,
  setTax,
}) {
  // Initialize state with default values or fallback to safe values
  const [priceInfo, setPriceInfo] = useState({
    price: parseFloat(data?.minPrice || 0),
    currency: data?.currency || "$",
    serviceFee: parseFloat(data?.serviceFee || 0),
  });

  const [taxAmount, setTaxAmount] = useState(0);
  const [serviceAmount, setServiceAmount] = useState(0);

  useEffect(() => {
    const storedPrice = localStorage.getItem('price');
    const storedServiceFee = localStorage.getItem('serviceFee');
    const storedTax = localStorage.getItem('tax');
    if (storedPrice) {
      setPrice(parseFloat(storedPrice));
    }
    if (storedServiceFee) {
      setServiceFee(parseFloat(storedServiceFee));
    }
    if (storedTax) {
      setTax(parseFloat(storedTax));
    }
  }, []);

  // Function to calculate percentage (tax or fee)
  function calculatePercentage(total, percentage) {
    return total * (percentage || 0);
  }

  // Update the state when the price or other dependencies change
  useEffect(() => {
    const calculatedTaxAmount = parseFloat(
      calculatePercentage(priceInfo.price, data?.taxRate).toFixed(2)
    );
    const calculatedServiceAmount = parseFloat(
      calculatePercentage(priceInfo.price, priceInfo.serviceFee).toFixed(2)
    );
    const totalEarned = parseFloat(
      (priceInfo.price + calculatedServiceAmount + calculatedTaxAmount).toFixed(2)
    );

    // Update parent state values
    setGroundPrice(parseFloat(priceInfo.price.toFixed(2)));
    setServiceFee(calculatedServiceAmount);
    setTax(calculatedTaxAmount);
    setPrice(totalEarned);

    // Update local state for rendering
    setTaxAmount(calculatedTaxAmount);
    setServiceAmount(calculatedServiceAmount);

    // Store values in localStorage
    localStorage.setItem('price', totalEarned);
    localStorage.setItem('serviceFee', calculatedServiceAmount);
    localStorage.setItem('tax', calculatedTaxAmount);
  }, [
    priceInfo.price,
    data?.taxRate,
    priceInfo.serviceFee,
    setGroundPrice,
    setServiceFee,
    setTax,
    setPrice,
  ]);

  // Handle input change for price
  const handleInputChange = (e) => {
    const inputPrice = parseFloat(e.target.value) || data?.minPrice || 0;
    setPriceInfo((prev) => ({
      ...prev,
      price: inputPrice >= (data?.minPrice || 0) ? inputPrice : data?.minPrice || 0,
    }));
  };

  const handlePriceFormatting = (num) => {
    if (isNaN(num)) return "0.00"; // Fallback for invalid values
    return num.toFixed(2); // Ensure two decimals
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
          <h3>Base Price</h3>
          <h3 className="text-lg font-normal">
            {`${priceInfo.currency}${handlePriceFormatting(GroundPrice)}`}
          </h3>
        </div>
        <div className="relative py-2.5 px-20 flex justify-between">
          <h3>Total Earned</h3>
          <h3 className="text-lg font-bold">
            {`${priceInfo.currency}${handlePriceFormatting(GroundPrice)}`}
          </h3>
        </div>
      </div>
    </>
  );
}
