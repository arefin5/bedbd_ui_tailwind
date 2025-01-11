
"use client"

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Socket URL (use the proper URL for your backend)
const SOCKET_URL = "https://backend.bedbd.com";

const useSocket = () => {
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    // Ensure the socket connection is only created on the client side
    if (typeof window !== "undefined") {
      const getToken = () => localStorage.getItem("token");  // Get the token from localStorage or Redux

      const socketInstance = io(SOCKET_URL, {
        transports: ["websocket"],
        query: {
          token: getToken(),  // Pass the token to the server
        },
      });

      // Log connection status for debugging
      socketInstance.on("connect", () => {
        console.log("Connected to the socket server with ID:", socketInstance.id);
      });

      socketInstance.on("disconnect", () => {
        console.log("Disconnected from the socket server.");
      });

      // Set socket instance
      setSocket(socketInstance);

      // Cleanup on unmount
      return () => {
        socketInstance.disconnect();
      };
    }
  }, []);

  return socket;
};

export default useSocket;
