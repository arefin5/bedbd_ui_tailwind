
"use client";

import { useState, useEffect } from "react";
import io from "socket.io-client";
import { X, SendHorizonal, MessageCircleMore } from "lucide-react";
import ChatComponentHooks from "@/components/chatHook";

const socket = io("https://backend.bedbd.com", { autoConnect: false });
// const socket = io("http://localhost:5001", { autoConnect: false });

// Page Component
export default function Page() {
    const [showChatBox, setShowChatBox] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); // Current conversation user
    const [user, setUser] = useState(null); // Actual authenticated user
    const [token, setToken] = useState(null);
    const [loadingMessages, setLoadingMessages] = useState(false); // Loading state
    const [newMessage, setNewMessage] = useState("");
    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        setToken(tokenFromStorage);
    }, []);

    useEffect(() => {
        if (!token) return;

        socket.connect();
        socket.emit("authenticate", token, (response) => {
            if (response.status === "success") {
                setUser(response.user._id);
                socket.emit("join", response.user._id);
                fetchConversations(response.user._id);
            } else {
                console.error(response.message);
            }
        });

        socket.on("receiveMessage", (message) => {
            if (selectedUser && message.sender === selectedUser.id) {
                setMessages((prevMessages) => [...prevMessages, message]);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, [token, selectedUser]);

    const fetchConversations = (userId) => {
        socket.emit("getConversations", userId, (response) => {
            if (response.status === "success") {
                setConversations(response.conversations);
                setShowChatBox(true);
            } else {
                console.error(response.message);
            }
        });
    };

    const selectConversation = (contact) => {
        setSelectedUser(contact);
        setLoadingMessages(true); // Loading state
    };
    function getUsernameFromEmail(email) {
        if (!email.includes("@")) {
            throw new Error("Invalid email address");
        }
        return email.split("@")[0];
    }
    const handleSendMessage = () => {
        const sender = user;
        const receiver = selectedUser.userId;
        const data = { sender, receiver, message: newMessage };

        socket.emit("sendMessage", data, (response) => {
            if (response.status === "Message delivered") {
                console.log("Message sent successfully!");
            } else {
                console.error("Message delivery failed:", response.message);
            }
        });

        setNewMessage(""); 
    };

    return (
        <div className="w-full">
            <div>
                {/* Conversations List */}
                <div className="border-b p-4">
                    <h3 className="text-lg font-medium">Conversations</h3>
                    <div className="mt-2 max-h-40 overflow-y-auto">
                        {conversations.map((conv) => (
                            <div
                                key={conv._id}
                                onClick={() => selectConversation(conv)}
                                className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
                            >
                                <p>
                                    {getUsernameFromEmail(conv.userDetails.email)}:{" "}
                                    {conv.lastMessage}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedUser && (
                    <>
                        {/* Chat Box */}
                        <div className="p-4 border-b">
                            <h3 className="font-medium">{selectedUser._id}</h3>
                        </div>

                        <div className="px-4 py-4 h-[268px] overflow-y-auto">
                            <ChatComponentHooks
                                userId={user}
                                otherUserId={selectedUser.userId}
                                socket={socket}
                                loadingMessages={loadingMessages}
                                setLoadingMessages={setLoadingMessages}
                            />
                        </div>

                        <div className="px-4 py-2 border-t">
                            {/* Input Box for New Message */}
                            <textarea
                                className="w-full bg-neutral-100 rounded-lg px-3 py-2 focus:outline-none"
                                rows="3"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button
                                onClick={handleSendMessage}
                                className="text-primary-500 hover:text-primary-700"
                            >
                                <SendHorizonal size={24} />
                            </button>
                        </div>
                    </>
                )}
            </div>

            <button
                className="p-3"
                onClick={() => setShowChatBox(!showChatBox)}
            >
                <MessageCircleMore size={48} color="#ffffff" />
            </button>
        </div>
    );
}


