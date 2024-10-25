import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyA1POOOifbeAkXhiJ5MpKdaloGKBVMRIoQ",
    authDomain: "bedbd-8b0c0.firebaseapp.com",
    projectId: "bedbd-8b0c0",
    storageBucket: "bedbd-8b0c0.appspot.com",
    messagingSenderId: "772033923702",
    appId: "1:772033923702:web:9762a4e107aa95c06dad57",
    measurementId: "G-P67CDLTNH2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set up Google provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

async function facebookLogin(params) {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider )

    if(result)
      console.log(result)
  } catch (error) {
    
  }
}


export { auth, googleProvider, facebookProvider, facebookLogin, signInWithPopup };