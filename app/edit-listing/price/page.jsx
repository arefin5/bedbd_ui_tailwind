
"use client";
import PriceCounter from "./PriceCounter";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { updateFormData } from "@/redux/list/editListSlice";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [data, setData] = useState(null); // Initialize with null for conditional rendering
  const [price, setPrice] = useState(0);
  const [groundPrice, setGroundPrice] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [tax, setTax] = useState(0);

  const dispatch = useDispatch();
  const router = useRouter();
  const existPrice = useSelector((state) => state.editForm.editlist?.GroundPrice);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setGroundPrice(existPrice)
        // console.log(existPrice);
        // const response = await axios.get("https://backend.bedbd.com/api/service-rate");
        // setGroundPrice(existPrice || response.data.minPrice);
        // setData(response.data);
        // setGroundPrice(existPrice || response.data.minPrice);
        // // Set the initial ground price
        // // console.log(data);
        const response = await axios.get("https://backend.bedbd.com/api/service-rate");

        // Set the fetched data and override the price with existPrice
        setData((prevData) => ({
          ...response.data,
          minPrice: existPrice || 100, // Fallback to minPrice if existPrice is undefined
        }));
      } catch (error) {
        console.error("Error fetching service rates:", error);
      }
    };
    fetchService();
  }, [existPrice]);

  const handleSubmitImage = async (e) => {
    e.preventDefault();
    try {
      const payload = { price, serviceFee, tax, groundPrice };
      await dispatch(updateFormData(payload));
      console.log("Form Data Submitted:", payload);
      router.push("/edit-listing/availability");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const back = (e) => {
    e.preventDefault();
    router.push("/edit-listing/upload-images");
  };

  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">
          Set Price
        </h2>
        <form className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-xl font-medium">How much do you want to charge per night?</h3>
          <p className="text-sm font-normal">No worries! You can change it anytime you want.</p>

          {!data ? (
            <p>Loading...</p>
          ) : (
            <PriceCounter
              data={data}
              price={price}
              setPrice={setPrice}
              GroundPrice={groundPrice}
              setGroundPrice={setGroundPrice}
              setServiceFee={setServiceFee}
              tax={tax}
              setTax={setTax}
            />
          )}

          <div className="text-sm font-normal text-neutral-600 w-fit ml-auto mr-auto text-left max-w-md mt-3.5">
            Check your nearest property price to make it more competitive. It will increase your chances of getting more bookings.
          </div>

          <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
            <button className="btn btn-secondary max-w-36 relative" onClick={back} aria-label="Go back to the previous step">
              Back
            </button>
            <button className="btn btn-primary" onClick={handleSubmitImage} aria-label="Continue to the next step">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
