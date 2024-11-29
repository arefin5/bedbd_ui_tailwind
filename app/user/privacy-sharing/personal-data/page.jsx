import React from 'react'

export default function page() {
  return (
    <div>
        <div className='max-w-[400px]'>
            <h3 className='text-neutral-500 text-2xl font-semibold'>Request your personal data</h3>
            <p className='text-sm text-neutral-600 font-normal mt-4'>Before we get you a company of your data, we’ll just need you to answer a few questions.</p>
        </div>
        <div className='mt-12'>
            <h3 className='text-neutral-700 text-lg font-bold'>Where do you reside</h3>
            <select className='rounded-lg border border-neutral-300 w-full max-w-[354px] px-4 py-3 mt-4' id="_user_resident" name="dropdown">
                <option disabled >Select</option>
                <option value="dhk">Dhaka</option>
                <option value="ctg">Chittagong</option>
                <option value="rng">Rangpur</option>
                <option value="br">Barishal</option>
            </select>

            <h3 className='text-neutral-700 text-lg font-bold mt-8'>Email Address</h3>
            <input type='text' placeholder='your email' className='rounded-lg border border-neutral-300 w-full max-w-[354px] px-4 py-3 mt-4'/>

            <button className='btn btn-primary mt-8'>Save</button>
        </div>

    </div>
  )
}
