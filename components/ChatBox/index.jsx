

// "use client";

// import { useState, useEffect } from "react";
// import io from "socket.io-client";
// import { X, SendHorizonal, MessageCircleMore } from "lucide-react";
// import ChatComponentHooks from "@/components/chatHook";

// const socket = io("http://145.223.22.239:5001", { autoConnect: false });

// // Page Component
// export default function Page() {
//     const [showChatBox, setShowChatBox] = useState(false);
//     const [conversations, setConversations] = useState([]);
//     const [selectedUser, setSelectedUser] = useState(null); // Current conversation user
//     const [user, setUser] = useState(null); // Actual authenticated user
//     const [token, setToken] = useState(null);
//     const [loadingMessages, setLoadingMessages] = useState(false); // Loading state
//     const [newMessage, setNewMessage] = useState("");
//     useEffect(() => {
//         const tokenFromStorage = localStorage.getItem("token");
//         setToken(tokenFromStorage);
//     }, []);

//     useEffect(() => {
//         if (!token) return;

//         socket.connect();
//         socket.emit("authenticate", token, (response) => {
//             if (response.status === "success") {
//                 setUser(response.user._id);
//                 socket.emit("join", response.user._id);
//                 fetchConversations(response.user._id);
//             } else {
//                 console.error(response.message);
//             }
//         });

//         socket.on("receiveMessage", (message) => {
//             if (selectedUser && message.sender === selectedUser.id) {
//                 setMessages((prevMessages) => [...prevMessages, message]);
//             }
//         });

//         return () => {
//             socket.disconnect();
//         };
//     }, [token, selectedUser]);

//     const fetchConversations = (userId) => {
//         socket.emit("getConversations", userId, (response) => {
//             if (response.status === "success") {
//                 setConversations(response.conversations);
//                 setShowChatBox(true);
//             } else {
//                 console.error(response.message);
//             }
//         });
//     };

//     const selectConversation = (contact) => {
//         setSelectedUser(contact);
//         setLoadingMessages(true); // Loading state
//     };
//     function getUsernameFromEmail(email) {
//         if (!email.includes("@")) {
//             throw new Error("Invalid email address");
//         }
//         return email.split("@")[0];
//     }
//     const handleSendMessage = () => {
//         const sender = user;
//         const receiver = selectedUser.userId;
//         const data = { sender, receiver, message: newMessage };

//         socket.emit("sendMessage", data, (response) => {
//             if (response.status === "Message delivered") {
//                 console.log("Message sent successfully!");
//             } else {
//                 console.error("Message delivery failed:", response.message);
//             }
//         });

//         setNewMessage(""); 
//     };

//     return (
//         <div className="w-full">
//             <div>
//                 {/* Conversations List */}
//                 <div className="border-b p-4">
//                     <h3 className="text-lg font-medium">Conversations</h3>
//                     <div className="mt-2 max-h-40 overflow-y-auto">
//                         {conversations.map((conv) => (
//                             <div
//                                 key={conv._id}
//                                 onClick={() => selectConversation(conv)}
//                                 className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
//                             >
//                                 <p>
//                                     {getUsernameFromEmail(conv.userDetails.email)}:{" "}
//                                     {conv.lastMessage}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {selectedUser && (
//                     <>
//                         {/* Chat Box */}
//                         <div className="p-4 border-b">
//                             <h3 className="font-medium">{selectedUser._id}</h3>
//                         </div>

//                         <div className="px-4 py-4 h-[268px] overflow-y-auto">
//                             <ChatComponentHooks
//                                 userId={user}
//                                 otherUserId={selectedUser.userId}
//                                 socket={socket}
//                                 loadingMessages={loadingMessages}
//                                 setLoadingMessages={setLoadingMessages}
//                             />
//                         </div>

//                         <div className="px-4 py-2 border-t">
//                             {/* Input Box for New Message */}
//                             <textarea
//                                 className="w-full bg-neutral-100 rounded-lg px-3 py-2 focus:outline-none"
//                                 rows="3"
//                                 value={newMessage}
//                                 onChange={(e) => setNewMessage(e.target.value)}
//                             />
//                             <button
//                                 onClick={handleSendMessage}
//                                 className="text-primary-500 hover:text-primary-700"
//                             >
//                                 <SendHorizonal size={24} />
//                             </button>
//                         </div>
//                     </>
//                 )}
//             </div>

//             <button
//                 className="p-3"
//                 onClick={() => setShowChatBox(!showChatBox)}
//             >
//                 <MessageCircleMore size={48} color="#ffffff" />
//             </button>
//         </div>
//     );
// }


'use client'
import Icon from "../Icon.jsx"
import sampleProfilePhoto from '/public/dummy/sample-profile-photo.jpg'
import Image from "next/image"
import { Ellipsis, MoveDiagonal, X, MessageCircleMore, MapPin, Link, SmilePlus, SendHorizonal } from "lucide-react"
import emojiIcon from '/public/icons/emoji.svg'
import { useState } from "react"


export default function ChatBox() {
    const [showChatBox, setShowChatBox] = useState(false)

  return (
    <div className='w-max fixed right-6 bottom-6 bg-secondary-400 rounded-full '>
        {/* border-secondary-50 */}
        {
            showChatBox && 
                <div className=" absolute bg-white rounded-xl right-3/4 bottom-3/4 w-80 h-auto drop-shadow-xl shadow-xl ">
                    
                    {/* Header  */}
                    <div className=" w-full rounded-t-xl relative border-b-1 border-neutral-100  shadow  ">
                        <div className="flex justify-between items-center py-4 px-4 ">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-primary-400 text-sm font-medium ">Samia R</h3>
                                    <p className="text-xs font-medium text-neutral-500">Active now</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <button className="text-neutral-500 hover:text-neutral-800">
                                    <Ellipsis className="icon" name="ellipsis" size={24} />
                                </button>
                                
                                <button className="text-neutral-500 hover:text-neutral-800">
                                    <MoveDiagonal className="icon" name="move-diagonal" size={24} />
                                </button>

                                <button className="text-neutral-500 hover:text-neutral-800">
                                    <X onClick={()=>setShowChatBox(false)} className="icon" name="x" size={24} />
                                </button>
                            </div>
                        </div>
                        {/* <div className="w-full h-0.5 relative bg-neutral-300"/> */}
                    </div>

                    <div className="px-4 py-4 ">
                        
                        {/* Chat List  */}
                        <div className=" h-[268px] w-full space-y-4 overflow-y-auto overscroll-none">

                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>


                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>

                        </div>

                        {/* Message sending section  */}
                        {/* input box  */}
                        <textarea className="min-h-18 w-full bg-neutral-100 rounded-lg my-3 px-3 py-2 focus:outline-none " rows="3" />
                        
                        {/* Action box */}
                        <div className=" w-full flex items-center justify-between border-t-1">
                            <div className="gap-6 flex   py-auto">
                                <button className="rounded-full p-1 hover:bg-neutral-100">
                                    <MapPin size={24} className="icon" />
                                </button>

                                <button className="rounded-full p-1 hover:bg-neutral-100">
                                    <Link size={24} className="icon" />
                                </button>

                                <button className="rounded-full p-1 hover:bg-neutral-100">
                                    <SmilePlus size={24} className="icon" />
                                </button>
                            </div>

                            <button className="rounded-full p-1 hover:bg-neutral-100">
                                <SendHorizonal size={24} className="icon"/>
                            </button>
                        </div>
                    </div>

                </div>
        }
        <button className="p-3" onClick={()=>setShowChatBox(value=> !value)}>
            <MessageCircleMore name="message-circle-more" className="icon " size={48} color="#ffffff"/>
        </button>
        {/* <MessagesSquare color="#ffffff" /> */}
    </div>
  )
}