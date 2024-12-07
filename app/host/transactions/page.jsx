"use client"
import { useEffect, useState } from "react";
import ToggleButton from "../property-list/ToggleButton";
import axiosInstance from "@/redux/services/axiosInstance";
import { SquareArrowDownRight, Trash2 } from "lucide-react"

export default function page() {
        const [bookings, setBooking] = useState([]);
const [loading, setLoading] = useState(false);
const [totalmoney,setTotal]=useState(0)
useEffect(() => {
  fetchPropertyList();
}, []);

const fetchPropertyList = async () => {
  try {
    setLoading(true);
    const response = await axiosInstance.get("/host/book-list"); 
    setBooking(response.data?.booking || []); 
    // console.log(response.data?.booking);
     // Calculate total price
     const totalAmount = fetchedBookings.reduce((sum, booking) => sum + parseFloat(booking.price || 0), 0);
     setTotal(totalAmount); // Set the total amount
  } catch (error) {
    console.error("Failed to fetch property list:", error);
  } finally {
    setLoading(false); // Ensure loading state is reset
  }
};
const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(
        2,
        "0"
    )}/${String(date.getUTCDate()).padStart(2, "0")}`;
};
const formatDateCount = (startDateStr, endDateStr) => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Calculate the difference in days
    const dayCount = Math.ceil(
        (endDate - startDate) / (1000 * 60 * 60 * 24)
    );

    return `${Math.abs(dayCount)} day${Math.abs(dayCount) !== 1 ? "s" : ""}`;
};

// const [pageState, setPageState] =useState("pending")
  return (
    <div className='marker-class w-full p-6'>
        <div className='py-8 px-6 bg-secondary-50 rounded-lg'>

          <div className="flex justify-between items-center">
            {/* Filter */}
            <div className='flex gap-6 text-neutral-400 font-medium text-base'>
              <select className='w-[250px] px-6 py-2 border  border-neutral-200 rounded-lg'>
                  <option >All Property</option>
                  <option>a type property</option>
                  <option>B type propterty </option>
                  <option>C location property </option>
              </select>
              <select  className='w-[200px] px-6 py-2 border  border-neutral-200 rounded-lg'>
                  <option>last 15 days</option>
                  <option > last 7 days</option>
                  <option>last 30 days</option>
                  <option>last 1 month</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              {/* <p className="w-max text-sm text-neutral-400 font-medium">Available Balance:  <span className="text-neutral-700 text-lg font-semibold">1,500.00</span></p> */}
              <p className="w-max text-sm text-neutral-400 font-medium flex items-center whitespace-nowrap">
                Available Balance: <span className="text-neutral-700 text-lg font-semibold ml-1">{totalmoney}</span>
              </p>
              <button className="btn btn-primary max-w-[180px] px-8 w-max whitespace-nowrap">Withdraw Now</button>
            </div>
          </div>

        

            <div className='w-full h-full mt-5'>
                <ul className='text-base text-neutral-600 font-medium grid grid-cols-[178px_250px_300px_100px_200px] place-items-center bg-white rounded-lg py-4 border border-neutral-100'>
                    <li>Date</li>
                    <li>Property Name</li>
                    <li>Detail</li>
                    <li>Amount</li>
                    <li>Status</li>
                </ul>
                <div className='space-y-6 mt-6'>

                    {loading ? (
                <p>Loading...</p>
              ) : bookings.length > 0 ? (
                bookings.map((booking, index) => (
                 
                  <ul key={booking._id || index} className='text-base text-neutral-400 font-medium grid grid-cols-[178px_250px_300px_100px_200px] place-items-center bg-white rounded-lg py-3   '>
                  <li>{formatDate(booking.updatedAt)}</li>

                        <li>{booking.property}</li>
                        <li>
                        {formatDate(booking.checkinDate, booking.checkoutDate)} </li>
                        <li className="text-[#FF5A26]">{booking.price}</li>
                        <li>{formatDate(booking.checkoutDate)}</li>
                    </ul>
                ))
              ) : (
                <p>No User Found.</p>
              )}
                  
                    
                </div>
            </div>

        </div>
    </div>
  )
}
