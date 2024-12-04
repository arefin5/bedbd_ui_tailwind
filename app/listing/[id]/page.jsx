'use server'
import Header from "/components/Header"
import Footer from "/components/Footer";
import Images from './ImageGallery'
import dynamic from 'next/dynamic';
import starFilledIcon from '/public/icons/star_filled.svg'
import Image from "next/image";
import Icon from "/components/Icon";
import bedIcon from '/public/icons/bed.svg'
import guestsIcon from '/public/icons/guests.svg'
import bathroomIcon from '/public/icons/bathroom.svg'
import kitchenIcon from '/public/icons/kitchen.svg'
import ACIcon from '/public/icons/air_conditioner.svg'
import washingMechineIcon from '/public/icons/washing_mechine.svg'
import tvIcon from '/public/icons/tv.svg'
import wifiIcon from '/public/icons/wifi.svg'
import balconyIcon from '/public/icons/balcony.svg'
import awardIcon from '/public/icons/award.svg'
import shieldCheckedIcon from '/public/icons/shield-check.svg'
import starGrayIcon from '/public/icons/star_gray.svg'
// import React, { useEffect, useState, useCallback } from 'react';
// import { usePathname } from 'next/navigation';
import { useGetListingsQuery } from "@/redux/features/api/apiSlice"
import { cache } from "react";
import { store } from "@/redux/store";
import { apiSlice } from "@/redux/features/api/apiSlice";
import Amenities from "./Amenities";
import ImagesDetailsGallery from "./ImageGallery/ImagesDetailsGallery";
import AddFavorite from "@/components/AddFavorite";
import WriteReview from "@/components/WriteReview";
import BookingBox from "@/components/BookingBox";
import SendMessage from "@/components/SendMessage";
import HomeRules from "@/components/HomeRules";
const Map = dynamic(() => import('./PropertyMap'), { ssr: false });

const getListing = async (id) => {
    await store.dispatch(apiSlice.endpoints.getListing.initiate(id));
    const data = store.getState().api.queries[`getListing("${id}")`]?.data || [];
    return data;
};


export default async function page({ params }) {
    const data = await getListing(params.id)
    // console.log(data);
    const {
        reviews,
        images,
        location,
        typeOfproperty,
        propertyTitle,
        avgRating,
        amenities,
        totalroom,
        Postedby,
        Guest,
        homerule,
        propertyFeature
    } = data
    console.log("",homerule);

    // console.log(Postedby.fname, Postedby.lname)
    return (
        <>
            <Header />
            <div className="container mx-auto px-6 mt-10">
                <div className="mt-10 flex flex-col xl:flex-row gap-4">
                    <Images data={images} />
                    <Map data={location} />
                </div>


                <div className=" flex py-4 md:py-6 xl:py-10 xl:max-w-724px 2xl:max-w-978px justify-between items-center ">
                    <div className="flex items-center text-neutral-500">
                        <span className="font-semibold text-2xl">{typeOfproperty}</span>
                        <Image className="ml-6" src={starFilledIcon} height={24} width={24} alt="..." />
                        <span className=" text-primary-400 font-semibold text-lg ml-2">
                            {avgRating}
                        </span>
                        {/* <span className="text-base ml-1">{`(${reviews.length})`}</span> */}
                    </div>
                    <div className="text-neutral-500 text-lg font-semibold | flex gap-x-8">
                        <div className="flex">
                            <Icon className="mr-4" name='share-2' height={24} width={24} />
                            Share
                        </div>
                        <AddFavorite data={data} />
                    </div>
                </div>

                <div className=" flex flex-col xl:flex-row gap-4">
                    <div className="">
                        {/* Title */}
                        <div>
                            <h2 className="font-semibold text-3xl text-neutral-600">{propertyTitle}</h2>
                            <h4 className="font-normal text-lg text-neutral-400">
                                {
                                    location?.streetAddress + ', ' +
                                    location?.address + ', ' +
                                    location?.postcode + ', ' +
                                    location?.country
                                }
                            </h4>
                        </div>

                        {/* Facilities */}
                        <div className='flex flex-wrap justify-center mt-6 gap-6 text-neutral-600 text-lg font-semibold '>
                            <div className="w-40 h-36 bg-primary-100 rounded-lg text-center pt-10 relative">
                                <Image alt="icon" className='object-contain absolute-x-center bottom-16' src={bedIcon} height={42} width={42} />
                                <span className='absolute-x-center w-max bottom-7'>{totalroom.bedRoom} Bedrooms </span>
                            </div>

                            <div className="w-40 h-36 bg-primary-100 rounded-lg text-center pt-10 relative">
                                <Image alt="icon" className='object-contain absolute-x-center bottom-16' src={bathroomIcon} height={42} width={42} />
                                <span className='absolute-x-center w-max bottom-7'>{totalroom.washRoom} Bathrooms </span>
                            </div>

                            <div className="w-40 h-36 bg-primary-100 rounded-lg text-center pt-10 relative">
                                <Image alt="icon" className='object-contain absolute-x-center bottom-16' src={guestsIcon} height={42} width={42} />
                                <span className='absolute-x-center w-max bottom-7 '> {Guest.adultGuest} + {Guest.childrenGuest} Guests</span>
                            </div>
                           
                            {/* <div className="w-40 h-36 bg-primary-100 rounded-lg text-center pt-10 relative">
                                <Image alt="icon" className='object-contain absolute-x-center bottom-16' src={bathroomIcon} height={42} width={42} />
                                <span className='absolute-x-center w-max bottom-7'>{totalroom.washRoom} Bathrooms </span>
                            </div> */}

                            {/* <div className="w-40 h-36 bg-primary-100 rounded-lg text-center pt-10 relative">
                                <Image alt="icon" className='object-contain absolute-x-center bottom-16' src={guestsIcon} height={42} width={42} />
                                <span className='absolute-x-center w-max bottom-7 '>6/8 Guests</span>
                            </div> */}
                        </div>

                        {/* About */}
                        {/* <div className="mt-14">
                            <h3 className="text-2xl font-semibold text-neutral-700">About the Apartment</h3>
                            <div className="mt-6 space-y-4">
                                <div className="relative pl-12">
                                    <Icon name="plus" className="icon absolute-y-center left-0 " />
                                    <h4 className="mb-2 text-xl font-semibold text-neutral-500">Room in a rental unit</h4>
                                    <p className="text-neutral-700 text-lg font-normal">Your own room in a home, plus access to share space.</p>
                                </div>

                                <div className="relative pl-12">
                                    <Icon name="plus" className="icon absolute-y-center left-0 " />
                                    <h4 className="mb-2 text-xl font-semibold text-neutral-500">Shared bathroom</h4>
                                    <p className="text-neutral-700 text-lg font-normal">You’ll share the bathroom with others.</p>
                                </div>

                                <div className="relative pl-12">
                                    <Icon name="plus" className="icon absolute-y-center left-0 " />
                                    <h4 className="mb-2 text-xl font-semibold text-neutral-500">Dedicated Workspace</h4>
                                    <p className="text-neutral-700 text-lg font-normal">A room with wifiIcon that’s well-suited for working</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Amenities */}
                        <Amenities data={propertyFeature.features} />

                        {/* Home rules */}
                       <HomeRules homerules={homerule.homesRoules}/>

                        {/* Cancellation Policy */}
                        <div className="my-14">
                            <h3 className="text-2xl font-semibold text-neutral-700">Cancellation Policy</h3>
                            <ul className="space-y-3 mt-6 font-normal text-lg">
                                <li>
                                    <Icon name='dot' className="icon inline mr-6" /> If you cancel before <span className='text-neutral-800 font-medium'>48 hours</span>, will be 85% refund.
                                </li>
                                <li>
                                    <Icon name='dot' className="icon inline mr-6" /> If you cancel within <span className='text-neutral-800 font-medium'>48 hours,</span> will be 50% refund.
                                </li>
                                <li>
                                    <Icon name='dot' className="icon inline mr-6" /> If you cancel within <span className='text-neutral-800 font-medium'>12 hours,</span>  there will be <span className='text-neutral-800 font-medium'>no refund.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Host Info */}
                        <div>
                            <div className="flex gap-x-4 items-center">
                                <div className="h-20 w-20 rounded-full relative overflow-hidden">
                                    {Postedby.profilePic ? (
                                        <Image
                                            src={Postedby.profilePic.url}
                                            fill
                                            alt="Profile Picture"
                                        />
                                    ) : null}
                                </div>
                                <div>
                                    <h3 className="text-neutral-700 text-2xl font-semibold">{Postedby?.fname} {Postedby?.lname}</h3>
                                    <div className="space-x-3.5">
                                        <div className="text-neutral-800 text-lg font-normal inline">
                                            <Image className="icon object-contain inline mr-2"
                                                src={awardIcon}
                                                height={24}
                                                width={24} />
                                            Premium Host
                                        </div>

                                        <div className="text-neutral-800 text-lg font-normal inline">
                                            <Image className="icon object-contain inline mr-2"
                                                src={shieldCheckedIcon} height={24} width={24} />
                                            {Postedby.isVerified}
                                        </div>

                                        <div className="text-neutral-800 text-lg font-normal inline">
                                            <Icon name='star' size={24} className=" icon inline mr-2" />
                                            4.3(20 Reviews)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 mb-8 text-neutral-500 text-lg font-normal max-w-2xl">
                                Lorem ipsum dolor sit amet consectetur. Aliquam aliquam at sem magna sem diam. Facilisi id sit rhoncus nec nisl non. Faucibus cum magna enim aliquam sodales dignissim.
                            </p>
                            <ul className="space-y-4 my-8">
                                <li className="text-neutral-800 text-lg font-normal">
                                    <Image className="icon object-contain inline mr-2" src={awardIcon} height={24} width={24} />
                                    Response Rate: 95%
                                </li>
                                <li className="text-neutral-800 text-lg font-normal">
                                    <Image className="icon object-contain inline mr-2" src={awardIcon} height={24} width={24} />
                                    Response Time: within an hour
                                </li>
                            </ul>
                            {/* <button className="btn btn-secondary rounded-full max-w-56"> Contact Host</button> */}
                            <SendMessage  users={Postedby}/>
                        </div>

                        {/* Rating... */}
                        <div className="mt-14 mb-6">
                            <h3 className="text-neutral-700 text-2xl font-semibold">Review
                                <span>
                                    <Image src={starFilledIcon} height={24} width={24} className="object-contain inline ml-6" />
                                </span>
                                <span className="text-primary-400">4.3</span>
                                <span className="text-neutral-500 font-lg text-base font-medium">(20)</span>
                            </h3>
                            <ul className="max-w-md text-neutral-600 font-medium text-base mt-5 space-y-2 ">
                                <li>
                                    Amenities
                                    <div className="space-x-2 float-right ">
                                        <Image src={starFilledIcon} height={20} width={20} className="object-contain inline " />
                                        <Image src={starFilledIcon} height={20} width={20} className="object-contain inline " />
                                        <Image src={starFilledIcon} height={20} width={20} className="object-contain inline " />
                                        <Image src={starFilledIcon} height={20} width={20} className="object-contain inline " />
                                        <Image src={starFilledIcon} height={20} width={20} className="object-contain inline " />
                                        <span className="pl-1">5.0</span>
                                    </div>
                                </li>

                                <li>
                                    Communication
                                    <div className="space-x-2 float-right ">
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <span className="pl-1">5.0</span>
                                    </div>
                                </li>

                                <li>
                                    Lorem Ipusm
                                    <div className="space-x-2 float-right ">
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <span className="pl-1">5.0</span>
                                    </div>
                                </li>
                                <li>
                                    Hygiene
                                    <div className="space-x-2 float-right ">
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <span className="pl-1">5.0</span>
                                    </div>
                                </li>
                                <li>
                                    Location of Property
                                    <div className="space-x-2 float-right ">
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <Icon name="star" height={20} width={20} className="text-primary-400 inline " />
                                        <span className="pl-1">5.0</span>
                                    </div>
                                </li>


                            </ul>
                        </div>

                        {/* Write review */}
                        <div>
                            <WriteReview data={data} />
                        </div>

                        {/* Nearby Service */}
                        <div className="w-auto xl:max-w-724px 2xl:max-w-978px overflow-hidden mt-14 ">
                            <h3 className="text-neutral-700 text-2xl font-semibold">Nearby Services</h3>
                            <div className="mt-6 flex gap-x-6 mb-16">
                                <div className="w-72 h-28 rounded-lg  px-6 shadow-nearby-service relative">
                                    <h3 className="text-neutral-600 text-base font-bold absolute top-8">Grill Restro & Bar</h3>
                                    <p className="text-neutral-300 text-sm font-medium absolute bottom-8">100 meters away</p>
                                </div>

                                <div className="w-72 h-28 rounded-lg  px-6 shadow-nearby-service relative">
                                    <h3 className="text-neutral-600 text-base font-bold absolute top-8">Grill Restro & Bar</h3>
                                    <p className="text-neutral-300 text-sm font-medium absolute bottom-8">100 meters away</p>
                                </div>

                                <div className="w-72 h-28 rounded-lg  px-6 shadow-nearby-service relative">
                                    <h3 className="text-neutral-600 text-base font-bold absolute top-8">Grill Restro & Bar</h3>
                                    <p className="text-neutral-300 text-sm font-medium absolute bottom-8">100 meters away</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Booking box  */}

                    <div className="w-fit  min-w-490px py-2 relative ">
                        <BookingBox data={data} />
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}
