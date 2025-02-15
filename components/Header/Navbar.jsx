'use client'
import axiosInstance from "@/redux/services/axiosInstance"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [open, setOpen] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const { user, error, token } = useSelector((state) => state.auth);
    const [images, setProfile] = useState()
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user && token !== null || undefined) {
            setLoggedIn(true)

            if (user.profilePic) {
                setProfile(user.profilePic.url)
            }
        } else {
            setLoggedIn(false);
            // setLoggedIn(false);public/circle.svg
            setProfile('/dummy/sample-profile-photo.jpg');

        }
    }, [user, token]);

    const changeRule = async (e) => {
        e.preventDefault();
        if (!user) {
            router.push("/login/email")
        }
        if (user && user.role === "host") {
            router.push("/host/");
        } else {
            try {
                const response = await axiosInstance.put("/change-role");

                if (response.data) {
                    const updatedUser = response.data.user; // Assuming `response.data.user` contains the updated user info
                    localStorage.setItem("user", JSON.stringify(updatedUser)); // Store the updated user in localStorage

                    // // Optionally, update local `user` state if needed
                    // setUser(updatedUser);
                    window.location.href = "/host/profile";
                    // router.push("/host/profile")
                }
            } catch (error) {
                console.error("Error updating role:", error);
            }
        }
    };
    const changeRuleAsUser = async (e) => {
        e.preventDefault();

        if (user && user.role === "host") {
            router.push("/host/");
        } else {
            try {
                const response = await axiosInstance.put("/change-role");

                if (response.data) {
                    const updatedUser = response.data.user; // Assuming `response.data.user` contains the updated user info
                    localStorage.setItem("user", JSON.stringify(updatedUser)); // Store the updated user in localStorage

                    // // Optionally, update local `user` state if needed
                    // setUser(updatedUser);
                    window.location.href = "/host/profile";
                    // router.push("/host/profile")
                }
            } catch (error) {
                console.error("Error updating role:", error);
            }
        }
    };
    const LogOut = async (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        // localStorage.clear();
        setLoggedIn(false);
        window.location.href = "/";
    }
    const changeRuleAsHostToUser = async () => {
        if (!user) {
            router.push("/login/email");

        }
        setIsLoading(true); // Show loading indicator
        try {
            const response = await axiosInstance.put("/change-role-user");
            if (response.data) {
                const updatedUser = response.data.user; // Assuming updated user data is returned
                localStorage.setItem("user", JSON.stringify(updatedUser)); // Update local storage
                setIsLoading(false); // Stop loading indicator
                window.location.href = "/"; // Redirect to homepage
            }
        } catch (error) {
            console.error("Error updating role:", error);
            setIsLoading(false); // Stop loading indicator even on error
        }
    };
    return (
        <div className="relative z-20">
            {
                open
                    ? <X className="icon md:hidden" onClick={() => setOpen(false)} />
                    : <Menu className="icon md:hidden" onClick={() => setOpen(true)} />
            }
            <ul className={`absolute  right-0 bg-white shadow-md md:shadow-none rounded-md  md:flex md:flex-row-reverse md:items-center md:static md:gap-x-10 ${!open && 'hidden '}`}  >
                {
                    loggedIn
                        ? 

 <li className="w-max min-w-full md:min-w-max py-4 px-10 md:p-0" onClick={() => setSubMenuOpen((val) => !val)}>
              {/* Profile Picture */}
              {user && user.profilePic ? (
                <Image
                  alt="User image"
                  className="ml-auto mr-auto border-primary-400 min-w-12 min-h-12 rounded-full shadow-md"
                  src={user.profilePic.url}
                  height={48}
                  width={48}
                />
              ) : (
                <Image
                  alt="User image"
                  className="ml-auto mr-auto border-primary-400 min-w-12 min-h-12 rounded-full shadow-md"
                  src={'/dummy/sample-profile-photo.jpg'}
                  height={48}
                  width={48}
                />
              )}
            </li>

                        // <li className="w-max min-w-full md:min-w-max py-4 px-10 md:p-0 " onClick={() => setSubMenuOpen(val => !val)}>
                        //     <Image alt='User image'
                        //         className=' ml-auto mr-auto border-primary-400 padding-0 min-w-12 min-h-12 rounded-full drop-shadow drop-shadow-md shadow-primary-400'
                        //         src={images}
                        //         height={48}
                        //         width={48} />
                        // </li>
                        :
                        <>
                            <Link href="/signup">
                                <li className="overflow-visible w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium hover:font-bold md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner md:hover:shadow-none">
                                    <span className="inline-block max-w-full text-center hover:scale-110 ">Sign up</span>
                                </li>
                            </Link>
                            <Link href="/login/email">
                                <li className="overflow-visible w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium hover:font-bold md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner md:hover:shadow-none">
                                    <span className="inline-block max-w-full text-center hover:scale-110 ">Log in</span>
                                </li>
                            </Link>
                        </>
                }
                {user && user.role === "host" ? (
                    <Link href="/add-listing/property-type">
                        <button className="btn btn-secondary rounded-full px-6 font-semibold"

                        >Add New Property </button>
                    </Link>
                ) : (<>
                    <li className=" w-max min-w-full md:min-w-max py-4 px-6 md:p-0">
                        <button className="btn btn-secondary rounded-full px-6 font-semibold"
                            onClick={changeRule}
                        >Become A Host </button>
                    </li>
                </>)}
                {/* <li className=" w-max min-w-full md:min-w-max py-4 px-6 md:p-0">
                    <button className="btn btn-secondary rounded-full px-6 font-semibold"
                        onClick={changeRule}
                    >Become A Host </button>
                </li> */}

                <li>
                    <ul className="md:flex md:space-x-10">
                    <Link href="/search">
                        <li className="w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                            <span className="inline-block max-w-full text-center md:hover:scale-110 ">Find a Property</span>
                        </li>
                        </Link>
                        <li className="w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                            <span className="inline-block max-w-full text-center md:hover:scale-110 ">Tour Package</span>
                        </li>
                        <li className="overflow-visible w-max min-w-full md:min-w-max py-4 md:p-0 px-10 font-medium hover:font-bold md:hover:font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner md:hover:shadow-none">
                            <span className="inline-block max-w-full text-center md:hover:scale-110 ">Service</span>
                        </li>

                    </ul>
                </li>

                {
                    loggedIn &&
                    <li>
                        <ul className={`md:grid md:absolute right-4 bg-white top-12 md:shadow-md md:rounded-md ${!subMenuOpen && 'md:hidden'} `} >

                            <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                <span className="inline-block max-w-full text-center md:hover:scale-110 ">Message</span>
                            </li>

                            {user && user.role === "user" ? (<>
                                <li
                                    onClick={changeRule}
                                    className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">

                                    <span className="inline-block max-w-full text-center md:hover:scale-110 ">
                                        Become A Host
                                    </span>
                                </li>
                                <Link
                                    href="/user/profile"
                                >
                                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Profile</span>
                                    </li>
                                </Link>
                                <Link href="/user/wishlist">
                                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Favorite List</span>
                                    </li>

                                </Link>
                                <Link href="/user/booking-history">
                                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Booking History</span>
                                    </li>

                                </Link>
                            </>) : (
                                <>
                                <li
                                    onClick={changeRuleAsHostToUser}
                                    className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                    <span className="inline-block max-w-full text-center md:hover:scale-110 ">Become A User</span>
                                </li>
                                <Link
                                    href="/host"
                                >
                                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Profile</span>
                                    </li>
                                </Link>
                                <Link
                                    href="/host/message"
                                >
                                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Message</span>
                                    </li>
                                </Link>
                                <Link
                                    href="/host/properties"
                                >
                                    <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                        <span className="inline-block max-w-full text-center md:hover:scale-110 ">Properties</span>
                                    </li>
                                </Link>
                                </>
                            )}
                            {/* <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                <span className="inline-block max-w-full text-center md:hover:scale-110 ">Switch to User</span>
                            </li> */}
                            <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                <span className="inline-block max-w-full text-center md:hover:scale-110 ">Support</span>
                            </li>
                            <li className="w-max min-w-full py-4 px-10 font-medium text-neutral-500 cursor-pointer hover:shadow hover:shadow-neutral-600-inner hover:font-bold md:hover:shadow-none">
                                <span className="inline-block max-w-full text-center md:hover:scale-110 "
                                    onClick={LogOut}
                                >Log Out</span>
                            </li>
                        </ul>
                    </li>
                }
            </ul>
        </div>
    )
}
