
"use client"

import SVGCercle from '../../../public/circle.svg'
import Image from 'next/image'
import Icon from '/components/Icon'
import { useDispatch, useSelector } from "react-redux";

export default function page() {
      const { user, isLoading, error } = useSelector((state) => state.auth);
       console.log(user);
  return (
    <div className='w-full h-full pt-16 pl-20 pr-40'>
        <div className='relative'>
            <h3 className='text-primary-400 text-2xl font-semibold'>Personal Info</h3>
            <button className='absolute-y-center -left-10'>
                <Icon className='icon' name='arrow-left' size={24} />
            </button>
        </div>
        <Image src={SVGCercle} height={120} width={120}/>
        <form>
            <div className='border w-full rounded-lg relative py-3 px-4'>
                <input placeholder='User iD' />
                <button className='absolute right-4'>
                  <Icon name='copy' className='icon inline mr-4'/> Copy
                </button>
            </div>

            <div className='border w-1/2 rounded-lg relative py-3 px-4 '>
                <input placeholder='First Name' />
            </div>

            <div className='border w-1/2 rounded-lg relative py-3 px-4 '>
                <input placeholder='Last Name' />
            </div>

            <div className='border w-full rounded-lg relative py-3 px-4'>
                <input placeholder='ID No' />
            </div>

            <div className='border w-1/2 rounded-lg relative py-3 px-4 '>
                <input placeholder='Phone' />
            </div>

            <div className='border w-1/2 rounded-lg relative py-3 px-4 '>
                <input placeholder='Email' />
            </div>

            <div className='border w-full rounded-lg relative py-3 px-4'>
                <input placeholder='Permanent Address' />
            </div>

            <button className='btn btn-primary'>Edit</button>
        </form>
    </div>
  )
}
