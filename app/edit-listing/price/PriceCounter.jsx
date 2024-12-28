
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
  const [priceInfo, setPriceInfo] = useState({
    price: parseFloat(data?.minPrice || 0),
    currency: data?.currency || "$",
    serviceFee: parseFloat(data?.serviceFee || 0),
  });

  const calculatePercentage = (total, percentage) => total * (percentage || 0);

  const handleInputChange = (e) => {
    const inputPrice = parseFloat(e.target.value);

    setPriceInfo((prev) => ({
      ...prev,
      price: isNaN(inputPrice) || inputPrice < 0
        ? data?.minPrice
        : inputPrice,
    }));
  };

  const handlePriceFormatting = (num) => (isNaN(num) ? "0.00" : num.toFixed(2));

  useEffect(() => {
    const calculatedTaxAmount = parseFloat(
      calculatePercentage(priceInfo.price, data?.taxRate).toFixed(2)
    );
    const calculatedServiceAmount = parseFloat(
      calculatePercentage(priceInfo.price, priceInfo.serviceFee).toFixed(2)
    );
    const totalEarned = parseFloat(
      (priceInfo.price + calculatedServiceAmount + calculatedTaxAmount).toFixed(
        2
      )
    );

    // Update state values
    setGroundPrice(parseFloat(priceInfo.price.toFixed(2)));
    setServiceFee(calculatedServiceAmount);
    setTax(calculatedTaxAmount);
    setPrice(totalEarned);
  }, [
    priceInfo.price, 
    data?.taxRate, 
    priceInfo.serviceFee, 
    setGroundPrice, 
    setServiceFee, 
    setTax, 
    setPrice
  ]);

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
            value={GroundPrice}
            onChange={handleInputChange}
           
          />
        </div>
      </div>

      <div className="text-base text-neutral-500 font-medium">
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between">
          <h3>Base Price</h3>
          <h3 className="text-lg font-normal">{`${priceInfo.currency}${handlePriceFormatting(
            GroundPrice
          )}`}</h3>
        </div>
        
        
        <div className="relative py-2.5 px-20 flex justify-between">
          <h3>Total Earned</h3>
          <h3 className="text-lg font-bold">{`${priceInfo.currency}${handlePriceFormatting(
            GroundPrice
          )}`}</h3>
        </div>
      </div>
    </>
  );
}
