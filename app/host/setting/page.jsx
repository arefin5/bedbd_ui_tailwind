
"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/redux/services/axiosInstance";
import PendingComponent from "./PendingComponent";
import ListedComponent from "./ListedComponent";
import RejectedComponent from "./RejectedComponent";
import InactiveComponent from "./InactiveComponent";

const BookingList = () => {
  const [pageState, setPageState] = useState("pending");
  const [pendingList, setPendingList] = useState([]);
  const [listedList, setListedList] = useState([]);
  const [rejectedList, setRejectedList] = useState([]);
  const [inactiveList, setInactiveList] = useState([]);

  useEffect(() => {
    fetchPending();
    fetchListed();
    fetchRejected();
    fetchInactive();
  }, []);

  const fetchPending = async () => {
    try {
      const response = await axiosInstance.get("/host-pending-booking-list");
      setPendingList(response.data || []);
    } catch (error) {
      console.error("Error fetching pending list:", error);
    }
  };

  const fetchListed = async () => {
    try {
      // const response = await axiosInstance.get("/host-booking-upcoming");
      const response = await axiosInstance.get("/host-inactive-booking-list");

      setListedList(response.data || []);
    } catch (error) {
      console.error("Error fetching listed list:", error);
    }
  };

  const fetchRejected = async () => {
    try {
      const response = await axiosInstance.get("/host-inactive-booking-list");

      // const response = await axiosInstance.get("/host-reject-booking-list");
      setRejectedList(response.data || []);
    } catch (error) {
      console.error("Error fetching rejected list:", error);
    }
  };

  const fetchInactive = async () => {
    try {
      const response = await axiosInstance.get("/host-inactive-booking-list");
      setInactiveList(response.data || []);
    } catch (error) {
      console.error("Error fetching inactive list:", error);
    }
  };

  const handleApprove = async (bookingId) => {
    try {
      const response = await axiosInstance.put(`/approved-booking/${bookingId}`);
      if (response.status === 200) {
        setPendingList((prev) => prev.filter((item) => item._id !== bookingId));
        alert("Booking approved!");
      }
    } catch (error) {
      console.error("Error approving booking:", error);
      alert("Failed to approve the booking.");
    }
  };

  const handleReject = async (bookingId) => {
    try {
      const response = await axiosInstance.post(`/reject-booking/${bookingId}`);
      if (response.status === 200) {
        setPendingList((prev) => prev.filter((item) => item._id !== bookingId));
        alert("Booking rejected!");
      }
    } catch (error) {
      console.error("Error rejecting booking:", error);
      alert("Failed to reject the booking.");
    }
  };

  const renderComponent = () => {
    switch (pageState) {
      case "pending":
        return (
          <PendingComponent
            data={pendingList}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        );
      case "listed":
        return <ListedComponent data={listedList} />;
      case "rejected":
        return <RejectedComponent data={rejectedList} />;
      case "inactive":
        return <InactiveComponent data={inactiveList} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 border-b pb-2">
        {["pending", "listed", "rejected", "inactive"].map((state) => (
          <button
            key={state}
            onClick={() => setPageState(state)}
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
      <div className="mt-6">{renderComponent()}</div>
    </div>
  );
};

export default BookingList;
