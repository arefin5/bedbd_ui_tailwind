
"use client";
import { useState, useEffect,useRef, useCallback } from "react";
import io from "socket.io-client";
import { X, SendHorizonal, MessageCircleMore } from "lucide-react";
import ChatComponentHooks from "@/components/chatHook";
import Image from "next/image"
// const SOCKET_URL = "http://localhost:5001";
const SOCKET_URL = "https://backend.bedbd.com";


const socket = io(SOCKET_URL, { transports: ['websocket'] });
// const socket = io("http://localhost:5001", { autoConnect: true });

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
                console.log(response.conversations)
                setConversations(response.conversations);
                setShowChatBox(true);
            } else {
                console.error(response.message);
            }
        });
    };
     useEffect(() => {
        // .log("Test message call .. i wanna call this only selectedUser ")
     },[selectedUser])

    const selectConversation = (contact) => {
        // console.log(contact)

        setSelectedUser(contact);
        setLoadingMessages(true); // Loading state
    };
    function getUsernameFromEmail(email) {
        if (!email.includes("@")) {
            throw new Error("Invalid email address");
        }
        return email.split("@")[0];
    }


return(<>
    <div className='w-full h-full p-8 flex gap-8 '>
        {/* Left side */}

        {/* Chat Item / Active */}
        <div className='px-6 py-10 bg-secondary-50 h-[calc(100vh-80px)] rounded-lg w-full max-w-[376px] space-y-1'>
            
        {conversations.map((conv) => (
            conv  ? (
                <div   key={conv.length}
                                onClick={() => selectConversation(conv)}
                             className='select-none cursor-pointer rounded-md w-full px-4 py-2 flex gap-4 text-neutral-500 relative hover:shadow-sm hover:bg-white hover:drop-shadow-sm'>
                <div className='relative w-[48px] h-[48px] rounded-full overflow-hidden'>
                    <Image src="/dummy/sample-profile-photo.jpg"  fill/>
                </div>
                <div className="h-full py-1">
                    <h4 className="text-lg font-semibold leading-5">
                    {getUsernameFromEmail(conv.userDetails.email)}:{" "} 

                   
                    </h4>
                    <p> {conv.lastMessage}</p>
                    <p className="text-neutral-400 text-sm leading-5">Booking Request</p>
                </div>
                <div className="absolute right-4 top-4 text-xs font-medium">3:23pm</div>
                <div className=" text-[8px] font-medium w-3 h-3 text-white  bg-secondary-400 rounded-full absolute bottom-4 right-4">
                    <span className="absolute-center">2</span>
                    </div>
            </div>
            ) : <>you Have No messages</>
           
                           
                        ))}
        

           
        </div>
        {selectedUser  &&(
                   <>

                    <div className='w-full bg-secondary-50 rounded-lg px-8 py-10'>
            <div className="h-[calc(100%-96px)]">
                <h3 className="text-neutral-500 text-base font-normal mb-4">
                To: <span className="text-neutral-700 text-lg font-medium">{selectedUser._id}</span>
                </h3>
                
                {/* message list  */}
                <div className="gird space-y-8 content-end h-[calc(100%-48px)]">
                    {/* incomming message sample  */}
                    {/* sample 1 */}
                    <ChatComponentHooks
                                userId={user}
                                otherUserId={selectedUser.userId}
                                socket={socket}
                                loadingMessages={loadingMessages}
                                setLoadingMessages={setLoadingMessages}
                            />

                </div>

                
            </div>
            <div>
                
            </div>
        </div>
                   </>
                )}
      
        
    </div>
</>)
}