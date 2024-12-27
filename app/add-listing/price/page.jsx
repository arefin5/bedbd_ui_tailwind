"use client";
import PriceCounter from "./PriceCounter";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { updateFormData } from "@/redux/list/createListSlice";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  const [price, setPrice] = useState(data.minPrice);
  const [GroundPrice, setGroundPrice] = useState(data.minPrice);
  const [serviceFee, setServiceFee] = useState(data.serviceFee);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    fetchService();
    const storedGroundPrice = localStorage.getItem('GroundPrice');
    if (storedGroundPrice) {
      setGroundPrice(parseFloat(storedGroundPrice));
    }
  }, []); // Empty dependency array to only fetch data once on mount

  const fetchService = async () => {
    try {
      const response = await axios.get("https://backend.bedbd.com/api/service-rate");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem('GroundPrice', GroundPrice);
  }, [GroundPrice]);

  // Handle form submission
  const handleSubmitImage = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        price,
        serviceFee,
        tax,
        GroundPrice,
      };
      await dispatch(updateFormData(payload));
      console.log("Form Data Submitted:", payload);
      router.push("/add-listing/availability");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  // Handle navigation back
  const back = (e) => {
    e.preventDefault();
    router.push("/add-listing/upload-images");
  };

  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">
          Set Price
        </h2>
        <form
          className="w-full max-w-4xl ml-auto mr-auto mt-28 px-8"
          onSubmit={(e) => e.preventDefault()} // Prevent default submission
        >
          <h3 className="text-xl font-medium">How much do you want to charge per night?</h3>
          <p className="text-sm font-normal">
            No worries! You can change it anytime you want.
          </p>

          {!data ? (
            <p>Loading ...</p>
          ) : (
            <PriceCounter
              data={data}
              setPrice={setPrice}
              price={price}
              GroundPrice={GroundPrice}
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
            <button
              className="btn btn-secondary max-w-36 relative"
              onClick={back}
              aria-label="Go back to the previous step"
            >
              Back
            </button>
            <button
              className="btn btn-primary"
              onClick={handleSubmitImage}
              aria-label="Continue to the next step"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
