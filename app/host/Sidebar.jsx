
"use client"
import Icon from "/components/Icon"
import Link from "next/link"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";  // Import socket.io-client if not already imported
// const SOCKET_URL = "http://localhost:5001";
const SOCKET_URL = "https://backend.bedbd.com";
import {useRouter,usePathname} from "next/navigation" ;

export default function Sidebar() {
  const [name, setName] = useState("");
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);
  const { user, token } = useSelector((state) => state.auth);
  const [socket, setSocket] = useState(null);
  const [authenticatedUserId, setAuthenticatedUserId] = useState(null);
   const router=useRouter();
   const pathname = usePathname();
  useEffect(() => {
    if (user?.fname && user?.lname) {
      setName(`${user.fname} ${user.lname}`);
    } else {
      setName("");
    }
  }, [user, token]);

  useEffect(() => {
    const socketInstance = io(SOCKET_URL, { transports: ['websocket'] });
    setSocket(socketInstance);
  
    socketInstance.emit('authenticate', token, (response) => {
      if (response.status === 'failed') {
        console.log('Authentication failed');
        return;
      }
  
      const userId = response.user._id;
      setAuthenticatedUserId(userId);
      socketInstance.emit('join', userId);
    });
  
    // Check if socketInstance is initialized before calling .on
    if (socketInstance) {
      socketInstance.on("unreadMessagesCount", (count) => {
        setUnreadMessagesCount(count);
      });
    }
  
    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, [token]);
  
  const LogOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const isActive = (href) => {
    return pathname === href ? "bg-white text-secondary-400" : "";
  };
  return (
    <div className="min-h-screen bg-secondary-400 text-white px-4 pt-12 w-fit xl:w-64 flex grid justify-between">
      <ul className="space-y-6">
        <li className="hidden">
          <Icon name="circle-chevron-right" className="icon" />
        </li>
        <Link href="/host">
          <li className={`flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg ${isActive("/host")}`}>
            <Icon name="layout-dashboard" className="icon" />
            <span className="hidden xl:block">Dashboard</span>
          </li>
        </Link>
        {/* <Link href="/host/booklist">
          <li className={`flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg ${isActive("/host/booklist")}`}>
            <Icon name="layout-dashboard" className="icon" />
            <span className="hidden xl:block">Book List </span>
          </li>
        </Link> */}
        {/* booklist */}
        <Link href="/host/profile">
          <li className={`flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg ${isActive("/host/profile")}`}>
            <Icon name="user-cog" className="icon" />
            <span className="hidden xl:block">Profile</span>
          </li>
        </Link>
        <Link href="/host/properties">
          <li className={`flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg ${isActive("/host/properties")}`}>
            <Icon name="home" className="icon" />
            <span className="hidden xl:block"> My Property</span>
          </li>
        </Link>
        <Link href="/host/manage-booking">
          <li className={`flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg ${isActive("/host/manage-booking")}`}>
          <Icon name="history" className="icon" />
            <span className="hidden xl:block">Manage Bookings</span>
          </li>
        </Link>
        {/* Unread Messages */}
        <Link href="/host/message">
          <li className={`flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg ${isActive("/host/message")}`}>
            <Icon name="mail" className="icon" />
            <span className="hidden xl:block">Message ({unreadMessagesCount})</span>
          </li>
        </Link>
        
        <Link href="/host/transactions">
          <li className={`flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg ${isActive("/host/transactions")}`}>
            <Icon name="arrow-right-left" className="icon" />
            <span className="hidden xl:block">Transaction</span>
          </li>
        </Link>
        <Link href="/host/setting">
        <li className={`flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg ${isActive("/host/setting")}`} >
          <Icon name="settings" className="icon" />
          <span className="hidden xl:block">Setting</span>
        </li>
        </Link>
        <Link href="/host/history">
        <li className={`flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg ${isActive("/host/history")}`}>
          <Icon name="history" className="icon" />
          <span className="hidden xl:block">History</span>
        </li>
        </Link>
      </ul>

      <span className="rounded-lg ml-auto mr-auto bg-white bg-opacity-20 h-fit w-full text-center py-4">
        {name}
      </span>

      <button className="mb-16 px-4 py-0 rounded-lg ml-auto mr-auto" onClick={LogOut}>
        <Icon name="log-out" className="icon text-white inline mr-2.5" />
        <span>Log out</span>
      </button>
    </div>
  );
}