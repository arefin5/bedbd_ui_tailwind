import Header from "/components/Header";
import Sidebar from './Sidebar';
// import Header from './Header';
// import Sidebar from './Sidebar';

export const metadata = {
  title: 'Bedbd.com',
  description: 'Find your sweet place',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container ml-auto mr-auto relative">
        <Sidebar />
        <div className="absolute left-[314px] w-[calc(100%-314px)] h-screen">
          {children}
        </div>
      </div>
    </>
  );
}