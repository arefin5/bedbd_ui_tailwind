
import SVGCercle from '../../../public/circle.svg'
import Image from 'next/image'
import Icon from '/components/Icon'

export default function page() {
  return (
    <div className='w-full h-full pt-16 pl-20 pr-40'>
        <div className='relative'>
            <h3 className='text-primary-400 text-2xl font-semibold'>Login & Security</h3>
            <button className='absolute-y-center -left-10'>
                <Icon className='icon' name='arrow-left' size={24} />
            </button>
        </div>
        <div>
            <div>Login
                <span>Login Request</span>
            </div>

            <div>
                <h3 className='text-neutral-700 text-lg font-semibold'>Login</h3>
                <h3 className='text-neutral-600 text-base font-medium'>password <span>Update</span></h3>
                <p className='text-sm text-neutral-600'>last update 3 minute ago</p>
            </div>
            <div>
                <h3 className='text-neutral-700 text-lg font-semibold'>Social accounts</h3>
                <h3 className='text-neutral-600 text-base font-medium'>Facebook <span>Connect</span></h3>
                <h3 className='text-neutral-600 text-base font-medium'>Google <span>Connect</span></h3>

                <button className='text-neutral-700 border-none text-lg font-semibold bg-transparent'>Device history</button>

            </div>
            
        </div>
    </div>
  )
}
