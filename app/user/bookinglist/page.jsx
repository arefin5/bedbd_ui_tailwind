

"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/redux/services/axiosInstance";
import { useRouter } from "next/navigation";

export default function Page() {
  const [fetchFlag, setFetchFlag] = useState(false);
  const [bookingList, setBookingList] = useState([]);
  const router = useRouter();

  const fetchSuccess = async () => {
    try {
      const response = await axiosInstance.get("/user-booking-list");
      console.log("API Response:", response.data.bookings);
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

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(
      2,
      "0"
    )}/${String(date.getUTCDate()).padStart(2, "0")}`;
  };

  return (
    <div className="w-full">
      <h1>Book-list</h1>

      <h2>Bookings</h2>
      {bookingList.length > 0 ? (
        <table className="min-w-full table-auto mb-8">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Check In</th>
              <th className="px-4 py-2 border">Check Out</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((item) => (
              <tr key={item._id}>
                <td className="px-4 py-2 border">{item.property.propertyTitle}</td>
                <td className="px-4 py-2 border">{item.price}</td>
                <td className="px-4 py-2 border">{formatDate(item.checkinDate)}</td>
                <td className="px-4 py-2 border">{formatDate(item.checkoutDate)}</td>
                <td className="px-4 py-2 border">{item.status}</td>
                <td className="px-4 py-2 border">
                  {/* <button
                    onClick={() => claimPayment(item._id)}
                    className={`px-4 py-2 rounded ${item.status === "hostApproved"
                        ? "bg-green-500 text-white"
                        : "bg-red-400 text-white cursor-not-allowed"
                      }`}

                    disabled={!(item.status === "hostApproved")}
                  >
                    Pay
                  </button> */}
                  <button
                    onClick={() => claimPayment(item._id)}
                    className={`px-4 py-2 rounded ${item.status === "hostApproved"
                        ? "bg-green-500 text-white"
                        : item.status === "pending"
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-blue-500 text-white"
                      }`}
                    disabled={item.status === "pending"}
                  >
                    {item.status === "hostApproved"
                      ? "Pay"
                      : item.status === "pending"
                        ? "Waiting"
                        : "Cancel"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings available.</p>
      )}
    </div>
  );
}
