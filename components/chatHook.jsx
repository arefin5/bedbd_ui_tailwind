"use client";

import React, { useState, useEffect } from 'react';

const ChatComponentHooks = ({ userId, otherUserId, socket, loadingMessages ,setLoadingMessages}) => {
    console.log("start calling apiss",userId,otherUserId)
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.emit('getMessageHistory', { userId, otherUserId }, (response) => {
            setLoadingMessages(false);
            if (response.status === 'success') {
                setMessages(response.messages || []);
            } else {
                console.error("Error fetching messages:", response.message);
            }
        });
    
        return () => setMessages([]);
    }, [userId, otherUserId, socket]);
    
    return (
        <div>
            {loadingMessages ? (
                <p>Loading messages...</p>
            ) : messages.length > 0 ? (
                messages.map((msg, index) => (
                    <div key={index}>
                        <p><strong>Sender:</strong> {msg.sender}</p>
                        <p><strong>Message:</strong> {msg.message}</p>
                    </div>
                ))
            ) : (
                <p>No messages to display.</p>
            )}
        </div>
    );
};




export default ChatComponentHooks;






