"use client";
import Icon from "/components/Icon";
import { useState, useEffect, useRef, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axiosInstance from "@/redux/services/axiosInstance";
import BookingCounter from "./BookingCounter";
const BookingBox = ({ data, searchParams }) => {
    const { GroundPrice, _id } = data;
    const id = _id;
    const { token, user } = useSelector((state) => state.auth);

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guestCount, setGuestCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [bookedDates, setBookedDates] = useState([]);
    const [tax, setTax] = useState(0);
    const [serviceFee, setServiceFee] = useState(0);

    const router = useRouter();
    const checkOutPickerRef = useRef();
    const { selectedDate } = useSelector((state) => state.search);

    // Fetch booking details and service rates on component mount
    useEffect(() => {
        if (id) {
            fetchBookingDetails();
            fetchServiceRates();
            
        }
    }, [id]);
    console.log(searchParams)
    useEffect(() => {
        let ignore = false;

        if (!ignore && Object.keys(searchParams).length > 0) {
            const { checkIn, checkOut } = searchParams;
            console.log("checkIn, checkOut",checkIn, checkOut)
            if (checkIn && !checkOut) {
                const checkInDate = formatDate(checkIn);
                setCheckInDate(checkInDate);
                setCheckOutDate(null); // Reset check-out date
            } else if (!checkIn && checkOut) {
                const checkOutDate = formatDate(checkOut);
                setCheckOutDate(checkOutDate);
                setCheckInDate(null); // Reset check-in date
            } else if (checkIn && checkOut) {
                const checkInDate = formatDate(checkIn);
                const checkOutDate = formatDate(checkOut);
                setCheckInDate(checkInDate);
                setCheckOutDate(checkOutDate);
            }
        }

        return () => { ignore = true; };
    }, [searchParams]);
    // Fetch service rates (tax and service fee)
    const fetchServiceRates = async () => {
        try {
            const response = await axiosInstance.get("/service-rate");
            setTax(response.data.taxRate );
            setServiceFee(response.data.serviceFee);
            console.log(tax,serviceFee)
        } catch (error) {
            console.error("Failed to fetch service rates:", error);
        }
    };

    // Fetch booking details to get the booked date intervals
    const fetchBookingDetails = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`/property-book-list/${id}`);
            const bookedRanges = response.data.bookings.map((booking) => ({
                start: new Date(booking.checkinDate),
                end: new Date(booking.checkoutDate),
            }));
            setBookedDates(bookedRanges);
        } catch (error) {
            setError("Failed to load booking details.");
        } finally {
            setLoading(false);
        }
    };

    // Format a date string (DD-MM-YYYY) to Date object
    const formatDate = (dateString) => {
        const dateParts = dateString.split('-');
        return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    };

    // Handle change for check-in date
    const handleCheckInChange = (date) => {
        setCheckInDate(date); // Update check-in date
        setCheckOutDate(null); // Reset check-out date when check-in changes
        setTimeout(() => checkOutPickerRef.current?.setFocus(), 100); // Focus check-out picker
    };

    // Handle change for check-out date
    const handleCheckOutChange = (date) => {
        setCheckOutDate(date);
    };

    // Handle reservation submission
 

    // Calculate the total number of nights between check-in and check-out
    const calculateDays = () => {
        if (checkInDate && checkOutDate) {
            const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
            const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            return days > 0 ? days : 1; // Return 1 if days is 0 or negative
        }
        return 1;
    };

    const totalNights = calculateDays();
    const totalGroundPrice = (GroundPrice * totalNights).toFixed(2);
    const totalserviceFee = (GroundPrice*serviceFee * totalNights).toFixed(2);
    const totalTax = (GroundPrice*tax * totalNights).toFixed(2);
    const totalPrice = (
        parseFloat(totalGroundPrice) +
        parseFloat(totalserviceFee) +
        parseFloat(totalTax)
    ).toFixed(2);

    const handleCounterChange = (name, newValue) => {
        setGuestCount(newValue);
    };
    const formatDateForSubmission = (date) => {
        if (!date) return null; // Handle null or undefined
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };
  
    // Memoized excluded date intervals for the date picker
    const excludedDateIntervals = useMemo(() => bookedDates, [bookedDates]);

    // Effect to set default date range from searchParams (if available)
    const handleSubmitReserve = async () => {
        if (!token) {
            router.push("/login/email");
            return;
        }
        if (!user?.varificationId) {
            alert("Please Verify your Identity");
            router.push("/registration/start");
            return;
        }
        if (!checkInDate || !checkOutDate) {
            setError("Please select both Check-In and Check-Out dates.");
            return;
        }

        const reservationData = {
            propertyId: id,
            // checkinDate: checkInDate.toISOString().split("T")[0],
            // checkoutDate: checkOutDate.toISOString().split("T")[0],
            checkinDate: formatDateForSubmission(checkInDate),
            checkoutDate: formatDateForSubmission(checkOutDate),
            guestCount,
            totalNights:totalNights
        };
        console.log(reservationData)
        setLoading(true);
        setError(null);

        try {
            await axiosInstance.post(`/book-property/${id}`, reservationData);
            setLoading(false);
        } catch (error) {
            setError("Failed to make the reservation. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="top-12 sticky rounded-lg drop-shadow-booking-box bg-white">
            <div className="relative p-6 custom-underline-primary-400">
                <h3 className="text-neutral-700 font-semibold text-3xl">
                    ${GroundPrice} <span className="text-neutral-500 text-lg"> /Night</span>
                </h3>
            </div>

            <div className="mt-8 mx-6 border border-neutral-400 rounded-lg overflow-hidden">
                <div className="py-4 px-8">
                    <label className="block text-neutral-600 text-sm font-semibold">
                        Check-In Date
                    </label>
                    <DatePicker
                        selected={checkInDate}
                        onChange={handleCheckInChange}
                        minDate={new Date()}
                        excludeDateIntervals={excludedDateIntervals}
                        placeholderText="Select Check-In Date"
                        className="text-neutral-300 font-medium"
                    />
                </div>
                <div className="py-4 px-8">
                    <label className="block text-neutral-600 text-sm font-semibold">
                        Check-Out Date
                    </label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={handleCheckOutChange}
                        minDate={checkInDate || new Date()}
                        excludeDateIntervals={excludedDateIntervals}
                        placeholderText="Select Check-Out Date"
                        className="text-neutral-300 font-medium"
                        ref={checkOutPickerRef}
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
                            Platform fee 
                        <span className="text-neutral-500 float-right">$ {totalserviceFee}</span>
                    </li>
                    <li className="text-neutral-400 font-semibold text-lg">
                    Tax/VAT
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


            <button
                className="mt-4 mb-8 btn btn-primary rounded-full max-w-96 relative-x-center"
                onClick={handleSubmitReserve}
                disabled={loading}
            >
                {loading ? "Processing..." : "Reserve Now"}
            </button>

            {error && <p className="text-center text-red-500">{error}</p>}
        </div>
    );
};

export default BookingBox;