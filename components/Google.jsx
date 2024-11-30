// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';

// const GoogleLoginButton = () => {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleLoginSuccess = async (response) => {
//     setLoading(true);
//     try {
//       const { credential } = response;
//       // Send the token to your backend for verification
//       const res = await axios.post('http://localhost:5001/auth/google/callback', { tokenId: credential });

//       // Assuming the backend returns a JWT token
//       if (res.data.token) {
//         // Store the token in localStorage
//         localStorage.setItem('token', res.data.token);

//         // Redirect the user to the homepage or dashboard
//         router.push('/');
//       } else {
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error during Google login', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLoginFailure = (error) => {
//     console.error('Login failed', error);
//   };

//   return (
//     <GoogleOAuthProvider clientId="836370823354-m9ku1ntb5jrcf1o0fkp57nr34ud67lfo.apps.googleusercontent.com">
//       <GoogleLogin
//         onSuccess={handleLoginSuccess}
//         onError={handleLoginFailure}
//         theme="outline" // Optional: you can choose between "filled_blue" or "outline"
//         text="signin_with" // Optional: you can customize the button text
//         shape="pill" // Optional: Customize the button shape
//       />
//     </GoogleOAuthProvider>
//   );
// };

// export default GoogleLoginButton;
import React from 'react';
import axios from 'axios';

const Google = () => {
    const handleGoogleLogin = async () => {
        try {
            // Make a request to the backend to start the Google login process
            const response = await axios.get('http://localhost:5001/auth/google');

            // Assuming the backend sends a redirect URL or token
            if (response.data.redirectUrl) {
                // Redirect to Google authentication URL
                window.location.href = response.data.redirectUrl;
            }
        } catch (error) {
            console.error('Error initiating Google login', error);
        }
    };

    return (
        <div>
            <button onClick={handleGoogleLogin}>
               Add your Google icon
            </button>
        </div>
    );
};

export default Google;
