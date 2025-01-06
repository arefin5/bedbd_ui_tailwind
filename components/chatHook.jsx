

// "use client";

// import React, { useState, useEffect } from 'react';
// import Image from "next/image"

// const ChatComponentHooks = ({ userId, otherUserId, socket, loadingMessages ,setLoadingMessages}) => {
//     console.log("start calling apiss",userId,otherUserId)
//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         socket.emit('getMessageHistory', { userId, otherUserId }, (response) => {
//             setLoadingMessages(false);
//             if (response.status === 'success') {
//                 setMessages(response.messages || []);
//                 console.log("message hook",response.messages);
//             } else {
//                 console.error("Error fetching messages:", response.message);
//             }
//         });
    
//         return () => setMessages([]);
//     }, [userId, otherUserId, socket]);

//         const formatDateWithTime = (dateStr) => {
//         const date = new Date(dateStr);
//         const hours = date.getHours();
//         const minutes = String(date.getMinutes()).padStart(2, "0");
//         const ampm = hours >= 12 ? "PM" : "AM";
//         return `${hours % 12 || 12}:${minutes} ${ampm}`;
//     };

//     const localStorageUserId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;

// return (
//     <div className="w-full flex flex-col gap-4 max-w-md self-start">
//       {loadingMessages ? (
//         <p>Loading messages...</p>
//       ) : messages.length > 0 ? (
//         messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex  ${msg.sender === localStorageUserId ? 'justify-self-end' : 'items-start gap-4'}`}
//           >
//           {
//             msg.sender === localStorageUserId ? (
// <>

//               <div className="relative p-4 rounded-lg  font-medium  text-base w-full  ml-4 ">
// <div className="bg-blue-500">
//               <p><strong>Message:</strong> {msg.message}</p>
//             </div>
//                         <p className="dates"> {formatDateWithTime(msg.createdAt)}</p>

//               </div>
              

// </>
//             ):(
//               <>
//               <div className="relative h-8 w-8 min-w-8 rounded-full overflow-hidden">
//                 <Image src="/dummy/sample-profile-photo.jpg" fill />
//               </div>
//               <div >
//                 <div className="relative p-4 rounded-lg text-neutral-500 font-medium  text-base bg-white w-full mr-3">
//                 <p>{msg.sender}</p>
//                 <p><strong>Message:</strong> {msg.message}</p>
                
//               </div>
//               <p>{formatDateWithTime(msg.createdAt)}</p>
//             </div>

//               </>
//             )
//           }
            
            
//           </div>
//         ))
//       ) : (
//         <p>No messages</p>
//       )}
//     </div>
//   );
// };

// export default ChatComponentHooks;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ChatComponentHooks = ({
  userId,
  otherUserId,
  socket,
  loadingMessages,
  setLoadingMessages,
}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit(
      "getMessageHistory",
      { userId, otherUserId },
      (response) => {
        setLoadingMessages(false);
        if (response.status === "success") {
          setMessages(response.messages || []);
        } else {
          console.error("Error fetching messages:", response.message);
        }
      }
    );

    return () => setMessages([]);
  }, [userId, otherUserId, socket]);

  const formatDateWithTime = (dateStr) => {
    const date = new Date(dateStr);
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minutes} ${ampm}`;
  };

  const localStorageUserId = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))._id
    : null;

//   return (
//     <div className="w-full flex flex-col gap-4 max-w-md self-start">
//       {loadingMessages ? (
//         <p>Loading messages...</p>
//       ) : messages.length > 0 ? (
//         messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               msg.sender === localStorageUserId
//                 ? "justify-end" // Aligns messages from the current user to the right
//                 : "items-start gap-4"
//             }`}
//           >
//             {msg.sender === localStorageUserId ? (
//               <div className="relative p-4 rounded-lg font-medium text-base bg-blue-500 text-white w-fit max-w-[75%] text-right">
//                 <p>{msg.message}</p>
//                 <p className="text-xs text-gray-200 mt-2">
//                   {formatDateWithTime(msg.createdAt)}
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <div className="relative h-8 w-8 min-w-8 rounded-full overflow-hidden">
//                   <Image
//                     src="/dummy/sample-profile-photo.jpg"
//                     alt="Profile"
//                     fill
//                   />
//                 </div>
//                 <div>
//                   <div className="relative p-4 rounded-lg text-neutral-800 font-medium text-base bg-white w-fit max-w-[75%]">
//                     <p>{msg.message}</p>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">
//                     {formatDateWithTime(msg.createdAt)}
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No messages</p>
//       )}
//     </div>
//   );
// };

// export default ChatComponentHooks;
return (
  <div className="flex justify-center items-start w-full min-h-screen bg-gray-50">
    <div className="w-full flex flex-col gap-4 max-w-4xl">
      {loadingMessages ? (
        <p>Loading messages...</p>
      ) : messages.length > 0 ? (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === localStorageUserId ? 'justify-end' : 'items-start gap-4'
            }`}
          >
            {msg.sender === localStorageUserId ? (
//               <div
//   className="relative p-4 rounded-lg text-neutral-800 font-medium text-base bg-blue-500"
//   style={{ width: "75%" }}
// >
//               {/*<div  className="relative p-4 rounded-lg font-medium text-base bg-blue-500 text-white w-fit text-right">*/}
//                 <p>{msg.message}</p>
//                 <p className="text-xs text-gray-200 mt-2">
//                   {formatDateWithTime(msg.createdAt)}
//                 </p>
//               </div>
              <div
  className="relative p-4 rounded-lg text-neutral-800 font-medium text-base "
  style={{ width: "85%" }}
>
              {/*<div  className="relative p-4 rounded-lg font-medium text-base bg-blue-500 text-white w-fit text-right">*/}
               <div className="bg-blue-500 p-4 rounded-lg text-neutral-800 font-medium text-base ">
                  <p>{msg.message}</p>
               </div>
                <p className="text-xs text-gray-200 mt-2  text-righ">
                 Sent {formatDateWithTime(msg.createdAt)}
                </p>
              </div>
            ) : (
              <>
                <div className="relative h-8 w-8 min-w-8 rounded-full overflow-hidden">
                  <Image src="/dummy/sample-profile-photo.jpg" alt="Profile" fill />
                </div>
                <div className="relative  rounded-lg text-neutral-800 font-medium text-base "
  style={{ width: "85%" }}>
                <div
  className="relative p-4 rounded-lg text-neutral-800 font-medium text-base  bg-white"
 
>
                  {/*<div className="relative p-4 rounded-lg text-neutral-800 font-medium text-base bg-white w-fit">*/}
                    <p>{msg.message}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Sent {formatDateWithTime(msg.createdAt)}
                  </p>
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <p>No messages</p>
      )}
    </div>
  </div>
);
}
export default ChatComponentHooks;