'use client'
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

export default function PriceCounter({data}) {
    const [priceInfo, setPriceInfo] = useState({
           price: parseFloat(data['minPrice']),
        currency: data['currency'],
        serviceFee: parseFloat(data['serviceFee']),

    })

    function increment(e) {
        e.preventDefault()
        setPriceInfo(value => ({...value, price: priceInfo['price'] + 1}) )
        // setPriceInfo(value => ({...value, price: (parseInt(priceInfo['price']) + 1 ).toString() }))    
    }

    function decrement(e) {
        e.preventDefault()
        if(priceInfo['price'] > parseFloat(data['minPrice']) )
            setPriceInfo(value => ({...value, price: priceInfo['price'] - 1}) )
            // setPriceInfo(value => ({...value, price: (parseInt(priceInfo['price']) - 1 ).toString() }))  
    }

    function calculatePercentage( total, percentage) {
        // Check if inputs are valid numbers
        if (typeof percentage !== 'number' || typeof total !== 'number') {
            throw new Error('Both percentage and total must be numbers.');
        }
        
        // Handle negative percentages if needed (optional)
        if (percentage < 0) {
            throw new Error('Percentage cannot be negative.');
        }
        
        // Handle zero total to prevent unnecessary multiplication
        if (total === 0) {
            return 0;
        }
        
        // Calculate the percentage
        return (percentage / 100) * total;
    }

  return (
    <>
    <div className='w-full py-14 bg-neutral-100 rounded-lg mt-8 mb-6'>
        <div className="w-max mx-auto flex justify-center items-center gap-x-6 ">
            <button className="bg-white p-2 rounded-full  " onClick={decrement}>
                <Minus className='h-8 w-8'/>
            </button>

            <input 
                className="px-8 py-2 w-72 rounded-lg text-8xl text-secondary-400 font-semibold text-center"
                type="text" 
                readOnly
                // defaultValue={priceInfo['currency']+''+priceInfo['price']}
                value={priceInfo['currency']+''+(priceInfo['price']).toString()}/>

            <button className="bg-white p-2 rounded-full" onClick={increment}>
                <Plus className='h-8 w-8'/>
            </button>
        </div>
    </div>

    <div className="text-base text-neutral-500 font-medium ">
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between ">
            <h3>Ground Price</h3>
            <h3 className="text-lg font-normal">{priceInfo['currency']+''+priceInfo['price']}</h3>
        </div>
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between ">
            <h3>Service Fee</h3>
            <h3 className="text-lg font-normal">{priceInfo['currency']+''+priceInfo['serviceFee']}</h3>
        </div>
        <div className="relative custom-btm-line-200 py-2.5 px-20 flex justify-between ">
            <h3>Taxes ({data['taxRate']})</h3>
            <h3 className="text-lg font-normal">{priceInfo['currency']+''+calculatePercentage( priceInfo['price'], parseFloat(data['taxRate'].replace(/[^\d.-]/g, ''))).toFixed(2)}</h3>
        </div>
        <div className=" py-2.5 px-20 flex justify-between  text-secondary-400">
            <h3>You will earn </h3>
            <h3 className="text-lg font-normal">{
                priceInfo['currency']+''  +(
                    priceInfo['price'] + 
                    priceInfo['serviceFee'] +
                    parseFloat(calculatePercentage( 
                                        priceInfo['price'], 
                                        parseFloat(data['taxRate'].replace(/[^\d.-]/g, ''))
                                        ).toFixed(2))
                    ).toFixed(2)}</h3>
        </div>
    </div>
    </>
    
        
    
  )
}
