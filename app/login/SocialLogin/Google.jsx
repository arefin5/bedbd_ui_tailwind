"use client"
import Image from "next/image"
import googleIcon from '/public/icons/google.png'
import React, { useState, useEffect } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import {auth, googleProvider, signInWithPopup} from '../../lib/firebase'

export default function Google() {

  // const provider = new GoogleAuthProvider();


  // const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  };

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 50));
  //     setLoading(false);
  //   };
  //   checkAuthentication();
  // }, [user]);
  return (
        <button 
            onClick={handleSignIn}
            className="flex items-center gap-3 bg-primary-100 py-4 px-8 rounded-30px text-neutral-400 text-sm font-semibold " >
            <Image src={googleIcon} height={24} width={24}/>Google
        </button>

    
  )
}
