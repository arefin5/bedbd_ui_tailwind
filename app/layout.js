import { Inter } from "next/font/google";
import { Montserrat } from 'next/font/google';
// import { SessionProvider } from 'next-auth/react'; // Import the SessionProvider

import "./globals.css";
import ChatBox from '/components/ChatBox';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Bedbd.com',
  description: 'Find your sweet place',
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <SessionProvider session={session}> */}
          {children}
        {/* </SessionProvider> */}
        <ChatBox />
      </body>
    </html>
  );
}