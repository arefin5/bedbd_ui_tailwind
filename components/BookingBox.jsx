
// "use client";
// import { useState, useEffect, useRef, useMemo } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import axiosInstance from "@/redux/services/axiosInstance";

// const BookingBox = ({ data }) => {
//     const { GroundPrice, _id } = data;
//     const id = _id;
//     const { token, user } = useSelector((state) => state.auth);

//     const [checkInDate, setCheckInDate] = useState(null);
//     const [checkOutDate, setCheckOutDate] = useState(null);
//     const [guestCount, setGuestCount] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [bookedDates, setBookedDates] = useState([]);
//     const [tax, setTax] = useState(0);
//     const [serviceFee, setServiceFee] = useState(0);

//     const router = useRouter();
//     const checkOutPickerRef = useRef();
//     const { selectedDate } = useSelector((state) => state.search);
//     // const [checkInDate, checkOutDate] = dateRange;
//     useEffect(() => {
//         if (id) {
//             fetchBookingDetails();
//             fetchServiceRates();
//         }
//     }, [id]);

//     const fetchServiceRates = async () => {
//         try {
//             const response = await axiosInstance.get("https://backend.bedbd.com/api/service-rate");
//             setTax(response.data.taxRate * 100);
//             setServiceFee(response.data.serviceFee * 100);
//         } catch (error) {
//             console.error("Failed to fetch service rates:", error);
//         }
//     };

//     const fetchBookingDetails = async () => {
//         setLoading(true);
//         try {
//             const response = await axiosInstance.get(`/property-book-list/${id}`);
//             const bookedRanges = response.data.bookings.map((booking) => ({
//                 start: new Date(booking.checkinDate),
//                 end: new Date(booking.checkoutDate),
//             }));
//             setBookedDates(bookedRanges);
//             setLoading(false);
//         } catch (error) {
//             setError("Failed to load booking details.");
//             setLoading(false);
//         }
//     };

//     const handleCheckInChange = (date) => {
//         setCheckInDate(date); // Update check-in date
//         setCheckOutDate(null); // Reset the check-out date when check-in changes
//         setTimeout(() => checkOutPickerRef.current?.setFocus(), 100); // Focus check-out picker
//     };

//     const handleCheckOutChange = (date) => {
//         setCheckOutDate(date);
//     };

//     const handleSubmitReserve = async () => {
//         if (!token) {
//             router.push("/login/email");
//             return;
//         }
//         if (!user?.varificationId) {
//             alert("Please Verify your Identity");
//             router.push("/registration/start");
//             return;
//         }
//         if (!checkInDate || !checkOutDate) {
//             setError("Please select both Check-In and Check-Out dates.");
//             return;
//         }

//         const reservationData = {
//             propertyId: id,
//             checkinDate: checkInDate.toISOString().split("T")[0],
//             checkoutDate: checkOutDate.toISOString().split("T")[0],
//             guestCount,
//         };

//         setLoading(true);
//         setError(null);

//         try {
//             await axiosInstance.post(`/book-property/${id}`, reservationData);
//             setLoading(false);
//         } catch (error) {
//             setError("Failed to make the reservation. Please try again.");
//             setLoading(false);
//         }
//     };
//     const calculateDays = () => {
//         if (checkInDate && checkOutDate) {
//             const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
//             const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//             return days > 0 ? days : 1; // Return 1 if days is 0 or negative
//         }
//         return 1;
//     };
//     const totalNights = calculateDays();
//     const totalserviceFee = (serviceFee * totalNights).toFixed(2);
//     const totalGroundPrice = (GroundPrice * totalNights).toFixed(2);
//     const totalTax = (tax * totalNights).toFixed(2);
//     const totalPrice = (
//       parseFloat(totalGroundPrice) +
//       parseFloat(totalserviceFee) +
//       parseFloat(totalTax)
//     ).toFixed(2);
//     const handleCounterChange = (name, newValue) => {
//         setGuestCount(newValue);
//     };

//     const excludedDateIntervals = useMemo(() => bookedDates, [bookedDates]);

//     return (
//         <div className="top-12 sticky rounded-lg drop-shadow-booking-box bg-white">
//             <div className="relative p-6 custom-underline-primary-400">
//                 <h3 className="text-neutral-700 font-semibold text-3xl">
//                     ${GroundPrice} <span className="text-neutral-500 text-lg"> /Night</span>
//                 </h3>
//             </div>

//             <div className="mt-8 mx-6 border border-neutral-400 rounded-lg overflow-hidden">
//                 <div className="py-4 px-8">
//                     <label className="block text-neutral-600 text-sm font-semibold">
//                         Check-In Date
//                     </label>
//                     <DatePicker
//                         selected={checkInDate}
//                         onChange={handleCheckInChange}
//                         minDate={new Date()}
//                         excludeDateIntervals={excludedDateIntervals}
//                         placeholderText="Select Check-In Date"
//                         className="text-neutral-300 font-medium"
//                     />
//                 </div>
//                 <div className="py-4 px-8">
//                     <label className="block text-neutral-600 text-sm font-semibold">
//                         Check-Out Date
//                     </label>
//                     <DatePicker
//                         selected={checkOutDate}
//                         onChange={handleCheckOutChange}
//                         minDate={checkInDate || new Date()}
//                         excludeDateIntervals={excludedDateIntervals}
//                         placeholderText="Select Check-Out Date"
//                         className="text-neutral-300 font-medium"
//                         ref={checkOutPickerRef}
//                     />
//                 </div>
//             </div>

//             <button
//                 className="mt-4 mb-8 btn btn-primary rounded-full max-w-96 relative-x-center"
//                 onClick={handleSubmitReserve}
//                 disabled={loading}
//             >
//                 {loading ? "Processing..." : "Reserve Now"}
//             </button>

//             {error && <p className="text-center text-red-500">{error}</p>}
//         </div>
//     );
// };

// export default BookingBox;
// "use client";
// import { useState, useEffect, useRef, useMemo } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import axiosInstance from "@/redux/services/axiosInstance";

// const BookingBox = ({ data, searchParams }) => {
//     const { GroundPrice, _id } = data;
//     const id = _id;
//     const { token, user } = useSelector((state) => state.auth);

//     const [checkInDate, setCheckInDate] = useState(null);
//     const [checkOutDate, setCheckOutDate] = useState(null);
//     const [guestCount, setGuestCount] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [bookedDates, setBookedDates] = useState([]);
//     const [tax, setTax] = useState(0);
//     const [serviceFee, setServiceFee] = useState(0);

//     const router = useRouter();
//     const checkOutPickerRef = useRef();
//     const { selectedDate } = useSelector((state) => state.search);

//     // Fetch booking details and service rates on component mount
//     useEffect(() => {
//         if (id) {
//             fetchBookingDetails();
//             fetchServiceRates();
//         }
//     }, [id]);
//     console.log(searchParams)
//     useEffect(() => {
//         let ignore = false;

//         if (!ignore && Object.keys(searchParams).length > 0) {
//             const { checkIn, checkOut } = searchParams;
//             console.log("checkIn, checkOut",checkIn, checkOut)
//             if (checkIn && !checkOut) {
//                 const checkInDate = formatDate(checkIn);
//                 setCheckInDate(checkInDate);
//                 setCheckOutDate(null); // Reset check-out date
//             } else if (!checkIn && checkOut) {
//                 const checkOutDate = formatDate(checkOut);
//                 setCheckOutDate(checkOutDate);
//                 setCheckInDate(null); // Reset check-in date
//             } else if (checkIn && checkOut) {
//                 const checkInDate = formatDate(checkIn);
//                 const checkOutDate = formatDate(checkOut);
//                 setCheckInDate(checkInDate);
//                 setCheckOutDate(checkOutDate);
//             }
//         }

//         return () => { ignore = true; };
//     }, [searchParams]);
//     // Fetch service rates (tax and service fee)
//     const fetchServiceRates = async () => {
//         try {
//             const response = await axiosInstance.get("https://backend.bedbd.com/api/service-rate");
//             setTax(response.data.taxRate * 100);
//             setServiceFee(response.data.serviceFee * 100);
//         } catch (error) {
//             console.error("Failed to fetch service rates:", error);
//         }
//     };

//     // Fetch booking details to get the booked date intervals
//     const fetchBookingDetails = async () => {
//         setLoading(true);
//         try {
//             const response = await axiosInstance.get(`/property-book-list/${id}`);
//             const bookedRanges = response.data.bookings.map((booking) => ({
//                 start: new Date(booking.checkinDate),
//                 end: new Date(booking.checkoutDate),
//             }));
//             setBookedDates(bookedRanges);
//         } catch (error) {
//             setError("Failed to load booking details.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Format a date string (DD-MM-YYYY) to Date object
//     const formatDate = (dateString) => {
//         const dateParts = dateString.split('-');
//         return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
//     };

//     // Handle change for check-in date
//     const handleCheckInChange = (date) => {
//         setCheckInDate(date); // Update check-in date
//         setCheckOutDate(null); // Reset check-out date when check-in changes
//         setTimeout(() => checkOutPickerRef.current?.setFocus(), 100); // Focus check-out picker
//     };

//     // Handle change for check-out date
//     const handleCheckOutChange = (date) => {
//         setCheckOutDate(date);
//     };

//     // Handle reservation submission
//     const handleSubmitReserve = async () => {
//         if (!token) {
//             router.push("/login/email");
//             return;
//         }
//         if (!user?.varificationId) {
//             alert("Please Verify your Identity");
//             router.push("/registration/start");
//             return;
//         }
//         if (!checkInDate || !checkOutDate) {
//             setError("Please select both Check-In and Check-Out dates.");
//             return;
//         }

//         const reservationData = {
//             propertyId: id,
//             checkinDate: checkInDate.toISOString().split("T")[0],
//             checkoutDate: checkOutDate.toISOString().split("T")[0],
//             guestCount,
//         };

//         setLoading(true);
//         setError(null);

//         try {
//             await axiosInstance.post(`/book-property/${id}`, reservationData);
//             setLoading(false);
//         } catch (error) {
//             setError("Failed to make the reservation. Please try again.");
//             setLoading(false);
//         }
//     };

//     // Calculate the total number of nights between check-in and check-out
//     const calculateDays = () => {
//         if (checkInDate && checkOutDate) {
//             const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
//             const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//             return days > 0 ? days : 1; // Return 1 if days is 0 or negative
//         }
//         return 1;
//     };

//     const totalNights = calculateDays();
//     const totalserviceFee = (serviceFee * totalNights).toFixed(2);
//     const totalGroundPrice = (GroundPrice * totalNights).toFixed(2);
//     const totalTax = (tax * totalNights).toFixed(2);
//     const totalPrice = (
//         parseFloat(totalGroundPrice) +
//         parseFloat(totalserviceFee) +
//         parseFloat(totalTax)
//     ).toFixed(2);

//     const handleCounterChange = (name, newValue) => {
//         setGuestCount(newValue);
//     };

//     // Memoized excluded date intervals for the date picker
//     const excludedDateIntervals = useMemo(() => bookedDates, [bookedDates]);

//     // Effect to set default date range from searchParams (if available)
    

//     return (
//         <div className="top-12 sticky rounded-lg drop-shadow-booking-box bg-white">
//             <div className="relative p-6 custom-underline-primary-400">
//                 <h3 className="text-neutral-700 font-semibold text-3xl">
//                     ${GroundPrice} <span className="text-neutral-500 text-lg"> /Night</span>
//                 </h3>
//             </div>

//             <div className="mt-8 mx-6 border border-neutral-400 rounded-lg overflow-hidden">
//                 <div className="py-4 px-8">
//                     <label className="block text-neutral-600 text-sm font-semibold">
//                         Check-In Date
//                     </label>
//                     <DatePicker
//                         selected={checkInDate}
//                         onChange={handleCheckInChange}
//                         minDate={new Date()}
//                         excludeDateIntervals={excludedDateIntervals}
//                         placeholderText="Select Check-In Date"
//                         className="text-neutral-300 font-medium"
//                     />
//                 </div>
//                 <div className="py-4 px-8">
//                     <label className="block text-neutral-600 text-sm font-semibold">
//                         Check-Out Date
//                     </label>
//                     <DatePicker
//                         selected={checkOutDate}
//                         onChange={handleCheckOutChange}
//                         minDate={checkInDate || new Date()}
//                         excludeDateIntervals={excludedDateIntervals}
//                         placeholderText="Select Check-Out Date"
//                         className="text-neutral-300 font-medium"
//                         ref={checkOutPickerRef}
//                     />
//                 </div>
//             </div>

//             <button
//                 className="mt-4 mb-8 btn btn-primary rounded-full max-w-96 relative-x-center"
//                 onClick={handleSubmitReserve}
//                 disabled={loading}
//             >
//                 {loading ? "Processing..." : "Reserve Now"}
//             </button>

//             {error && <p className="text-center text-red-500">{error}</p>}
//         </div>
//     );
// };

// export default BookingBox;











"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axiosInstance from "@/redux/services/axiosInstance";

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
            const response = await axiosInstance.get("https://backend.bedbd.com/api/service-rate");
            setTax(response.data.taxRate * 100);
            setServiceFee(response.data.serviceFee * 100);
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
            checkinDate: checkInDate.toISOString().split("T")[0],
            checkoutDate: checkOutDate.toISOString().split("T")[0],
            guestCount,
        };

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
    const totalserviceFee = (serviceFee * totalNights).toFixed(2);
    const totalGroundPrice = (GroundPrice * totalNights).toFixed(2);
    const totalTax = (tax * totalNights).toFixed(2);
    const totalPrice = (
        parseFloat(totalGroundPrice) +
        parseFloat(totalserviceFee) +
        parseFloat(totalTax)
    ).toFixed(2);

    const handleCounterChange = (name, newValue) => {
        setGuestCount(newValue);
    };

    // Memoized excluded date intervals for the date picker
    const excludedDateIntervals = useMemo(() => bookedDates, [bookedDates]);

    // Effect to set default date range from searchParams (if available)
    

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
