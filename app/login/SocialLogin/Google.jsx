
// "use client";
// import Image from "next/image";
// import googleIcon from '/public/icons/google.png';
// import React, { useEffect, useState } from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from '../../lib/firebase';
// import axios from "axios";
// import { loginwithGoogle } from "@/redux/features/auth/authSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from 'next/navigation'; 

// export default function Google() {
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const {  error ,token,user} = useSelector((state) => state.auth);
//   const router = useRouter();

//   const handleSignIn = async () => {
//     setLoading(true);
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const { accessToken } = result.user.stsTokenManager;



// const fullName = result.user.displayName;
// const [fname, lname] = fullName.split(" ");
// const payload={
//   uid: result.user.uid,
//   email: result.user.email,
//   fname,
//   lname,
//   name: result.user.displayName,
//   profilePic:{
//     url: result.user.photoURL,
//     public_id: result.user.photoURL,
//   },
// }
//       dispatch(loginwithGoogle(payload)).unwrap();
//       console.log("Backend Response:", response.data);
//     } catch (error) {
//       console.error("Sign-in error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     if (token) {
//         router.push('/user/profile'); 
//     }
// }, [token, router,user]);
//   return (
//     <button
//       onClick={handleSignIn}
//       className="flex items-center gap-3 bg-primary-100 py-4 px-8 rounded-30px text-neutral-400 text-sm font-semibold"
//       disabled={loading}
//     >
//       <Image src={googleIcon} height={24} width={24} alt="Google Icon" />
//       {loading ? "Signing in..." : "Google"}
//     </button>
//   );
// }

"use client";
import Image from "next/image";
import googleIcon from '/public/icons/google.png';
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Google() {
 
  return (
    <button
      onClick={handleSignIn}
      className="flex items-center gap-3 bg-primary-100 py-4 px-8 rounded-30px text-neutral-400 text-sm font-semibold"
      disabled={loading}
    >
      <Image src={googleIcon} height={24} width={24} alt="Google Icon" />
     
    </button>
  );
}
