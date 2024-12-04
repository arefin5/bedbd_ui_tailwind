
"use client";
import Icon from "/components/Icon";
import React, { useEffect, useState } from 'react';
import axiosInstance from '@/redux/services/axiosInstance';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import BookingCounter from "./BookingCounter";

const BookingBox = ({ data }) => {
    const { price, serviceFee, tax, GroundPrice, _id } = data;
    const id = _id;
    const { token } = useSelector((state) => state.auth);
    
    const { selectedDate } = useSelector((state) => state.search);
    console.log(selectedDate)
    
    const [bookingDetails, setBookingDetails] = useState(null);
    const [bookedDates, setBookedDates] = useState([]);
    const [dateRange, setDateRange] = useState([null, null]);
    const [guestCount, setGuestCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { user } = useSelector((state) => state.auth);

    const [checkInDate, checkOutDate] = dateRange;

    const calculateDays = () => {
        if (checkInDate && checkOutDate) {
            const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
            return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        }
        return 1;
    };

    const handleCounterChange = (name, newValue) => {
        setGuestCount(newValue);
    };

    // const totalNights = calculateDays();
    // const totalserviceFee = serviceFee * totalNights;
    // const totalGroundPrice = GroundPrice * totalNights;
    // const totalTax = tax * totalNights;
    // const totalPrice = totalGroundPrice + totalserviceFee + totalTax;
    const totalNights = calculateDays();
    const totalserviceFee = (serviceFee * totalNights).toFixed(2);
    const totalGroundPrice = (GroundPrice * totalNights).toFixed(2);
    const totalTax = (tax * totalNights).toFixed(2);
    const totalPrice = (
      parseFloat(totalGroundPrice) +
      parseFloat(totalserviceFee) +
      parseFloat(totalTax)
    ).toFixed(2);
    useEffect(() => {
        fetchBooking();
    }, [id, totalPrice, totalNights, token]);

    const fetchBooking = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`/property-book-list/${id}`);
            setBookingDetails(response.data.bookings);

            const bookedRanges = response.data.bookings.map(booking => ({
                start: new Date(booking.checkinDate),
                end: new Date(booking.checkoutDate),
            }));
            setBookedDates(bookedRanges);

            setLoading(false);
        } catch (error) {
            setError("Failed to load booking details");
            setLoading(false);
        }
    };

    const handleDateChange = (dates) => {
        setDateRange(dates);
    };

    const handleSubmitReserve = async () => {
        if (!token) {
            router.push("/login/email");
            return;
        }
        if(! user?.varificationId && !user.varificationId){
            alert("please Verify your Identity")
            router.push("/registration/start")
          }
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

        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance.post(`/book-property/${id}`, reservationData);
               console.log(response);
               setLoading(false);
               alert(" Your booking has been Requested.");
               window.location.href = "/user/bookinglist";

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
                    ${GroundPrice} <span className="text-neutral-500 text-lg"> /Night</span>
                    {/* <span className="text-green-300 text-sm ml-3"> (Available)</span> */}
                </h3>
            </div>
            <div className="mt-8 mx-6 border border-neutral-400 rounded-lg overflow-hidden">
                <div className="py-4 px-8">
                <div className="flex justify-between">
            <label className="block text-neutral-600 text-sm font-semibold">Check In</label>
            <label className="block text-neutral-600 text-sm font-semibold">Check Out</label>
        </div>
                    <DatePicker
                        selected={checkInDate}
                        onChange={handleDateChange}
                        startDate={checkInDate}
                        endDate={checkOutDate}
                        selectsRange
                        monthsShown={2} 
                        minDate={new Date()}
                        excludeDateIntervals={bookedDates} 
                        placeholderText="Add Check-In and Check-Out Dates"
                        className="text-neutral-300 font-medium"
                        showPopperArrow={false}
                    />
                </div>
                <div className="py-4 px-8 border-t border-neutral-400">
                    <label className="block text-neutral-600 text-sm font-semibold">Guest</label>
                    <BookingCounter
                        name="Guest"
                        value={guestCount}
                        onCountChange={handleCounterChange}
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
                    Tax/VAT
                        <span className="text-neutral-500 float-right">$ {totalTax}</span>
                    </li>
                    <li className="text-neutral-400 font-semibold text-lg">
                            Platform fee (instead of bedbd fee)
                        <span className="text-neutral-500 float-right">$ {totalserviceFee}</span>
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
