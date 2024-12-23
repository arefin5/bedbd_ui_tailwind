// "use client";

// import React, { useState, useEffect } from 'react';

// const ChatComponentHooks = ({ userId, otherUserId, socket, loadingMessages ,setLoadingMessages}) => {
//     console.log("start calling apiss",userId,otherUserId)
//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         socket.emit('getMessageHistory', { userId, otherUserId }, (response) => {
//             setLoadingMessages(false);
//             if (response.status === 'success') {
//                 setMessages(response.messages || []);
//             } else {
//                 console.error("Error fetching messages:", response.message);
//             }
//         });
    
//         return () => setMessages([]);
//     }, [userId, otherUserId, socket]);
    
//     return (
//         <div>
//             {loadingMessages ? (
//                 <p>Loading messages...</p>
//             ) : messages.length > 0 ? (
//                 messages.map((msg, index) => (
//                     <div key={index}>
//                         <p><strong>Sender:</strong> {msg.sender}</p>
//                         <p><strong>Message:</strong> {msg.message}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No messages to display.</p>
//             )}
//         </div>
//     );
// };




// export default ChatComponentHooks;

"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image"

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
    const formatDateWithTime = (dateStr) => {
        const date = new Date(dateStr);
    
        // Format the time
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
        const formattedMinutes = String(minutes).padStart(2, '0');
    
        // Combine the date and time
        return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(
            2,
            "0"
        )}/${String(date.getUTCDate()).padStart(2, "0")} ${formattedHours}:${formattedMinutes} ${ampm}`;
    };

return (
    <div className="w-full flex flex-col gap-4 max-w-md self-start">
        {loadingMessages ? (
            <p>Loading messages...</p>
        ) : messages.length > 0 ? (
            messages.map((msg, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="relative h-8 w-8 min-w-8 rounded-full overflow-hidden">
                        <Image src="/dummy/sample-profile-photo.jpg" fill />
                    </div>
                    <div className="relative bg-white p-4 rounded-lg text-neutral-500 font-medium shadow-inner text-base">
                        <p>{msg.sender}</p>
                        <p><strong>Message:</strong> {msg.message}</p>
                        <span className="absolute top-[calc(100%+4px)] text-sm">Sent {formatDateWithTime(msg.timestamp)}</span>
                    </div>
                </div>
            ))
        ) : (
            <p>No messages to display.</p>
        )}
    </div>
);
};
export default ChatComponentHooks;











