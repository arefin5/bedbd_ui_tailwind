"use client"
import Image from "next/image"
import googleIcon from '/public/icons/google.png'
import React, { useState, useEffect } from "react";

import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {auth, googleProvider, signInWithPopup} from '../../lib/firebase'

export default function Google() {

  // const provider = new GoogleAuthProvider();


  // const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token)

    const user = result.user;
    console.log(user)

  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

  });
  };

  return (
        <button 
            onClick={handleSignIn}
            className="flex items-center gap-3 bg-primary-100 py-4 px-8 rounded-30px text-neutral-400 text-sm font-semibold " >
            <Image src={googleIcon} height={24} width={24}/>Google
        </button>

    
  )
}
