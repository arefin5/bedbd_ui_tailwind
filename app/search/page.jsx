"use client";

import Image from "next/image";
import Header from "/components/Header"

import PropertyGallery from '/components/PropertyGallery'

import Banner from '/components/Banner'
import Blogs from '/components/Blogs'
import GuideInformation from '/components/GuideInformation'
import Footer from '/components/Footer'
import dynamic from "next/dynamic";
const Hero = dynamic(() => import('/components/Hero'), { ssr: false });

export default function Home() {


  // className="flex min-h-screen flex-col items-center justify-between p-24"
  return (
    <main >
      <Header/>
      <Hero/>
      {/* <TopRatedListing/> */}
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
