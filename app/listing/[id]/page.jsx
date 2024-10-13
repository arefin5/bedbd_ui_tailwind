import Header from "/components/Header"
import Footer from "/components/Footer";
import Images from './Images'
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
const Map = dynamic(() => import('./PropertyMap'), { ssr: false });

export default function page() {

    const images  = [
        {
            id:0,
            url:'https://s3-alpha-sig.figma.com/img/8c39/1934/dab98b8e77b48c65d7c3e2032f00af6c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVn5K0oUJbxNpzO~VAcpiZHA3aSRqxVWqLAgoyE55Sc3L9ADYdepp1ewBbc4LrUkmD7IQN2c-kkw8Kny8HC7sZRVu331ovEKnA5RhsPlzKEc6YtKT1YwQvH6bukmUVJ62gnTTPVWKDL0lNfGIA~ABS0qyPQlICEJF49t4pBo-b03f~dcLKaYBQ5fKBfBwOOvRw-oByy9cvQjL~JIKx3C-iQhyLGyrE2aEgMHcMPHjhjcVDfDTPaQdaMJTk-1WQ5zPlXE9im6bZ~oOrHuR-BHUex2PEpEqfVeqsj~yaEHCg2rdHZgqxj2P2dsBnQnOr8tuX8bOzmRE0SaecVHYQvFMA__',
        },{
            id:1,
            url:'https://s3-alpha-sig.figma.com/img/fa82/04ba/aa7ce09cc4e2e086c0a441a2bc6c3a41?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcws7pI5qGVJNbts84h1DQrPHduXqK93aBBPNkDPcoNwXV6W6Gw9dPdqmAzak8jU-2ATa4j~8rL7zWGKmaBnFpqrEvDtHA~3zOFqwbJKpmBqrp41nK8WpgS~8Woy1HIWX4-BcTeh8Wjgk2JApdTEiDeBd165Br81jFOjvGTpArtEJuT8Qlme0lq0JWxbQ24y792pxhta9bi7fV3ftdLLg9cwkaVb7pCc3m98uScurJsOxUoA0QLrB~XXx3O5EZZbplnDM4llrvab2BHrRLkayaUkFIgehWIA04lmUxV547CcI~LMT8b7w4cVVV5uS-9GrZvVh1G4kYs167bFIUO9Kg__',
        },{
            id:2,
            url:'https://s3-alpha-sig.figma.com/img/1e99/4fc1/edd4ba000bdfa85be11654df3de4ccf3?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F0IMFytilkI3norIKnTuW13JwP5mEb2bjPkZIfRRvGzDN3bRKgrPHH~MLHZudKqI~LKoKpwAirN4nBlH8ymUj-ghPe6Ry2t1ggeY2NDKQG8CgNnkqrMprEtYl~SPwaTCOKimsxKSW7HD36wdmgWMLU9hhVIkIKHKRyxfV944fpEeTHIQahjorN5TNSjY5sJn0U9dIT6h1zXMc2rYmZj5QgbxHdXu7hA7INS1U3lr2KXdnc42SRruJWpD4Z7CRmCY0WWpjfVep66zBHnMF5XcyQfbtIjq3hFVVlQqPA7WdaFstAseWda4IUIX3OzvJFwkB5ThtZSNKJDIEHHh74bmbQ__',
        },{
            id:3,
            url:'https://s3-alpha-sig.figma.com/img/8bd1/cbca/ff4537db926dfeb0067a37eecda96e8f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3r34r8s2FDQQoSYTXmo1DM5rZOoRIgQLCyw8EtAJ3ReIZCSdQVIHwbvSoHw~AzqvBb8yFPQ2vOURaKZgPtlYh1sk9TlYuGq3DCta7CdN7tNueqSYbySXhtIRoTm1s-UBRQnqCfBCVfOqfnH7TYnxwF2UiaPjdMOeJcuaPsWY49iIP8Qlzv-8V86sjnaIsulXoLLuHDQMdy1Ox9EMXjoJQry6v7o17u28U6o4dbttN0un1GY5g3un5o4QcAy5ynaJhG1iSpdqyfwCpUTwfI7X1CCAzbt93HDHJJoqFDHwUqd3HrS3oGTB1vAspKUpmvqRssLgDA1GPZmib9NsnAt9Q__',
        },{
            id:4,
            url:'https://s3-alpha-sig.figma.com/img/28de/5b2c/436c0b472b643abb58ba32973af9094b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nh4WSUEkQUQg3IS-UvXHdkKV64vAZ4XiEh6-VF467Q57wXsqymVjYBEq~I98tAIejr2X3IMXC-5r5BbqmVuQ6eC~zQlzLcSgd~DL4EItgPbCXEdjHMw5C2aFBrMSFXxIvW-LwvyK4JxLHRORLuFJGGk7x~K4p0Jv5HPao1lBKQ9Xla9fFLMJ0ZX6SYW1ESTgbmxwvffCOecHBSVkQRI4D0WU3ImsFWRrAfOBWwPgmwYz9LrLOmDD1enQStRshZNNB4QJbGbxfL39B0f6s4BOQuXpfWU6vebsqC8tYOnagRXBuaNn-8e6bJsEpmI97uVZDgV7y1XKOw~UdK-BdOr-Ug__',
        },{
            id:5,
            url:'https://s3-alpha-sig.figma.com/img/47d6/8395/bebcd1e57e3c88ef2f4b4e2f2bfc47f1?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpcDMeDTeoms9Zd-5CvdCZ87OInBGUuJqtApaXSfKAq8IR3ameWEKiiRR0dwOSFp1jLTO1AmASo7vg4mXtHJiQP9K~vQd08EKboHDjDxTh6CUWtGvuTpzoHpoGnefHZ-34z7FZQrf4Iox1Hv0y62VE0avgLdP1mbjSmJmUsWcRXAQPEnmMfE3QYC0BSNh1iPO5SFrpDhLh77phliMpSSOltuZFgl5vRiLGb9gt738x1cChehCjBF1SLWQeW7RB0MvZmHq5EFeFhUmLC4MbflMgsbfJ2LVkE4Pm9T6cqM5Ha6TuPVhVEhhOvqen8lOL-VNBVzJLFy8NXaoLXgvO6LPQ__',
        }
    ]

  return (
    <>
        <Header/>
        <div className="container mx-auto px-6 mt-10  ">
            <div className="mt-10 flex flex-col xl:flex-row gap-4">
                <Images data={images}/>
                <Map/>
            </div>
            {/* <div>
                <h2>Apartment<span><Image src={starFilledIcon} height={24} width={24} /></span><span>(20)</span></h2>
                <div>
                    <div>
                        <Icon name='share-2' height={24} width={24}/>
                        Share
                    </div>
                    <div>
                        <Icon name='heart' height={24} width={24}/>
                        Save
                    </div>
                </div>
            
            </div> */}

            <div className=" flex py-4 md:py-6 xl:py-10 xl:max-w-724px 2xl:max-w-978px justify-between items-center ">
                <div className="flex items-center text-neutral-500">
                    <span className="font-semibold text-2xl">Apartment</span>
                    <Image className="ml-6" src={starFilledIcon} height={24} width={24} alt="..."/>
                    <span className=" text-primary-400 font-semibold text-lg ml-2">
                            4.3
                    </span>
                    <span className="text-base ml-1">(20)</span>
                </div>
                <div className="text-neutral-500 text-lg font-semibold | flex gap-x-8">
                    <div className="flex">
                        <Icon className="mr-4" name='share-2' height={24} width={24}/>
                        Share
                    </div>
                    <div className="flex">
                        <Icon className="mr-4" name='heart' height={24} width={24}/>
                        Save
                    </div>
                </div>
            </div>

            <div className=" flex flex-col xl:flex-row gap-4">
                <div className="">
                    {/* Title */}
                    <div>
                        <h2 className="font-semibold text-3xl text-neutral-600">Ocean Blue, Labonno point, Cox bazar</h2>
                        <h4 className="font-normal text-lg text-neutral-400">467 Stutler Lane, Altoona, PA 16602</h4>
                    </div>

                    {/* Facilities */}
                    <div className='flex flex-wrap justify-center mt-6 gap-6 text-neutral-600 text-lg font-semibold '>
                        <div className="w-40 h-36 bg-primary-100 rounded-lg text-center pt-10 relative">
                            <Image alt="icon" className='object-contain absolute-x-center bottom-16' src={bedIcon} height={42} width={42}/>
                            <span className='absolute-x-center w-max bottom-7'>3 Bedrooms </span>
                        </div>
                        
                        <div className="w-40 h-36 bg-primary-100 rounded-lg text-center pt-10 relative">
                            <Image alt="icon" className='object-contain absolute-x-center bottom-16' src={bathroomIcon} height={42} width={42}/>
                            <span className='absolute-x-center w-max bottom-7'>3 Bathrooms </span>
                        </div>

                        <div className="w-40 h-36 bg-primary-100 rounded-lg text-center pt-10 relative">
                            <Image alt="icon" className='object-contain absolute-x-center bottom-16' src={guestsIcon} height={42} width={42}/>
                            <span className='absolute-x-center w-max bottom-7 '>6/8 Guests</span>
                        </div>

                        <div className="w-40 h-36 bg-primary-100 rounded-lg text-center pt-10 relative">
                            <Image alt="icon" className='object-contain absolute-x-center bottom-16' src={bathroomIcon} height={42} width={42}/>
                            <span className='absolute-x-center w-max bottom-7'>3 Bathrooms </span>
                        </div>

                        <div className="w-40 h-36 bg-primary-100 rounded-lg text-center pt-10 relative">
                            <Image alt="icon" className='object-contain absolute-x-center bottom-16' src={guestsIcon} height={42} width={42}/>
                            <span className='absolute-x-center w-max bottom-7 '>6/8 Guests</span>
                        </div>
                    </div>

                    {/* About */}
                    <div className="mt-14">
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
                    </div>

                    {/* Amenities */}
                    <div className="my-14 text-neutral-700">
                        <h3 className="text-2xl font-semibold ">Offered Amenities</h3>
                        <ul className="mb-8 space-y-6 mt-6 font-normal text-lg md:columns-2">
                            <li>
                                <Image alt="icon" className='mr-6 inline' src={kitchenIcon} />
                                Kitchen
                            </li>
                            <li>
                                <Image alt="icon" className='mr-6 inline' src={ACIcon} />
                                Air Conditioner
                            </li>
                            <li >
                                <Image alt="icon" className='mr-6 inline' src={washingMechineIcon} />
                                Washer
                            </li>
                            <li>
                                <Image alt="icon" className='mr-6 inline' src={tvIcon} />
                                Television with Netflix
                            </li>
                            <li>
                                <Image alt="icon" className='mr-6 inline' src={wifiIcon} />
                                Free Wireless Internet
                            </li>
                            <li>
                                <Image alt="icon" className='mr-6 inline' src={balconyIcon} />
                                BalconyIcon or Patio
                            </li>
                        </ul>
                        <button className="w-full max-w-64 py-3 rounded-md bg-transparent border border-neutral-400 text-neutral-400 text-lg font-normal ">Show All 10 Amenities</button>
                    </div>

                    {/* Home rules */}
                    <div className="my-14 text-neutral-700">
                        <h3 className="text-2xl font-semibold text-neutral-700">Home rules</h3>
                        <ul className="space-y-3 mt-6 font-normal text-lg">
                            <li>
                                <Icon name='info' className="icon inline mr-6" /> Only for Female
                            </li>
                            <li>
                                <Icon name='info' className="icon inline mr-6" /> Check In 15:00 PM
                            </li>
                            <li>
                                <Icon name='info' className="icon inline mr-6" /> Check Out: 11:00 AM
                            </li>
                        </ul>
                    </div>

                    {/* Cancellation Policy */}
                    <div className="my-14">
                        <h3 className="text-2xl font-semibold text-neutral-700">Cancellation Policy</h3>
                        <ul className="space-y-3 mt-6 font-normal text-lg">
                            <li>
                                <Icon name='info' className="icon inline mr-6" /> If you cancel before <span className='text-neutral-800 font-medium'>48 hours</span>, will be 85% refund.
                            </li>
                            <li>
                                <Icon name='info' className="icon inline mr-6" /> If you cancel within <span className='text-neutral-800 font-medium'>48 hours,</span> will be 50% refund.
                            </li>
                            <li>
                                <Icon name='info' className="icon inline mr-6" /> If you cancel within <span className='text-neutral-800 font-medium'>12 hours,</span>  there will be <span className='text-neutral-800 font-medium'>no refund.</span> 
                            </li>
                        </ul>
                    </div>

                    {/* Host Info */}
                    <div>
                        <div className="flex gap-x-4 items-center">
                            <div className="h-20 w-20 rounded-full relative overflow-hidden">
                                <Image src='https://s3-alpha-sig.figma.com/img/1aa6/7521/2dba83baa62c2057ce79df83a3f0bd4c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fSET88Um-EqYOGQXnQk~I3EGZ04BpWze5BUPJJUIyisKtLbYhTITrpdYEsMp~LsbiuOLfg5tR0gle~nKzVKR64lwcL0FUp7or9wZQ8S64WQGbuN38zm8FhtUPPOMBJ3mG3~Mrj1NNE5~1TNM04FMWvtuaJg6ou92tSJXOuGzL56Hzp7wz2vr9dshoKJ-Dle-6PwwLktbM5sFsEoYmq1w~h2Qi9xKshNfHMIABGj8UShlCDycvH8Vrey2aTKfJVYYz-BFvfCyWOaoBONNITiZwNA2OE7eQ9JQydNOIGF~uZGU5ETx0uEoDvmFQ~rjKUrtCfCstnrZ0Si-sBshzezreQ__' fill/>
                            </div>
                            <div>
                                <h3 className="text-neutral-700 text-2xl font-semibold">Hosted By Ajmol Hossain</h3>
                                <div className="space-x-3.5">
                                    <div className="text-neutral-800 text-lg font-normal inline">
                                        <Image className="icon object-contain inline mr-2" src={awardIcon} height={24} width={24} />
                                        Premium Host
                                    </div>

                                    <div className="text-neutral-800 text-lg font-normal inline">
                                        <Image className="icon object-contain inline mr-2" src={shieldCheckedIcon} height={24} width={24} />
                                        Identity Verified
                                    </div>

                                    <div className="text-neutral-800 text-lg font-normal inline">
                                        <Icon name='star' size={24} className=" icon inline mr-2"/> 
                                         4.3 Rating (15 Reviews)
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
                        <button className="btn btn-secondary rounded-full max-w-56"> Contact Host</button>
                        
                    </div>

                    {/* Rating... */}
                    <div className="mt-14 mb-6">
                        <h3 className="text-neutral-700 text-2xl font-semibold">Review 
                            <span>
                                <Image src={starFilledIcon} height={24} width={24} className="object-contain inline ml-6"/>                                 
                            </span>
                            <span className="text-primary-400">4.3</span>
                            <span className="text-neutral-500 font-lg text-base font-medium">(20)</span>
                        </h3>
                        <ul className="max-w-md text-neutral-600 font-medium text-base mt-5 space-y-2 ">
                            <li>
                                Amenities
                                <div className="space-x-2 float-right ">
                                    <Image src={starFilledIcon} height={20} width={20} className="object-contain inline "/>
                                    <Image src={starFilledIcon} height={20} width={20} className="object-contain inline "/>
                                    <Image src={starFilledIcon} height={20} width={20} className="object-contain inline "/>
                                    <Image src={starFilledIcon} height={20} width={20} className="object-contain inline "/>
                                    <Image src={starFilledIcon} height={20} width={20} className="object-contain inline "/>
                                    <span className="pl-1">5.0</span>
                                </div>                            
                            </li>

                            <li>
                                Communication
                                <div className="space-x-2 float-right ">
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <span className="pl-1">5.0</span>
                                </div>                            
                            </li>

                            <li>
                                Lorem Ipusm
                                <div className="space-x-2 float-right ">
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <span className="pl-1">5.0</span>
                                </div>                            
                            </li>
                            <li>
                                Hygiene
                                <div className="space-x-2 float-right ">
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <span className="pl-1">5.0</span>
                                </div>                            
                            </li>
                            <li>
                                Location of Property
                                <div className="space-x-2 float-right ">
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <Icon name="star" height={20} width={20} className="text-primary-400 inline "/>
                                    <span className="pl-1">5.0</span>
                                </div>                            
                            </li>

                            
                        </ul>
                    </div>

                    {/* Write review */}
                    <div>
                        <textarea className="w-full max-w-2xl border border-neutral-600 block rounded-lg mb-6" id="w3review" name="w3review" rows="4" cols="50"/>
                        <button className="w-full max-w-64 py-3 rounded-md bg-transparent border border-neutral-400 text-neutral-400 text-lg font-normal ">Save Review</button>

                        <ul className="text-neutral-300 max-w-2xl space-y-6 my-8">
                            <li>
                                <div className="flex gap-4 ">
                                    <div className="h-12 w-12 rounded-full relative overflow-hidden">
                                        <Image src='https://s3-alpha-sig.figma.com/img/1aa6/7521/2dba83baa62c2057ce79df83a3f0bd4c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fSET88Um-EqYOGQXnQk~I3EGZ04BpWze5BUPJJUIyisKtLbYhTITrpdYEsMp~LsbiuOLfg5tR0gle~nKzVKR64lwcL0FUp7or9wZQ8S64WQGbuN38zm8FhtUPPOMBJ3mG3~Mrj1NNE5~1TNM04FMWvtuaJg6ou92tSJXOuGzL56Hzp7wz2vr9dshoKJ-Dle-6PwwLktbM5sFsEoYmq1w~h2Qi9xKshNfHMIABGj8UShlCDycvH8Vrey2aTKfJVYYz-BFvfCyWOaoBONNITiZwNA2OE7eQ9JQydNOIGF~uZGU5ETx0uEoDvmFQ~rjKUrtCfCstnrZ0Si-sBshzezreQ__' fill/>
                                    </div>
                                    <div className="block mt-2">
                                        <h3 className="text-neutral-600 font-bold text-base">John Doberman</h3>
                                        <h4 className="text-sm font-medium">Mar 12 2020</h4>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>
                            <li>
                                <div className="flex gap-4 ">
                                    <div className="h-12 w-12 rounded-full relative overflow-hidden">
                                        <Image src='https://s3-alpha-sig.figma.com/img/1aa6/7521/2dba83baa62c2057ce79df83a3f0bd4c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fSET88Um-EqYOGQXnQk~I3EGZ04BpWze5BUPJJUIyisKtLbYhTITrpdYEsMp~LsbiuOLfg5tR0gle~nKzVKR64lwcL0FUp7or9wZQ8S64WQGbuN38zm8FhtUPPOMBJ3mG3~Mrj1NNE5~1TNM04FMWvtuaJg6ou92tSJXOuGzL56Hzp7wz2vr9dshoKJ-Dle-6PwwLktbM5sFsEoYmq1w~h2Qi9xKshNfHMIABGj8UShlCDycvH8Vrey2aTKfJVYYz-BFvfCyWOaoBONNITiZwNA2OE7eQ9JQydNOIGF~uZGU5ETx0uEoDvmFQ~rjKUrtCfCstnrZ0Si-sBshzezreQ__' fill/>
                                    </div>
                                    <div className="block mt-2">
                                        <h3 className="text-neutral-600 font-bold text-base">John Doberman</h3>
                                        <h4 className="text-sm font-medium">Mar 12 2020</h4>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>
                        </ul>

                        <button className="w-full max-w-64 py-3 rounded-md bg-transparent border border-neutral-400 text-neutral-400 text-lg font-normal ">Show All 20 Reviews</button>

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
                <div className="w-fit  min-w-490px py-2 relative ">
                    <div className=" top-12  sticky rounded-lg drop-shadow-booking-box bg-white">
                        <div className="relative p-6 custom-underline-primary-400 ">
                            <h3 className="text-neutral-700 font-semibold text-3xl">$20 <span className="text-neutral-500 text-lg"> /Night</span><span className="text-green-300 text-sm ml-3"> (Available)</span></h3>
                        </div>
                        <div className="mt-8 mx-6 border border-neutral-400 rounded-lg overflow-hidden">
                            <div className="grid grid-cols-2">
                                <div className="   py-4 px-8">
                                    <label className="block text-neutral-600 text-sm font-semibold ">Check In</label>
                                    <input className="text-neutral-300 font-medium"  placeholder="Add Dates" />
                                </div>
                                <div className=" py-4 px-8 border-l border-neutral-400">
                                    <label className="block text-neutral-600 text-sm font-semibold ">Check Out</label>
                                    <input className="text-neutral-300 font-medium"  placeholder="Add Dates" />
                                </div>
                            </div>                    
                            <div className=" py-4 px-8 border-t border-neutral-400 col-2 relative">
                                <label className="block text-neutral-600 text-sm font-semibold ">Guest</label>
                                <input className="text-neutral-300 font-medium"  placeholder="Select Guest" />
                                <Icon name="chevron-down" size={24} className="icon absolute-y-center right-4" /> 
                            </div>
                        </div>
                        <div className="border-b-2">
                            <ul className="mx-14 py-6 space-y-8  ">
                                <li className="text-neutral-400 font-semibold text-lg">
                                    $20 x 2 nights 
                                    <span className="text-neutral-500 float-right">$60</span>                        
                                </li>

                                <li className="text-neutral-400 font-semibold text-lg">
                                    Service Fee
                                    <span className="text-neutral-500 float-right">$10</span>                        
                                </li>

                                <li className="text-neutral-400 font-semibold text-lg">
                                    Bedbd fee
                                    <span className="text-neutral-500 float-right">$20</span>                        
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-neutral-600 font-semibold text-lg py-6 mx-14">
                                Total
                                <span className="text-neutral-700 float-right">$90</span>                        
                            </div>
                        </div>

                        <button className="mt-4 mb-8 btn btn-primary rounded-full max-w-96 relative-x-center">Reserve Now</button>
                    </div>
                    {/* <div className="relative sticky marker-class">
                        <div className="h-auto mx-h-2xl bg-white  top-16 rounded-lg drop-shadow-booking-box">


                        </div>
                    </div> */}
                    


                    
                </div>
            </div>
        </div>
        
        <Footer/>
    </>
  )
}
