import Icon from "/components/Icon"

export default function PaymentPayout() {
  return (
    <div className='w-full h-full pt-16 pl-20 pr-4 '>
        <div className='relative'>
            <h3 className='text-primary-400 text-2xl font-semibold'>Payments & Payouts</h3>
            <button className='absolute-y-center -left-10'>
                <Icon className='icon' name='arrow-left' size={24} />
            </button>
        </div>

        <div className="flex border-b border-gray-300 mb-6 mt-14">
            <button className="py-2 px-4 text-black border-b-2 border-orange-500 font-semibold">Payments</button>
            <button className="py-2 px-4 text-gray-500">Payouts</button>
        </div>
            
        <div className='pt-8 w-full max-w-md'>
            
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Your Payments</h2>
                <p className="text-gray-600 mb-4">Keep track of all your payments and refunds</p>
                <button className="btn btn-primary max-w-xs">Manage Payments</button>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Payments methods</h2>
                <p className="text-gray-600 mb-4">
                Add a payment method using our secure payment system, then start planning your next trip.
                </p>
                <button className="btn btn-primary max-w-xs">Add payments methods</button>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Coupons</h2>
                <p className    ="text-gray-600 mb-4">Add a coupon and save on your next trip</p>
                <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded-md mb-4 max-w-xs"
                placeholder="ID No."
                />
                <button className="btn btn-primary max-w-xs">Add coupon</button>
            </div>

        </div>
        
    </div>
  )
}
