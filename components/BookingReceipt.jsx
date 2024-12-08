export default function BookingReceipt() {
    return (
      <div className='z-[9999] absolute top-0 w-full h-max bg-white min-h-screen overscroll-y-none bg-opacity-50 bg-black backdrop-blur-sm'>
          <div className='bg-secondary-50 rounded-lg w-[1280px] h-[1034px]  relative m-auto top-0 drop-shadow-md p-24'>
              <div className='w-full '>
                <div className="space-y-6">
                    <h3 className="text-2xl font-medium">Booking confirmation receipt from bedbd</h3>
                    <h5>Receipt ID: RCXDSjsdfk. November 9, 24</h5>
                </div>
                <div className="w-full grid grid-cols-[620px_438px] gap-x-5 mt-16">
                    <div className="w-full h-max border border-neutral-300 rounded-md py-10 px-6 divide-y divide-neutral-400 text-neutral-600 font-normal text-base child:py-6">
                        <div>
                            <h6 className="font-medium text-xl text-neutral-700">Blue Paradise</h6>
                            <p className="text-sm font-medium">3 Night in in Blue Paradise</p>
                        </div>
                        <div>
                            <p>Mon, Nov 23, 24 - Thu, Nov 25, 24</p>
                            <p>Entire Apartment . 5 beds . 1 guest</p>
                        </div>
                        <div>
                            <p>Traveler: <span className="text-primary-400"> Golam Sarwar</span></p>
                            <p>Hosted by: <span className="text-primary-400"> Ali Reja</span></p>
                        </div>

                        <div>
                            <h6 className="font-medium text-[20px] text-neutral-700">Cancellation Policy</h6>
                            <p className="">Free cancellation before 12:00pm on Nov 17, Cancel within 48 hours, 50% will be refund. and no refund if it’s less then 12 hours.</p>
                        </div>
                        
                    </div>
                    <div className="space-y-6 child:w-full child:h-max child:border child:border-neutral-300 child:rounded-md child:py-8 child:px-6">
                        <div className="">
                            <h4 className="font-neutral-700 font-medium text-xl">Price Breakdown</h4>
                            <div className="text-neutral-600 text-base font-normal divide-y divide-neutral-400 child:space-y-3 child:py-6 child:child:flex child:child:justify-between child:child:w-full">
                                <div className="">
                                    <p className="  "> $55.00 x 3 nights <span>$165.00</span> </p>
                                    <p className="  "> bedbd Service fee <span>$16.50</span> </p> 
                                </div>
                                <div className="">
                                    <p className="  "> Total(doller) <span>$180.50</span> </p>
                                </div>
                                <div className="">
                                    <p className="  "> paid <span>$100.00</span> </p>
                                    <p className="  "> Due <span>$80.50</span> </p> 
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h4 className="font-neutral-700 font-medium text-xl">Payment method</h4>
                            <div className="space-y-3 mt-6">
                                <p className="  "> VISA...4463</p>
                                <p className="  "> September 3, 2024 | 4:23pm GMT+6</p> 
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="font-medium mt-8">
                    <h3 className="text-neutral-700 text-xl ">Have a question? Need to talk?</h3>
                    <p className="text-sm text-neutral-600 ">Please feel free to leave a message <span className="font-semibold">here</span> </p>
                </div>
              </div>
          </div>
      </div>
    )
  }
  