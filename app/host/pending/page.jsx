
"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/redux/services/axiosInstance";

export default function Page() {
  const [pendingList, setPendingList] = useState([]);
  const [fetchFlag, setFetchFlag] = useState(false); // Added a fetch flag to trigger useEffect

  // Define the fetch function outside the useEffect
  const fetchSuccess = async () => {
    try {
      const response = await axiosInstance.get("/host-pending-booking-list");
      console.log("response", response.data);
      setPendingList(response?.data || []);
    } catch (error) {
      console.error("Error fetching pending list:", error);
    }
  };

  // This useEffect will now run whenever fetchFlag changes
  useEffect(() => {
    fetchSuccess();
  }, [fetchFlag]); // Only re-run the effect when fetchFlag changes

  const handleApprove = async (bookingId) => {
    try {
      const response = await axiosInstance.put(`/approved-booking/${bookingId}`);
      if (response.status === 200) {
        // Remove the approved booking from the list immediately
        setPendingList(pendingList.filter(item => item._id !== bookingId));
        alert("Booking approved!");

        setFetchFlag(prev => !prev); 
      }
    } catch (error) {
      console.error("Error approving booking:", error);
      alert("Failed to approve the booking.");
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(2, '0')}/${String(date.getUTCDate()).padStart(2, '0')}`;
  };

  return (
    <div className="w-full">
      {pendingList.length > 0 ? (
        <table className="min-w-full table-auto">
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
            {pendingList.map((item) => (
              <tr key={item._id}>
                <td className="px-4 py-2 border">{item.property.propertyTitle}</td>
                <td className="px-4 py-2 border">{item.basePrice}</td>
                <td className="px-4 py-2 border">{formatDate(item.checkinDate)}</td>
                <td className="px-4 py-2 border">{formatDate(item.checkoutDate)}</td>
                <td className="px-4 py-2 border">{item.status}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleApprove(item._id)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No pending bookings available.</p>
      )}
    </div>
  );
}
