import { Inter } from "next/font/google";
import { Montserrat } from 'next/font/google';
// import { SessionProvider } from 'next-auth/react'; // Import the SessionProvider
 import "./globals.css";
import ChatBox from '/components/ChatBox';
import { Providers, } from "@/redux/provider";
import ClientProvider from "/components/ClientProvider"; // Import the client-side provider
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Bedbd.com',
  description: 'Find your sweet place',
  icons: {
    icon: '/favicon.svg', // For the main favicon
  },
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <SessionProvider session={session}> */}
        <Providers>
        <ClientProvider>
            {children}
          </ClientProvider>
        </Providers>
         
        {/* </SessionProvider> */}
        <ChatBox />
      </body>
    </html>
  );
}