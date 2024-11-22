
// // "use client";
// // import { useState, useEffect } from "react";
// // import axiosInstance from "@/redux/services/axiosInstance";
// // import * as XLSX from "xlsx";
// // import { saveAs } from "file-saver";

// // export default function Page() {
// //   const [fetchFlag, setFetchFlag] = useState(false);
// //   const [bookingList, setBookingList] = useState([]);
// //   const [filteredBookings, setFilteredBookings] = useState([]);
// //   const [upcomingBookings, setUpcomingBookings] = useState([]);
// //   const today = new Date().toISOString().split("T")[0];
// //   const [beforeDate, setBeforeDate] = useState(today);
// //   const [afterDate, setAfterDate] = useState("");

// //   const fetchSuccess = async () => {
// //     try {
// //       const response = await axiosInstance.get("/host-all-booking-list");
// //       setBookingList(response?.data || []);
// //     } catch (error) {
// //       console.error("Error fetching pending list:", error);
// //     }
// //   };

// //   const filterBookings = () => {
// //     const before = beforeDate ? new Date(beforeDate) : null;
// //     const after = afterDate ? new Date(afterDate) : null;
// //     const filtered = bookingList.filter((booking) => {
// //       const checkinDate = new Date(booking.checkinDate);
// //       if (before && checkinDate > before) return false;
// //       if (after && checkinDate < after) return false;
// //       return true;
// //     });

// //     setFilteredBookings(filtered);
// //   };

// //   const filterUpcomingBookings = () => {
// //     const today = new Date();

// //     const upcoming = bookingList.filter((booking) => {
// //       const checkinDate = new Date(booking.checkinDate);
// //       return checkinDate > today;
// //     });

// //     setUpcomingBookings(upcoming);
// //   };

// //   useEffect(() => {
// //     fetchSuccess();
// //   }, [fetchFlag]);

// //   useEffect(() => {
// //     filterBookings();
// //     filterUpcomingBookings();
// //   }, [bookingList, beforeDate, afterDate]);

// //   const claimPayment = async (bookingId) => {
// //     try {
// //       const response = await axiosInstance.put(`/claim-booking-payment/${bookingId}`);
// //       if (response.status === 200) {
// //         setBookingList(bookingList.filter((item) => item._id !== bookingId));
// //         alert("Booking payment Claim Success!");
// //         setFetchFlag((prev) => !prev);
// //       }
// //     } catch (error) {
// //       console.error("Error approving booking:", error);
// //       alert("Failed to approve the booking.");
// //     }
// //   };

// //   const formatDate = (dateStr) => {
// //     const date = new Date(dateStr);
// //     return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(
// //       2,
// //       "0"
// //     )}/${String(date.getUTCDate()).padStart(2, "0")}`;
// //   };

// //   const exportToExcel = () => {
// //     const data = filteredBookings.map((booking) => ({
// //       Title: booking.property.propertyTitle,
// //       Price: booking.basePrice,
// //       "Check In": formatDate(booking.checkinDate),
// //       "Check Out": formatDate(booking.checkoutDate),
// //       Status: booking.status,
// //     }));

// //     const worksheet = XLSX.utils.json_to_sheet(data);
// //     const workbook = XLSX.utils.book_new();
// //     XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");

// //     const excelBuffer = XLSX.write(workbook, {
// //       bookType: "xlsx",
// //       type: "array",
// //     });

// //     const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
// //     saveAs(blob, `Bookings_${new Date().toISOString()}.xlsx`);
// //   };

// //   return (
// //     <div className="w-full">
// //       <h1>Book-list</h1>

// //       <div className="mb-4 flex gap-4">
// //         <div>
// //           <label htmlFor="afterDate">Start Date:</label>
// //           <input
// //             type="date"
// //             id="afterDate"
// //             value={afterDate}
// //             onChange={(e) => setAfterDate(e.target.value)}
// //             className="border p-2"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="beforeDate">End Date Date:</label>
// //           <input
// //             type="date"
// //             id="beforeDate"
// //             value={beforeDate}
// //             onChange={(e) => setBeforeDate(e.target.value)}
// //             className="border p-2"
// //           />
// //         </div>
// //         <button
// //         onClick={exportToExcel}
// //         className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
// //       >
// //         Export to Excel
// //       </button>
// //       </div>



// //       <h2>Filtered Bookings</h2>
// //       {filteredBookings.length > 0 ? (
// //         <table className="min-w-full table-auto mb-8">
// //           <thead>
// //             <tr>
// //               <th className="px-4 py-2 border">Title</th>
// //               <th className="px-4 py-2 border">Price</th>
// //               <th className="px-4 py-2 border">Check In</th>
// //               <th className="px-4 py-2 border">Check Out</th>
// //               <th className="px-4 py-2 border">Status</th>
// //               <th className="px-4 py-2 border">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {filteredBookings.map((item) => (
// //               <tr key={item._id}>
// //                 <td className="px-4 py-2 border">
// //                   {item.property.propertyTitle}
// //                 </td>
// //                 <td className="px-4 py-2 border">{item.basePrice}</td>
// //                 <td className="px-4 py-2 border">{formatDate(item.checkinDate)}</td>
// //                 <td className="px-4 py-2 border">{formatDate(item.checkoutDate)}</td>
// //                 <td className="px-4 py-2 border">{item.status}</td>
// //                 <td className="px-4 py-2 border">
// //                   <button
// //                     onClick={() => claimPayment(item._id)}
// //                     className="bg-green-500 text-white px-4 py-2 rounded"
// //                   >
// //                     Claim Payment
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       ) : (
// //         <p>No bookings available for the selected dates.</p>
// //       )}
// //             {/* Upcoming Bookings */}
// //             <h2>Upcoming Bookings</h2>
// //       {upcomingBookings.length > 0 ? (
// //         <table className="min-w-full table-auto">
// //           <thead>
// //             <tr>
// //               <th className="px-4 py-2 border">Title</th>
// //               <th className="px-4 py-2 border">Price</th>
// //               <th className="px-4 py-2 border">Check In</th>
// //               <th className="px-4 py-2 border">Check Out</th>
// //               <th className="px-4 py-2 border">Status</th>
// //               <th className="px-4 py-2 border">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {upcomingBookings.map((item) => (
// //               <tr key={item._id}>
// //                 <td className="px-4 py-2 border">{item.property.propertyTitle}</td>
// //                 <td className="px-4 py-2 border">{item.basePrice}</td>
// //                 <td className="px-4 py-2 border">{formatDate(item.checkinDate)}</td>
// //                 <td className="px-4 py-2 border">{formatDate(item.checkoutDate)}</td>
// //                 <td className="px-4 py-2 border">{item.status}</td>
// //                 <td className="px-4 py-2 border">
// //                   <button
// //                     onClick={() => claimPayment(item._id)}
// //                     className="bg-green-500 text-white px-4 py-2 rounded"
// //                   >
// //                     Claim Payment
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       ) : (
// //         <p>No upcoming bookings available.</p>
// //       )}
// //     </div>
// //   );
// // }
// "use client";
// import { useState, useEffect } from "react";
// import axiosInstance from "@/redux/services/axiosInstance";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// export default function Page() {
//   const [fetchFlag, setFetchFlag] = useState(false);
//   const [bookingList, setBookingList] = useState([]);
//   const [filteredBookings, setFilteredBookings] = useState([]);
//   const [upcomingBookings, setUpcomingBookings] = useState([]);
//   const today = new Date().toISOString().split("T")[0];
//   const [beforeDate, setBeforeDate] = useState(today);
//   const [afterDate, setAfterDate] = useState("");

//   const fetchSuccess = async () => {
//     try {
//       const response = await axiosInstance.get("/host-all-booking-list");
//       setBookingList(response?.data || []);
//     } catch (error) {
//       console.error("Error fetching pending list:", error);
//     }
//   };

//   const filterBookings = () => {
//     const before = beforeDate ? new Date(beforeDate) : null;
//     const after = afterDate ? new Date(afterDate) : null;
//     const filtered = bookingList.filter((booking) => {
//       const checkinDate = new Date(booking.checkinDate);
//       if (before && checkinDate > before) return false;
//       if (after && checkinDate < after) return false;
//       return true;
//     });

//     setFilteredBookings(filtered);
//   };

//   const filterUpcomingBookings = () => {
//     const today = new Date();

//     const upcoming = bookingList.filter((booking) => {
//       const checkinDate = new Date(booking.checkinDate);
//       return checkinDate > today;
//     });

//     setUpcomingBookings(upcoming);
//   };

//   useEffect(() => {
//     fetchSuccess();
//   }, [fetchFlag]);

//   useEffect(() => {
//     filterBookings();
//     filterUpcomingBookings();
//   }, [bookingList, beforeDate, afterDate]);

//   const claimPayment = async (bookingId) => {
//     try {
//       const response = await axiosInstance.put(`/claim-booking-payment/${bookingId}`);
//       if (response.status === 200) {
//         setBookingList(bookingList.filter((item) => item._id !== bookingId));
//         alert("Booking payment Claim Success!");
//         setFetchFlag((prev) => !prev);
//       }
//     } catch (error) {
//       console.error("Error approving booking:", error);
//       alert("Failed to approve the booking.");
//     }
//   };

//   const formatDate = (dateStr) => {
//     const date = new Date(dateStr);
//     return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(
//       2,
//       "0"
//     )}/${String(date.getUTCDate()).padStart(2, "0")}`;
//   };

//   const exportToExcel = () => {
//     const data = filteredBookings.map((booking) => ({
//       Title: booking.property.propertyTitle,
//       Price: booking.basePrice,
//       "Check In": formatDate(booking.checkinDate),
//       "Check Out": formatDate(booking.checkoutDate),
//       Status: booking.status,
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });

//     const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
//     saveAs(blob, `Bookings_${new Date().toISOString()}.xlsx`);
//   };

//   return (
//     <div className="w-full">
//       <h1>Book-list</h1>

//       <div className="mb-4 flex gap-4">
//         <div>
//           <label htmlFor="afterDate">Start Date:</label>
//           <input
//             type="date"
//             id="afterDate"
//             placeholder="mm/dd/yyyy"
//             value={afterDate}
//             onChange={(e) => setAfterDate(e.target.value)}
//             className="border p-2"
//           />
//         </div>
//         <div>
//           <label htmlFor="beforeDate">End Date:</label>
//           <input
//             type="date"
//             id="beforeDate"
//             placeholder="mm/dd/yyyy"
//             value={beforeDate}
//             onChange={(e) => setBeforeDate(e.target.value)}
//             className="border p-2"
//           />
//         </div>
//         <button
//           onClick={exportToExcel}
//           className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//         >
//           Export to Excel
//         </button>
//       </div>

//       <h2>Filtered Bookings</h2>
//       {filteredBookings.length > 0 ? (
//         <table className="min-w-full table-auto mb-8">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border">Title</th>
//               <th className="px-4 py-2 border">Price</th>
//               <th className="px-4 py-2 border">Check In</th>
//               <th className="px-4 py-2 border">Check Out</th>
//               <th className="px-4 py-2 border">Status</th>
//               <th className="px-4 py-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredBookings.map((item) => (
//               <tr key={item._id}>
//                 <td className="px-4 py-2 border">{item.property.propertyTitle}</td>
//                 <td className="px-4 py-2 border">{item.basePrice}</td>
//                 <td className="px-4 py-2 border">{formatDate(item.checkinDate)}</td>
//                 <td className="px-4 py-2 border">{formatDate(item.checkoutDate)}</td>
//                 <td className="px-4 py-2 border">{item.status}</td>
//                 <td className="px-4 py-2 border">
//                   <button
//                     onClick={() => claimPayment(item._id)}
//                     disabled={new Date(item.checkoutDate) > new Date()}
//                     className={`px-4 py-2 rounded ${
//                       new Date(item.checkoutDate) > new Date()
//                         ? "bg-gray-500 text-gray-300 cursor-not-allowed"
//                         : "bg-green-500 text-white"
//                     }`}
//                   >
//                     {new Date(item.checkoutDate) > new Date()
//                       ? "Unavailable"
//                       : "Claim Payment"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No bookings available for the selected dates.</p>
//       )}
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/redux/services/axiosInstance";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function Page() {
    const [fetchFlag, setFetchFlag] = useState(false);
    const [bookingList, setBookingList] = useState([]);
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [upcomingBookings, setUpcomingBookings] = useState([]);
    const today = new Date().toISOString().split("T")[0];
    const [beforeDate, setBeforeDate] = useState(today);
    const [afterDate, setAfterDate] = useState("");

    const fetchSuccess = async () => {
        try {
            const response = await axiosInstance.get("/host-all-booking-list");
            setBookingList(response?.data || []);
        } catch (error) {
            console.error("Error fetching pending list:", error);
        }
    };

    const filterBookings = () => {
        const before = beforeDate ? new Date(beforeDate) : null;
        const after = afterDate ? new Date(afterDate) : null;
        const filtered = bookingList.filter((booking) => {
            const checkinDate = new Date(booking.checkinDate);
            if (before && checkinDate > before) return false;
            if (after && checkinDate < after) return false;
            return true;
        });

        setFilteredBookings(filtered);
    };

    const filterUpcomingBookings = () => {
        const today = new Date();

        const upcoming = bookingList.filter((booking) => {
            const checkinDate = new Date(booking.checkinDate);
            return checkinDate > today;
        });

        setUpcomingBookings(upcoming);
    };

    useEffect(() => {
        fetchSuccess();
    }, [fetchFlag]);

    useEffect(() => {
        filterBookings();
        filterUpcomingBookings();
    }, [bookingList, beforeDate, afterDate]);

    const claimPayment = async (bookingId) => {
        try {
            const response = await axiosInstance.put(`/claim-booking-payment/${bookingId}`);
            if (response.status === 200) {
                setBookingList(bookingList.filter((item) => item._id !== bookingId));
                alert("Booking payment Claim Success!");
                setFetchFlag((prev) => !prev);
            }
        } catch (error) {
            console.error("Error claiming booking payment:", error);
            alert("Failed to claim the booking payment.");
        }
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(
            2,
            "0"
        )}/${String(date.getUTCDate()).padStart(2, "0")}`;
    };

    const exportToExcel = () => {
        const data = filteredBookings.map((booking) => ({
            Title: booking.property.propertyTitle,
            Price: booking.basePrice,
            "Check In": formatDate(booking.checkinDate),
            "Check Out": formatDate(booking.checkoutDate),
            Status: booking.paymentClaim,
        }));

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");

        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });

        const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(blob, `Bookings_${new Date().toISOString()}.xlsx`);
    };

    return (
        <div className="w-full">
            <h1>Book-list</h1>

            <div className="mb-4 flex gap-4">
                <div>
                    <label htmlFor="afterDate">Start Date:</label>
                    <input
                        type="date"
                        id="afterDate"
                        value={afterDate}
                        onChange={(e) => setAfterDate(e.target.value)}
                        className="border p-2"
                    />
                </div>
                <div>
                    <label htmlFor="beforeDate">End Date:</label>
                    <input
                        type="date"
                        id="beforeDate"
                        value={beforeDate}
                        onChange={(e) => setBeforeDate(e.target.value)}
                        className="border p-2"
                    />
                </div>
                <button
                    onClick={exportToExcel}
                    className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                >
                    Export to Excel
                </button>
            </div>

            <h2>Filtered Bookings</h2>
            {filteredBookings.length > 0 ? (
                <table className="min-w-full table-auto mb-8">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Title</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Check In</th>
                            <th className="px-4 py-2 border">Check Out</th>
                            <th className="px-4 py-2 border">Payment</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBookings.map((item) => (
                            <tr key={item._id}>
                                <td className="px-4 py-2 border">{item.property.propertyTitle}</td>
                                <td className="px-4 py-2 border">{item.basePrice}</td>
                                <td className="px-4 py-2 border">{formatDate(item.checkinDate)}</td>
                                <td className="px-4 py-2 border">{formatDate(item.checkoutDate)}</td>
                                <td className="px-4 py-2 border">{item.paymentClaim}</td>
                                <td className="px-4 py-2 border">
                                    {/* <button
                    onClick={() => claimPayment(item._id)}
                    className={`px-4 py-2 rounded ${
                      new Date(item.checkoutDate) > new Date()
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-green-500 text-white"
                    }`}
                    disabled={new Date(item.checkoutDate) > new Date()}
                  >
                    Claim Payment
                  </button> */}
                                    {/* <button
                                        onClick={() => claimPayment(item._id)}
                                        className={`px-4 py-2 rounded ${item.paymentClaim !== "pending" || new Date(item.checkoutDate) > new Date()
                                                ? "bg-gray-400 text-white cursor-not-allowed"
                                                : "bg-green-500 text-white"
                                            }`}
                                        disabled={item.paymentClaim !== "pending" || new Date(item.checkoutDate) > new Date()}
                                    >
                                        Claim Payment
                                    </button> */}

                                    {/* <button
                                        onClick={() => claimPayment(item._id)}
                                        className={`px-4 py-2 rounded ${item.paymentClaim !== "pending" || new Date(item.checkoutDate) > new Date()
                                                ? "bg-gray-400 text-white cursor-not-allowed"
                                                : "bg-green-500 text-white"
                                            }`}
                                        disabled={item.paymentClaim !== "pending" || new Date(item.checkoutDate) > new Date()}
                                    >
                                        {item.paymentClaim === "pending"
                                            ? "Claim Payment"
                                            : item.paymentClaim.charAt(0).toUpperCase() + item.paymentClaim.slice(1)}
                                    </button> */}
                                    <button
    onClick={() => claimPayment(item._id)}
    className={`px-4 py-2 rounded ${
      item.paymentClaim === "pending" && new Date(item.checkoutDate) <= new Date()
        ? "bg-green-500 text-white"
        : "bg-gray-400 text-white cursor-not-allowed"
    }`}
    disabled={!(item.paymentClaim === "pending" && new Date(item.checkoutDate) <= new Date())}
  >
    {item.paymentClaim === "pending" && new Date(item.checkoutDate) <= new Date()
      ? "Claim Payment"
      : item.paymentClaim.charAt(0).toUpperCase() + item.paymentClaim.slice(1)}
  </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No bookings available for the selected dates.</p>
            )}

            <h2>Upcoming Bookings</h2>
            {upcomingBookings.length > 0 ? (
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Title</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Check In</th>
                            <th className="px-4 py-2 border">Check Out</th>
                            <th className="px-4 py-2 border">Payment</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {upcomingBookings.map((item) => (
                            <tr key={item._id}>
                                <td className="px-4 py-2 border">{item.property.propertyTitle}</td>
                                <td className="px-4 py-2 border">{item.basePrice}</td>
                                <td className="px-4 py-2 border">{formatDate(item.checkinDate)}</td>
                                <td className="px-4 py-2 border">{formatDate(item.checkoutDate)}</td>
                                <td className="px-4 py-2 border">{item.paymentClaim}</td>
                                <td className="px-4 py-2 border">
                                    <button
                                        onClick={() => claimPayment(item._id)}
                                        className={`px-4 py-2 rounded ${item.paymentClaim !== "pending" || new Date(item.checkoutDate) > new Date()
                                            ? "bg-gray-400 text-white cursor-not-allowed"
                                            : "bg-green-500 text-white"
                                            }`}
                                        disabled={item.paymentClaim !== "pending" || new Date(item.checkoutDate) > new Date()}
                                    >
                                        Claim Payment
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No upcoming bookings available.</p>
            )}
        </div>
    );
}
