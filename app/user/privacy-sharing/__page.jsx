
import SVGCercle from '../../../public/circle.svg'
import Image from 'next/image'
import Icon from '/components/Icon'
import ToggleButton from '/components/ToggleButton'

export default function page() {
  return (
    <div className='w-full h-full pt-16 pl-20 pr-4 '>
        <div className='relative'>
            <h3 className='text-primary-400 text-2xl font-semibold'>Privacy & Sharing</h3>
            <button className='absolute-y-center -left-10'>
                <Icon className='icon' name='arrow-left' size={24} />
            </button>
        </div>

        {/* Switching Button */}
        <div className='relative'>
            <ul className='custom-btm-line-200 py-2 text-lg font-semibold'>
                <li className='inline text-neutral-800 '><button className='pr-2.5'>Data</button></li>
                <li className='inline text-neutral-400'><button className='pr-2.5'>Sharing</button></li>
            </ul>
        </div>

            
        <div className='flex justify-between pt-12 w-full'>

            {/* Content for data */}
            <div className='max-w-sm space-y-12 hidden'>
                <div className='space-y-4'>
                    <h3 className='text-neutral-500 font-semibold  text-2xl'>Manage your account data</h3>
                    <p className='text-sm pr-12 text-neutral-500'>You can make a request to download or delete your data from bedbd.</p>
                </div>
                <div className=' relative'>
                    <h3 className='text-neutral-500 font-semibold text-lg'>Request your data</h3>
                    <button className='absolute top-1 right-12 '><Icon name='arrow-right' className='icon '  size={24}/></button>

                    <p className='text-sm pr-12  mt-4'>We’ll create a file for you to download your personal data</p>
                </div>

                <div className='relative'>
                    <button className='absolute top-1 right-12 '><Icon name='arrow-right' className='icon '  size={24}/></button>

                    <h3 className='text-neutral-500 font-semibold text-lg'>Delete your account</h3>
                    <p className='text-sm pr-12 mt-4'>Ths will permanently delete your account & your data.</p>
                </div>
            </div>


            {/* Content for Sharing */}
            <div className='max-w-sm'>
                <h3 className='text-neutral-500 font-semibold  text-2xl'>Activity sharing</h3>
                <p className='text-sm pr-12 text-neutral-600 mt-4'>Decide how your profile & activity are shown to others.</p>
                <h3 className='text-neutral-500 font-semibold text-lg mt-2'>Include my profile & listing in search engines</h3>
                <p className='text-sm pr-12 mt-4 mb-6'>We’ll create a file for you to download your personal data</p>
                <ToggleButton/>
                
                <h3 className='text-neutral-500 font-semibold text-2xl mt-14'>Data sharing</h3>
                <p className='text-sm pr-12 mt-4'>Decide how your data is used for bedbd research.</p>
                <h3 className='text-neutral-500 font-semibold text-lg  mt-4'>Use my first name & profile photo to help fight discrimination</h3>
                <p className='text-sm pr-12 mt-2 mb-6'>Leaving this on means that you’re helping us further studies to help identify and prevent discrimination from happening on bedbd. Learn more</p>
                <ToggleButton/>
            </div>


            {/* Right Side Portion */}
            <div className='max-w-80 py-12 px-4 rounded-lg border border-neutral-300 h-max'>
                <h3 className='text-neutral-500 text-xl font-semibold'>Committed to privacy</h3>
                <p className='text-sm font-normal mt-4 '>bedbd is committed to keeping your data protected. See details in our Privacy Policy.</p>
            </div>
        </div>
        
    </div>
  )
}
// 