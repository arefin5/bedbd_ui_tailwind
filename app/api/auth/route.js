
import { NextResponse } from 'next/server';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();
export async function POST(request) {
  const { code } = await request.json();

  if (!code) {
    return NextResponse.json({ success: false, error: 'Missing code' }, { status: 400 });
  }
  console.log('Google Client ID:', process.env.GOOGLE_CLIENT_ID);
  console.log('Redirect URI:', process.env.GOOGLE_REDIRECT_URI);
  // const GOOGLE_CLIENT_ID="836370823354-m9ku1ntb5jrcf1o0fkp57nr34ud67lfo.apps.googleusercontent.com"
  // const GOOGLE_CLIENT_SECRET="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"

const GOOGLE_CLIENT_ID="20226538185-hd0nr2ach4fmrut1gfj2e1b66ijh1e3c.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"


  const REDIRECT_URI = "https://www.bedbd.com/auth/google/callback";
  
  try {
    // // Exchange the authorization code for access and ID tokens
    // const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
    //   client_id: process.env.GOOGLE_CLIENT_ID,
    //   client_secret: process.env.GOOGLE_CLIENT_SECRET,
    //   redirect_uri: REDIRECT_URI,
    //   grant_type: 'authorization_code',
    //   code,
    // });
    const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
      client_id: GOOGLE_CLIENT_ID,
      client_secret:GOOGLE_CLIENT_SECRET ,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
      code,
    });
    const { access_token } = tokenResponse.data;

    // Use the access token to fetch user information
    const userResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userInfo = userResponse.data;

    // Return user details and access token
    return NextResponse.json({
      success: true,
      token: access_token,
      user: {
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
      },
    });
  } catch (error) {
    console.error('Error during token exchange or user info retrieval:', error.response?.data || error.message);
    return NextResponse.json({ success: false, error: 'Authentication failed' }, { status: 500 });
  }
}
