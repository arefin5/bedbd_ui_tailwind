
import Image from 'next/image'
import fbIcon from '/public/icons/fb_icon.svg'
import twitterIcon from '/public/icons/twitter_icon.svg'
import instaIcon from '/public/icons/insta_icon.svg'
import linkedinIcon from '/public/icons/linkedin_icoon.svg'
import sendIcon from '/public/icons/ph_paper-plane.svg'
import playStoreIcon from '/public/icons/ion_logo-google-playstore.svg'

import appleStoreIcon from '/public/icons/ion_logo-apple-appstore.svg'


// ion_logo-apple-appstore.svg
// ph_paper-plane




export default function Footer() {
  return (
    <div className='w-full bg-primary-400 text-white pt-20 pb-40 md:pb-24'> 
        <div className='container w-max ml-auto mr-auto relative lg:flex lg:gap-x-16'>
            <div>
                <h4 className="text-5xl font-bold mb-8 mx-auto  text-center lg:text-left lg:ml-0   w-max">bedbd.com</h4>
                <p className="mx-auto  text-center lg:text-left text-neutral-50 text-base font-normal max-w-sm mb-12  w-max mx-auto ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <div className="flex gap-x-4 max-w-sm mx-auto my-12 ">
                    <button className="btn btn-secondary bg-white text-neutral-500 text-base font-semibold flex justify-center gap-x-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                        <Image src={playStoreIcon} width={24} height={24}/>
                        PlayStore
                    </button>
                    <button className="btn btn-secondary bg-white text-neutral-500 text-base font-semibold flex justify-center gap-x-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                        <Image src={appleStoreIcon} width={24} height={24}/>
                        AppleStore
                    </button>
                </div>
            </div>

            {/* flex-col md:flex-row gap-y-12  md:gap-x-12 */}
            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-y-8 gap-x-4 ml-auto mr-auto w-fit'>
                <div>
                    <h3 className='uppercase text-lg font-semibold mb-7'>COMPANY</h3>
                    <ul className="text-sm text-neutral-50 font-medium space-y-3">
                        <li>About Us</li>
                        <li>Legal Information</li>
                        <li>Contact Us</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                <div>
                    <h3 className='uppercase text-lg font-semibold mb-7'>HELP CENTER</h3>
                    <ul className="text-sm text-neutral-50 font-medium space-y-3">
                        <li>Find a Property</li>
                        <li>How To Add?</li>
                        <li>Why Us?</li>
                        <li>FAQs</li>
                        <li>Rental Guides</li>
                    </ul>
                </div>

                <div>
                    <h3 className='uppercase text-lg font-semibold mb-7'>CONTACT INFO</h3>
                    <ul className="text-sm text-neutral-50 font-medium space-y-3">
                        <li>Phone: 1234567890</li>
                        <li>Email: company@email.com</li>
                        <li>Location: 100 Smart Street, LA, USA</li>
                    </ul>
                    <div className='flex gap-x-8 mt-12'>
                        <Image src={fbIcon} height={24} width={24}/>
                        <Image src={twitterIcon} height={24} width={24}/>
                        <Image src={instaIcon} height={24} width={24}/>
                        <Image src={linkedinIcon} height={24} width={24}/>
                    </div>
                </div>
            </div>

            

            <div className='flex justify-between items-center w-max gap-x-6 text-neutral-50 top-full absolute right-1/2 transform translate-x-1/2 md:transform-none md:right-0 mt-6 lg:-mt-4 xl:-mt-12 '>
                <div>
                    <div className='uppercase text-lg font-semibold '>NEWSLETTER</div>
                    <div className='text-sm font-medium '>Stay Update</div>
                </div>
                
                <div className='relative '>
                    <input className='max-w-80 py-4 px-6 rounded-full placeholder-text-netural-300' type='text' placeholder='Your Email...'/>
                    <div className='absolute-y-center right-1  p-3 bg-neutral-400 rounded-full'>
                        <Image className=' text-neutral-600 ' src={sendIcon} height={24} width={24}/>

                    </div>

                </div>
            </div>
            <div className='text-base font-medium w-max text-neutral-50 absolute-x-center md:transform-none md:left-0 top-full mt-24 md:mt-8 lg:mt-0 '>
                © 2023 bedbd | All rights raserved
            </div>
        </div>
    </div>
  )
}
