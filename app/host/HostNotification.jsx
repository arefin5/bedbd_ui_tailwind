
"use client";

import axiosInstance from "@/redux/services/axiosInstance";
import { useEffect, useState } from "react";

const HostNotification = () => {
    const [history, setHistory] = useState([]);
    const [today, setToday] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchHistory = async () => {
        try {
            const response = await axiosInstance.get("/host-all-booking-list");

            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            const todayDateString = currentDate.toISOString().split("T")[0];

            const filteredToday = response.data.filter((item) => {
                const updatedAt = item.updatedAt;
                const itemDate = updatedAt ? new Date(updatedAt) : null;

                if (!itemDate || isNaN(itemDate)) return false;

                itemDate.setHours(0, 0, 0, 0);
                return itemDate.toISOString().split("T")[0] === todayDateString;
            });

            setHistory(response.data);
            setToday(filteredToday);
        } catch (error) {
            console.error("Error fetching booking list:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <div className=" ">
        <div className="">
            {/* Row 1: Today Section */}
            <div className="">
                {/* Left Half: Title */}
                <div>
                    <h2 className="font-semibold ml-3">Today</h2>
                </div>

                {/* Right Half: List */}
                <div className="">
                    {loading ? (
                        <p>Loading...</p>
                    ) : today.length === 0 ? (
                        <p>No bookings today.</p>
                    ) : (
                        <ul className="ml-3">
                            {today.map((item, index) => (
                                <li key={index} className="text-gray-700">
                                    {item.status === "pending" ? (
                                        <>
                                            . A user has a{" "}
                                            <span className="text-blue-500 font-semibold">
                                                 request for booking
                                             </span>
                                            .
                                        </>
                                    ) : (
                                        <>
                                            . A user successfully{" "}
                                            <span className="text-green-500 font-semibold">
                                                booked
                                            </span>{" "}
                                            a room.
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

           
        </div>
        </div>
    );
};

export default HostNotification;
