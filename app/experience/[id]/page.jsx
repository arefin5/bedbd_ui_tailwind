import Image from 'next/image'
import Icon from '@/components/Icon'
import { Share2, Heart } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <>
    <Header />
    <div className="container mx-auto my-10  ">
        {/* Images  */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[340px_340px_510px] w-fit mx-auto nth-child-3:marker-class ">
            <div className=' aspect-[1.4/1] h-[245px] w-full max-w-[340px] relative'>
                <Image className='object-cover rounded-lg'
                    src="https://s3-alpha-sig.figma.com/img/1e99/4fc1/edd4ba000bdfa85be11654df3de4ccf3?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jLtfSxmRY4HEakjHzmQ4M3k2-E2Px1DnyczDc9mRGzj7HFYIalxOTP4YPWJ0skNVb73roLJV5e65Z5dgS928QcBjl8RjDURGOYss7dfkGfpkbvJF2nuarwL1NOWzOzp2FHB1D0VDqlAiYN2oeJwMPkPIk7aFgV-Do6V6Q2eR0rg0nuXWeg4fPZfLBOCYT-pAegO1s5iv6jByvCHdaH7T-Qkfaby45BSF9SDKFQGmajZakkN3ng21TsrBTERY7eG3u6YMJ-lWEbasJ9AlP9q6qG-rJdl11rCc8GCJmGWclBwCnua9DSSLBPQ9YFW8cy9KzyiYB3anH0RUAyJKUGlFyw__"
                    fill />
            </div>
            <div className=' aspect-[1.4/1] h-[245px] w-full max-w-[340px] relative'>
                <Image className='object-cover rounded-lg'
                    src="https://s3-alpha-sig.figma.com/img/fa82/04ba/aa7ce09cc4e2e086c0a441a2bc6c3a41?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jQBiRZdDGFsHbmk9OAmEhAJadM1mEPAbfflmATA9cpsh0ItYWWYd5Vqk0-dbE7R6b6CedNYid8KNERmFCCWaB176zXxPWODAjdqQTVGbnEmeqNxnCPPnGXYCt1qPV9N9ck~R7BIbufU35duL0K3Mhkz-Pc5jmNXfwJov9vru2bTOHnrkIdO~IaCkksAWP8BTYOEy5tr2Py0YVJT2LBO6GGWTihgGJxelgtKSyp1~GsUgSzckPoCOnWG0rgQruFcqqqZGqZLTMq5pUd3BswbCY81FWZh5nF2~mYslPR9U01IZLVeSGD0gIs38K1VLtdLkjpfBATJkFd6nQpekj-pSdw__"
                    fill />
            </div>
            <div className='aspect-[1.4/1] h-[245px]  w-full max-w-[340px] xl:max-w-[510px] relative xl:aspect-square lg:h-[514px] lg:row-span-2 '>
                <Image className='object-cover rounded-lg'
                    src="https://s3-alpha-sig.figma.com/img/8c39/1934/dab98b8e77b48c65d7c3e2032f00af6c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLYuTSve6cDUmfKQ4GPmdWvW7fgutYWjmkUlnIkUHZOdbhK-0NQ4Hh4aWHLi4bDWXPgpNabd9~1GXADE1ohoFhyUsIOYiCKA4rDEp4FV7bdQhoILb8ezAn6W7EVY7Oqg15YPId3EX~xr5eMq7WCcYEdlYiCUSBUDKysP32Up6ePlvRyEYt14NSi9cZDpTyW33-beS9HrwdT1RUKZe1dOVvkfMVCR5IBfaAOT~5Q8abK84ETYIo9DxvBvC-ZLXrsUgtIym7jI7AByhxTRqZgJy1RJvjD5lH2E4q2u-uND~0wsHaAv1ZEYE6J7K8dyY7bvA6SAyTyU60QS7I3w-Q966w__"
                    fill />
            </div>
            <div className=' aspect-[1.4/1] h-[245px] w-full max-w-[340px] relative'>
                <Image className='object-cover rounded-lg'
                    src="https://s3-alpha-sig.figma.com/img/8c39/1934/dab98b8e77b48c65d7c3e2032f00af6c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLYuTSve6cDUmfKQ4GPmdWvW7fgutYWjmkUlnIkUHZOdbhK-0NQ4Hh4aWHLi4bDWXPgpNabd9~1GXADE1ohoFhyUsIOYiCKA4rDEp4FV7bdQhoILb8ezAn6W7EVY7Oqg15YPId3EX~xr5eMq7WCcYEdlYiCUSBUDKysP32Up6ePlvRyEYt14NSi9cZDpTyW33-beS9HrwdT1RUKZe1dOVvkfMVCR5IBfaAOT~5Q8abK84ETYIo9DxvBvC-ZLXrsUgtIym7jI7AByhxTRqZgJy1RJvjD5lH2E4q2u-uND~0wsHaAv1ZEYE6J7K8dyY7bvA6SAyTyU60QS7I3w-Q966w__"
                    fill />
            </div>
            <div className=' aspect-[1.4/1] h-[245px] w-full max-w-[340px] relative sm:col-span-2 sm:max-w-[704px] sm:h-[514px] lg:col-span-1 lg:max-w-[340px] lg:h-[245px]'>
                <Image className='object-cover rounded-lg'
                    src="https://s3-alpha-sig.figma.com/img/1e99/4fc1/edd4ba000bdfa85be11654df3de4ccf3?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jLtfSxmRY4HEakjHzmQ4M3k2-E2Px1DnyczDc9mRGzj7HFYIalxOTP4YPWJ0skNVb73roLJV5e65Z5dgS928QcBjl8RjDURGOYss7dfkGfpkbvJF2nuarwL1NOWzOzp2FHB1D0VDqlAiYN2oeJwMPkPIk7aFgV-Do6V6Q2eR0rg0nuXWeg4fPZfLBOCYT-pAegO1s5iv6jByvCHdaH7T-Qkfaby45BSF9SDKFQGmajZakkN3ng21TsrBTERY7eG3u6YMJ-lWEbasJ9AlP9q6qG-rJdl11rCc8GCJmGWclBwCnua9DSSLBPQ9YFW8cy9KzyiYB3anH0RUAyJKUGlFyw__"
                    fill />
            </div>
        </div>

        <div className='  w-full grid lg:grid-cols-[auto_420px]  xl:grid-cols-[auto_506px] lg:gap-6 xl:gap-10 max-w-[1232px] mx-auto'>
            <div className='w-full'>
                {/* packege title bar */}
                <div className='w-full   sm:flex space-y-2 justify-between items-center my-10'>
                    <div className='flex'>
                        <h3 className='text-2xl text-neutral-500 font-semibold'>Tour Package</h3> 
                        <div className='flex items-center ml-6'>
                            <Image src="/icons/star_filled.svg" height={20} width={20} />
                            <span className='text-primary-400 font-semibold ml-2'>4.3</span>
                            <span className='text-neutral-500 text-base font-medium ml-1'>{'(20)'}</span>
                        </div>
                    </div>
                    <div className="flex gap-8 child:flex child:gap-4 child-hover:text-blue-500">
                        <button>
                            <Share2 size={24} className="icon" />
                            <span className="font-neutral-500 text-lg font-semibold">Share</span>
                        </button>
                        <button>
                            <Heart size={24} className="icon" />
                            <span className="font-neutral-500 text-lg font-semibold">Like</span>
                        </button>
                    </div>
                </div>

                {/* packege  */}
                <div>
                    <div className='space-y-2'>
                        <h2 className='text-neutral-600 text-[28px] font-semibold'>Dhaka → Cox's Bazar (3 Days, 2 Nights)</h2>
                        <h4 className='text-neutral-400 text-lg font-normal'>From the Bustling City to the Tranquil Beach</h4>
                    </div>

                    {/* Packege Highlights */}
                    <div className='mt-14'>
                        <h4 className='text-neutral-600 text-2xl font-semibold'>Package Highlights</h4>
                        <ul className='mt-6 space-y-4 child:space-y-2 child:ml-12 child:relative'>
                            <li>
                                <Icon name="arrow-right" className=" icon absolute-y-center -left-[48px] " size={24}/>
                                <h3 className='text-neutral-500 font-semibold text-[22px]'>Exclusive Accommodation</h3>
                                <p className='text-neutral-700 text-lg font-normal '>Stay in premium sea-view rooms for a serene experience.</p>                            
                            </li>

                            <li>
                                <Icon name="arrow-right" className=" icon absolute-y-center -left-[48px] " size={24}/>
                                <h3 className='text-neutral-500 font-semibold text-[22px]'>Seamless Transportation</h3>
                                <p className='text-neutral-700 text-lg font-normal '>Comfortable round-trip via AC bus/train/aircraft.</p>                            
                            </li>

                            <li>
                                <Icon name="arrow-right" className=" icon absolute-y-center -left-[48px] " size={24}/>
                                <h3 className='text-neutral-500 font-semibold text-[22px]'>Family-Friendly Experience</h3>
                                <p className='text-neutral-700 text-lg font-normal '>Suitable for all ages, with curated activities for kids and adults.</p>                            
                            </li>

                            <li>
                                <Icon name="arrow-right" className=" icon absolute-y-center -left-[48px] " size={24}/>
                                <h3 className='text-neutral-500 font-semibold text-[22px]'>Unmatched Convenience</h3>
                                <p className='text-neutral-700 text-lg font-normal'>From meals to sightseeing, everything is arranged for you.</p>                            
                            </li>
                        </ul>
                    </div>

                    {/* Tour Details */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-8 text-neutral-700">Tour Details</h2>

                        {/* <!-- Day 1 Segment --> */}
                        <div className="mb-4 overflow-hidden relative">
                            <input type="checkbox" id="day1-toggle" className="peer hidden"/>
                            <label for="day1-toggle" className="z-10 flex justify-between items-center rounded-md bg-primary-400 text-white py-3 px-6 cursor-pointer">
                                <span className='text-lg font-semibold '>Day 1: Departure and Arrival</span>
                                
                            </label>
                            <div className="z-0 transform transition-transform w-fit duration-300 transform absolute top-[16px] right-4 text-white peer-checked:rotate-180">
                                <Icon name="chevron-down" className="icon" color="#ffffff"/>
                            </div>

                            {/* Description */}
                            <div className="max-h-0 overflow-hidden transition-all ease-in-out duration-700 peer-checked:max-h-max bg-white peer-checked:p-4  ">
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Morning:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Departure from Dhaka via <span className='font-semibold text-neutral-700'>luxury AC bus/train/aircraft. </span> (Choose based on preferences and budget.) </li>
                                        <li>- Breakfast provided during the journey.</li>
                                    </ul>
                                </div>
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Afternoon:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Arrival in Cox’s Bazar. (Choose based on preferences and budget.) </li>
                                        <li>- Check-in at a <span className='font-semibold text-neutral-700'>luxury sea-view hotel</span>(e.g., Ocean Paradise Hotel, Hotel Sea Crown).</li>
                                        <li> - Welcome drinks upon arrival.</li>
                                    </ul>
                                </div>
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Evening:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Leisure time to enjoy <span className='font-semibold text-neutral-700'>Laboni Beach/Sugandha Beach.</span></li>
                                        <li>- Explore the local market for handicrafts and seafood.</li>
                                    </ul>
                                </div>
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Dinner:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Fresh seafood dinner at a beachside restaurant (included in the package).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Day 2 Segment --> */}
                        <div className="mb-4 overflow-hidden relative">
                            <input type="checkbox" id="day2-toggle" className="peer hidden"/>
                            <label for="day2-toggle" className="z-10 flex justify-between items-center rounded-md bg-primary-400 text-white py-3 px-6 cursor-pointer">
                                <span className='text-lg font-semibold '>Day 2: Departure and Arrival</span>
                                
                            </label>
                            <div className="z-0 transform transition-transform w-fit duration-300 transform absolute top-[16px] right-4 text-white peer-checked:rotate-180">
                                <Icon name="chevron-down" className="icon" color="#ffffff"/>
                            </div>
                        
                            <div className="max-h-0 overflow-hidden transition-all ease-in-out duration-700 peer-checked:max-h-max bg-white peer-checked:p-4">
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Morning:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Departure from Dhaka via <span className='font-semibold text-neutral-700'>luxury AC bus/train/aircraft. </span> (Choose based on preferences and budget.) </li>
                                        <li>- Breakfast provided during the journey.</li>
                                    </ul>
                                </div>
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Afternoon:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Arrival in Cox’s Bazar. (Choose based on preferences and budget.) </li>
                                        <li>- Check-in at a <span className='font-semibold text-neutral-700'>luxury sea-view hotel</span>(e.g., Ocean Paradise Hotel, Hotel Sea Crown).</li>
                                        <li> - Welcome drinks upon arrival.</li>
                                    </ul>
                                </div>
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Evening:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Leisure time to enjoy <span className='font-semibold text-neutral-700'>Laboni Beach/Sugandha Beach.</span></li>
                                        <li>- Explore the local market for handicrafts and seafood.</li>
                                    </ul>
                                </div>
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Dinner:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Fresh seafood dinner at a beachside restaurant (included in the package).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Day 3 Segment --> */}
                        <div className="mb-4 overflow-hidden relative">
                            <input type="checkbox" id="day3-toggle" className="peer hidden"/>
                            <label for="day3-toggle" className="z-10 flex justify-between items-center rounded-md bg-primary-400 text-white py-3 px-6 cursor-pointer">
                                <span className='text-lg font-semibold '>Day 1: Departure and Arrival</span>
                                
                            </label>
                            <div className="z-0 transform transition-transform w-fit duration-300 transform absolute top-[16px] right-4 text-white peer-checked:rotate-180">
                                <Icon name="chevron-down" className="icon" color="#ffffff"/>
                            </div>
                        
                            <div className="max-h-0 overflow-hidden transition-all ease-in-out duration-700 peer-checked:max-h-max bg-white peer-checked:p-4">
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Morning:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Departure from Dhaka via <span className='font-semibold text-neutral-700'>luxury AC bus/train/aircraft. </span> (Choose based on preferences and budget.) </li>
                                        <li>- Breakfast provided during the journey.</li>
                                    </ul>
                                </div>
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Afternoon:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Arrival in Cox’s Bazar. (Choose based on preferences and budget.) </li>
                                        <li>- Check-in at a <span className='font-semibold text-neutral-700'>luxury sea-view hotel</span>(e.g., Ocean Paradise Hotel, Hotel Sea Crown).</li>
                                        <li> - Welcome drinks upon arrival.</li>
                                    </ul>
                                </div>
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Evening:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Leisure time to enjoy <span className='font-semibold text-neutral-700'>Laboni Beach/Sugandha Beach.</span></li>
                                        <li>- Explore the local market for handicrafts and seafood.</li>
                                    </ul>
                                </div>
                                <div className='mt-4 pl-6 mb-4  '>
                                    <h3 className="text-2xl font-semibold text-neutral-600 ">Dinner:</h3>
                                    <ul className=" pl-2 text-neutral-600 text-lg font-normal">
                                        <li>- Fresh seafood dinner at a beachside restaurant (included in the package).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <h3 className='text-neutral-600 text-lg font-semibold mt-8 mb-14'>Want to customize? <span>Let's talk</span> </h3>

                    {/* Package Rules */}
                    <div>
                        <h2 className='text-neutral-700 text-2xl font-semibold '>Package rules</h2>
                        <div>
                            <div className='my-6'>
                                <h4 className='text-neutral-700 font-semibold text-lg'>Cancellation Policy</h4>
                                <ul className='space-y-3 mt-4'>
                                    <li className='text-neutral-700 text-lg font-normal'> {`› Free cancellation up to 7 days before departure.`}</li>                        
                                    <li className='text-neutral-700 text-lg font-normal'> {`› 50% refund for cancellations made 3-6 days before departure.`}</li>
                                    <li className='text-neutral-700 text-lg font-normal'> {`› No refund for cancellations within 48 hours of departure.`}</li>
                                </ul>
                            </div>

                            <div className='my-6'>
                                <h4 className='text-neutral-700 font-semibold text-lg'>Child Policy</h4>
                                <ul className='space-y-3 mt-4'>
                                    <li className='text-neutral-700 text-lg font-normal'> {`› Children under 5 years old travel free (sharing beds with parents).`}</li>                        
                                    <li className='text-neutral-700 text-lg font-normal'> {`› Reduced rates apply for children aged 5–10 years.`}</li>
                                </ul>
                            </div>

                            <div className='my-6'>
                                <h4 className='text-neutral-700 font-semibold text-lg'>Departure and Timeliness</h4>
                                <ul className='space-y-3 mt-4'>
                                    <li className='text-neutral-700 text-lg font-normal'> {`› Guests must adhere to the departure and activity schedules. Delays caused by guests may lead to forfeited activities or transportation.`}</li>                        
                                </ul>
                            </div>

                            <div className='my-6'>
                                <h4 className='text-neutral-700 font-semibold text-lg'>Behavior and Safety</h4>
                                <ul className='space-y-3 mt-4'>
                                    <li className='text-neutral-700 text-lg font-normal'> {`› Guests must maintain respectful conduct with fellow travelers and guides.`}</li>                        
                                    <li className='text-neutral-700 text-lg font-normal'> {`› The organizer is not liable for personal injuries, loss of belongings, or disruptions due to unforeseen circumstances.`}</li>                        
                                </ul>
                            </div>

                            <div className='my-6'>
                                <h4 className='text-neutral-700 font-semibold text-lg'>Special Requests</h4>
                                <ul className='space-y-3 mt-4'>
                                    <li className='text-neutral-700 text-lg font-normal'> {`› Dietary preferences (e.g., vegetarian, halal) or specific needs must be communicated at least 2 days in advance.`}</li>                        
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                    {/* Host */}
                    <div className='max-w-[700px]'>
                        <div className='flex '>
                            <Image height={72} width={72} className='rounded-full' src="https://s3-alpha-sig.figma.com/img/1aa6/7521/2dba83baa62c2057ce79df83a3f0bd4c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0NjKtAORvnmcwLhSCJhbjxW3aG3dY93n0bKBuu11lYDIzxBf7P1o5jDWkR-kz3bZMI3B29tX4c8am1eyL-V8~brLyGf3nvYLwihBqE9gi-nDLbclpZ3lRw1ZVWZSbMRTpzo5b9HxlqCSTbc4UEV-~NhCXIBjZMDOORvvLWY8wT5olqEUXtAIrUUpN1tnVerV9pd3ehhXwSIbrhDKs5GGQbNO9Fs3Bc~7TSU8TZBoYfEi-3dLLHGPzCLiMKBz9AbdMYWIz3SgyMNpjJvABsZguK-IeGmT39vJ2gxUdE4BbJuo1JFXuNXD7zSUqVh6QugDPZxhs7UazJ7WkWu9VVNXQ__"/>
                            <div className='ml-4 space-y-2'>
                                <h3 className='text-neutral-700 font-semibold text-2xl '>Hosted by Ajmol Hossain</h3>
                                <ul className='flex gap-[14px] -ml-1'>
                                    <li className='flex gap-2'>
                                        <Image src="/icons/award.svg" height={24} width={24} />
                                        <h3>Premium Host</h3>
                                    </li>
                                    <li className='flex gap-2'>
                                        <Image src="/icons/shield-check.svg" height={24} width={24} />
                                        <h3>Identity Verified</h3>
                                    </li>
                                    <li className='flex gap-2'>
                                        <Image src="/icons/star_gray.svg" height={24} width={24} />
                                        <h3><span>4.3</span> Rating (15 Reviews)</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className='mt-4 text-neutral-500 font-normal text-lg'>Lorem ipsum dolor sit amet consectetur. Aliquam aliquam at sem magna sem diam. Facilisi id sit rhoncus nec nisl non. Faucibus cum magna enim aliquam sodales dignissim.</p>

                        <ul className='space-y-4 mt-8'>
                            <li className='flex gap-3'>
                                <Image className='mr-3' src="/icons/award.svg" height={24} width={24} />
                                Response Rate: 95%
                            </li>
                            <li className='flex gap-3'>
                                <Image className='mr-3' src="/icons/award.svg" height={24} width={24} />
                                Response Time: within an hour
                            </li>
                        </ul>

                        <button className='mt-8 w-full max-w-[226px] text-center text-base font-medium py-3 rounded-full bg-transparent text-primary-400 text-base border border-primary-400 hover:border-primary-400 hover:shadow-btn-primary '>
                            Contact Host
                        </button>

                        <div className='mt-14'>
                            <div className='flex items-center'>
                                <span className='text-neutral-700 text-2xl font-semibold'>Review</span>
                                <Image className='ml-6' src="/icons/star_filled.svg" height={20} width={20} />
                                <span className='text-primary-400 font-semibold ml-2'>4.3</span>
                                <span className='text-neutral-500 text-base font-medium ml-1'>{'(20)'}</span>
                            </div>
                            
                            {/* All Reviews */}
                            <div className='mt-6 mb-8 space-y-6'>
                                {/* Review Item 1 */}
                                <div className='space-y-2'>
                                    <div className='flex gap-4'>
                                        <Image height={48} width={48} className='rounded-full' src="https://s3-alpha-sig.figma.com/img/1aa6/7521/2dba83baa62c2057ce79df83a3f0bd4c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0NjKtAORvnmcwLhSCJhbjxW3aG3dY93n0bKBuu11lYDIzxBf7P1o5jDWkR-kz3bZMI3B29tX4c8am1eyL-V8~brLyGf3nvYLwihBqE9gi-nDLbclpZ3lRw1ZVWZSbMRTpzo5b9HxlqCSTbc4UEV-~NhCXIBjZMDOORvvLWY8wT5olqEUXtAIrUUpN1tnVerV9pd3ehhXwSIbrhDKs5GGQbNO9Fs3Bc~7TSU8TZBoYfEi-3dLLHGPzCLiMKBz9AbdMYWIz3SgyMNpjJvABsZguK-IeGmT39vJ2gxUdE4BbJuo1JFXuNXD7zSUqVh6QugDPZxhs7UazJ7WkWu9VVNXQ__"/>
                                        <div className='space-y-1'>
                                            <h3 className='text-neutral-600 text-md font-bold'>John Doberman</h3>
                                            <h5 className='text-neutral-500 font-medium text-sm'>Mar 12 2020</h5>
                                        </div>
                                    </div>
                                    <p className='text-neutral-500 font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                {/* Review Item 2 */}
                                <div className='space-y-2'>
                                    <div className='flex gap-4'>
                                        <Image height={48} width={48} className='rounded-full' src="https://s3-alpha-sig.figma.com/img/1aa6/7521/2dba83baa62c2057ce79df83a3f0bd4c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0NjKtAORvnmcwLhSCJhbjxW3aG3dY93n0bKBuu11lYDIzxBf7P1o5jDWkR-kz3bZMI3B29tX4c8am1eyL-V8~brLyGf3nvYLwihBqE9gi-nDLbclpZ3lRw1ZVWZSbMRTpzo5b9HxlqCSTbc4UEV-~NhCXIBjZMDOORvvLWY8wT5olqEUXtAIrUUpN1tnVerV9pd3ehhXwSIbrhDKs5GGQbNO9Fs3Bc~7TSU8TZBoYfEi-3dLLHGPzCLiMKBz9AbdMYWIz3SgyMNpjJvABsZguK-IeGmT39vJ2gxUdE4BbJuo1JFXuNXD7zSUqVh6QugDPZxhs7UazJ7WkWu9VVNXQ__"/>
                                        <div className='space-y-1'>
                                            <h3 className='text-neutral-600 text-md font-bold'>John Doberman</h3>
                                            <h5 className='text-neutral-500 font-medium text-sm'>Mar 12 2020</h5>
                                        </div>
                                    </div>
                                    <p className='text-neutral-500 font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>

                            <button className='w-[273px] px-[64px] py-[18px] rounded-md border border-neutral-600 text-neutral-500 text-sm font-meduim'>Show All 20 Reviews</button>
                        </div>
                    
                    </div>
                </div>          
            </div>

            {/* Booking Sticky box section */}
            <div className='py-10'>
                <div className=" top-12 max-w-[506px] mx-auto top-28 sticky rounded-lg drop-shadow-booking-box bg-white h-fit">
                    <div className="relative p-6 custom-underline-primary-400 ">
                        <h3 className="text-neutral-700 font-semibold text-3xl">
                            <span className='text-neutral-700 text-[28px] font-semibold'>$20</span>
                            <span className="text-neutral-500 text-lg font-semibold ml-2"> Per Person</span> 
                            <span className="text-green-600 text-sm font-medium ml-2">(available)</span> 
                        </h3>
                    </div>

                    <div className="mt-8 mx-6 border border-neutral-400 rounded-lg overflow-hidden grid grid-cols-2 ">
                        <div className="py-4 px-8 w-full">
                            <label className="block text-neutral-600 text-sm font-semibold">
                                Date
                            </label>
                            <input className='placeholder-text-md placeholder-text-neutral-300 placeholder-font-medium ' type='text' placeholder='Add Date'/>
                        </div>
                        <div className="py-4 px-8 border-l border-neutral-400 ">
                            <label className="block text-neutral-600 text-sm font-semibold">
                                Date
                            </label>
                            <input className='placeholder-text-md placeholder-text-neutral-300 placeholder-font-medium ' type='text' placeholder='Add Date'/>
                        </div>
                        <div className="py-4 px-8 border-t border-neutral-400 relative col-span-2">
                            <label className="block text-neutral-600 text-sm font-semibold">Guest</label>
                            <input className='placeholder-text-md placeholder-text-neutral-300 placeholder-font-medium ' type='text' placeholder='2 Adult & 3 kids'/>
                            <Icon name="chevron-down" size={24} className="icon absolute-y-center right-4" />
                        </div>
                    </div>
                    {/* Calculation Section */}
                    <div className="border-b-2 ">
                        <ul className="mx-14 py-6 space-y-8">
                            <li className="text-neutral-400 font-semibold text-lg">
                                <span className='text-neutral-400 text-lg font-semibold'>$20 x 2 nights </span>
                                <span className="text-neutral-500 float-right">$60</span>
                            </li>
                            
                        
                            <li className="text-neutral-400 font-semibold text-lg">
                                <span className='text-neutral-400 text-lg font-semibold'>Service Fee </span>
                                <span className="text-neutral-500 float-right">$10</span>
                            </li>
                            <li className="text-neutral-400 font-semibold text-lg">
                                <span className='text-neutral-400 text-lg font-semibold'>Bedbd Fee (5%)</span>
                                <span className="text-neutral-500 float-right">$10</span>
                            </li>
                        </ul>
                    </div>

                    {/* Total Price Display */}
                    <div className="text-neutral-400 font-semibold text-lg flex items-center justify-between mx-14">
                        <span className='text-neutral-600 font-semibold text-lg py-6 '>Total</span>
                        <span className="text-neutral-600 font-semibold text-lg">$90</span>
                    </div>

                    <button className="mt-4 mb-8 btn btn-primary rounded-full max-w-96 relative-x-center">
                        Reserve Now
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</>
  )
}







