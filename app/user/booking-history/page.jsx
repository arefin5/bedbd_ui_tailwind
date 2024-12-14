"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/redux/services/axiosInstance";
import { useRouter } from "next/navigation";

export default function page() {
    const [fetchFlag, setFetchFlag] = useState(false);
  const [bookingList, setBookingList] = useState([]);
  const router = useRouter();

  const fetchSuccess = async () => {
    try {
      const response = await axiosInstance.get("/user-booking-list");
      // console.log("API Response:", response.data.bookings);
      setBookingList(response.data.bookings);
    } catch (error) {
      console.error("Error fetching pending list:", error);
      setBookingList([]); // Set to an empty array on error
    }
  };

  useEffect(() => {
    fetchSuccess();
  }, [fetchFlag]);

  const claimPayment = async (bookingId) => {
    try {
      console.log(bookingId)
      const response = await axiosInstance.post(`/payment-property/${bookingId}`);
      const GatewayPageURL = response.data.GatewayPageURL;
      if (GatewayPageURL) {
        router.push(GatewayPageURL);

      } else {
        setError("Payment initiation failed.");
      }
    } catch (error) {
      console.error("Error approving booking:", error);
      alert("Failed to approve the booking.");
    }
  };

  // const formatDate = (dateStr) => {
  //   const date = new Date(dateStr);
  //   return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(
  //     2,
  //     "0"
  //   )}/${String(date.getUTCDate()).padStart(2, "0")}`;
  // };
  const formatDate = (isoDateStr) => {
    const date = new Date(isoDateStr);
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const year = date.getUTCFullYear();
    const month = monthNames[date.getUTCMonth()]; // Get month name
    const day = String(date.getUTCDate()).padStart(2, "0"); // Format day to 2 digits
  
    return `${month} ${day}, ${year}`;
  };
  
  return (
    <div className='w-full h-full min-h-screen py-10 px-6 '>
        <h2 className='text-primary-400 text-3xl font-medium'>Booking History</h2>
        <div className='text-neutral-600 font-medium text-base'>
            <ul className='grid grid-cols-[192px_180px_256px_128px_136px_146px_192px] rounded-lg border border-neutral-100 py-4 mt-6 text-center text-neutral-600 text-base font-medium'>
                <li className=''>Name</li>
                <li className=''>Booking Date</li>
                <li className=''>Check-In-Out</li>
                <li className=''>txn Id</li>
                <li className=''>Total</li>
                <li className=''>Status</li>
                <li className=''>cancle</li>
            </ul>
            {bookingList.length > 0 ? (
           
            
           <>
           {bookingList.map((item) => (
            <div className='text-neutral-400 text-base font-medium mt-3 space-y-4'>
                {/* Booking Item  1*/}
                <ul className='grid grid-cols-[192px_180px_256px_128px_136px_146px_192px] py-3 border-b'>
                    <li className='pl-6'>{item.property.propertyTitle}</li>
                    <li className='pl-6'>{formatDate(item.createdAt)}</li>
                    <li className='pl-10'>{formatDate(item.checkinDate)} {formatDate(item.checkoutDate)} </li>
                    <li className='pl-8 text-secondary-400'>22456</li>
                    <li className='pl-8'>{item.price} tk</li>
                    <li className='pl-8'>{item.status}</li>
                    {/*  */}
                    {
                      item.status==="paymentsuccess" ?(<>
                        <li className='pl-8 text-secondary-400'>cancell</li>
                      </>):(
                       <>
 <li
                    onClick={() => claimPayment(item._id)}
                    className={` className='pl-8  ml-2 text-secondary-400' ${item.status === "hostApproved"
                        ? "text-secondary-400"
                        : item.status === "pending"
                          ? " text-secondary-400 cursor-not-allowed"
                          : "text-secondary"
                      }`}
                    disabled={item.status === "pending"}
                  >
                    {item.status === "hostApproved"
                      ? "Pay"
                      : item.status === "pending"?
                      "pending"
                      :"pay"
                        }
                  </li>
                       </>
                      )
                    }
                    {/* <li
                    onClick={() => claimPayment(item._id)}
                    className={` className='pl-8  ml-2' ${item.status === "hostApproved"
                        ? "text-secondary-400"
                        : item.status === "pending"
                          ? " text-secondary-400 cursor-not-allowed"
                          : "text-secondary"
                      }`}
                    disabled={item.status === "pending"}
                  >
                    {item.status === "hostApproved"
                      ? "Pay"
                      : item.status === "pending"
                        ? "Waiting"
                        : "Cancel"}
                  </li> */}
                    {/*  */}
                    {/* <li className='pl-6'>Cancel Booking</li> */}
                </ul>
                </div>
            ))}
           </>
           )
            :(<>

            </>)}
        </div>
    </div>
  )
}
