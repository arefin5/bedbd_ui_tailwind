
"use client"
import axiosInstance from "@/redux/services/axiosInstance";
import React, { useState,useEffect } from "react";

const BookingList = () => {
  const [pageState, setPageState] = useState("pending");
  const [pendingList, setPendingList] = useState([]);
  const [reject,setRejected]=useState([]);
  const [upComing,setUpComing]=useState([]);
  const [complete,setComplete]=useState([]);
  const [fetchFlag, setFetchFlag] = useState(false);
  const [customError,setCustomError]=useState(false);
  const [success,setSuccess]=useState(true);

  const fetchSuccess = async () => {
    try {
        const response = await axiosInstance.get("/host-pending-booking-list");
        console.log("response", response.data);
        setPendingList(response?.data || []);
    } catch (error) {
        console.error("Error fetching pending list:", error);
    }
};

const fetchUpcoming = async () => {
  try {
      const response = await axiosInstance.get("/host-booking-upcoming");
      console.log("rejeted", response.data);
      setUpComing(response?.data || []);
  } catch (error) {
      console.error("Error fetching pending list:", error);
  }
};
const fetchComplete = async () => {
  try {
      const response = await axiosInstance.get("/host-booking-complete");
      console.log("rejeted", response.data);
      setComplete(response?.data || []);
  } catch (error) {
      console.error("Error fetching pending list:", error);
  }
};
const fetchReject = async () => {
  try {
      const response = await axiosInstance.get("/host-reject-booking-list");
      console.log("rejeted", response.data);
      setRejected(response?.data || []);
  } catch (error) {
      console.error("Error fetching pending list:", error);
  }
};

useEffect(() => {
  fetchSuccess();
  fetchUpcoming();
  fetchComplete();
  fetchReject();
  // fetchUpcomeing();
  // fetchReject();
  // fetchComplete();
}, [fetchFlag]);
  
  const listMap = {
    pending: pendingList,
    upcoming: upComing,
    rejected: reject,
    completed: complete,
  };
  const handleApprove = async (bookingId) => {
    try {
        const response = await axiosInstance.put(`/approved-booking/${bookingId}`);
        if (response.status === 200) {
            // Remove the approved booking from the list immediately
            setPendingList(pendingList.filter(item => item._id !== bookingId));
            // alert("Booking approved!");
              setSuccess(true);
            setFetchFlag(prev => !prev);
        }
    } catch (error) {
        console.error("Error approving booking:", error);
        alert("Failed to approve the booking.");
    }
};
const handleRejected=async(bookingId)=>{
  // console.log("rejected list ");

  try {
    const response = await axiosInstance.post(`/reject-booking/${bookingId}`);
    if (response.status === 200) {
        // Remove the approved booking from the list immediately
        setPendingList(pendingList.filter(item => item._id !== bookingId));
        // alert("Booking decline!");
           
        setFetchFlag(prev => !prev);
    }
} catch (error) {
    console.error("Error approving booking:", error);
    alert("Failed to approve the booking.");
}
}
  const handleTabChange = (state) => {
    setPageState(state);
  };

  const formatDate = (date) => new Date(date).toLocaleDateString();
  const nightCount = (checkin, checkout) =>
    Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));

  return (
    <div className="ml-10">
      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b pb-2 ml-10">
        {["pending", "upcoming", "rejected", "completed"].map((state) => (
          <button
            key={state}
            onClick={() => handleTabChange(state)}
            className={`text-sm font-medium px-4 py-2 rounded-t-md ${
              pageState === state
                ? "text-primary-400 border-b-2 border-primary-400"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            {state.charAt(0).toUpperCase() + state.slice(1)}
          </button>
        ))}
      </div>

      {/* Booking List */}
      <div className="space-y-6 mt-6">
      
      <ul className='text-base text-neutral-600 font-medium grid grid-cols-[174px_240px_110px_110px_100px_190px] place-items-center bg-white rounded-lg py-4 border border-neutral-100'>
                        <li>Property</li>
                        <li>Details</li>
                        <li>Check-In</li>
                        <li>Check-Out</li>
                        <li>Price</li>
                        <li>Action</li>
                    </ul>
        {listMap[pageState].length === 0 && <p>No {pageState} bookings available.</p>}
        {listMap[pageState].length > 0 &&
          listMap[pageState].map((item) => (
            <ul
              key={item._id}
              className="ml-10 text-base text-neutral-600 font-medium grid grid-cols-[174px_240px_110px_110px_100px_190px] place-items-center bg-white rounded-lg py-3"
            >
              <li>{item.property.propertyTitle}</li>
              <li>
                {item.guest}Adults, {nightCount(item.checkinDate, item.checkoutDate)}{" "}
                days
              </li>
              <li>{formatDate(item.checkinDate)}</li>
              <li>{formatDate(item.checkoutDate)}</li>
              <li>{item.basePrice}</li>
              <li className="text-sm font-medium space-x-2">
                {pageState === "pending" && (
                  <>
                    <button className="py-[6px] px-3 border border-[#F63F1F] rounded-md text-[#F63F1F]" 
                      onClick={() => handleRejected(item._id)}>
                        Cancle
                    </button>
                    <button
                      className="py-[8px] px-3 text-white bg-primary-400 rounded-md"
                      onClick={() => handleApprove(item._id)}
                    >
                      Approve
                    </button>
                  </>
                )}
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default BookingList;
