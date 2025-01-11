
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import io from "socket.io-client";
import { Send } from "lucide-react"

// const SOCKET_URL = "http://localhost:5001";
const SOCKET_URL = "https://backend.bedbd.com";
const socket = io(SOCKET_URL, { transports: ['websocket'] });

const ChatComponent = ({
  userId,
  otherUserId,
  loadingMessages,
  setLoadingMessages,
}) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
    const [newMessage, setNewMessage] = useState("");
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null); // Actual authenticated user

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log("Connecting socket...");
    socket.connect();

    // Fetch initial message history
    socket.emit("getMessageHistory", { userId, otherUserId }, (response) => {
      setLoadingMessages(false);
      if (response?.status === "success") {
        // console.log("Fetched messages:", response.messages);
        setMessages(response.messages || []);
      } else {
        console.error("Error fetching messages:", response?.message);
      }
    });

    // Handle incoming messages dynamically
    const handleReceiveMessage = (message) => {
      console.log("New message received:", message);
      if (
        (message.sender === userId && message.receiver === otherUserId) ||
        (message.sender === otherUserId && message.receiver === userId)
      ) {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages, message];
          console.log("Updated messages:", updatedMessages);
          return updatedMessages;
        });
      }
    };

    socket.on("receiveMessage", handleReceiveMessage);

    // Clean up socket events on unmount
    return () => {
      console.log("Cleaning up socket...");
      socket.off("receiveMessage", handleReceiveMessage);
      socket.disconnect();
    };
  }, [userId, otherUserId, setLoadingMessages]);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    scrollToBottom();
  }, [messages]);
 useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        setToken(tokenFromStorage);
    }, []);

  const formatDateWithTime = (dateStr) => {
    const date = new Date(dateStr);
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minutes} ${ampm}`;
  };

  useEffect(() => {
   // Fetch token from localStorage
   const tokenFromStorage = localStorage.getItem("token");
   setToken(tokenFromStorage);

   if (tokenFromStorage) {
     socket.connect();
     socket.emit("authenticate", tokenFromStorage, (response) => {
       if (response.status === "success") {
         setUser(response.user._id);
         socket.emit("join", response.user._id);
       } else {
         console.error(response.message);
       }
     });
   }

   return () => {
     socket.disconnect();
   };
 }, []); // This effect only runs once after mount.
const handleSendMessage = () => {
   if (!otherUserId || !newMessage.trim()) return;
   const data = {
     sender: user, // Ensure user is properly defined
     receiver: otherUserId,
     message: newMessage,
   };
console.log("user",user);
console.log("userId",userId)
console.log(data)
   socket.emit("sendMessage", data, (response) => {
     if (response.status === "Message delivered") {
       setMessages((prevMessages) => [...prevMessages, data]); // Add new message to the list
       setNewMessage(""); // Clear input field
       console.log("Message sent successfully!", response);
     } else {
       console.error("Message delivery failed:", response.message);
     }
   });
};

  return (
   <>
      <div className="flex justify-center items-start w-full min-h-screen bg-gray-50">
      <div className="w-full flex flex-col gap-4 max-w-4xl">
        {loadingMessages ? (
          <p>Loading messages...</p>
        ) : messages.length > 0 ? (
          <>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === userId ? "justify-end" : "items-start gap-4"
                }`}
              >
                {msg.sender === userId ? (
                  <div className="relative p-4 rounded-lg text-neutral-800 font-medium text-base w-4/5">
                    <div className="bg-blue-500 p-4 rounded-lg">
                      <p>{msg.message}</p>
                    </div>
                    <p className="text-xs text-gray-200 mt-2 text-right">
                      Sent {formatDateWithTime(msg.createdAt)}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="relative h-8 w-8 min-w-8 rounded-full overflow-hidden">
                      <Image
                        src="/dummy/sample-profile-photo.jpg"
                        alt="Profile"
                        fill
                      />
                    </div>
                    <div className="relative p-4 rounded-lg text-neutral-800 font-medium text-base bg-white w-4/5">
                      <p>{msg.message}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        Sent {formatDateWithTime(msg.createdAt)}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        ) : (
          <p>No messages</p>
        )}
      </div>
    </div>
    <>
{/* Message Send section */}
                <div className="mt-8 flex bg-white rounded-lg shadow-inner pr-4">
                <textarea 
                    class="bg-transparent shadow-none w-full border-none p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-0 focus:border-gray-300 focus:outline-none active:outline-none"
                    rows="2"
                    placeholder="Enter your text here..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button className="p-3 h-fit my-auto rounded-full bg-secondary-400"
                     onClick={handleSendMessage}>
                        <Send className="icon text-white "/>
                    </button>
                </div>
    </>
   </>
  );
};

export default ChatComponent;
