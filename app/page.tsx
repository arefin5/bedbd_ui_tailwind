import Image from "next/image";
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import PropertyGallery from '@/app/components/PropertyGallery'
import Banner from '@/app/components/Banner'
import Blogs from '@/app/components/Blogs'
import GuideInformation from '@/app/components/GuideInformation'
import Footer from '@/app/components/Footer'


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
