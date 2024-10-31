
"use client";
import Icon from "/components/Icon";
import React, { useEffect, useState } from 'react';
import axiosInstance from '@/redux/services/axiosInstance';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useRouter} from "next/navigation"
const BookingBox = ({ data }) => {
    const { price, serviceFee, tax, GroundPrice, _id } = data;
    const id = _id;

    const [bookingDetails, setBookingDetails] = useState(null);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guestCount, setGuestCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router=useRouter();

    const calculateDays = () => {
        if (checkInDate && checkOutDate) {
            const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
            return Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
        }
        return 1;
    };

    const totalNights = calculateDays();
    const totalserviceFee= serviceFee*totalNights
    const totalGroundPrice=GroundPrice*totalNights;
    const totalTax=tax*totalNights
    const totalPrice = totalGroundPrice * totalNights + totalserviceFee + totalTax;


    useEffect(() => {
        fetchBooking();
    }, [id,totalPrice,totalNights]);

    const fetchBooking = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`/property-book-list/${id}`);
            setBookingDetails(response.data);
            // console.log(response.data)
            setLoading(false);
        } catch (error) {
            setError("Failed to load booking details");
            setLoading(false);
        }
    };

    const handleSubmitReserve = async () => {
        
        if (!checkInDate || !checkOutDate) {
            setError("Please select both Check-In and Check-Out dates");
            return;
        }
        const reservationData = {
            propertyId: id,
            checkinDate: checkInDate,
            checkoutDate: checkOutDate,
            guestCount,
            totalCost: totalPrice,
            totalNights,
        };
        console.log(reservationData);
        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance.post(`/book-property/${id}`, reservationData);
            console.log(response);
            alert("Reservation successful!");
             
      console.log("Booking successful:", response.data.GatewayPageURL);
      // Redirect to payment gateway using the URL in response
               const GatewayPageURL = response.data.GatewayPageURL;
        if (GatewayPageURL) {
    // window.location.href = GatewayPageURL;
        router.push(GatewayPageURL);



  } else {
    console.error("GatewayPageURL not found");
  }


const result = response.data;
        
if (response.status === 200 && result.GatewayPageURL) {
    // Redirect to payment gateway
    console.log("Redirecting to:", result.GatewayPageURL);
    window.location.href = result.GatewayPageURL;

    // Store the transaction ID for future reference
    const tran_id = result.tran_id;
    if (tran_id) {
        console.log("Transaction ID:", tran_id);
        localStorage.setItem("tran_id", tran_id);
    }
} else {
    console.error("Payment initiation failed:", result.message || "Unknown error");
    setError("Failed to initiate payment. Please try again.");
}

        } catch (error) {
            setError("Failed to make the reservation. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="top-12 sticky rounded-lg drop-shadow-booking-box bg-white">
            <div className="relative p-6 custom-underline-primary-400">
                <h3 className="text-neutral-700 font-semibold text-3xl">
                    ${totalGroundPrice} <span className="text-neutral-500 text-lg"> /Night</span>
                    <span className="text-green-300 text-sm ml-3"> (Available)</span>
                </h3>
            </div>

            {/* DatePicker inputs for Check-In and Check-Out */}
            <div className="mt-8 mx-6 border border-neutral-400 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2">
                    <div className="py-4 px-8">
                        <label className="block text-neutral-600 text-sm font-semibold">Check In</label>
                        <DatePicker
                            selected={checkInDate}
                            onChange={(date) => setCheckInDate(date)}
                            selectsStart
                            startDate={checkInDate}
                            endDate={checkOutDate}
                            placeholderText="Add Dates"
                            className="text-neutral-300 font-medium"
                        />
                    </div>
                    <div className="py-4 px-8 border-l border-neutral-400">
                        <label className="block text-neutral-600 text-sm font-semibold">Check Out</label>
                        <DatePicker
                            selected={checkOutDate}
                            onChange={(date) => setCheckOutDate(date)}
                            selectsEnd
                            startDate={checkInDate}
                            endDate={checkOutDate}
                            minDate={checkInDate}
                            placeholderText="Add Dates"
                            className="text-neutral-300 font-medium"
                        />
                    </div>
                </div>
                <div className="py-4 px-8 border-t border-neutral-400 col-2 relative">
                    <label className="block text-neutral-600 text-sm font-semibold">Guest</label>
                    <input
                        type="number"
                        className="text-neutral-300 font-medium"
                        placeholder="Select Guest"
                        value={guestCount}
                        min="1"
                        onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                    />
                    <Icon name="chevron-down" size={24} className="icon absolute-y-center right-4" />
                </div>
            </div>

            {/* Calculation Section */}
            <div className="border-b-2">
                <ul className="mx-14 py-6 space-y-8">
                    <li className="text-neutral-400 font-semibold text-lg">
                        ${GroundPrice} x {totalNights} night(s)
                        <span className="text-neutral-500 float-right">${GroundPrice * totalNights}</span>
                    </li>
                    <li className="text-neutral-400 font-semibold text-lg">
                        Service Fee
                        <span className="text-neutral-500 float-right">$ {totalserviceFee}</span>
                    </li>
                    <li className="text-neutral-400 font-semibold text-lg">
                        Bedbd fee
                        <span className="text-neutral-500 float-right">$ {totalTax}</span>
                    </li>
                </ul>
            </div>

            {/* Total Price Display */}
            <div>
                <div className="text-neutral-600 font-semibold text-lg py-6 mx-14">
                    Total
                    <span className="text-neutral-700 float-right">${totalPrice}</span>
                </div>
            </div>

            {/* Reserve Button */}
            <button
                className="mt-4 mb-8 btn btn-primary rounded-full max-w-96 relative-x-center"
                onClick={handleSubmitReserve}
                disabled={loading}
            >
                {loading ? "Processing..." : "Reserve Now"}
            </button>

            {/* Loading and Error Messages */}
            {loading && <p className="text-center text-neutral-500">Loading booking details...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
        </div>
    );
};

export default BookingBox;