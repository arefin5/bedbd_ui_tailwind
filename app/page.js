import Image from "next/image";
import Header from "/components/Header"
import Hero from "/components/Hero"
import PropertyGallery from '/components/PropertyGallery'
import Banner from '/components/Banner'
import Blogs from '/components/Blogs'
import GuideInformation from '/components/GuideInformation'
import Footer from '/components/Footer'


export default function Home() {


  // className="flex min-h-screen flex-col items-center justify-between p-24"
  return (
    <main >
      <Header/>
      <Hero/>
      <PropertyGallery/>
      <PropertyGallery/>
      <Banner/>
      <PropertyGallery/>
      <Banner/>
      <Blogs/>
      <GuideInformation/>
      
      <Footer/>
    </main>
  );
}
