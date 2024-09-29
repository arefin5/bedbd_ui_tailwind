import type { Metadata } from "next";
import Header from './Header'
import Sidebar from './Sidebar'

export const metadata: Metadata = {
  title: 'Bedbd.com',
  description: 'Find your sweet place',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      <div className=" container ml-auto mr-auto flex z-10">
        <Sidebar/>
        { children }
      </div>
    </>
  );
}
