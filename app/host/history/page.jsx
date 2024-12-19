
"use client";

import axiosInstance from "@/redux/services/axiosInstance";
import { useEffect, useState } from "react";

const Page = () => {
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
        <div className=" ml-5 mr-5 bg-gray-50 w-full">
        <div className="p-6 bg-gray-50 min-h-screen space-y-10">
            {/* Row 1: Today Section */}
            <div className="grid grid-cols-2">
                {/* Left Half: Title */}
                <div>
                    <h2 className="text-2xl font-bold">Today</h2>
                </div>

                {/* Right Half: List */}
                <div className="p-6">
                    {loading ? (
                        <p>Loading...</p>
                    ) : today.length === 0 ? (
                        <p>No bookings today.</p>
                    ) : (
                        <ul className="list-disc space-y-2 pl-5">
                            {today.map((item, index) => (
                                <li key={index} className="text-gray-700">
                                    {item.status === "pending" ? (
                                        <>
                                            A user has a{" "}
                                            <span className="text-blue-500 font-semibold">
                                                 request for booking
                                             </span>
                                            .
                                        </>
                                    ) : (
                                        <>
                                            A user successfully{" "}
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

            {/* Row 2: All History Section */}
            <div className="grid grid-cols-2 ">
                {/* Left Half: Title */}
                <div>
                    <h2 className="text-2xl font-bold">Last week</h2>
                </div>

                {/* Right Half: List */}
                <div className="p-6">
                    {loading ? (
                        <p>Loading...</p>
                    ) : history.length === 0 ? (
                        <p>No history available.</p>
                    ) : (
                        <ul className="list-disc space-y-2 pl-5">
                            {history.map((item, index) => (
                                <li key={index} className="text-gray-700">
                                    {item.status === "pending" ? (
                                        <>
                                            A user has a{" "}
                                            <span className="text-blue-500 font-semibold">
                                                request for  booking 
                                            </span>
                                            .
                                        </>
                                    ) : (
                                        <>
                                            A user successfully{" "}
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

export default Page;
