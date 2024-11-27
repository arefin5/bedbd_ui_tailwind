
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector} from 'react-redux';
import { loginwithGoogle } from '@/redux/features/auth/authSlice';
export default function GoogleCallback() {
  const { loading, token } = useSelector((state) => state.auth);

  const router = useRouter();
  const dispatch=useDispatch();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const scope = params.get('scope');
    const error = params.get('error');

    if (error) {
      console.error('Error during Google login:', error);
      router.push('/login'); // Redirect to login on error
      return;
    }

    if (code) {
      // Send code to the backend for token exchange
      fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       
        body: JSON.stringify({ code, clientId: process.env.GOOGLE_CLIENT_ID }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // Redirect to success page or dashboard
            // router.push('/success');
            // if success then console user details 
            console.log(data)
        
            const resultAction = dispatch(loginwithGoogle(data.user)) 
        if (loginwithGoogle.fulfilled.match(resultAction)) {
           router.push("/");
          // console.log("success");
        } else {
          console.error("Error Store USer Dataa .. :", resultAction.payload);
        }
             
            // if success then call then api end point 
          } else {
            console.error('Failed to authenticate:', data.error);
            router.push('/login'); // Redirect to login on failure
          }
        })
        .catch((err) => {
          console.error('Error during token exchange:', err);
          router.push('/login'); // Redirect to login on error
        });
    }
  }, [router,dispatch]);
  useEffect(() => {
    if (token) {
      // Redirect to home if login is successful
      router.push('/');
    }
  }, [token, router]);
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Authenticating...</h1>
      <p>Please wait while we process your login.</p>
    </div>
  );
}
